import { error, fail, json, redirect } from "@sveltejs/kit";

import * as superagent from "superagent";
import * as jsdom from "jsdom";

import {
  add_to_audience,
  defaultBody,
  type body,
} from "$lib/assets/scripts/mailchimp";
import { MOVEABLES_MAILCHIMP_KEY } from "$env/static/private";
import type { Actions, PageServerLoad } from "./$types";

type Article = { title: string; src: string; img: string };

export const load: PageServerLoad = async () => {
  return {
    articles: new Promise<Article[] | string>((fulfil, reject) => {
      superagent.default
        .get("http://emqx.medium.com/feed")
        .then((response) => response.text)
        .then(
          (data) =>
            new jsdom.JSDOM(data, { contentType: "text/xml" }).window.document
        )
        .then((doc) => {
          let articles: Article[] = [];

          const items = doc.querySelectorAll("item");
          items.forEach((el) => {
            const link = el.querySelector("link");
            const title = el.querySelector("title");

            const content =
              el.getElementsByTagNameNS("*", "encoded").item(0)?.textContent ||
              "";
            const contentDoc = new jsdom.JSDOM(content).window.document;

            const coverImg = contentDoc
              .querySelector("figure")
              ?.querySelector("img")
              ?.getAttribute("src");

            articles.push({
              title: title?.textContent || "",
              src: link?.innerHTML || "",
              img: coverImg || "",
            });
          });

          fulfil(articles);
        })
        .catch((err) => {
          console.log(err);
          fulfil(`error loading content: ${err}`);
        });
    }),
  };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const apiKey = MOVEABLES_MAILCHIMP_KEY;

    const data = await request.formData();

    const email = data.get("email");
    if (email == undefined || email.length < 3) {
      return fail(400, {
        missing: true,
      });
    }

    const body: body = {
      email_address: String(email),
      ...defaultBody,
    };

    const res: any = await add_to_audience(apiKey, body);

    if (res.status != 200) {
      return fail(res.status, {
        error: true,
        message: `something went wrong fulfilling your request: ${res.body.detail}`,
      });
    }

    return { success: true };
  },
};

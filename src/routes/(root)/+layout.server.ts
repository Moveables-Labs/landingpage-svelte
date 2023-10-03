import * as superagent from "superagent";
import * as jsdom from "jsdom";

import type { PageServerLoad } from "./(root)/$types";
import type { Article } from "$lib/assets/scripts/custom_types";

export const load: PageServerLoad = async () => {
  return {
    articles: new Promise<Article[] | string>((resolve) => {
      superagent.default
        .get("https://www.medium.com/@moveable.startup/feed")
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

          resolve(articles);
        })
        .catch((err) => {
          console.log(err);
          resolve(`error loading content: ${err}`);
        });
    }),
  };
};

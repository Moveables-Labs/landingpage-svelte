import type { RequestHandler } from "./$types";
import { error, json, redirect } from "@sveltejs/kit";

import { add_to_audience, type body } from "$lib/assets/scripts/mailchimp";
import { MOVEABLES_MAILCHIMP_KEY } from "$env/static/private";

export const POST: RequestHandler = async ({ request }) => {
  const apiKey = MOVEABLES_MAILCHIMP_KEY;
  const audienceID = "8bbb43cca4";
  const server = "us21";

  const data = await request.formData();

  const email = data.get("email");
  if (email == undefined) {
    throw error(400, "email not provided");
  }

  const body: body = {
    email_address: String(email),
    status: "subscribed",
    tags: [data.get("tag")?.toString() || "USER"],
    merge_fields: {
      NAME: data.get("name")?.toString() || "NONE",
      PHONE: data.get("tel")?.toString() || "NONE",
      COMPANY: data.get("company")?.toString() || "NONE",
      DTYPE: data.get("delivery_type")?.toString() || "NONE",
      ADDRESS: {
        addr1: data.get("address")?.toString() || "NONE",
        city: data.get("city")?.toString() || "NONE",
        zip: data.get("zip")?.toString() || "NONE",
        state: data.get("state")?.toString() || "NONE",
      },
    },
  };

  const res: any = await add_to_audience(apiKey, server, audienceID, body);
  console.log(res.status);

  if (res.status != 200) {
    throw error(
      res.status,
      `something went wrong fulfilling your request: ${res.body.detail}`
    );
  }

  throw redirect(301, "/");
};

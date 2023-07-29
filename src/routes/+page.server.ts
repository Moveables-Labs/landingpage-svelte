import { fail } from "@sveltejs/kit";

import { add_to_audience } from "$lib/assets/scripts/mailchimp";
import { MOVEABLES_MAILCHIMP_KEY } from "$env/static/private";

import type { Actions } from "./$types";
import {
  DefaultMcApiPayloadData,
  type McApiPayload,
} from "$lib/assets/scripts/custom_types";

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

    const body: McApiPayload = {
      email_address: String(email),
      ...DefaultMcApiPayloadData,
    };

    try {
      const res = await add_to_audience(apiKey, body);

      if (res.status != 200) {
        return fail(res.status, {
          error: true,
          message: `something went wrong fulfilling your request: ${res.data.detail}`,
        });
      }

      return { success: true };
    } catch (err) {
      return fail(400, {
        error: true,
        message: `something went wrong fulfilling your request`,
      });
    }
  },
};

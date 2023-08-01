import { fail } from "@sveltejs/kit";

import {
  add_to_audience,
  check_member_exists,
} from "$lib/assets/scripts/mailchimp";
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

    const email = data.get("email")?.toString();
    if (email == undefined || email.length < 3) {
      return fail(400, {
        missing: true,
      });
    }

    try {
      const exists = await check_member_exists(apiKey, email);
      if (exists) {
        return fail(400, { exists: true });
      }
    } catch (err) {
      return fail(400, {
        error: true,
        message: `something went wrong fulfilling your request`,
      });
    }

    const body: McApiPayload = {
      email_address: email,
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

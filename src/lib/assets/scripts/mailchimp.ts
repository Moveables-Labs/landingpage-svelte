import * as superagent from "superagent";
import type { McApiPayload } from "./custom_types";
import md5 from "md5";

const base_url = ".api.mailchimp.com/3.0";
const listId = "8bbb43cca4";
const server = "us21";

export const ping = (apiKey: string) => {
  return new Promise((resolve, reject) => {
    superagent
      .default("GET", "https://" + server + base_url + "/ping")
      .auth("user", apiKey)
      .type("application/json")
      .accept("application/json")
      .then((res) => {
        resolve({ data: res.body, response: res, status: res.status });
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const add_to_audience = (apiKey: string, body: McApiPayload) => {
  const url = "https://" + server + base_url + "/lists/" + listId + "/members";

  return new Promise<{ data: any; response: any; status: number }>(
    (resolve, reject) => {
      superagent
        .default("POST", url)
        .auth("user", apiKey)
        .type("application/json")
        .accept("application/json")
        .send(body)
        .then((res) => {
          const result = { data: res.body, response: res, status: res.status };
          resolve(result);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    }
  );
};

export const check_member_exists = (apiKey: string, memberEmail: string) => {
  const url = `https://${server}${base_url}/lists/${listId}/members/${md5(
    memberEmail.toLowerCase()
  )}`;

  return new Promise<boolean>((resolve, reject) => {
    superagent
      .default("GET", url)
      .auth("user", apiKey)
      .type("application/json")
      .accept("application/json")
      .then((res) => {
        resolve(true);
      })
      .catch((err) => {
        console.log(err);
        if (err.status === 404) {
          resolve(false);
        } else {
          reject(err);
        }
      });
  });
};

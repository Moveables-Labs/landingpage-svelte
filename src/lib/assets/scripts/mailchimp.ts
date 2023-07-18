import * as superagent from "superagent";

export type body = {
  email_address: string;
  status: string;
  tags: string[];
  merge_fields: any;
};

export const defaultBody = {
  status: "subscribed",
  tags: ["USER"],
  merge_fields: {
    NAME: "NONE",
    PHONE: "NONE",
    COMPANY: "NONE",
    DTYPE: "NONE",
    ADDRESS: {
      addr1: "NONE",
      city: "NONE",
      zip: "NONE",
      state: "NONE",
    },
  },
};

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

export const add_to_audience = (apiKey: string, body: body) => {
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

import * as superagent from "superagent";

export type body = {
  email_address: string;
  status: string;
  tags: string[];
  merge_fields: any;
};

const base_url = ".api.mailchimp.com/3.0";

export const ping = (config: { apiKey: string; server: string }) => {
  return new Promise((resolve, reject) => {
    superagent
      .default("GET", "https://" + config.server + base_url + "/ping")
      .auth("user", config.apiKey)
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

export const add_to_audience = (
  apiKey: string,
  server: string,
  listId: string,
  body: body
) => {
  const url = "https://" + server + base_url + "/lists/" + listId + "/members";

  return new Promise((resolve, reject) => {
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
  });
};

export type Article = {
  title: string;
  src: string;
  img: string;
};

export type McApiPayload = {
  email_address: string;
  status: string;
  tags: string[];
  merge_fields: any;
};

export const DefaultMcApiPayloadData = {
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

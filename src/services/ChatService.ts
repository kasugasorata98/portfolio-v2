import axios from "axios";

export const ChatService = {
  sendMessage: async (
    payload: {
      role: "user" | "assistant" | "system";
      content: string;
    }[]
  ) => {
    const { data } = await axios.post<{
      response: string;
    }>(
      "https://zoc454fytdszwrk22qvo2jggzu0rxahm.lambda-url.ap-southeast-1.on.aws/",
      payload
    );
    return data.response;
  },
  getMetadata: async (input: string) => {
    const params = new URLSearchParams({
      input,
    });
    const { data } = await axios.get<{
      metadata: string[];
    }>(
      `https://ewlomqrlbgm2sfs25bv2hjup7i0jxmjo.lambda-url.ap-southeast-1.on.aws/?${params}`
    );
    return data.metadata;
  },
};

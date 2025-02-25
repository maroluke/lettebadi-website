import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const apiKey = config.infomaniakApiKey;
  const domain = "52458";

  const body = await readBody(event);
  const { email } = body;

  try {
    console.log("test", apiKey);
    const response: any = await $fetch(
      `https://api.infomaniak.com/1/newsletters/${domain}/subscribers`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    console.log("response", response);
    return { success: true, data: response.data };
  } catch (error: any) {
    return {
      success: false,
      message: error.data?.message || "Registrierung fehlgeschlagen",
    };
  }
});

import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.calApiUrl; // Available on both client and server
  const apiKey = config.calApiKey; // Private value, available here

  try {
    // Make the API call to Cal.com from the server side
    const data = await $fetch(`${baseUrl}/event-types?username=lettebadi`, {
      method: "GET",
      headers: {
        "cal-api-version": "2024-06-14",
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return data;
  } catch (error) {
    // Optionally, handle the error or pass it along
    throw error;
  }
});

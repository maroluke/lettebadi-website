import { defineEventHandler } from 'h3';

// Defines an API endpoint that fetches event types from the Cal.com API.
export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const apiUrl = `${config.public.calApiUrl}/event-types`;
  const apiKey = config.calApiKey;

  try {
    const response = await $fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return response;
  } catch (error) {
    console.error('Error fetching Cal.com event types:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch Cal.com event types',
    });
  }
});

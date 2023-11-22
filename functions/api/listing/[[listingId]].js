export async function onRequestGet(context) {
  const BASE_PETRESCUE_API_URL_ID =
    "https://www.petrescue.com.au/api/listings/";

  const listingId = context.params.listingId;

  try {
    const response = await fetch(
      [BASE_PETRESCUE_API_URL_ID, listingId].join(""),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token token=" + context.env.PETRESCUE_API_KEY,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Petrescue response was not ok");
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response(error.stack || error);
  }
}

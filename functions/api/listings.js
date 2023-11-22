export async function onRequestGet(context) {
  const BASE_PETRESCUE_API_URL_50 =
    "https://www.petrescue.com.au/api/listings?group_id=11863&per_page=50";

  let url = new URL(context.request.url);
  let page = url.searchParams.get("page")
    ? "&page=" + url.searchParams.get("page")
    : "";
  let species = url.searchParams.get("species")
    ? "&species=" + url.searchParams.get("species")
    : "";
  let excludedSpecies = url.searchParams.get("exclude_species")
    ? "&exclude_species=" + url.searchParams.get("exclude_species")
    : "";
  let senior = url.searchParams.get("senior")
    ? "&senior=" + url.searchParams.get("senior")
    : "";

  try {
    const response = await fetch(
      [BASE_PETRESCUE_API_URL_50, species, excludedSpecies, senior, page].join(
        "",
      ),
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

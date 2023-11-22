import React from "react";

export default async function fetchListingData(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token token=d74b189e7a5fa10e1ad86c4b2bfe2b9b",
      },
    });

    if (!response.ok) {
      console.log(response);
      throw new Error("Petrescue response was not ok");
    }

    const data = await response.json();
    const listings = (data.listings);
    return(listings)
  } catch (error) {
    console.error("Error:", error);

    return error
  }
}

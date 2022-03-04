export function getStrapiURL(path = "") {
  let strapi_endpoint = process.env.NEXT_PUBLIC_STRAPI_API_URL
    ? process.env.NEXT_PUBLIC_STRAPI_API_URL
    : "https://localhost:1337";

  return `${strapi_endpoint}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);

  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    ["Bearer", process.env.STRAPI_API_TOKEN].join(" ")
  );

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return await fetch(requestUrl, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));
}

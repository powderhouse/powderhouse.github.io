export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337/api"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);

  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "bearer 02e30523b549ff8f7d57f849f11903e430ff8adb45c1492951d951c701c5a93c197196dbfe8fe6fbe23ca0d034e5180d1ecc8db6919a492bb7df305105efc9d127d0b09d841af32323f831dfde3786cbe54d8f676bcd5af7bbfc5902c75daf5ac71d008f88bc80f963cb3e1bbf76f5b46939e5865f53a9c9c61fa7b47415bef7"
  );

  let raw = "";

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

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;


import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";


const client = createClient({
  projectId: "mquaql5r",
  dataset: "production",
  apiVersion: "2023-04-04",
  useCdn: false
});

export async function load({ params }) {
  const data = await client.fetch(`*[_type == "pet"]`);

  if (data) {
    return {
      pets: data
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
};

const builder = imageUrlBuilder(client);

export function _urlFor(source) {
  return builder.image(source);
};
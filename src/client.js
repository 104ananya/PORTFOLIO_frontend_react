import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
  //   token: "skoeb2i5meYuFZZFLCa8US0yVLIbvRecsGvtsSO7cLF8KOGWNnGGswMs7xVXV4bwInoseAXc9tc0oX1yreKFZb3Olal1zJixciuAbw3u7b8zZznGwshxa73DkyWpj8rcUdxwbNa64z0tfukkbGSfLxDtNUBDlED6GAQ5Sd62zOPGLzgSiOVw",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

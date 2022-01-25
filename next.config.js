require("dotenv").config();

module.exports = {
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "image.tmdb.org",
      "kenlinkjson.netlify.app",
      "azurmindstorage.blob.core.windows.net",
      "fakestoreapi.com",
      "https://images.myguide-cdn.com",
      "shop.greenwoodwp.com",
      "medorange.com",
      "127.0.0.1:5501/products.json",
    ],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};

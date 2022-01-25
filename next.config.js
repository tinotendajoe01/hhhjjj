require("dotenv").config();

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
  env:{
    MONGODB_URI =process.env.MONGODB_URI
  },

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

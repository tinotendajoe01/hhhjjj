import { ExpansionPanelDetails } from "@material-ui/core";
import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Joe",
      email: "tinotendajoe01@gmail.com",
      password: bcrypt.hashSync("tinotendA01!"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Uraige",
      slug: "uriage",
      category: "Personal Care",
      image: "/products/demo (1).png",
      price: 13,
      brand: "HYSEAC",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Cleansing Gel",
    },
    {
      name: "Gingembre",
      slug: "gingembre",
      category: "Cosmetics",
      image: "/products/cosmetics/cosmetics (9).png",
      price: 33,
      isFeatured: true,
      brand: "Roger & Gallet",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Cleansing Gel",
    },
    {
      name: "Hyseac",
      slug: "Hyseac",
      category: "Personal Care",
      image: "/products/demo (2).png",
      price: 15,
      brand: "Hyseac",
      rating: 5,
      numReviews: 10,
      countInStock: 20,
      description: "Extra rich dermatological",
    },
    {
      name: "Murine",
      slug: "murine",
      category: "Eye Care",
      image: "/products/eyes/eyes (11).png",
      price: 13,
      brand: "Murine",
      isFeatured: true,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Bright & Moist Eye Drops",
    },
    {
      name: "Furterer ",
      slug: "furterer",
      category: "Skin Care",
      image: "/products/demo (4).png",
      isFeatured: true,
      price: 20,
      brand: "Okara",
      rating: 3.5,
      numReviews: 10,
      countInStock: 30,
      description: "Color protection mask",
    },
    {
      name: "Optive Fusion",
      slug: "optivefusion",
      category: "Eye Care",
      image: "/products/eyes/eyes (3).png",
      price: 13,
      brand: "Allergran",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        "For relief, comfort and sustained protection from dry eye symptoms",
    },
    {
      name: "Vichy ",
      slug: "vichy",
      category: "Hair Care",
      image: "/products/demo (1).png",
      price: 13,
      brand: "Decos",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Shampooing Doux Fortifiant",
    },
    {
      name: "5 Sense",
      slug: "5sense",
      category: "Cosmetics",
      image: "/products/cosmetics/cosmetics (1).png",
      price: "45",
      brand: "FURTERER",
      isFeatured: true,
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Enhanncing dry oil",
    },
  ],
  recommended: [
    {
      name: "5 Sense",
      slug: "5sense",
      category: "Cosmetics",
      image: "/products/cosmetics/cosmetics (1).png",
      price: "45",
      brand: "FURTERER",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Enhanncing dry oil",
    },
    {
      name: "5 Sense 100ml",
      slug: "5sense",
      category: "Cosmetics",
      image: "/products/cosmetics/cosmetics (3).png",
      price: "45",
      brand: "FURTERER",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Enhanncing dry oil",
    },
    {
      name: "Caudalie",
      slug: "caudalie",
      category: "Cosmetics",
      image: "/products/cosmetics/cosmetics (6).png",
      price: "25",
      brand: "Caudalie",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Crushed cabernet scrub 150g",
    },
    {
      name: "Gingembre",
      slug: "gingembre",
      category: "Cosmetics",
      image: "/products/cosmetics/cosmetics (9).png",
      price: 33,
      brand: "Roger & Gallet",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Cleansing Gel",
    },
    {
      name: "Caudalie",
      slug: "fleur",
      category: "Cosmetics",
      image: "/products/cosmetics/cosmetics (6).png",
      price: "25",
      brand: "Caudalie",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Fresh fragrance",
    },
    {
      name: "Murine",
      slug: "murine",
      category: "Eye Care",
      image: "/products/eyes/eyes (11).png",
      price: 13,
      brand: "Murine",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Bright & Moist Eye Drops",
    },
    {
      name: "Rene",
      slug: "rene5sense",
      category: "Cosmetics",
      image: "/products/cosmetics/cosmetics (1).png",
      price: "45",
      brand: "FURTERER",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Enhanncing dry oil 100ml",
    },
    {
      name: "Optive Plus",
      slug: "optiveplus",
      category: "Eye Care",
      image: "/products/eyes/eyes (3).png",
      price: 13,
      brand: "Allergran",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Lubricant Eye Drops",
    },
  ],
  featured: [
    {
      name: "Optive Fusion",
      slug: "optivefusion",
      category: "Eye Care",
      image: "/products/eyes/eyes (3).png",
      price: 13,
      brand: "Allergran",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        "For relief, comfort and sustained protection from dry eye symptoms",
    },
    {
      name: "Uraige",
      slug: "uriage",
      category: "Personal Care",
      image: "/products/demo (1).png",
      price: 13,
      brand: "HYSEAC",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Cleansing Gel",
    },
    {
      name: "Murine",
      slug: "murine",
      category: "Eye Care",
      image: "/products/eyes/eyes (11).png",
      price: 13,
      brand: "Murine",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Bright & Moist Eye Drops",
    },
    {
      name: "Optive Plus",
      slug: "optiveplus",
      category: "Eye Care",
      image: "/products/eyes/eyes (3).png",
      price: 13,
      brand: "Allergran",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "Lubricant Eye Drops",
    },
    {
      name: "Optive Fusion",
      slug: "optivefusioncare",
      category: "Eye Care",
      image: "/products/eyes/eyes (3).png",
      price: 13,
      brand: "Allergran",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        "For relief, comfort and sustained protection from dry eye symptoms",
    },
  ],
  cats: [
    { name: "Pills", image: "/products/categories/pills.svg" },
    { name: "Rx", image: "/products/categories/prescription.svg" },
    { name: "Rx", image: "/products/categories/prescription-bottle.svg" },
    { name: "Baby", image: "/products/categories/baby.svg" },
  ],
};
export default data;

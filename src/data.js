import mediaCover from "./photos/media bg-cover.svg";
import colMd from "./photos/filter (1).svg";
import mediaCover1 from "./photos/media bg-cover (1).svg";
import filter from "./photos/filter.svg";
import pr1 from "./photos/product-cover-5.svg";
import pr2 from "./photos/fixed-height.svg";
import pr3 from "./photos/product-cover-5 (1).svg";
import pr4 from "./photos/fixed-height (1).svg";
import pr5 from "./photos/product-cover-5 (2).svg";
import pr6 from "./photos/fixed-height (2).svg";
import pr7 from "./photos/fixed-height (3).svg";
import pr8 from "./photos/fixed-height (4).svg";
import blog1 from "./photos/unsplash_tVEqStC2uz8.svg";
import blog2 from "./photos/unsplash_hHdHCfAifHU.svg";
import blog3 from "./photos/unsplash_dEGu-oCuB1Y.svg";
import hero from "./photos/shop-hero-2-png-picture-1.svg";
import shop1 from "/card-cover-5.svg";
import shop2 from "/card-cover-6.svg";
import shop3 from "/card-cover-7.svg";
import shop4 from "/card-cover-4.svg";
import shop5 from "/card-cover-3.svg";

export const data = {
  // ----- SHOP ------
  shop: [
    { head: "CLOTHS", text: "5 Items", image: "/card-cover-5.svg" },
    { head: "CLOTHS", text: "5 Items", image: "/card-cover-6.svg" },
    { head: "CLOTHS", text: "5 Items", image: "/card-cover-7.svg" },
    { head: "CLOTHS", text: "5 Items", image: "/card-cover-4.svg" },
    { head: "CLOTHS", text: "5 Items", image: "/card-cover-3.svg" },
  ],
  // ----- CONTACT -----
  contact: {
    phone: "(225) 555-0118",
    email: "michelle.rivera@example.com",
    promo: "Follow Us and get a chance to win 80% off",
  },

  // ----- NAVIGATION -----
  navLinks: [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
    { label: "Team", path: "/team" },
  ],

  // ----- HERO SLIDER -----
  heroSlides: [
    {
      id: 1,
      season: "SUMMER 2020",
      title: "NEW COLLECTION",
      description:
        "We know how large objects will act, but things on a small scale.",
      cta: { label: "SHOP NOW", path: "/shop" },
      image: hero,
    },
    {
      id: 2,
      season: "SUMMER 2020",
      title: "Vita Classic Product",
      description:
        "We know how large objects will act, We know how are objects will act, We know",
      price: 16.48,
      cta: { label: "ADD TO CART" },
      image: hero,
    },
    {
      id: 3,
      season: "SUMMER 2020",
      title: "Part of the Neural Universe",
      description:
        "We know how large objects will act, but things on a small scale.",
      cta: [
        { label: "BUY NOW", path: "/shop" },
        { label: "READ MORE", path: "/about" },
      ],
      image: hero,
    },
  ],

  // ----- EDITOR'S PICK -----
  editorsPick: {
    heading: "EDITOR'S PICK",
    subheading: "Problems trying to resolve the conflict between",
    categories: [
      { id: 1, label: "MEN", image: mediaCover },
      { id: 2, label: "WOMEN", image: colMd },
      { id: 3, label: "ACCESSORIES", image: mediaCover1 },
      { id: 4, label: "KIDS", image: filter },
    ],
  },

  // ----- PRODUCTS -----

  // ----- BLOG POSTS -----
  blogPosts: [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'integral)",
      excerpt:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
      image: blog1,
      path: "/blog/loudest-1",
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L'integral)",
      excerpt:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
      image: blog2,
      path: "/blog/loudest-2",
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'integral)",
      excerpt:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
      image: blog3,
      path: "/blog/loudest-3",
    },
  ],

  blogPage: [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'integral)",
      excerpt:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
      image: blog1,
      path: "/blog/loudest-1",
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L'integral)",
      excerpt:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
      image: blog2,
      path: "/blog/loudest-2",
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'integral)",
      excerpt:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
      image: blog3,
      path: "/blog/loudest-3",
    },
    {
      id: 1,
      title: "Loudest à la Madison #1 (L'integral)",
      excerpt:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
      image: blog1,
      path: "/blog/loudest-1",
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L'integral)",
      excerpt:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
      image: blog2,
      path: "/blog/loudest-2",
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L'integral)",
      excerpt:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
      tags: ["Google", "Trending", "New"],
      image: blog3,
      path: "/blog/loudest-3",
    },
  ],

  // ----- FOOTER -----
  footer: {
    brand: "Bandage",
    tagline: "Made With Love By Finland All Right Reserved",
    socials: [
      { label: "Facebook", icon: "facebook", url: "#" },
      { label: "Instagram", icon: "instagram", url: "#" },
      { label: "Twitter", icon: "twitter", url: "#" },
    ],
    columns: [
      {
        heading: "Company Info",
        links: [
          { label: "About Us", path: "/about" },
          { label: "Carrier", path: "/carrier" },
          { label: "We are hiring", path: "/careers" },
          { label: "Blog", path: "/blog" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "About Us", path: "/legal/about" },
          { label: "Carrier", path: "/legal/carrier" },
          { label: "We are hiring", path: "/legal/hiring" },
          { label: "Blog", path: "/legal/blog" },
        ],
      },
      {
        heading: "Features",
        links: [
          { label: "Business Marketing", path: "/features/marketing" },
          { label: "User Analytics", path: "/features/analytics" },
          { label: "Live Chat", path: "/features/live-chat" },
          { label: "Unlimited Support", path: "/features/support" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "IOS & Android", path: "/resources/mobile" },
          { label: "Watch a Demo", path: "/resources/demo" },
          { label: "Customers", path: "/resources/customers" },
          { label: "API", path: "/resources/api" },
        ],
      },
    ],
    newsletter: {
      heading: "Get In Touch",
      placeholder: "Your Email",
      ctaLabel: "Subscribe",
    },
  },
};

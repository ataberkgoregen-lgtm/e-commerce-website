export const data = {
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
    { label: "Pages", path: "/pages" },
  ],

  // ----- HERO SLIDER -----
  heroSlides: [
    {
      id: 1,
      season: "SUMMER 2020",
      title: "New Collection",
      description: "We know how large objects will act, but things on a small scale.",
      cta: { label: "SHOP NOW", path: "/shop" },
      image: "/images/hero/slide-1.jpg",
    },
    {
      id: 2,
      season: "SUMMER 2020",
      title: "Vita Classic Product",
      description: "We know how large objects will act, We know how are objects will act, We know",
      price: 16.48,
      cta: { label: "ADD TO CART" },
      image: "/images/hero/slide-2.jpg",
    },
    {
      id: 3,
      season: "SUMMER 2020",
      title: "Part of the Neural Universe",
      description: "We know how large objects will act, but things on a small scale.",
      cta: [
        { label: "BUY NOW", path: "/shop" },
        { label: "READ MORE", path: "/about" },
      ],
      image: "/images/hero/slide-3.jpg",
    },
  ],

  // ----- EDITOR'S PICK -----
  editorsPick: {
    heading: "EDITOR'S PICK",
    subheading: "Problems trying to resolve the conflict between",
    categories: [
      { id: 1, label: "MEN",         image: "/images/editors/men.jpg" },
      { id: 2, label: "WOMEN",       image: "/images/editors/women.jpg" },
      { id: 3, label: "ACCESSORIES", image: "/images/editors/accessories.jpg" },
      { id: 4, label: "KIDS",        image: "/images/editors/kids.jpg" },
    ],
  },

  // ----- PRODUCTS -----
  products: [
    {
      id: 1,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
      image: "/images/products/product-1.jpg",
    },
    {
      id: 2,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
      image: "/images/products/product-2.jpg",
    },
    {
      id: 3,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
      image: "/images/products/product-3.jpg",
    },
    {
      id: 4,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
      image: "/images/products/product-4.jpg",
    },
    {
      id: 5,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
      image: "/images/products/product-5.jpg",
    },
    {
      id: 6,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
      image: "/images/products/product-6.jpg",
    },
    {
      id: 7,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
      image: "/images/products/product-7.jpg",
    },
    {
      id: 8,
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      salePrice: 6.48,
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
      image: "/images/products/product-8.jpg",
    },
  ],

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
      image: "/images/blog/post-1.jpg",
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
      image: "/images/blog/post-2.jpg",
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
      image: "/images/blog/post-3.jpg",
      path: "/blog/loudest-3",
    },
  ],

  // ----- FOOTER -----
  footer: {
    brand: "Bandage",
    tagline: "Made With Love By Finland All Right Reserved",
    socials: [
      { label: "Facebook",  icon: "facebook",  url: "#" },
      { label: "Instagram", icon: "instagram", url: "#" },
      { label: "Twitter",   icon: "twitter",   url: "#" },
    ],
    columns: [
      {
        heading: "Company Info",
        links: [
          { label: "About Us",      path: "/about" },
          { label: "Carrier",       path: "/carrier" },
          { label: "We are hiring", path: "/careers" },
          { label: "Blog",          path: "/blog" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "About Us",      path: "/legal/about" },
          { label: "Carrier",       path: "/legal/carrier" },
          { label: "We are hiring", path: "/legal/hiring" },
          { label: "Blog",          path: "/legal/blog" },
        ],
      },
      {
        heading: "Features",
        links: [
          { label: "Business Marketing", path: "/features/marketing" },
          { label: "User Analytics",     path: "/features/analytics" },
          { label: "Live Chat",          path: "/features/live-chat" },
          { label: "Unlimited Support",  path: "/features/support" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "IOS & Android", path: "/resources/mobile" },
          { label: "Watch a Demo",  path: "/resources/demo" },
          { label: "Customers",     path: "/resources/customers" },
          { label: "API",           path: "/resources/api" },
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

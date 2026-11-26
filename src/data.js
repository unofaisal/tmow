/* All site content lives here so it can be edited (or swapped for a CMS/API) without touching components. */

const wix = (id) => `https://static.wixstatic.com/media/7af1c3_${id}`;

// Set to false when the site goes live: removes the preview banner and enables honest "sent" messages.
export const SITE = { preview: true, name: "The Minister of Wellness" };

export const IMAGES = {
  logo: wix("092f1285ce9a4e769548c00c4d34d0e3~mv2.png"),
  hero: wix("520256dceeab44128a8cde986fc49517~mv2.png"),
  portrait: wix("228ae37146264de685ee791bcbcc7abb~mv2.png"),
  video: wix("22d01189cdf24c619acc0674af9716d4~mv2.jpg"),
  outreach: wix("7408d8ef8aeb4286940caeaed1f8ce77~mv2.jpg"),
  children: wix("afaa0f72a4574a1bb4d9893fdec7093c~mv2.jpg"),
  food: wix("15e64dae59394c389b0f019c6087ded4~mv2.jpg"),
  minister: wix("dc838fe1fdf444da93cd514d69949810~mv2.jpg"),
  journey: wix("e7d33cbb29d949d98500b9bda9ea1daa~mv2.jpg"),
  media: wix("e85c8d7549ec43bf8d7705f7bf41e856~mv2.jpg"),
  product: wix("c3e014a79fd94d408144af7bed3aa0f8~mv2.png"),
};

/* ---------- Navigation ----------
   Every dropdown link goes to its own route, never to the same page twice. */
export const NAV = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/about" },
  {
    label: "Wellness",
    to: "/wellness",
    mega: {
      kicker: "Wellness · Live with purpose",
      title: "Make wellness a way of life.",
      text: "Explore practical guidance and personal support for a more intentional approach to health.",
      cta: "Wellness overview",
      links: [
        { title: "Nutrition Guidance", text: "Food as the foundation.", to: "/wellness/nutrition" },
        { title: "Wellness Journey", text: "Body, mind and spirit.", to: "/wellness/journey" },
        { title: "Wellness Education", text: "Learn and grow with purpose.", to: "/wellness/education" },
        { title: "Personal Coaching", text: "Guidance for your goals.", to: "/coaching" },
      ],
    },
  },
  { label: "Coaching", to: "/coaching" },
  {
    label: "Teachings",
    to: "/teachings",
    mega: {
      kicker: "Faith · Knowledge · Purpose",
      title: "Grow in knowledge.",
      text: "Discover ministry teachings at the intersection of faith, health and truth.",
      cta: "All teachings",
      links: [
        { title: "Video Series", text: "Study playlists and lessons.", to: "/teachings/video-series" },
        { title: "Interviews & Podcasts", text: "Conversations on food and faith.", to: "/teachings/interviews-podcasts" },
        { title: "Featured Messages", text: "Written and spoken messages.", to: "/teachings/messages" },
        { title: "Events & Updates", text: "Seminars and ministry news.", to: "/events" },
      ],
    },
  },
  {
    label: "Shop",
    to: "/shop",
    mega: {
      kicker: "The Minister of Wellness shop",
      title: "Shop with purpose.",
      text: "Browse products selected to support a more intentional lifestyle.",
      cta: "All products",
      links: [
        { title: "Packages", text: "Bundles and support packages.", to: "/shop/category/packages" },
        { title: "Herbal Extracts", text: "The herbal extract range.", to: "/shop/category/botanicals" },
        { title: "Books & Resources", text: "Educational resources.", to: "/shop/category/books" },
        { title: "Seaweeds", text: "Irish Seamoss and more.", to: "/shop/category/seaweed" },
        { title: "Vitamins & Minerals", text: "The supplement range.", to: "/shop/category/vitamins" },
        { title: "Apparel & Resources", text: "Ministry apparel and extras.", to: "/shop/category/merch" },
      ],
    },
  },
];

export const FOOTER = [
  { heading: "Wellness", links: [["Nutrition Guidance", "/wellness/nutrition"], ["Wellness Journey", "/wellness/journey"], ["Wellness Education", "/wellness/education"], ["Coaching", "/coaching"]] },
  { heading: "Teachings", links: [["Video Series", "/teachings/video-series"], ["Interviews & Podcasts", "/teachings/interviews-podcasts"], ["Featured Messages", "/teachings/messages"], ["Events & Updates", "/events"]] },
  { heading: "Shop", links: [["All Products", "/shop"], ["Packages", "/shop/category/packages"], ["Herbal Extracts", "/shop/category/botanicals"], ["Books & Resources", "/shop/category/books"]] },
  { heading: "Ministry", links: [["Our Story", "/about"], ["Give", "/give"], ["Privacy", "#"], ["Terms", "#"], ["Health Disclaimer", "#"]] },
];

// Placeholder URLs: replace with the ministry's real profiles.
export const SOCIALS = [
  { icon: "facebook", label: "Facebook", href: "#" },
  { icon: "youtube", label: "YouTube", href: "https://www.youtube.com/playlist?list=PLVlIzFBI54qWwFebRxhoGxzxSb98dNOgy" },
  { icon: "instagram", label: "Instagram", href: "#" },
  { icon: "linkedin", label: "LinkedIn", href: "#" },
];

export const HEALTH_DISCLAIMER =
  "Educational information is not a substitute for professional medical advice. Consult a qualified health professional before changing your diet, supplements or treatment.";

/* ---------- Home ---------- */
export const START_PATHS = [
  { title: "Nourish", text: "Explore the ministry's approach to food and everyday choices.", cta: "Nutrition guidance", img: IMAGES.food, to: "/wellness/nutrition" },
  { title: "Learn", text: "Watch, listen and reflect with videos, interviews and podcasts.", cta: "Explore teachings", img: IMAGES.video, to: "/teachings" },
  { title: "Serve", text: "Help bring hope, health and compassion to communities in need.", cta: "Support the mission", img: IMAGES.children, to: "/give" },
];

export const COACHING_FORMATS = [
  { title: "By phone", text: "A voice-only conversation, wherever you are." },
  { title: "By video", text: "A face-to-face consultation on video." },
  { title: "On Zoom", text: "A scheduled Zoom session from any device." },
];

/* ---------- Wellness topics (/wellness/:topic) ---------- */
export const WELLNESS_TOPICS = [
  {
    slug: "nutrition",
    title: "Nutrition Guidance",
    tagline: "Eat well. Live well.",
    kicker: "Wellness · Nutrition guidance",
    headline: "Food is the foundation of a healthier life.",
    intro: "The ministry's food education centres on a plant-focused approach and on intentional everyday choices. Practical food guidance is also part of personal coaching conversations.",
    points: ["A plant-focused food philosophy", "Intentional choices at every meal", "Practical food guidance in coaching", "Teachings that connect food and faith"],
    img: IMAGES.food,
    alt: "Fresh food and wellness",
    teachings: ["food-addiction", "meat", "series"],
    categories: ["vitamins", "seaweed", "botanicals"],
  },
  {
    slug: "journey",
    title: "Wellness Journey",
    tagline: "Body, mind and spirit.",
    kicker: "Wellness · Wellness journey",
    headline: "Whole-person wellbeing begins with a personal story.",
    intro: "Nathaniel Jordan describes drawing on his own experience with weight and food habits, including a personal starting point in 2010, as part of the perspective he brings to ministry education. Personal testimony is kept distinct from evidence-based health information.",
    points: ["Body, mind and spirit together", "Personal testimony shared openly", "Reflection as part of daily practice", "Support for building sustainable habits"],
    img: IMAGES.journey,
    alt: "The Minister of Wellness sharing a personal wellness story",
    teachings: ["exam-room", "jesus-way"],
    categories: ["packages"],
  },
  {
    slug: "education",
    title: "Wellness Education",
    tagline: "Learn and grow with purpose.",
    kicker: "Wellness · Wellness education",
    headline: "Learn first, then choose with confidence.",
    intro: "Video series, interviews, podcasts and written messages explore food, faith and spiritual principles. Educational books and resources are available in the shop.",
    points: ["Video series and lessons", "Interviews and podcast conversations", "Books and written resources", "Coaching for personalised learning"],
    img: IMAGES.media,
    alt: "The Minister of Wellness teaching",
    teachings: ["series", "action-plan", "food-addiction"],
    categories: ["books"],
  },
];

/* ---------- Shop ---------- */
export const SHOP_FILTERS = [
  { key: "all", label: "All products", blurb: "Browse the product families currently presented by the ministry." },
  { key: "packages", label: "Packages", blurb: "Bundles and support packages, with source-listed contents." },
  { key: "botanicals", label: "Herbal Extracts", blurb: "The ministry's herbal extract range." },
  { key: "books", label: "Books & Resources", blurb: "Health and wellness educational resources." },
  { key: "seaweed", label: "Seaweeds", blurb: "Seaweed products featured by the ministry." },
  { key: "vitamins", label: "Vitamins & Minerals", blurb: "The ministry's supplement range." },
  { key: "merch", label: "Apparel & Resources", blurb: "Apparel and additional ministry resources." },
];

// Prices/summaries are the source listing's wording. Verify before launch.
export const PRODUCTS = [
  { slug: "mental-health-package", name: "Mental Health Package", category: "packages", tag: "Package", priceLabel: "$120–$250 (source listing)", img: IMAGES.food, alt: "Mental Health Package", summary: "A bundle described on the original site as including DHA/EPA and several herbal extracts. Details and claims need editorial review." },
  { slug: "weight-loss-package", name: "Weight Loss Package", category: "packages", tag: "Package", priceLabel: "$90 (source listing)", img: IMAGES.journey, alt: "Weight Loss Package", summary: "The original listing describes a book and herbal-extract bundle. Product claims are not reproduced as guarantees." },
  { slug: "herbal-extracts", name: "Herbal Extracts", category: "botanicals", tag: "Botanical", priceLabel: "Prices vary by extract", img: IMAGES.product, alt: "Herbal extracts", summary: "Explore the ministry's herbal extract range. Individual labels, contents and current prices will be confirmed before launch." },
  { slug: "irish-seamoss", name: "Irish Seamoss", category: "seaweed", tag: "Seaweed", priceLabel: "Price to be verified", img: IMAGES.outreach, alt: "Irish Seamoss", summary: "A seaweed product category featured on the original site. Specific product information and label details are pending verification." },
  { slug: "vitamins-minerals", name: "Vitamins & Minerals", category: "vitamins", tag: "Nutrition", priceLabel: "Prices vary by item", img: IMAGES.logo, fit: "contain", alt: "Vitamins and minerals", summary: "Browse the ministry's supplement range. Exact product name, package size, label and price to be confirmed." },
  { slug: "books-resources", name: "Books & Resources", category: "books", tag: "Education", priceLabel: "Price to be verified", img: IMAGES.minister, alt: "Books and resources", summary: "Health and wellness educational resources. Edition, format and price will be confirmed for each listing." },
  { slug: "wellness-support-packages", name: "Wellness & Support Packages", category: "packages", tag: "Packages", priceLabel: "Prices vary by package", img: IMAGES.food, alt: "Wellness and support packages", summary: "Explore ministry bundles with source-listed contents and transparent verification notes." },
  { slug: "apparel-resources", name: "Apparel & Other Resources", category: "merch", tag: "Ministry resources", priceLabel: "Price to be verified", img: IMAGES.minister, alt: "Apparel and ministry resources", summary: "Browse apparel and additional ministry resources; product specifications await confirmation." },
];

export const HOME_PRODUCT_SLUGS = ["mental-health-package", "weight-loss-package", "herbal-extracts", "books-resources"];

/* ---------- Teachings ---------- */
// Each group is its own route: /teachings, /teachings/video-series, ...
export const TEACHING_GROUPS = [
  { slug: "all", label: "All teachings", types: null, kicker: "Faith · Health · Truth", title: "Learn. Reflect. Explore the teachings.", intro: "Discover the ministry's video series, health sermons, interviews and conversations about food, faith and spiritual principles.", img: IMAGES.video },
  { slug: "video-series", label: "Video series", types: ["Video series", "Educational video"], kicker: "Teachings · Video", title: "Video series and lessons.", intro: "Study playlists and educational videos from the ministry.", img: IMAGES.video },
  { slug: "interviews-podcasts", label: "Interviews & podcasts", types: ["Interview", "Podcast"], kicker: "Teachings · Conversations", title: "Conversations on food, faith and purpose.", intro: "Interviews and podcast appearances, listed with links to the original publishers.", img: IMAGES.portrait },
  { slug: "messages", label: "Featured messages", types: ["Featured message"], kicker: "Teachings · Messages", title: "Featured messages from the ministry.", intro: "Written and spoken messages published on the ministry's website.", img: IMAGES.journey },
];

export const TEACHINGS = [
  { id: "series", type: "Video series", img: IMAGES.video, alt: "Featured teaching thumbnail", title: "Prevent & Reverse ALL Diseases 100% Naturally Video Series", text: "The ministry's featured video-study playlist.", cta: "Open playlist", href: "https://www.youtube.com/playlist?list=PLVlIzFBI54qWwFebRxhoGxzxSb98dNOgy" },
  { id: "meat", type: "Interview", img: IMAGES.outreach, alt: "Minister of Wellness media thumbnail", title: "Is Eating Meat a SIN?", text: "A conversation about food, faith, religious interpretation and veganism, hosted by VeganLinked.", cta: "Watch interview", href: "https://www.youtube.com/watch?v=fT02kSKKHi4" },
  { id: "action-plan", type: "Featured message", img: IMAGES.journey, alt: "Minister of Wellness book and teaching image", title: "The Biblical Action Plan for Quick Weight Loss, Disease Reversal, and Natural Immunity!", text: "A featured teaching title on the original ministry website, presented as the ministry's message, not a guarantee of health outcomes.", cta: "Read original post", href: "https://theministerofwellness.com/2020/04/26/the-biblical-action-plan-for-quick-weight-loss-disease-reversal-and-natural-immunity/" },
  { id: "jesus-way", type: "Podcast", img: IMAGES.portrait, alt: "Nathaniel Jordan portrait", title: "Why Christians HATE Jesus' Real Salvation Teachings", text: "Nathaniel Jordan's appearance on The Jesus Way Podcast, episode 065.", cta: "Listen to episode", href: "https://podcasts.apple.com/za/podcast/why-christians-hate-jesus-real-salvation-teachings/id1856402476?i=1000785608569" },
  { id: "food-addiction", type: "Educational video", img: IMAGES.food, alt: "Food and wellness photograph", title: "The 12 Components of Food Addiction Making Us FAT & Sick", text: "A teaching title featured on the original ministry homepage. The specific video destination is still to be confirmed.", cta: "Find it on the original site", href: "https://theministerofwellness.com/" },
  { id: "exam-room", type: "Podcast", img: IMAGES.minister, alt: "Nathaniel Jordan holding fruit", title: "From Satanic American Diet to Minister of Wellness", text: "Nathaniel Jordan's appearance on the Exam Room Podcast, listed in the ministry's coaching-page resources.", cta: "Read original post", href: "https://theministerofwellness.com/2023/04/11/from-satanic-american-diet-to-minister-of-wellness-nathaniel-jordan-exam-room-podcast/" },
];

/* ---------- Give ---------- */
export const GIVING_METHODS = [
  { type: "Online giving", title: "Card and digital payments", text: "Stripe and Google Pay were listed on the original giving page." },
  { type: "Mobile payments", title: "Cash App", text: "Listed as an additional support method. Current account details and availability require confirmation." },
  { type: "Direct transfer", title: "Zelle", text: "Referenced on the original page. Recipient details must be reconfirmed before any future use." },
  { type: "Online", title: "PayPal", text: "Also listed as a giving option. No PayPal link or payment action is active here." },
  { type: "By mail", title: "Checks", text: "Mentioned on the source page. Mailing instructions and payee details have not been carried over." },
];

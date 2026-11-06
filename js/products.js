/* ==========================================================================
   Havyaka Swaada — Product Catalogue Data
   v1.3.2
   Edit product details here; cards are rendered automatically by main.js

   PHOTOS
   - Per-size photos: give a price its own `image` and the card photo changes
     when that size is tapped. The product-level `image` is the default.
   - Category banner: `banner` shows a wide image above that category's cards.
   - Category photo:  set `photo: "images/your-file.jpg"` on a category.
   - Product photo:   add `image: "images/your-file.jpg"` to any product and
                      its card will show the photo at the top (4:3 crop).
                      Products without `image` simply render without one.

   STOCK, SAVINGS & USAGE
   - `soldOut: true` on a product shows "Out of stock" and hides the +/- buttons.
     Remove the line (or set false) when it is back in stock.
   - On a price: `save` (₹ saved vs the smallest pack) and `perGram` (₹ per gram)
     are shown as small badges.
   - `howTo: { title, steps: [{ title, text }] }` adds a "How to use" panel.

   PILLS
   - `pills` are the short fact tags shown under each product description.
     Keep them to facts that are true of the product (ingredients, flavour,
     shelf life) — no unverifiable claims.
   ========================================================================== */

const WHATSAPP_NUMBER = "918105408339";

const PRODUCT_CATEGORIES = [
  {
    id: "drinks",
    label: "Traditional Drinks",
    icon: "images/icon-drinks.svg",
    photo: "images/cat-drinks.jpg",
    blurb: "Handcrafted mango and tamarind drinks, best served chilled.",
    note: "Each bottle is 165ml. Serve chilled or at room temperature.",
    products: [
      {
        name: "Mavinakaayi Neer Gojju",
        kannada: "ಮಾವಿನಕಾಯಿ ನೀರ್ ಗೊಜ್ಜು",
        tagline: "Traditional Appe Mango Shots",
        description: "A refreshing traditional Appe mango drink with a sharp, tangy, spicy flavour.",
        supportingLine: "Made from Mandan Gojju",
        pills: ["Appe mango", "Tangy & spicy"],
        image: "images/products/mavinakaayi-neer-gojju.webp",
        prices: [{ label: "165ml", price: 80 }],
        ingredients: "Appe Mango, Dry Bird Eye Chilli, Salt, Coconut Oil, Hing",
        usage: "Serve chilled or at room temperature as a traditional drink."
      },
      {
        name: "Malnad Natural Energy Drink",
        tagline: "Sweet, Sour, Little Spicy & Tasty Energy Drink",
        description: "With Liquid Jaggery, Tamarind and warming spices.",
        pills: ["Tamarind & liquid jaggery", "Sweet, sour & a little spicy"],
        image: "images/products/malnad-natural-energy-drink.webp",
        prices: [{ label: "165ml", price: 80 }],
        ingredients: "Tamarind, Jaggery, Cumin Powder, Dry Ginger Powder, Pepper Powder, Salt",
        usage: "Serve chilled or at room temperature as a traditional drink."
      },
      {
        name: "Mango Pulp Drink",
        tagline: "Made from Mango GuLa",
        description: "A sweet-spicy ripe mango drink with jaggery and spices.",
        pills: ["Ripe mango", "Made with jaggery"],
        image: "images/products/mango-pulp-drink.webp",
        prices: [{ label: "165ml", price: 80 }],
        ingredients: "Ripe Mango, Liquid Jaggery, Pepper Powder, Jeera Powder, Dry Ginger Powder, Salt",
        usage: "Serve chilled or at room temperature as a traditional drink."
      }
    ]
  },
  {
    id: "gojju",
    label: "Gojju & Mango Specials",
    icon: "images/icon-gojju.svg",
    photo: "images/cat-gojju.jpg",
    blurb: "Homemade mango gojju and pulp, perfect with rice, dosa and curd rice.",
    note: "",
    products: [
      {
        name: "Mandan Gojju",
        tagline: "Unique Regional Raw Mango Gojju",
        description: "A raw mango-based gojju that can be used with rice, curd rice, dosa, chapati, and drinks.",
        pills: ["Raw mango", "Made with coconut oil"],
        image: "images/products/mandan-gojju-200g.webp",
        prices: [
          { label: "50g", image: "images/products/mandan-gojju-50g.webp", price: 90, perGram: "1.8" },
          { label: "100g", image: "images/products/mandan-gojju-100g.webp", price: 170, save: 10, perGram: "1.7" },
          { label: "200g", image: "images/products/mandan-gojju-200g.webp", price: 300, save: 60, perGram: "1.5" },
          { label: "500g", image: "images/products/mandan-gojju-500g.webp", price: 700, save: 200, perGram: "1.4" },
          { label: "1000g", image: "images/products/mandan-gojju-1000g.webp", price: 1300, save: 500, perGram: "1.3" }
        ],
        ingredients: "Raw Mango, Chilli, Salt, Coconut Oil, Hing, Mustard",
        howTo: {
          title: "How to use Mandan Gojju",
          steps: [
            { title: "With Rice", text: "Mix 2 teaspoons of Mandan Gojju with a bowl of rice and mix well. Enjoy it with hot rice and sun-dried curd chillies." },
            { title: "Mango Rice", text: "Add 2 teaspoons of Mandan Gojju to a bowl of hot rice. Add grated fresh coconut and groundnut tempering. Mix well and serve." },
            { title: "Mango Curd Gojju", text: "Fry 1/2 teaspoon dhaniya powder with 2 chillies. Add grated fresh coconut and grind it. Add curd and garlic or hing tempering. Mix well and enjoy with hot rice." },
            { title: "Mango Tambuli", text: "Add 1/2 litre of water to 2 teaspoons of Mandan Gojju. Add salt and green chilli paste. Give hing or garlic tempering. Mix well and enjoy with hot rice or drink directly." },
            { title: "Mango Neer Gojju (Brahmin's Beer)", text: "Add 1 litre of water to 2–3 teaspoons of Mandan Gojju. Add hing, mustard, and chilli tempering. Mix well. Enjoy it after lunch or with hot rice." }
          ]
        },
        storage: "Store in a cool, dry place. Use a clean spoon. Refrigerate to get up to 4 months shelf life. If not refrigerated, consume within 4 days."
      },
      {
        name: "Mango GuLa",
        kannada: "ಮಾವಿನ ಗುಳ",
        tagline: "Sweet-Spicy Mango Delight",
        description: "A sweet-spicy ripe mango pulp made with jaggery and traditional spices.",
        pills: ["Ripe mango", "Made with jaggery"],
        image: "images/products/mango-gula-200g.webp",
        prices: [
          { label: "50g", image: "images/products/mango-gula-50g.webp", price: 90, perGram: "1.8" },
          { label: "100g", image: "images/products/mango-gula-100g.webp", price: 170, save: 10, perGram: "1.7" },
          { label: "200g", image: "images/products/mango-gula-200g.webp", price: 300, save: 60, perGram: "1.5" },
          { label: "500g", image: "images/products/mango-gula-500g.webp", price: 700, save: 200, perGram: "1.4" },
          { label: "1000g", image: "images/products/mango-gula-1000g.webp", price: 1300, save: 500, perGram: "1.3" }
        ],
        soldOut: true,
        howTo: {
          title: "How to enjoy Mango GuLa",
          steps: [
            { title: "With Rice", text: "Mix 2 tsp of Mango GuLa with 1 bowl of rice. Mix well and enjoy." },
            { title: "With Curd Rice", text: "Have a small portion of Mango GuLa with each bite of curd rice, just like a pickle." },
            { title: "With Idli, Dosa, Chapati & Roti", text: "Enjoy it with idli, dosa, chapati, and roti like a chutney." },
            { title: "Mango Sasive", text: "Grind 2 tbsp grated coconut with 1/4 tsp mustard and 1 green chilli. Add 2 tbsp Mango GuLa and 2 tbsp fresh curd. Give coconut oil tempering and enjoy with rice." }
          ]
        },
        ingredients: "Ripe Mango, Liquid Jaggery, Coriander, Cumin, Pepper, Red Chilli, Fenugreek, Salt",
        storage: "Store in a cool, dry place. Use a clean spoon. Refrigerate to get up to 4 months shelf life. If not refrigerated, consume within 4 days."
      }
    ]
  },
  {
    id: "pickles",
    label: "Pickles",
    icon: "images/icon-pickle.svg",
    photo: "images/cat-pickles.jpg",
    blurb: "Traditional tender mango pickles with the unique taste of Malnad.",
    note: "No refrigeration needed. Use a clean, dry spoon and close the pack airtight after every use.",
    products: [
      {
        name: "Appe Midi Uppinakaayi",
        tagline: "Unique Taste of Malnad",
        description: "A tender mango pickle with a unique Malnad taste.",
        pills: ["Tender mango pickle", "Best before 6 months"],
        image: "images/products/appe-midi-uppinakaayi.webp",
        netQty: "250g",
        prices: [{ label: "250g", price: 249 }],
        ingredients: "Appe Maavinakaayi, Dry Chilli Powder, Mustard, Jeera, Pepper, Salt",
        bestBefore: "6 Months",
        storage: "Store in a cool, dry place. Use a clean, dry spoon and close the pack airtight after every use. No refrigeration needed."
      },
      {
        name: "Jeerige Midi Uppinakaayi",
        tagline: "Unmatchable Aroma",
        description: "A tender mango pickle known for its special aroma.",
        pills: ["Tender mango pickle", "Best before 6 months"],
        image: "images/products/jeerige-midi-uppinakaayi.webp",
        netQty: "250g",
        prices: [{ label: "250g", price: 299 }],
        ingredients: "Jeerige Maavinakaayi, Dry Chilli Powder, Mustard, Jeera, Pepper, Salt",
        bestBefore: "6 Months",
        storage: "Store in a cool, dry place. Use a clean, dry spoon and close the pack airtight after every use. No refrigeration needed."
      }
    ]
  },
  {
    id: "puliyogare",
    label: "Puliyogare Gojju Specials",
    icon: "images/icon-puliyogare.svg",
    photo: "images/cat-puliyogare.jpg",
    blurb: "Signature puliyogare mixes with bold, unique regional flavours.",
    note: "Store cool & dry. Refrigerate for 2+ months shelf life. Use a clean, dry spoon.",
    products: [
      {
        name: "Appe Mango Puliyogare Gojju",
        tagline: "Signature Appe Mango Puliyogare Mix",
        description: "A premium Appe mango-flavoured puliyogare mix with a tangy, unique mango taste.",
        badge: "Signature",
        pills: ["Appe mango", "Cold-pressed groundnut oil"],
        image: "images/products/appe-mango-puliyogare-200g.webp",
        prices: [
          { label: "100g", image: "images/products/appe-mango-puliyogare-100g.webp", price: 199 },
          { label: "200g", image: "images/products/appe-mango-puliyogare-200g.webp", price: 399, highlight: "+40g FREE · 20% Extra" }
        ],
        ingredients: "Appe Mango, Sesame Seeds, Dry Coconut, Chilli Powder, Groundnut, Cumin, Black Pepper, Fenugreek, Coriander, Asafoetida, Red Chilli Powder, Cold Pressed Groundnut Oil, Turmeric, Curry Leaves, Urad Dal, Chana Dal",
        storage: "Store cool & dry. Refrigerate for 2+ months shelf life. Use a clean, dry spoon."
      },
      {
        name: "Nellikaayi Puliyogare Gojju",
        tagline: "Signature Amla Puliyogare Mix",
        description: "A unique amla-based puliyogare mix with tangy depth and traditional spice balance.",
        badge: "Signature",
        pills: ["Amla", "Cold-pressed groundnut oil"],
        image: "images/products/nellikaayi-puliyogare-200g.webp",
        prices: [
          { label: "100g", image: "images/products/nellikaayi-puliyogare-100g.webp", price: 149 },
          { label: "200g", image: "images/products/nellikaayi-puliyogare-200g.webp", price: 299, highlight: "+40g FREE · 20% Extra" }
        ],
        ingredients: "Amla, Sesame Seeds, Dry Coconut, Chilli Powder, Groundnut, Cumin, Black Pepper, Fenugreek, Coriander, Asafoetida, Red Chilli Powder, Cold Pressed Groundnut Oil, Turmeric, Curry Leaves, Urad Dal, Chana Dal",
        storage: "Store cool & dry. Refrigerate for 2+ months shelf life. Use a clean, dry spoon."
      },
      {
        name: "Karibevu Puliyogare Gojju",
        tagline: "Signature Curry Leaf Puliyogare Mix",
        description: "A curry leaf-flavoured puliyogare mix with a rich, aromatic taste.",
        badge: "Signature",
        pills: ["Curry leaf", "Cold-pressed groundnut oil"],
        image: "images/products/karibevu-puliyogare-200g.webp",
        prices: [
          { label: "100g", image: "images/products/karibevu-puliyogare-100g.webp", price: 149 },
          { label: "200g", image: "images/products/karibevu-puliyogare-200g.webp", price: 299, highlight: "+40g FREE · 20% Extra" }
        ],
        ingredients: "Sesame Seeds, Dry Coconut, Chilli Powder, Groundnut, Cumin, Black Pepper, Fenugreek, Coriander, Asafoetida, Red Chilli Powder, Cold Pressed Groundnut Oil, Turmeric, Curry Leaves, Urad Dal, Chana Dal",
        storage: "Store cool & dry. Refrigerate for 2+ months shelf life. Use a clean, dry spoon."
      },
      {
        name: "Veelyadele Puliyogare Gojju",
        tagline: "Signature Paan Leaf Puliyogare Mix",
        description: "A unique paan leaf-flavoured puliyogare mix with a bold regional taste.",
        badge: "Signature",
        pills: ["Paan leaf", "Cold-pressed groundnut oil"],
        image: "images/products/veelyadele-puliyogare-200g.webp",
        prices: [
          { label: "100g", image: "images/products/veelyadele-puliyogare-100g.webp", price: 149 },
          { label: "200g", image: "images/products/veelyadele-puliyogare-200g.webp", price: 299, highlight: "+40g FREE · 20% Extra" }
        ],
        ingredients: "Paan Leaf, Sesame Seeds, Dry Coconut, Chilli Powder, Groundnut, Cumin, Black Pepper, Fenugreek, Coriander, Asafoetida, Red Chilli Powder, Cold Pressed Groundnut Oil, Turmeric, Curry Leaves, Urad Dal, Chana Dal",
        storage: "Store cool & dry. Refrigerate for 2+ months shelf life. Use a clean, dry spoon."
      }
    ]
  }
];

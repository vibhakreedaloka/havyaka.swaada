/* ==========================================================================
   Havyaka Swaada — Product Catalogue Data
   v1.2.5
   Edit product details here; cards are rendered automatically by main.js
   ========================================================================== */

const WHATSAPP_NUMBER = "918105408339";

const PRODUCT_CATEGORIES = [
  {
    id: "drinks",
    label: "Traditional Drinks",
    icon: "images/icon-drinks.svg",
    blurb: "Handcrafted mango and tamarind drinks, best served chilled.",
    note: "Available in Shot, Medium and Full sizes. Serve chilled or at room temperature.",
    products: [
      {
        name: "Mavinakaayi Neer Gojju",
        kannada: "ಮಾವಿನಕಾಯಿ ನೀರ್ ಗೊಜ್ಜು",
        tagline: "Traditional Appe Mango Shots",
        description: "A refreshing traditional Appe mango drink with a sharp, tangy, spicy flavour.",
        supportingLine: "Made from Mandan Gojju",
        prices: [
          { label: "Shot", price: 50 },
          { label: "Medium", price: 80 },
          { label: "Full", price: 100 }
        ],
        ingredients: "Appe Mango, Dry Bird Eye Chilli, Salt, Coconut Oil, Hing",
        usage: "Serve chilled or at room temperature as a traditional drink."
      },
      {
        name: "Hunase Khatta Meetha",
        tagline: "Traditional Sweet-Sour Tamarind Drink",
        description: "A sweet-sour tamarind drink with jaggery and warming spices.",
        prices: [
          { label: "Shot", price: 50 },
          { label: "Medium", price: 80 },
          { label: "Full", price: 100 }
        ],
        ingredients: "Tamarind, Jaggery, Cumin Powder, Dry Ginger Powder, Pepper Powder, Salt",
        usage: "Serve chilled or at room temperature as a traditional drink."
      },
      {
        name: "Mango Theeka Meetha",
        tagline: "Made from Mango GuLa",
        description: "A sweet-spicy ripe mango drink with jaggery and spices.",
        prices: [
          { label: "Shot", price: 50 },
          { label: "Medium", price: 80 },
          { label: "Full", price: 100 }
        ],
        ingredients: "Ripe Mango, Liquid Jaggery, Pepper Powder, Jeera Powder, Dry Ginger Powder, Salt",
        usage: "Serve chilled or at room temperature as a traditional drink."
      }
    ]
  },
  {
    id: "gojju",
    label: "Gojju & Mango Specials",
    icon: "images/icon-gojju.svg",
    blurb: "Small-batch mango gojju and pulp, perfect with rice, dosa and curd rice.",
    note: "",
    products: [
      {
        name: "Mandan Gojju",
        tagline: "Unique Regional Raw Mango Gojju",
        description: "A raw mango-based gojju that can be used with rice, curd rice, dosa, chapati, and drinks.",
        showSavings: true,
        prices: [
          { label: "100g", price: 149 },
          { label: "200g", price: 249 },
          { label: "500g", price: 599 }
        ],
        ingredients: "Raw Mango, Chilli, Salt, Coconut Oil, Hing, Mustard",
        usage: "Mix with hot rice · Use for mango rice · Mix with curd · Dilute with water or curd for tambuli / neer gojju · Serve as a side dish",
        storage: "Store in a cool, dry place. Use a clean spoon. Refrigerate to get up to 4 months shelf life. If not refrigerated, consume within 4 days."
      },
      {
        name: "Mango GuLa",
        kannada: "ಮಾವಿನ ಗುಳ",
        tagline: "Sweet-Spicy Mango Delight",
        description: "A sweet-spicy ripe mango pulp made with jaggery and traditional spices.",
        showSavings: true,
        prices: [
          { label: "100g", price: 149 },
          { label: "200g", price: 249 },
          { label: "500g", price: 599 }
        ],
        ingredients: "Ripe Mango, Liquid Jaggery, Coriander, Cumin, Pepper, Red Chilli, Fenugreek, Salt",
        storage: "Store in a cool, dry place. Use a clean spoon. Refrigerate to get up to 4 months shelf life. If not refrigerated, consume within 4 days."
      }
    ]
  },
  {
    id: "pickles",
    label: "Pickles",
    icon: "images/icon-pickle.svg",
    blurb: "Traditional tender mango pickles with the unique taste of Malnad.",
    note: "No refrigeration needed. Use a clean, dry spoon and close the pack airtight after every use.",
    products: [
      {
        name: "Appe Midi Uppinakaayi",
        tagline: "Unique Taste of Malnad",
        description: "A tender mango pickle with a unique Malnad taste.",
        netQty: "250g",
        prices: [{ label: "250g", price: 249 }],
        ingredients: "Appe Maavinakaayi, Dry Chilli Powder, Mustard, Jeera, Pepper, Salt",
        packedDate: "15 July 2026",
        bestBefore: "6 Months",
        storage: "Store in a cool, dry place. Use a clean, dry spoon and close the pack airtight after every use. No refrigeration needed."
      },
      {
        name: "Jeerige Midi Uppinakaayi",
        tagline: "Unmatchable Aroma",
        description: "A tender mango pickle known for its special aroma.",
        netQty: "250g",
        prices: [{ label: "250g", price: 299 }],
        ingredients: "Jeerige Maavinakaayi, Dry Chilli Powder, Mustard, Jeera, Pepper, Salt",
        packedDate: "15 July 2026",
        bestBefore: "6 Months",
        storage: "Store in a cool, dry place. Use a clean, dry spoon and close the pack airtight after every use. No refrigeration needed."
      }
    ]
  },
  {
    id: "puliyogare",
    label: "Puliyogare Gojju Specials",
    icon: "images/icon-puliyogare.svg",
    blurb: "Signature puliyogare mixes with bold, unique regional flavours.",
    note: "Batch No: 1 · Packed On: 5 August 2026 · Best Before: 1 month from the date of packing. Store cool & dry; refrigerate for 2+ months shelf life.",
    products: [
      {
        name: "Veelyadele Puliyogare Gojju",
        tagline: "Signature Paan Leaf Puliyogare Mix",
        description: "A unique paan leaf-flavoured puliyogare mix with a bold regional taste.",
        badge: "Signature",
        prices: [
          { label: "100g", price: 149 },
          { label: "200g", price: 299, highlight: "+40g FREE · 20% Extra" }
        ],
        ingredients: "Paan Leaf, Sesame Seeds, Dry Coconut, Chilli Powder, Groundnut, Cumin, Black Pepper, Fenugreek, Coriander, Asafoetida, Red Chilli Powder, Cold Pressed Groundnut Oil, Turmeric, Curry Leaves, Urad Dal, Chana Dal",
        packing: "Batch No: 1 · Packed On: 5 August 2026 · Best Before: 1 month from packing",
        storage: "Store cool & dry. Refrigerate for 2+ months shelf life. Use a clean, dry spoon."
      },
      {
        name: "Nellikaayi Puliyogare Gojju",
        tagline: "Signature Amla Puliyogare Mix",
        description: "A unique amla-based puliyogare mix with tangy depth and traditional spice balance.",
        badge: "Signature",
        prices: [
          { label: "100g", price: 149 },
          { label: "200g", price: 299, highlight: "+40g FREE · 20% Extra" }
        ],
        ingredients: "Amla, Sesame Seeds, Dry Coconut, Chilli Powder, Groundnut, Cumin, Black Pepper, Fenugreek, Coriander, Asafoetida, Red Chilli Powder, Cold Pressed Groundnut Oil, Turmeric, Curry Leaves, Urad Dal, Chana Dal",
        packing: "Batch No: 1 · Packed On: 5 August 2026 · Best Before: 1 month from packing",
        storage: "Store cool & dry. Refrigerate for 2+ months shelf life. Use a clean, dry spoon."
      },
      {
        name: "Karibevu Puliyogare Gojju",
        tagline: "Signature Curry Leaf Puliyogare Mix",
        description: "A curry leaf-flavoured puliyogare mix with a rich, aromatic taste.",
        badge: "Signature",
        prices: [
          { label: "100g", price: 149 },
          { label: "200g", price: 299, highlight: "+40g FREE · 20% Extra" }
        ],
        ingredients: "Sesame Seeds, Dry Coconut, Chilli Powder, Groundnut, Cumin, Black Pepper, Fenugreek, Coriander, Asafoetida, Red Chilli Powder, Cold Pressed Groundnut Oil, Turmeric, Curry Leaves, Urad Dal, Chana Dal",
        packing: "Batch No: 1 · Packed On: 5 August 2026 · Best Before: 1 month from packing",
        storage: "Store cool & dry. Refrigerate for 2+ months shelf life. Use a clean, dry spoon."
      },
      {
        name: "Appe Mango Puliyogare Gojju",
        tagline: "Signature Appe Mango Puliyogare Mix",
        description: "A premium Appe mango-flavoured puliyogare mix with a tangy, unique mango taste.",
        badge: "Signature",
        prices: [
          { label: "100g", price: 199 },
          { label: "200g", price: 399, highlight: "+40g FREE · 20% Extra" }
        ],
        ingredients: "Appe Mango, Sesame Seeds, Dry Coconut, Chilli Powder, Groundnut, Cumin, Black Pepper, Fenugreek, Coriander, Asafoetida, Red Chilli Powder, Cold Pressed Groundnut Oil, Turmeric, Curry Leaves, Urad Dal, Chana Dal",
        packing: "Batch No: 1 · Packed On: 5 August 2026 · Best Before: 1 month from packing",
        storage: "Store cool & dry. Refrigerate for 2+ months shelf life. Use a clean, dry spoon."
      }
    ]
  },
  {
    id: "nutripower",
    label: "NutriPower Mix",
    icon: "images/icon-nutripower.svg",
    blurb: "A nourishing dry fruit and ghee mix, prepared the traditional way.",
    note: "",
    products: [
      {
        name: "NutriPower Mix",
        kannada: "ನ್ಯೂಟ್ರಿಪವರ್ ಮಿಕ್ಸ್",
        tagline: "Healthy. Premium. Nourishing.",
        description: "A nourishing mix made with dry fruits, ghee, and traditional ingredients.",
        prices: [
          { label: "Quick Snack", price: 30 },
          { label: "Weekly Snack", price: 299 },
          { label: "Monthly Snack", price: 599 }
        ],
        ingredients: "Cashew Nuts, Almonds, Dried Dates, Raisins, Cloves, Cardamom, Dry Coconut, Nutmeg, Rock Sugar, Poppy Seeds, Ghee",
        usage: "Mix with ghee and have 2 teaspoons a day · Use with banana and honey · Use with apple and honey"
      }
    ]
  }
];

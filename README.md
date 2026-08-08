# Havyaka Swaada Website — v1.2.5

Premium, conversion-focused website for the Havyaka Swaada food brand, built with plain HTML, CSS, and JavaScript (no build step required).

## Folder structure

```
havyaka-swaada-v1.2.5/
├── index.html                  Homepage (Hero, Products, About, How to Order, FAQ, Contact, Footer)
├── privacy-policy.html         Privacy Policy (placeholder content)
├── terms-and-conditions.html   Terms & Conditions (placeholder content)
├── shipping-policy.html        Shipping / Delivery Policy (placeholder content)
├── refund-policy.html          Cancellation / Refund Policy (placeholder content)
├── css/
│   └── style.css               All site styling (design tokens, layout, responsive rules)
├── js/
│   ├── products.js             Product catalogue data (edit here to add/change products & prices)
│   └── main.js                 Renders products, quantity/variant selection, cart-aware WhatsApp links, nav toggle
├── images/
│   ├── favicon.png              Real brand favicon (icon-only mark)
│   ├── apple-touch-icon.png     iOS/home-screen icon
│   ├── logo-mark.png            Icon-only logo used in header & footer
│   ├── logo-full.jpg            Full circular wordmark emblem, used in About section
│   ├── hero.jpg                 Real hero photograph
│   ├── icon-*.svg                Category icons — still placeholders, pending category photos
│   ├── leaf-divider.svg          Decorative divider between product categories
│   └── pattern-leaf.svg          Background texture — placeholder
├── VERSION.txt                 Version number + changelog
└── README.md                   This file
```

## How ordering works (v1.1.0+)

Products are no longer split behind category tabs — all 5 categories and 12 products render as one continuous scrollable list on the Products section. A "jump to category" row of links at the top lets people skip ahead, but nothing is hidden.

Each product card has:
- A **size/variant selector** (when a product has more than one pack size or pour size) — tap to choose.
- A **quantity stepper** (− / +) starting at 0.

As people set quantities, items are added to a running order shown in the floating cart panel at the bottom-right (with a badge showing total item count). Every "Order on WhatsApp" button on the site — in the header, hero, How to Order section, Contact section, and the cart panel itself — sends the **same itemised message** listing every selected product, its variant, and its quantity. If nothing has been selected, all of these buttons fall back to the original generic message ("Hello Havyaka Swaada, I want to place an order.").

The cart is in-memory only (no browser storage) and resets on page reload — see the `cart` object in `js/main.js` if you want to add persistence later.

## Deploying

This is a static site — upload the contents of this folder to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.) and point `havyakaswaada.com` at it. No server or build step is needed.

## Editing products or prices

Open `js/products.js` and edit the `PRODUCT_CATEGORIES` array. Product cards, category tabs, and the category preview grid are all generated automatically from this file — you don't need to touch the HTML.

## Editing the WhatsApp number

The number is set once at the top of `js/products.js` as `WHATSAPP_NUMBER`. All "Order on WhatsApp" buttons across the site use this value automatically.

## Images

All visuals are custom, lightweight SVG illustrations stored in `/images` (not embedded inline), matching the brand's soft-ivory, earthy-brown, leaf-green, and jaggery-gold palette. Replace any SVG with a photograph of the same filename (e.g. swap `hero-illustration.svg` for `hero-illustration.jpg` and update the `src` in `index.html`) once real product photography is available.

## Versioning policy

- The version number lives in three places: this folder's name, the root `.zip` filename, and `VERSION.txt`.
- Any future change (content, design, or code) must bump the version in **all three places** together, following semantic versioning:
  - **Patch (1.0.x)** — copy, price, or content-only fixes
  - **Minor (1.x.0)** — new sections, products, or pages
  - **Major (x.0.0)** — full redesign or restructuring
- Add a new line to the changelog in `VERSION.txt` for every release.

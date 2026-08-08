/* ==========================================================================
   Havyaka Swaada — Site Script
   v1.2.5
   ========================================================================== */

(function () {
  "use strict";

  var DEFAULT_ORDER_MESSAGE = "Hello Havyaka Swaada, I want to place an order.";
  var MAX_QTY = 20;

  // cart[slug] = { name, variantLabel, price, qty }
  var cart = {};

  function waLink(message) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  }

  function slugify(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function parseGrams(label) {
    var match = /^(\d+(?:\.\d+)?)\s*g\b/i.exec(label.trim());
    return match ? parseFloat(match[1]) : null;
  }

  /* Savings badge: compares each larger pack's price against what it would
     cost at the smallest pack's per-gram rate. Only used for products with
     showSavings: true and weight-based labels (e.g. "100g", "200g"). */
  function computeSavings(product) {
    if (!product.showSavings || product.prices.length < 2) return [];
    var baseGrams = parseGrams(product.prices[0].label);
    var baseRate = baseGrams ? product.prices[0].price / baseGrams : null;
    return product.prices.map(function (p, i) {
      if (i === 0 || !baseRate) return null;
      var grams = parseGrams(p.label);
      if (!grams) return null;
      var equivalent = baseRate * grams;
      var amount = Math.round(equivalent - p.price);
      if (amount <= 0) return null;
      var percent = Math.round((amount / equivalent) * 100);
      return { amount: amount, percent: percent };
    });
  }

  function whatsAppIconSVG() {
    return '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16.02 3C9.4 3 4.02 8.37 4.02 15c0 2.36.65 4.56 1.78 6.44L4 29l7.74-1.75A11.9 11.9 0 0 0 16.02 27C22.65 27 28 21.63 28 15S22.65 3 16.02 3Zm0 21.7c-2.02 0-3.9-.58-5.5-1.58l-.4-.24-4.6 1.04 1.05-4.48-.26-.42A9.6 9.6 0 0 1 6.34 15c0-5.34 4.35-9.68 9.68-9.68 5.34 0 9.68 4.34 9.68 9.68 0 5.34-4.34 9.7-9.68 9.7Zm5.32-7.24c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.03c.15.2 2.06 3.14 4.98 4.4.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.34Z"/></svg>';
  }

  /* ---------------- Message building ---------------- */

  function buildOrderMessage() {
    var keys = Object.keys(cart);
    if (keys.length === 0) return DEFAULT_ORDER_MESSAGE;

    var lines = keys.map(function (key, i) {
      var item = cart[key];
      var variant = item.variantLabel ? " (" + item.variantLabel + ")" : "";
      return (i + 1) + ". " + item.name + variant + " x" + item.qty;
    });

    return (
      "Hello Havyaka Swaada, I want to place an order:\n\n" +
      lines.join("\n") +
      "\n\nPlease confirm availability, price, and delivery/pickup details."
    );
  }

  function cartTotalQty() {
    return Object.keys(cart).reduce(function (sum, k) { return sum + cart[k].qty; }, 0);
  }

  /* ---------------- Order bar (floating cart + WhatsApp send) ---------------- */

  function renderOrderBarItems() {
    var wrap = document.getElementById("orderBarItems");
    if (!wrap) return;
    var keys = Object.keys(cart);

    if (keys.length === 0) {
      wrap.innerHTML = '<p style="font-size:0.85rem;color:var(--ink-soft);">No items selected yet. Choose a quantity on any product to add it here.</p>';
      return;
    }

    wrap.innerHTML = keys.map(function (key) {
      var item = cart[key];
      var variant = item.variantLabel ? item.variantLabel + " · " : "";
      return (
        '<div class="order-bar__item">' +
          '<div>' +
            '<div class="order-bar__item-name">' + item.name + '</div>' +
            '<div class="order-bar__item-meta">' + variant + "Qty " + item.qty + (item.price ? " · &#8377;" + (item.price * item.qty) : "") + '</div>' +
          '</div>' +
          '<button type="button" class="order-bar__item-remove" data-remove-key="' + key + '" aria-label="Remove ' + item.name + '">&times;</button>' +
        '</div>'
      );
    }).join("");
  }

  function refreshOrderLinks() {
    var link = waLink(buildOrderMessage());
    document.querySelectorAll("[data-whatsapp-cta]").forEach(function (el) {
      el.href = link;
      el.target = "_blank";
      el.rel = "noopener";
    });

    var sendBtn = document.getElementById("orderBarSend");
    if (sendBtn) sendBtn.href = link;

    var total = cartTotalQty();
    var badge = document.getElementById("orderBarBadge");
    if (badge) {
      if (total > 0) {
        badge.hidden = false;
        badge.textContent = String(total);
      } else {
        badge.hidden = true;
      }
    }

    renderOrderBarItems();
  }

  function wireOrderBar() {
    var bubble = document.getElementById("orderBarBubble");
    var panel = document.getElementById("orderBarPanel");
    var clearBtn = document.getElementById("orderBarClear");
    if (!bubble || !panel) return;

    bubble.addEventListener("click", function () {
      var total = cartTotalQty();
      if (total === 0) {
        window.open(waLink(DEFAULT_ORDER_MESSAGE), "_blank", "noopener");
        return;
      }
      panel.hidden = !panel.hidden;
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        Object.keys(cart).forEach(function (key) { setQty(key, 0); });
        panel.hidden = true;
      });
    }

    document.addEventListener("click", function (e) {
      var wrap = document.getElementById("orderBar");
      if (!wrap || panel.hidden) return;
      if (!wrap.contains(e.target)) panel.hidden = true;
    });

    document.addEventListener("click", function (e) {
      var removeBtn = e.target.closest("[data-remove-key]");
      if (!removeBtn) return;
      setQty(removeBtn.dataset.removeKey, 0);
    });
  }

  /* ---------------- Cart state helpers ----------------
     Cart key format: "<productSlug>::<variantIndex>" — each pack size/variant
     of a product is tracked independently, so e.g. 1 Shot + 2 Medium + 1 Full
     of the same drink can all be in the order at once. */

  function cartKey(slug, variantIndex) {
    return slug + "::" + variantIndex;
  }

  function setQty(key, qty) {
    qty = Math.max(0, Math.min(MAX_QTY, qty));
    var parts = key.split("::");
    var slug = parts[0];
    var variantIndex = parseInt(parts[1], 10);

    var card = document.querySelector('[data-product-slug="' + slug + '"]');
    var product = card ? JSON.parse(card.dataset.product) : null;
    var variant = product ? (product.prices[variantIndex] || product.prices[0]) : null;

    if (qty === 0) {
      delete cart[key];
    } else if (product && variant) {
      cart[key] = {
        name: product.name,
        variantLabel: product.prices.length > 1 ? variant.label : "",
        price: variant.price,
        qty: qty
      };
    }

    var row = document.querySelector('[data-cart-key="' + key + '"]');
    if (row) {
      var qtyEl = row.querySelector(".qty-value");
      if (qtyEl) qtyEl.textContent = String(qty);
      var minusBtn = row.querySelector('[data-step="-1"]');
      if (minusBtn) minusBtn.disabled = qty === 0;
      row.classList.toggle("is-active", qty > 0);
    }

    if (card) {
      var anySelected = card.querySelectorAll(".variant-row.is-active").length > 0;
      card.classList.toggle("has-selection", anySelected);
      var addedEl = card.querySelector(".added-indicator");
      if (addedEl) addedEl.hidden = !anySelected;
    }

    refreshOrderLinks();
  }

  /* ---------------- Product rendering ---------------- */

  function buildVariantRows(product, slug) {
    var savings = computeSavings(product);
    return product.prices.map(function (p, i) {
      var extraBadge = p.highlight ? '<span class="extra-badge">' + p.highlight + "</span>" : "";
      var saveBadge = savings[i] ? '<span class="save-badge">Save &#8377;' + savings[i].amount + " &middot; " + savings[i].percent + "%</span>" : "";
      var key = cartKey(slug, i);
      return (
        '<div class="variant-row" data-cart-key="' + key + '">' +
          '<span class="variant-row__label">' +
            '<span class="variant-row__price-line">' + p.label + '<b>&#8377;' + p.price + "</b></span>" +
            extraBadge + saveBadge +
          "</span>" +
          '<div class="qty-stepper">' +
            '<button type="button" data-step="-1" disabled aria-label="Decrease ' + p.label + ' quantity">&minus;</button>' +
            '<span class="qty-value">0</span>' +
            '<button type="button" data-step="1" aria-label="Increase ' + p.label + ' quantity">&plus;</button>' +
          "</div>" +
        "</div>"
      );
    }).join("");
  }

  function buildDetails(product) {
    var rows = "";
    if (product.ingredients) rows += "<dt>Ingredients</dt><dd>" + product.ingredients + "</dd>";
    if (product.usage) rows += "<dt>How to use</dt><dd>" + product.usage + "</dd>";
    if (product.netQty) rows += "<dt>Net Quantity</dt><dd>" + product.netQty + "</dd>";
    if (product.packedDate) rows += "<dt>Packed Date</dt><dd>" + product.packedDate + "</dd>";
    if (product.bestBefore) rows += "<dt>Best Before</dt><dd>" + product.bestBefore + "</dd>";
    if (product.packing) rows += "<dt>Packing</dt><dd>" + product.packing + "</dd>";
    if (product.storage) rows += "<dt>Storage</dt><dd>" + product.storage + "</dd>";
    if (!rows) return "";
    return '<details class="product-details"><summary>Ingredients &amp; details</summary><dl>' + rows + "</dl></details>";
  }

  function buildProductCard(product) {
    var slug = slugify(product.name);
    var kannada = product.kannada ? '<p class="kannada">' + product.kannada + "</p>" : "";
    var supporting = product.supportingLine ? '<p class="tagline">' + product.supportingLine + "</p>" : "";
    var badge = product.badge ? '<span class="product-badge">' + product.badge + "</span>" : "";

    return (
      '<article class="product-card" data-product-slug="' + slug + '" data-product=\'' + JSON.stringify(product).replace(/'/g, "&#39;") + "'>" +
        badge +
        "<h3>" + product.name + "</h3>" +
        kannada +
        '<p class="tagline">' + product.tagline + "</p>" +
        supporting +
        '<p class="desc">' + product.description + "</p>" +
        '<div class="price-row">' + buildVariantRows(product, slug) + "</div>" +
        '<p class="added-indicator" hidden>Added to your order</p>' +
        buildDetails(product) +
      "</article>"
    );
  }

  function renderCategoryPreview() {
    var wrap = document.getElementById("categoryPreview");
    if (!wrap) return;
    wrap.innerHTML = PRODUCT_CATEGORIES.map(function (cat) {
      return (
        '<a class="cat-card" href="#cat-' + cat.id + '">' +
          '<img src="' + cat.icon + '" alt="" loading="lazy">' +
          "<h4>" + cat.label + "</h4>" +
          "<p>" + cat.blurb + "</p>" +
        "</a>"
      );
    }).join("");
  }

  function renderCatJump() {
    var wrap = document.getElementById("catJump");
    if (!wrap) return;
    wrap.innerHTML = PRODUCT_CATEGORIES.map(function (cat) {
      return '<a href="#cat-' + cat.id + '">' + cat.label + "</a>";
    }).join("");
  }

  function renderProductSections() {
    var wrap = document.getElementById("productPanels");
    if (!wrap) return;

    wrap.innerHTML = PRODUCT_CATEGORIES.map(function (cat, i) {
      var divider = i === 0 ? "" : '<img class="category-divider" src="images/leaf-divider.svg" alt="" aria-hidden="true">';
      var note = cat.note ? '<p class="tab-panel-note">' + cat.note + "</p>" : "";
      var cards = cat.products.map(buildProductCard).join("");
      return (
        divider +
        '<div class="category-section" id="cat-' + cat.id + '">' +
          '<div class="category-section-head">' +
            '<img src="' + cat.icon + '" alt="">' +
            "<div><h3>" + cat.label + "</h3><p>" + cat.blurb + "</p></div>" +
          "</div>" +
          note +
          '<div class="product-grid">' + cards + "</div>" +
        "</div>"
      );
    }).join("");
  }

  function wireProductInteractions() {
    var wrap = document.getElementById("productPanels");
    if (!wrap) return;

    wrap.addEventListener("click", function (e) {
      var stepBtn = e.target.closest("[data-step]");
      if (!stepBtn) return;
      var row = stepBtn.closest(".variant-row");
      if (!row) return;
      var key = row.dataset.cartKey;
      var current = parseInt(row.querySelector(".qty-value").textContent, 10);
      var delta = parseInt(stepBtn.dataset.step, 10);
      setQty(key, current + delta);
    });
  }

  function wireOrderButtons() {
    refreshOrderLinks();
  }

  function wireNavToggle() {
    var toggle = document.getElementById("navToggle");
    var header = document.getElementById("siteHeader");
    if (!toggle || !header) return;
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      header.classList.toggle("is-open", !expanded);
    });
    header.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        header.classList.remove("is-open");
      });
    });
  }

  function setYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderCategoryPreview();
    renderCatJump();
    renderProductSections();
    wireProductInteractions();
    wireOrderBar();
    wireOrderButtons();
    wireNavToggle();
    setYear();
  });
})();

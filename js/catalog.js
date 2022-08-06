"use strict";
/* catalog start */

const catalogSection = document.querySelector(".section-catalog"),
  catalog = catalogSection.querySelector(".catalog"),
  catalogNav = catalogSection.querySelector(".catalog-nav"),
  catalogItems = catalogSection.querySelectorAll(".catalog__item");

const removeChildren = function (item) {
  while (item.firstChild) {
    item.removeChild(item.firstChild);
  }
};
const updateChildren = function (item, children) {
  removeChildren(item);
  for (let i = 0; i < children.length; i += 1) {
    item.appendChild(children[i]);
  }
};

catalogNav.addEventListener("click", function (e) {
  if (catalogSection === null) {
    return;
  }

  let target = e.target;
  let item = closestItemByClass(target, "catalog-nav__btn");

  if (item === null || item.classList.contains("is-active")) {
    return;
  }

  e.preventDefault();
  let filterValue = item.getAttribute("data-filter");
  let previousBtnActive = catalogNav.querySelector(
    ".catalog-nav__btn.is-active"
  );

  previousBtnActive.classList.remove("is-active");
  item.classList.add("is-active");

  if (filterValue === "all") {
    updateChildren(catalog, catalogItems);
    return;
  }

  let filteredItems = [];
  for (let i = 0; i < catalogItems.length; i += 1) {
    let current = catalogItems[i];
    if (current.getAttribute("data-category") === filterValue) {
      filteredItems.push(current);
    }
  }

  updateChildren(catalog, filteredItems);
});

/* catalog end */

/* product start */
const updateProductPrice = function (product, price) {
  let productPrice = product.querySelector(".product__price-value");
};

const changeProductSize = function (target) {
  let product = closestItemByClass(target, "product");
  let previousBtnActive = product.querySelector(".product__size.is-active");
  let newPrice = target.getAttribute("data-product-size-price");

  previousBtnActive.classList.remove("is-active");
  target.classList.add("is-active");
  updateProductPrice(product, newPrice);
};

const changeProductOrderInfo = function (target) {
  let product = closestItemByClass(target, "product");
  let order = document.querySelector(".popup-order");

  let productTitle = product.querySelector(".product__title").textContent;
  let productSize = product.querySelector(
    ".product__size.is-active"
  ).textContent;
  let productPrice = product.querySelector(".product__price-value").textContent;
  let productImgSrc = product
    .querySelector(".product__img")
    .getAttribute("src");

  order.querySelector(".order-info-title").setAttribute("value", productTitle);
  order.querySelector(".order-info-size").setAttribute("value", productSize);
  order.querySelector(".order-info-price").setAttribute("value", productPrice);

  order.querySelector(".order-product-title").textContent = productTitle;
  order.querySelector(".order-product-price").textContent = productPrice;
  order.querySelector(".order__size").textContent = productSize;
  order.querySelector(".order__img").setAttribute("src", productImgSrc);
};

catalog.addEventListener("click", function (e) {
  if (catalog === null) {
    return;
  }

  let target = e.target;

  if (
    target.classList.contains("product__size") &&
    !target.classList.contains("is-active")
  ) {
    e.preventDefault();
    changeProductSize(target);
  }

  if (target.classList.contains("product__btn")) {
    e.preventDefault();
    changeProductOrderInfo(target);
  }
});
/* product end */

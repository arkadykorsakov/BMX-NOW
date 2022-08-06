"use strict";
/* myLib start */
const body = document.querySelector("body");

const closestAttr = function (item, attr) {
  let node = item;

  while (node) {
    let attrValue = node.getAttribute(attr);
    if (attrValue) {
      return attrValue;
    }

    node = node.parentElement;
  }

  return null;
};

const closestItemByClass = function (item, className) {
  let node = item;

  while (node) {
    if (node.classList.contains(className)) {
      return node;
    }

    node = node.parentElement;
  }

  return null;
};

const toggleScroll = function () {
  body.classList.toggle("no-scroll");
};
/* myLib end */

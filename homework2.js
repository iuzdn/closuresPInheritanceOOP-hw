// Design two objects, HtmlElement and HtmlSelectElement.
// HtmlElement has "click" instance method and "focus" prototype method.

// const e = new HtmlElement();
// e.click() and e.focus();

function HtmlElement() {
  this.click = function () {
    console.log("click");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focus");
};

const e = new HtmlElement();
e.click();
e.focus();

// Then, create "HtmlSelectElement" with items(optional), addItem, removeItem members.
// HtmlSelectElement needs to inherit "click" and "focus" methods.

function HtmlSelectElement() {
  HtmlElement.call(this);
  this.items = {};
}
HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlSelectElement.prototype.addItem = function () {
  console.log("Add new Item");
};

HtmlSelectElement.prototype.removeItem = function () {
  console.log("Remove item");
};

const d = new HtmlSelectElement();
d.click();
d.focus();
d.addItem();
d.removeItem();

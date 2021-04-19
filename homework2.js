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

// the value for "items" is optional. What if I decide to pass an initial value like so: new HtmlSelectElement([1, 2, 3])?
function HtmlSelectElement() {
  HtmlElement.call(this);
  this.items = {};
}
HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// It would've been better to have the implementation for adding and removing an item to the items list also.
// And by setting these methods on the prototype, you will not be able to access items, because it's on another level
// You could call addItem and removeItem, but you cannot access items property.
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

// Below is what I would do:
// function HtmlSelectElement(items = []) {
//   this.items = items;

//   this.addItem = function (item) {
//     this.items.push(item);
//   };

//   this.removeItem = function (item) {
//     this.items.splice(this.items.indexOf(item), 1);
//   };
// }
// So, I set to the prototype of HtmlSelectElement an instance of HtmlElement, because an instance has both methods "click" and "focus".
// HtmlSelectElement.prototype = new HtmlElement();

// YOU DID A GREAT JOB. My comments are just improvements you can make, but in general your solution more or less corrent too.

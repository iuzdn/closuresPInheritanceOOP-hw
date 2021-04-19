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

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
}

HtmlSelectElement.prototype = new HtmlElement();

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

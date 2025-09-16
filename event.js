var _ = require('lodash');

console.log(_);

var array = [1,2,3,4,5];
console.log(_.without(array,3));

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ol = document.getElementsByTagName("ol")[0];

button.addEventListener("click", function () {
  console.log("click");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  input.value = "";
  var delButton = document.createElement("button");
  li.appendChild(delButton);
  delButton.appendChild(document.createTextNode("delete"));

  delButton.addEventListener("click", function () {
    ol.removeChild(li);
  });
  ol.appendChild(li);
});

 document.querySelector("#para").style.background="red";



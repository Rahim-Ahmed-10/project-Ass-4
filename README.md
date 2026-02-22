

***I Solved it with the help of chatGPT***


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ANS: 
GetElementById("id")
* শুধু একটি Elment দেয়।
*id deya koje.
*shob se fast.

GetElementsByClassName,("class")
*aky class ar anek golo element dey.
*htmlCollection ritan kore

QuerySelectorAll('selector'),

*css selector use kore.
*shob matching element dey (NodeList).

<!-- shotcut -->
Id -> aktay -> GetElementByid.
class -> onek -> getElementByClassName.
Flexible selector -> querySelector/querySelectorAll.


### 2. How do you create and insert a new element into the DOM?

ANS :
1.element.
2.content.
3.DOM.

### 3. What is Event Bubbling? And how does it work?

ANS:
যখন কোনো element এ event ঘটে, তখন event ভিতরের element থেকে parent এর দিকে উপরে ওঠে — এটাকে Event Bubbling বলে |

উদাহরণ:
button a click korle event sholbe.

button -> div -> body -> document

### 4. What is Event Delegation in JavaScript? Why is it useful?

ANS:
parent element এ event listener বসিয়ে child এর event ধরাকে Event Delegation বলে।

উদাহরণ:
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("LI clicked");
  }
}

useful:
* কম memory লাগে ।
* dynamic element এ কাজ করে ।
* code clean থাকে ।
* performance ভালো ।

### 5. What is the difference between preventDefault() and stopPropagation() methods?

ANS :
preventDefault() vs
stopPropagation() difference

 preventDefault() 
 *browser ar defult kaj bondo kore.

 stopPropagation(),
 event bubbling bondo kore.

 *preventDefault -> default kaj bondo.
 *preventDefault -> event উপরে যাওয়া bondo.

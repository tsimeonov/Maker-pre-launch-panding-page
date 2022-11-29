"use strict";

let inputForm = document.querySelector("#input-form");
let errorMsg = document.querySelector("#error");
let btn = document.querySelector("#btn");
let emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailRegex.test(inputForm.value)) {
    inputForm.style.border = "none";
    errorMsg.style.display = "none";
  } else {
    inputForm.style.border = "1px solid red";
    errorMsg.style.display = "block";
  }
});

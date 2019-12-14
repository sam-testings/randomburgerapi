"use strict";
(function() {
  window.addEventListener("load", init);

  /**
   * initiates the page, creating a random burger and adding appropriate event listeners
   */
  function init() {
    fetch("/burger/random")
      .then(checkStatus)
      .then(resp => resp.json())
      .then(randBurger)
      .catch(console.error);
    id("rand-order").addEventListener("click", processOrder);
  }

  /**
   * populates the page with a random generated burger
   *
   * @param {Array} burgerJSON - object that represents burger ingredients
   */
  function randBurger(burgerJSON) {
    id("rand-burger-container").innerHTML = "";
    for (let i = 0; i < burgerJSON.length; i++) {
      let li = gen("li");
      let obj = burgerJSON[i];
      let ingr = gen("span");
      let type = gen("span");
      for (let j in obj) {
        ingr.textContent = j + ": ";
        type.textContent = obj[j];
      }
      ingr.classList.add("ingr");
      type.classList.add("type");
      li.appendChild(ingr);
      li.appendChild(type);
      id("rand-burger-container").appendChild(li);
    }
  }

  /**
   * processes the user's order and populates the page with their order
   */
  function processOrder() {
    let order = "";
    if (id("bun").checked) {
      order += "bun-";
    }
    if (id("protein").checked) {
      order += "protein-";
    }
    if (id("cheese").checked) {
      order += "cheese-";
    }
    if (id("sauce").checked) {
      order += "sauce-";
    }
    if (id("toppings").checked) {
      order += "toppings-";
    }
    if (id("sides").checked) {
      order += "sides-";
    }
    fetch("/burger/order/" + order)
      .then(checkStatus)
      .then(resp => resp.json())
      .then(randBurger)
      .catch(console.error);
  }

  /**
   * returns the element object representing the id input
   * @param {string} idName - the string that represents the id
   * @return {element} the element object
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * returns the element object representing the id input
   * @param {string} elType - the string that represents the element type
   * @return {element} the new element created
   */
  function gen(elType) {
    return document.createElement(elType);
  }

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} response - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  function checkStatus(response) {
    if (!response.ok) {
      throw Error("Error in request: " + response.statusText);
    }
    return response; // a Response object
  }
})();

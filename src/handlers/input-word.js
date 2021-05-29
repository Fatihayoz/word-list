import { data } from "../data.js";
import { isWord } from "../logic/is-word.js";
import { sortStrings } from "../logic/sort-strings.js";
import { updateList } from "../procedures/update-list.js";

const warnings = document.getElementById("warnings");

/**
 * Entry point for users adding a word to the list.
 * It is called each time the user clicks the "add word" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */
export const handleInputWord = (event) => {
  /* -- entry point for adding or removing a word -- */
  // debugger;
  console.log("-- handler: input word --");

  /* -- check the target -- */
  if (event.target.type !== "button") {
    return;
  }

  /* -- gather user input from DOM -- */
  const text = event.target.form.text.value;
  const action = event.target.value;

  /* -- use the input and data to implement the user story --

    a user can add a new word to the list
      given the input contains non-letters,
        it will not be added
        a warning is displayed
      given the input contains only letters
        it will be added to the words list
        the list will be re-rendered
    a user can remove words from the list
      given the input is not in the list
        a warning is posted
      given the input is in the list
        it is removed
        the list is re-rendered
  */

  // ... write some code ...
  if (action === "Add") {
    // warn if it contains non-letter
    if (!isWord(text)) {
      warnings.innerHTML = `
      Your input '${text}' contains non-letter elements.
      Please, enter the words in the correct form.
      `;
      // check the warning
      console.log(`${text} has non-letters`);
    } else {
      data.words.push(text);
      // check the last changes
      console.log(`added the ${text}`);
      console.log(data);
    }
  }

  if (action === "Remove") {
    // warn if the word is not in the list
    if (!data.words.includes(text)) {
      warnings.innerHTML = `
      You are trying to remove '${text}' which is not in the list. 
      Please, enter a word that is in the list.
      `;
      // check the warning
      console.log(`${text} is not in the list`);
    } else {
      data.words.splice(data.words.indexOf(text), 1);
      // check the last changes
      console.log(`removed the ${text}`);
      console.log(data);
    }
  }

  /* -- render new words -- */
  const sorted = sortStrings(data.words, data.sort);
  updateList(sorted);
};

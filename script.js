// Get the search word input element.
const searchWordInput = document.querySelector("#search-word");

// Get the search button element.
const searchButton = document.querySelector("#search-button");

// Get the definition element.
const definitionElement = document.querySelector("#definition");

// Add an event listener to the search button.
searchButton.addEventListener("click", function() {
  // Get the search word from the input element.
  const searchWord = searchWordInput.value;

  // Clear the definition element.
  definitionElement.textContent = "";

  // Make an API request to fetch the definition of the search word.
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
    .then(response => response.json())
    .then(data => {
      // Display the definition of the search word.
      definitionElement.textContent = data[0].meanings[0].definitions[0].definition;

      // Save the search word to local storage.
      saveToHistory(searchWord, data[0].meanings[0].definitions[0].definition);
    })
    .catch(error => {
      // Display an error message.
      definitionElement.textContent = "An error occurred while fetching the definition.";
    });
});

// Function to save the search word to history in local storage.
function saveToHistory(word, meaning) {
  let searches = JSON.parse(localStorage.getItem("searches")) || [];

  // Create an object representing the word and its meaning.
  const searchObject = {
    word: word,
    meaning: meaning,
  };

  // Add the object to the searches array.
  searches.push(searchObject);

  // Save the updated searches array to local storage.
  localStorage.setItem("searches", JSON.stringify(searches));
}

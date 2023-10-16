// Get the history container element where you will display search history.
const historyContainer = document.querySelector("#history-container");

// Retrieve search history from local storage.
const searches = JSON.parse(localStorage.getItem("searches")) || [];

// Check if there are saved searches to display.
if (searches.length > 0) {
  // Iterate through the search history and create a card for each entry.
  searches.forEach(search => {
    // Create a div element for the search history card.
    const historyCard = document.createElement("div");
    historyCard.classList.add("history-card"); // You can style this class in your CSS.

    // Create elements for the word and its meaning.
    const wordElement = document.createElement("p");
    wordElement.textContent = `Word: ${search.word}`;

    const meaningElement = document.createElement("p");
    meaningElement.textContent = `Meaning: ${search.meaning}`;

    // Append word and meaning elements to the history card.
    historyCard.appendChild(wordElement);
    historyCard.appendChild(meaningElement);

    // Append the history card to the history container.
    historyContainer.appendChild(historyCard);
  });
} else {
  // If there are no saved searches, display a message.
  const noHistoryMessage = document.createElement("p");
  noHistoryMessage.textContent = "No search history available.";
  historyContainer.appendChild(noHistoryMessage);
}

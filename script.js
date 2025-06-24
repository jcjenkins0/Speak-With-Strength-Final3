document.addEventListener("DOMContentLoaded", function () {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const quotes = data.quotes;
      const tips = data.tips;

      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      const randomTip = tips[Math.floor(Math.random() * tips.length)];

      document.getElementById("quote").textContent = "Quote of the Day: " + randomQuote;
      document.getElementById("tip").textContent = "Public Speaking Tip: " + randomTip;
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
    });
});


document.addEventListener("DOMContentLoaded", function () {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById("quote").textContent = "Quote of the Day: " + data.quote;
      document.getElementById("tip").textContent = "Public Speaking Tip: " + data.tip;
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
    });
});



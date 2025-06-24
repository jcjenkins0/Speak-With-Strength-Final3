const data = {
  quotes: [
    "Your voice has power, use it!",
    "Speak boldly, even if your voice shakes.",
    "Confidence begins with preparation.",
    "The fear of speaking fades when your purpose is louder than your doubt."
  ],
  tips: [
    "End with a clear and powerful closing statement.",
    "Make eye contact to build trust.",
    "Practice your pauses, they're powerful.",
    "Pause before key points to give your words more weight."
  ]
};

document.addEventListener("DOMContentLoaded", function () {
  const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
  const randomTip = data.tips[Math.floor(Math.random() * data.tips.length)];

  document.getElementById("quote").textContent = "Quote of the Day: " + randomQuote;
  document.getElementById("tip").textContent = "Public Speaking Tip: " + randomTip;
});



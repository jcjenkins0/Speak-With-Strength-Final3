
document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "Your voice has power—use it!",
        "Speak boldly, even if your voice shakes.",
        "Confidence begins with preparation."
    ];
    const tips = [
        "End with a clear and powerful closing statement.",
        "Make eye contact to build trust.",
        "Practice your pauses—they're powerful."
    ];

    document.getElementById("quote").textContent = "Quote of the Day: " + quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("tip").textContent = "Public Speaking Tip: " + tips[Math.floor(Math.random() * tips.length)];
});

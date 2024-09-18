// Array of fun facts
const funFacts = [
    "Bananas are berries, but strawberries aren’t!",
    "A group of flamingos is called a 'flamboyance'.",
    "Sharks have been around longer than trees.",
    "Octopuses have three hearts.",
    "Some cats are allergic to humans.",
    "Wombat poop is cube-shaped."
  ];
  
  // Function to display a random fun fact
  document.getElementById("funFactBtn").addEventListener("click", function() {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById("GAME ON").textContent = randomFact; // Change the "GAME ON" text to a random fun fact
  });

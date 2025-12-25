// subtle glow interaction
document.querySelectorAll(".event-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow += ", 0 0 25px white";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "";
  });
});

const toggle = document.querySelector("#toggle");
const main = document.querySelector("main, dark-1, dark-2, dark-3, dark-4, dark-4, dark-6");

toggle.addEventListener("change", () => {
	if (toggle.checked) {
// Dark Mode
		main.style.background = "#000";
		main.style.color = "#fff";
		eventHero.forEach(function(event){
			event.style.backgroundColor = "#0B0D22";
		});
		weather.style.background = "#0B0D22";
		spotCards.forEach(function(card) {
			card.style.backgroundColor = "#0B0D22";
		});
		modeButton.textContent = "☀️";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		eventHero.forEach(function(event){
			event.style.backgroundColor = "#f1f1f1";
		});

		weather.style.background = "#f1f1f1";

		spotCards.forEach(function(card) {
			card.style.backgroundColor = "#f1f1f1";
		});
		modeButton.textContent = "🌙"; 
	}
});
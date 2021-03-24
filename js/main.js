/***  ||  Initialize and add the map  ||  ***/
function initMap() {
	// Your location then center the map on it
	const loc = { lat: -33.8637, lng: 151.211338 };
	const map = new google.maps.Map(document.querySelector(".map"), {
		zoom: 15,
		center: loc,
	});
	// Add a marker to the location
	const marker = new google.maps.Marker({
		position: loc,
		map: map,
	});
}

/***  ||  Sticky menu background  ||  ***/
window.addEventListener("scroll", function () {
	if (window.scrollY > 80) {
		document.querySelector("#navbar").style.opacity = 0.9;
	} else {
		document.querySelector("#navbar").style.opacity = 1;
	}
});

/***  ||  Smooth Scrolling  ||  ***/
$("#navbar a, .btn").on("click", function (event) {
	if (this.hash !== "") {
		event.preventDefault();

		const hash = this.hash;

		$("html, body").animate(
			{
				scrollTop: $(hash).offset().top - 100,
			},
			800
		);
	}
});

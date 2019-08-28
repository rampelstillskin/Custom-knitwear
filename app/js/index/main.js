// КАРТА ПОПАП

const mapPopup = document.querySelector(".map-popup"),
			contactsMap = document.querySelector(".contacts__map"),
			mapPopupBtn = mapPopup.querySelector(".map-popup__close-btn"),
			escButton = 27;

const mapCloseEscBtn = (evt) => {
	if (evt.keyCode === escButton) {
		mapPopup.classList.add("map-popup__show");
	}
};

const openMap = () => {
	mapPopup.classList.remove("map-popup__show");
	document.addEventListener("keydown", mapCloseEscBtn);
};

const closeMap = () => {
	mapPopup.classList.add("map-popup__show");
	document.removeEventListener("keydown", mapCloseEscBtn);
};

contactsMap.addEventListener("click", () => {
	openMap();
});

mapPopupBtn.addEventListener("click", () => {
	closeMap();
});
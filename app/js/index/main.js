// МОБИЛЬНОЕ МЕНЮ

const mobileNavBtn = document.querySelector(".mobile-nav__btn"),
			mobileNavBtnAnimation = mobileNavBtn.querySelector(".mobile-nav__btn-desc"),
			mobileNav = document.querySelector(".mobile-nav");

const mobileNavClose = () => {
	mobileNav.classList.add("mobile-nav__show");
};

mobileNavClose();

mobileNavBtn.addEventListener("click", () => {
	mobileNav.classList.toggle("mobile-nav__show");
	mobileNavBtn.classList.toggle("btn-close");
});

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

// ОКНО ЗАКАЗА

const topProductOrderBtn = document.querySelector(".top-product__order"),
			modalWindow = document.querySelector(".modal-window"),
			modalWindowBtnClose = modalWindow.querySelector(".modal-window__btn-close"),
			modalOverlay = document.querySelector(".modal-overlay"),
			escBtn = 27;

const modalWindowCloseEscBtn = (evt) => {
	if (evt.keyCode === escBtn) {
		modalWindow.classList.remove("modal-window__show");
		modalOverlay.classList.remove("modal-overlay__show");
	}
};

const openModalWindow = () => {
	modalWindow.classList.add("modal-window__show");
	modalOverlay.classList.add("modal-overlay__show");
	document.addEventListener("keydown", modalWindowCloseEscBtn);
};

const closeModalWindow = () => {
	modalWindow.classList.remove("modal-window__show");
	modalOverlay.classList.remove("modal-overlay__show");
	document.removeEventListener("keydown", modalWindowCloseEscBtn);
};


topProductOrderBtn.addEventListener("click", (evt) => {
	evt.preventDefault();
	openModalWindow();
});

modalWindowBtnClose.addEventListener("click", (evt) => {
	evt.preventDefault();
	closeModalWindow();
});

modalOverlay.addEventListener("click", () => {
	closeModalWindow();
});


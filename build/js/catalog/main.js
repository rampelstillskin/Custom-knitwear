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

// ОКНО ЗАКАЗА

const itemOrder = document.querySelectorAll(".catalog__description__wrapper");
const modalWindow = document.querySelector(".modal-window");
const modalWindowBtnClose = modalWindow.querySelector(
	".modal-window__btn-close"
);
const modalOverlay = document.querySelector(".modal-overlay");
const escBtn = 27;

const modalWindowCloseEscBtn = evt => {
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

itemOrder.forEach(item => {
	item.addEventListener("click", () => {
		openModalWindow();
	});
});

modalWindowBtnClose.addEventListener("click", evt => {
	evt.preventDefault();
	closeModalWindow();
});

modalOverlay.addEventListener("click", () => {
	closeModalWindow();
});

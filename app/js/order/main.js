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
const navBar = document.querySelector("nav");
const scrollBtn = document.querySelector(".scroll-btn");
const menuBtn = document.querySelector(".menu-icon");
const list = document.querySelector(".list");
const closeBtn = document.querySelector(".close-icon");


document.addEventListener("scroll", function () {
	if (document.documentElement.scrollTop !== 0) {
		navBar.classList.add("scrolled");
		scrollBtn.style.transform = "translateX(0)";
	} else {
		navBar.classList.remove("scrolled");
		scrollBtn.style.transform = "translateX(100px)";
	}
});

scrollBtn.addEventListener("click", function () {
	window.scrollTo(0, 0);
});

menuBtn.addEventListener("click", function () {
	list.style.right = "0";
});

closeBtn.addEventListener("click", function () {
    list.style.right = "-500px"
});



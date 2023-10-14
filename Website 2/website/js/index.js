const embeddedLinkBtn = document.getElementById("embedded-link");
const dataSciBtn = document.getElementById("datasci-link");
const blockchainBtn = document.getElementById("blockchain-link");

const verticalLines = document.querySelectorAll(".vertical-line");
const horizontalLines = document.querySelectorAll(".horizontal-line");
const headingParagraphs = document.querySelectorAll(
	".main-page-heading"
);

embeddedLinkBtn.addEventListener("click", () => {
	elementsDisplay("none");
	paragraphShow("first-heading");
});
dataSciBtn.addEventListener("click", () => {
	elementsDisplay("none");
	paragraphShow("second-heading");
});
blockchainBtn.addEventListener("click", () => {
	elementsDisplay("none");
	paragraphShow("third-heading");
});
const elementsDisplay = (input) => {
	verticalLines.forEach((el) => {
		el.style.display = input;
	});
	horizontalLines.forEach((el) => {
		el.style.display = input;
	});
	headingParagraphs.forEach((el) => {
		el.style.display = input;
	});
};
const paragraphShow = (paragraphInput) => {
	document.getElementById("menu-container").style.display = "none";
	document.getElementById("back-desc").style.display = "block";
	document.getElementById(paragraphInput).classList.add("show");
	document.getElementById(paragraphInput).style.display = "block";
	setTimeout(() => {
		document
			.getElementById(paragraphInput)
			.classList.add("desc-show");
	}, 1000);
};

document.getElementById("back-desc").addEventListener("click", () => {
	document.querySelector(".show").classList.remove("show");
	document.querySelector(".desc-show").classList.remove("desc-show");
	document.getElementById("menu-container").style.display = "block";
	document.getElementById("back-desc").style.display = "none";
	elementsDisplay("block");
});
const backButton = () => {};

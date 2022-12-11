const shareBtn = document.querySelector(".share-btn");
const shareContainer = document.querySelector(".share-container");

shareBtn.addEventListener("click", function () {
    shareContainer.classList.toggle("hidden");
});

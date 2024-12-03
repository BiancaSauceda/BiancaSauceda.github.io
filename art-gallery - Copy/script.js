document.addEventListener("DOMContentLoaded", () => {
  const artPieces = document.querySelectorAll(".art-piece");
  const modal = document.getElementById("artModal");
  const span = document.getElementsByClassName("close")[0];
  const artTitle = document.getElementById("artTitle");
  const artDescription = document.getElementById("artDescription");

  artPieces.forEach((piece) => {
    piece.addEventListener("click", function () {
      const artist = this.getAttribute("data-artist");
      const year = this.getAttribute("data-year");
      const description = this.getAttribute("data-description");
      artTitle.innerText = `${artist} (${year})`;
      artDescription.innerText = description;
      modal.style.display = "block";
    });
  });

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});

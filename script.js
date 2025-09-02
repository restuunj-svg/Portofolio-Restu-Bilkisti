document.addEventListener("DOMContentLoaded", function () {
  // load robot animation
  lottie.loadAnimation({
    container: document.getElementById("cartoon"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "assets/waving.json"
  });

  const seeBtn = document.getElementById("seeBtn");
  const backBtn = document.getElementById("backBtn");
  const slide1 = document.getElementById("slide1");
  const slide2 = document.getElementById("slide2");

  seeBtn.addEventListener("click", () => {
    slide1.classList.remove("active");
    slide2.classList.add("active", "zoom-in");
    slide2.classList.remove("zoom-out");
  });

  backBtn.addEventListener("click", () => {
    slide2.classList.remove("zoom-in");
    slide2.classList.add("zoom-out");
    setTimeout(() => {
      slide2.classList.remove("active");
      slide1.classList.add("active");
    }, 400);
  });
});

// Get all sections (skipping #block-adchallenge-content due to wrong hyperlink)
const sections = document.querySelectorAll("#challenge-home, #challenge-event, #challenge-about-me");
console.log(sections)

// Make first menu item active
document.querySelector(".menu li a[href*='#challenge-home']")
        .classList.add("active");


window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;

    const sectionTop =
      current.getBoundingClientRect().top + window.pageYOffset - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      //console.log(sectionId)
      document
        .querySelector(".menu li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".menu li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

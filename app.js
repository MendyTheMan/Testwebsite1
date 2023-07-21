// alert('hello world');

let prevScrollPos = window.scrollY;

// Function to toggle the hidden class based on scroll direction
function handleScroll() {
  const currentScrollPos = window.scrollY;
  if (prevScrollPos >= currentScrollPos) {
    document.querySelector("#navbar1").classList.remove("hidden");
    document.querySelector("#logo").classList.remove("hidden");
    document.querySelector("#logo img").classList.remove("hidden");
  } else {
    document.querySelector("#navbar1").classList.add("hidden");
    document.querySelector("#logo").classList.add("hidden");
    document.querySelector("#logo img").classList.add("hidden");
  }
 // prevScrollPos = currentScrollPos;
}

// Add a scroll event listener to trigger the function
window.addEventListener("scroll", handleScroll);

// Search form validation
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const dest = document.getElementById("destination").value.trim();
  const date = document.getElementById("date").value;
  const budget = document.getElementById("budget").value;

  if (!dest || !date || !budget) {
    alert("Please fill out all fields.");
    return;
  }
  if (budget <= 0) {
    alert("Please enter a valid budget.");
    return;
  }
  if (isNaN(budget) || budget <= 0) {
    alert("Please enter a valid numeric budget.");
    return;
  }
  const today = new Date().toISOString().split("T")[0];
  if (date < today) {
    alert("Please select a future date.");
    return;
  }

  alert(`Searching trips to ${dest} on ${date} with budget $${budget}`);
});

// Scroll to top
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkToggle");
const body = document.body;

// Check saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.innerHTML = '<i class="ri-sun-line"></i>';
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    toggleBtn.innerHTML = '<i class="ri-sun-line"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.innerHTML = '<i class="ri-moon-line"></i>';
    localStorage.setItem("theme", "light");
  }
});
//Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // Toggle icon between menu and close
  const icon = menuToggle.querySelector("i");
  if (navLinks.classList.contains("show")) {
    icon.classList.remove("ri-menu-line");
    icon.classList.add("ri-close-line");
  } else {
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-line");
  }
});

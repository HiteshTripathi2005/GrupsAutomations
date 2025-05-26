// JavaScript for sticky navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");

  // Add sticky class when scrolled down more than 150px
  if (window.scrollY > 150) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Handle mobile dropdown toggling
document.addEventListener("DOMContentLoaded", function () {
  // Only apply this on mobile/small screens
  const dropdownLink = document.querySelector(".dropdown-hover-container > a");
  const dropdownContainer = document.querySelector(".dropdown-hover-container");
  const mobileMenuButton = document.querySelector("#mobile-menu-button");
  const navbarDropdown = document.getElementById("navbar-dropdown");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  // Handle mobile menu button click
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", function () {
      // Toggle the navbar dropdown
      const isMenuHidden = navbarDropdown.classList.contains("hidden");

      if (isMenuHidden) {
        // If menu is hidden, show it and show X icon
        navbarDropdown.classList.remove("hidden");
        menuIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
        mobileMenuButton.setAttribute("aria-expanded", "true");
      } else {
        // If menu is visible, hide it and show hamburger icon
        navbarDropdown.classList.add("hidden");
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
        mobileMenuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (dropdownLink) {
    dropdownLink.addEventListener("click", function (e) {
      // Only prevent default and toggle menu on small screens
      if (window.innerWidth < 768) {
        e.preventDefault();
        dropdownContainer.classList.toggle("show");
      }
    });
  }
  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    // Close dropdown menu
    if (
      dropdownContainer &&
      !dropdownContainer.contains(e.target) &&
      window.innerWidth < 768
    ) {
      dropdownContainer.classList.remove("show");
    } // Close main mobile menu when clicking outside
    if (
      navbarDropdown &&
      !navbarDropdown.contains(e.target) &&
      !mobileMenuButton.contains(e.target) &&
      !navbarDropdown.classList.contains("hidden")
    ) {
      // Hide the navbar dropdown
      navbarDropdown.classList.add("hidden");
      // Always ensure proper icon state
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      mobileMenuButton.setAttribute("aria-expanded", "false");
    }
  }); // Handle window resize to show/hide mobile menu appropriately
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      // Ensure dropdown is properly reset on window resize
      if (dropdownContainer) {
        dropdownContainer.classList.remove("show");
      }

      // Reset mobile menu state when screen size changes to desktop
      if (menuIcon && closeIcon) {
        menuIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      }

      if (mobileMenuButton) {
        mobileMenuButton.setAttribute("aria-expanded", "false");
      }
    }
  });

  // Initial check to make sure icons match menu state on page load
  if (navbarDropdown && menuIcon && closeIcon) {
    if (navbarDropdown.classList.contains("hidden")) {
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    } else {
      menuIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    }
  }
});

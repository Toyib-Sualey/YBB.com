// Toggle Dropdown Menu
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

menuToggle.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Theme Switcher
const themeSwitch = document.getElementById('themeSwitch');

themeSwitch.addEventListener('change', () => {
    const isLight = themeSwitch.checked;
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('light-theme', isLight);
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Toggle Dropdown Menu with smooth animation
menuToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeSwitch.checked = true;
  }
});

const phrases = ["an Artist", "Inspirational", "Innovative"];
let part = 0;
let currentText = "";
let isDeleting = false;
let i = 0;
const speed = 100;
const pause = 1500;
const typingText = document.getElementById("typing-text");

function type() {
  const fullText = phrases[part];

  if (isDeleting) {
    currentText = fullText.substring(0, currentText.length - 1);
  } else {
    currentText = fullText.substring(0, currentText.length + 1);
  }

  typingText.textContent = currentText;

  if (!isDeleting && currentText === fullText) {
    isDeleting = true;
    setTimeout(type, pause);
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    part = (part + 1) % phrases.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, speed);
  }
}

document.addEventListener("DOMContentLoaded", type);


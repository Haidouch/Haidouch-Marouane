const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Check if the user has already accepted the cookies
if (!document.cookie.includes('cookies_accepted=true')) {
	document.getElementById('cookieConsent').style.display = 'block';
  }
  
  document.getElementById('acceptCookies').addEventListener('click', () => {
	// Set a cookie to remember the user's choice for 30 days
	document.cookie = "cookies_accepted=true; max-age=2592000; path=/";
	
	// Hide the cookie consent banner after acceptance
	document.getElementById('cookieConsent').style.display = 'none';
  });
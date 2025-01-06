const active = window.location.pathname;
const navLinks = document.querySelectorAll('div a');

navLinks.forEach(navLinks => {
  const navLinkPathname = new URL(navLinks.href).pathname;
  console.log(navLinks);

  if(active === navLinkPathname) {
    navLinks.classList.add('active');
  }
  console.log(active)
  console.log(navLinkPathname)

});

/*
for (let i = 0; i < navLinks.length; i++) {
  const newLinkPathname = new URL(navLinks[i])

  if(navLinks[i].href.includes(`${active}`)) {
    navLinks[i].classList.add('active');
  }
}
*/
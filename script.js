VANTA.WAVES({
  el: "#waves",
  mouseControls: true,
  touchControls: true,
  minHeight: 600.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xa293c,
  shininess: 87.00,
  waveSpeed: 0.75
})


//Tabs
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    target.classList.add('active')
  })
})

//Responsive Navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];

toggleButton.addEventListener('click', ()=> {
  navLinks.classList.toggle('active');
})


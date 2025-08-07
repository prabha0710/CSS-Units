const unitLinks = document.querySelectorAll('#unit-list li');
const sections = document.querySelectorAll('.unit-section');

let currentCSS = null;

unitLinks.forEach(link => {
  link.addEventListener('click', () => {
    unitLinks.forEach(item => item.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));
    link.classList.add('active');

    const unit = link.getAttribute('data-unit');
    const section = document.getElementById(unit);
    if (section) section.classList.add('active');


    if (currentCSS) currentCSS.remove();

  
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = `css/${unit}.css`;
    document.head.appendChild(cssLink);
    currentCSS = cssLink;
  });
});


unitLinks[0].click();

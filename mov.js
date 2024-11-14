// Add event listeners to the navigation menu items
document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('mouseover', () => {
      link.style.color = '#ccc';
    });
    link.addEventListener('mouseout', () => {
      link.style.color = '#fff';
    });
  });
  
  // Add animation to the hero section
  document.querySelector('.hero').addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const heroHeight = hero.offsetHeight;
    const scrollPosition = window.scrollY;
    const opacity = (scrollPosition / heroHeight) * 0.5;
    hero.style.opacity = opacity;
  });
  
  // Add animation to the features section
  document.querySelectorAll('.features li').forEach((feature) => {
    feature.addEventListener('mouseover', () => {
      feature.style.transform = 'scale(1.1)';
    });
    feature.addEventListener('mouseout', () => {
      feature.style.transform = 'scale(1)';
    });
  });
  
  // Add animation to the news section
  document.querySelectorAll('.news li').forEach((newsItem) => {
    newsItem.addEventListener('mouseover', () => {
      newsItem.style.transform = 'scale(1.1)';
    });
    newsItem.addEventListener('mouseout', () => {
      newsItem.style.transform = 'scale(1)';
    });
  });
  
  // Add animation to the testimonials section
  document.querySelectorAll('.testimonials li').forEach((testimonial) => {
    testimonial.addEventListener('mouseover', () => {
      testimonial.style.transform = 'scale(1.1)';
    });
    testimonial.addEventListener('mouseout', () => {
      testimonial.style.transform = 'scale(1)';
    });
  });
  
  // Add event listener to the button in the hero section
  document.querySelector('.hero button').addEventListener('click', () => {
    alert('Conoce más!');
  });




document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.item-project');
    const tabs = document.querySelectorAll('.tab-pane');
  
    buttons.forEach((button, index) => {
      button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        tabs.forEach(tab => tab.classList.remove('show', 'active'));
  
        button.classList.add('active');
        tabs[index].classList.add('show', 'active');
      });
    });
  });
  

// Back to top button
window.onscroll = function() {
  var backToTopButton = document.querySelector(".back-to-top");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = "block"; 
  } else {
    backToTopButton.style.display = "none"; 
  }
};

document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  scrollToTop(1000); 
});

function scrollToTop(duration) {
  const startPosition = window.pageYOffset;
  const intervalTime = 15; 
  const totalSteps = duration / intervalTime; 
  let currentStep = 0;

  const scrollInterval = setInterval(function() {
    const progress = currentStep / totalSteps; 
    const scrollPosition = startPosition * (1 - progress); 
    window.scrollTo(0, scrollPosition);

    currentStep++;

    if (currentStep >= totalSteps) {
      clearInterval(scrollInterval); 
    }
  }, intervalTime);
}


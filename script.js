function toggleVisibility(elements) {
    let visibleElementIndex = -1;
  
    // Find the currently visible element and its index
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('visible')) {
        visibleElementIndex = i;
        break;
      }
    }
  
    // Toggle visibility for the current and next elements
    const nextVisibleElementIndex = (visibleElementIndex + 1) % elements.length;
    elements[visibleElementIndex].classList.remove('visible');
    elements[visibleElementIndex].classList.add('hidden');
    elements[nextVisibleElementIndex].classList.remove('hidden');
    elements[nextVisibleElementIndex].classList.add('visible');
  
    // Show the corresponding banner-subimage and hide others
    const bannerSubimages = document.querySelectorAll('.banner-subimage');
    for (let i = 0; i < bannerSubimages.length; i++) {
      if (i === nextVisibleElementIndex) {
        bannerSubimages[i].style.display = 'block';
      } else {
        bannerSubimages[i].style.display = 'none';
      }
    }
  
    // Change background color
    const bannerImage = document.querySelector('.banner-image');
    bannerImage.classList.toggle('bg-color-1');
    bannerImage.classList.toggle('bg-color-2');
  }
  
  // Call the function for .banner-subcontent every 5 seconds
  setInterval(() => {
    const elementsSubcontent = document.querySelectorAll('.banner-subcontent .service-animation');
    toggleVisibility(elementsSubcontent);
  }, 5000);
  
  // Initial call to show the first .banner-subimage and set initial background color
  const bannerSubimages = document.querySelectorAll('.banner-subimage');
  if (bannerSubimages.length > 0) {
    bannerSubimages[0].style.display = 'block';
  }
  
  const bannerImage = document.querySelector('.banner-image');
  bannerImage.classList.add('bg-color-1');
  





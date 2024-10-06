function initHeader() {
    const burger = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('.header__mobile-menu');
    const closeMenuButton = document.querySelector('.header__menu-close');
  
    function openMobileMenu() {
      mobileMenu.classList.add('header__mobile-menu--active');
    }
  
    function closeMobileMenu() {
      mobileMenu.classList.remove('header__mobile-menu--active');
    }
  
    if (burger) {
      burger.addEventListener('click', openMobileMenu);
    }
  
    if (closeMenuButton) {
      closeMenuButton.addEventListener('click', closeMobileMenu);
    }
  
    document.addEventListener('click', function (event) {
      if (
        mobileMenu &&
        mobileMenu.classList.contains('header__mobile-menu--active') &&
        !mobileMenu.contains(event.target) &&
        !burger.contains(event.target)
      ) {
        closeMobileMenu();
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    initHeader();
  });
  
  document.body.addEventListener('htmx:afterSwap', function (event) {
    if (event.detail.requestConfig && event.detail.requestConfig.path.includes('global.header-nav.partial')) {
      initHeader();
    }
  });
  
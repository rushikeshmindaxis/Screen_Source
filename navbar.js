const navbarHTML = `
  <section id="navbar-section">
    <style>
      /* ============================================================
         NAVBAR - Clean Floating Pill Design System
         ============================================================ */

      *, *::before, *::after {
        box-sizing: border-box;
      }

      .navbar-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        transition: all 0.4s ease;
        box-sizing: border-box;
      }

      /* ---- Top Bar ---- */
      .top-bar {
        background: #00AEEF; /* Light Sky Blue */
        color: #000000;
        font-family: 'Poppins', sans-serif;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.5px;
        padding: 4px 0;
        border-bottom: none;
        transition: all 0.4s ease;
        overflow: hidden;
        height: 34px;
        display: flex;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
      }

      .navbar-wrapper.scrolled .top-bar {
        height: 0;
        padding: 0;
        margin: 0;
        opacity: 0;
      }

      .top-bar-container {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
      }

      .top-bar-contact {
        display: flex;
        align-items: center;
      }

      .top-bar-contact a {
        color: #000000;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .top-bar-contact a:hover {
        color: #ffffff;
      }

      .top-bar-contact .separator {
        margin: 0 10px;
        opacity: 0.5;
      }

      .top-bar-socials {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .top-bar-socials a {
        color: #000000;
        text-decoration: none;
        font-size: 14px;
        transition: transform 0.2s ease;
      }

      .top-bar-socials a:hover {
        transform: scale(1.15);
        color: #ffffff;
      }

      /* ---- Navbar Container & Floating Pill ---- */
      .navbar-container {
        width: 100%;
        max-width: 1280px;
        margin: 6px auto 0 auto;
        padding: 0 20px;
        box-sizing: border-box;
        transition: all 0.4s ease;
      }

      .navbar-wrapper.scrolled .navbar-container {
        margin-top: 4px;
      }

      .navbar {
        background: rgba(255, 255, 255, 0.97);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-radius: 50px;
        padding: 8px 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        box-shadow: 0 4px 28px rgba(0, 0, 0, 0.10), 0 1px 4px rgba(0,0,0,0.06);
        transition: all 0.4s ease;
        width: 100%;
        box-sizing: border-box;
      }

      .navbar-wrapper.scrolled .navbar {
        box-shadow: 0 8px 40px rgba(0,0,0,0.14);
        padding: 6px 24px;
      }

      /* ---- Logo ---- */
      .nav-logo {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        flex-shrink: 0;
      }

      .nav-logo-icon {
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .nav-logo-icon img {
        height: 100%;
        width: auto;
        object-fit: contain;
      }

      /* ---- Center Nav Links ---- */
      .nav-center {
        display: flex;
        align-items: center;
        gap: 4px;
        list-style: none;
        margin: 0;
        padding: 0;
        flex: 1;
        justify-content: center;
      }

      .nav-center li {
        position: relative;
      }

      .nav-center > li > a {
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
        font-size: 13.5px;
        font-weight: 600;
        color: #333333;
        padding: 5px 2px;
        margin: 0 10px;
        display: flex;
        align-items: center;
        gap: 4px;
        transition: all 0.25s ease;
        position: relative;
        white-space: nowrap;
      }

      /* Colored underlines for each link */
      .nav-center > li > a::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        width: 0;
        height: 2.5px;
        border-radius: 99px;
        transform: translateX(-50%);
        transition: width 0.3s ease;
      }
      
      .nav-center > li:nth-child(1) > a::after { background: #00b5e2; }
      .nav-center > li:nth-child(2) > a::after { background: #ed1607; }
      .nav-center > li:nth-child(3) > a::after { background: #9b59b6; }
      .nav-center > li:nth-child(4) > a::after { background: #EC008C; }
      .nav-center > li:nth-child(5) > a::after { background: #00b5e2; }
      .nav-center > li:nth-child(6) > a::after { background: #ed1607; }

      .nav-center > li > a:hover::after,
      .nav-center > li > a.nav-active::after,
      .nav-center > li > a.active::after,
      .nav-center > li.active > a::after {
        width: 100%;
      }

      .nav-center > li > a:hover,
      .nav-center > li > a.nav-active {
        color: #ed1607;
      }

      /* ---- Dropdown Arrow ---- */
      .dd-arrow {
        font-size: 9px;
        opacity: 0.6;
        transition: transform 0.25s ease;
      }
      .nav-center li:hover .dd-arrow {
        transform: rotate(180deg);
      }

      /* ---- Dropdown Menu ---- */
      .nav-center .dropdown-menu {
        display: none;
        position: absolute;
        top: calc(100% + 10px);
        left: 50%;
        transform: translateX(-50%);
        min-width: 230px;
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 16px 48px rgba(0,0,0,0.12);
        padding: 8px;
        z-index: 9999;
        border: 1px solid rgba(0,0,0,0.06);
        animation: navDropIn 0.22s ease;
        list-style: none;
        margin: 0;
      }

      .nav-center .dropdown-menu::before {
        content: '';
        position: absolute;
        top: -15px;
        left: 0;
        width: 100%;
        height: 15px;
        background: transparent;
      }

      @keyframes navDropIn {
        from { opacity: 0; transform: translateX(-50%) translateY(-6px) scale(0.97); }
        to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
      }

      .nav-center .dropdown-menu a {
        display: block;
        padding: 9px 14px;
        border-radius: 10px;
        color: #2d2d2d;
        font-size: 13px;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.2s ease;
      }

      .nav-center .dropdown-menu a:hover {
        background: linear-gradient(90deg, rgba(237,22,7,0.08), rgba(0,174,239,0.08));
        color: #ed1607;
        padding-left: 20px;
      }

      .nav-center li:hover > .dropdown-menu {
        display: block;
      }

      /* ---- Right Icons ---- */
      .nav-right {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
      }

      /* ---- Mobile Toggle ---- */
      .menu-toggle {
        display: none;
        font-size: 20px;
        color: #333;
        cursor: pointer;
        background: #f5f5f5;
        border: none;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
      }

      /* ---- Mobile Responsive ---- */
      .nav-links-mobile, .mob-close-btn {
        display: none;
      }

      @media (max-width: 960px) {
        .top-bar {
          display: none;
        }

        .navbar-container {
          padding: 0 12px;
          margin-top: 8px;
        }

        .navbar {
          border-radius: 16px;
          padding: 8px 14px;
        }

        .nav-center {
          display: none;
        }

        .menu-toggle {
          display: flex;
        }

        .nav-links-mobile {
          position: fixed;
          top: 0; left: -100%;
          width: 280px;
          height: 100vh;
          background: #0f0f1a;
          z-index: 9998;
          padding: 80px 0 20px;
          overflow-y: auto;
          transition: left 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          list-style: none;
          margin: 0;
          flex-direction: column;
          display: flex;
          gap: 0;
          box-shadow: 4px 0 40px rgba(0,0,0,0.35);
        }

        .nav-links-mobile.active {
          left: 0;
        }

        .nav-links-mobile li {
          width: 100%;
        }

        .nav-links-mobile > li > a {
          display: block;
          color: rgba(255,255,255,0.85);
          padding: 14px 24px;
          font-size: 14px;
          font-weight: 600;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          text-decoration: none;
          font-family: 'Poppins', sans-serif;
        }

        .nav-links-mobile > li > a:hover {
          color: #fff;
          background: rgba(237,22,7,0.2);
        }

        .nav-links-mobile > li > a.mob-header-link {
          color: #ed1607;
          font-weight: 700;
          pointer-events: none;
          background: rgba(0,0,0,0.2);
        }

        .nav-links-mobile > li > a.mob-sub-link {
          padding-left: 40px;
          font-weight: 400;
          font-size: 13px;
          color: rgba(255,255,255,0.7);
        }
        
        .nav-links-mobile > li > a.mob-sub-link:hover {
          color: #fff;
        }

        .mob-close-btn {
          position: absolute;
          top: 20px; right: 20px;
          font-size: 22px;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          background: rgba(255,255,255,0.1);
          border: none;
          width: 36px; height: 36px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }

        .mob-close-btn:hover { background: rgba(237,22,7,0.4); color: #fff; }

        .mob-overlay {
          display: none;
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          z-index: 9997;
        }

        .mob-overlay.active { display: block; }
      }
    </style>

    <!-- Navbar HTML -->
    <div class="navbar-wrapper" id="navbarWrapper">
      <!-- Top Bar -->
      <div class="top-bar">
        <div class="top-bar-container">
          <div class="top-bar-contact">
            <a href="mailto:designatscreensource@gmail.com"><i class="fas fa-envelope"></i> designatscreensource@gmail.com</a>
            <span class="separator">|</span>
            <a href="tel:+918080941627" style="display: flex; align-items: center; gap: 4px;"><img src="images/call_01.png" alt="Call" style="width: 16px; height: 16px; object-fit: contain;"> +91 8080941627</a>
          </div>
          <div class="top-bar-socials">
            <a href="https://www.instagram.com/screensource_india/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/ScreensourcePune/" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.indiamart.com/screensource-pune/profile.html" target="_blank" style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; overflow: hidden; background: white;"><img src="images/indiamart.png" alt="IndiaMart" style="width: 100%; height: 100%; object-fit: cover;"></a>
          </div>
        </div>
      </div>

      <div class="navbar-container">
        <nav class="navbar" id="navbar">
          <!-- Logo -->
          <a class="nav-logo" href="index.html">
            <div class="nav-logo-icon">
              <img src="images/LOGO_final.png" alt="Screensource Logo" />
            </div>
          </a>

          <!-- Center Nav Links (Desktop) -->
          <ul class="nav-center" id="navCenter">
            <li><a href="index.html">Home</a></li>
            <li><a href="About_US.html">About</a></li>

            <li>
              <a href="#" class="dropdown-toggle">Brands <span class="dd-arrow">▾</span></a>
              <ul class="dropdown-menu">
                <li><a href="MAC_DERMIDE.html">MacDermid Alpha Autotype</a></li>
                <li><a href="Orafol.html">Orafol Adhesive</a></li>
                <li><a href="3M.html">3M Tapes</a></li>
                <li><a href="Polyvantis.html">Polyvantis (Sabic)</a></li>
                <li><a href="Nittoku.html">Nittoku</a></li>
                <li><a href="Print_color.html">Print Color</a></li>
                <li><a href="Yessor.html">Yessor Tech</a></li>
                <li><a href="Sansui.html">Sansui</a></li>
                <li><a href="NittoL.html">Nitto Denko</a></li>
                <li><a href="Avery.html">Avery Dennison</a></li>
                <li><a href="technova.html">TechNova (NovaLife)</a></li>
              </ul>
            </li>

            <li>
              <a href="#" class="dropdown-toggle">Services <span class="dd-arrow">▾</span></a>
              <ul class="dropdown-menu">
                <li><a href="Stretching.html">Stretching Services</a></li>
                <li><a href="Exposing.html">Exposing Services</a></li>
              </ul>
            </li>
            
            <li>
              <a href="#" class="dropdown-toggle">Machines <span class="dd-arrow">▾</span></a>
              <ul class="dropdown-menu">
                <li><a href="MAchine_Stre.html">Stretching Machines</a></li>
                <li><a href="Machines_EXPO.html">Exposing Machines</a></li>
              </ul>
            </li>
            <li><a href="Contact.html">Contact Us</a></li>
          </ul>

          <!-- Right Icons -->
          <div class="nav-right">
            <button class="menu-toggle" id="menuToggle" aria-label="Menu">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </nav>
      </div>
    </div>

    <!-- Mobile Nav -->
    <div class="mob-overlay" id="mobOverlay"></div>
    <ul class="nav-links-mobile" id="navLinksMobile">
      <button class="mob-close-btn" id="mobCloseBtn"><i class="fas fa-times"></i></button>
      <li><a href="index.html">Home</a></li>
      <li><a href="About_US.html">About</a></li>
      
      <li><a href="#" class="mob-header-link">Brands</a></li>
      <li><a href="MAC_DERMIDE.html" class="mob-sub-link">MacDermid Alpha</a></li>
      <li><a href="Orafol.html" class="mob-sub-link">Orafol Adhesive</a></li>
      <li><a href="3M.html" class="mob-sub-link">3M Tapes</a></li>
      <li><a href="Polyvantis.html" class="mob-sub-link">Polyvantis (Sabic)</a></li>
      <li><a href="Nittoku.html" class="mob-sub-link">Nittoku</a></li>
      <li><a href="Print_color.html" class="mob-sub-link">Print Color</a></li>
      <li><a href="Yessor.html" class="mob-sub-link">Yessor Tech</a></li>
      <li><a href="Sansui.html" class="mob-sub-link">Sansui</a></li>
      <li><a href="NittoL.html" class="mob-sub-link">Nitto Denko</a></li>
      <li><a href="Avery.html" class="mob-sub-link">Avery Dennison</a></li>
      <li><a href="technova.html" class="mob-sub-link">TechNova (NovaLife)</a></li>

      <li><a href="#" class="mob-header-link">Services</a></li>
      <li><a href="Stretching.html" class="mob-sub-link">Stretching Services</a></li>
      <li><a href="Exposing.html" class="mob-sub-link">Exposing Services</a></li>

      <li><a href="#" class="mob-header-link">Machines</a></li>
      <li><a href="MAchine_Stre.html" class="mob-sub-link">Stretching Machines</a></li>
      <li><a href="Machines_EXPO.html" class="mob-sub-link">Exposing Machines</a></li>

      <li><a href="Contact.html">Contact Us</a></li>
    </ul>

    <script>
      const navWrapper = document.getElementById('navbarWrapper');
      const menuToggle = document.getElementById('menuToggle');
      const mobMenu = document.getElementById('navLinksMobile');
      const mobOverlay = document.getElementById('mobOverlay');
      const mobClose = document.getElementById('mobCloseBtn');

      window.addEventListener('scroll', () => {
        if(navWrapper) navWrapper.classList.toggle('scrolled', window.scrollY > 30);
      });

      function openMobMenu() {
        if(mobMenu) mobMenu.classList.add('active');
        if(mobOverlay) mobOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }

      function closeMobMenu() {
        if(mobMenu) mobMenu.classList.remove('active');
        if(mobOverlay) mobOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }

      if (menuToggle) menuToggle.addEventListener('click', openMobMenu);
      if (mobClose) mobClose.addEventListener('click', closeMobMenu);
      if (mobOverlay) mobOverlay.addEventListener('click', closeMobMenu);
    <\/script>
  </section>
`;

document.write(navbarHTML);

// Auto-set the active link based on the current URL
setTimeout(() => {
  const currentUrl = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const links = document.querySelectorAll('.nav-center > li > a');

  const brandPages = ['mac_dermide.html', 'orafol.html', '3m.html', 'polyvantis.html', 'nittoku.html', 'print_color.html', 'yessor.html', 'sansui.html', 'nittol.html', 'avery.html', 'technova.html'];
  const servicePages = ['stretching.html', 'exposing.html'];
  const machinePages = ['machine_stre.html', 'machines_expo.html'];

  links.forEach(a => {
    a.classList.remove('nav-active', 'active');
    const href = (a.getAttribute('href') || '').toLowerCase();
    
    if (href === currentUrl || (currentUrl === '' && href === 'index.html')) {
      a.classList.add('nav-active');
    } else if (href === '#' && a.textContent.includes('Brands') && brandPages.includes(currentUrl)) {
      a.classList.add('nav-active');
    } else if (href === '#' && a.textContent.includes('Services') && servicePages.includes(currentUrl)) {
      a.classList.add('nav-active');
    } else if (href === '#' && a.textContent.includes('Machines') && machinePages.includes(currentUrl)) {
      a.classList.add('nav-active');
    }
  });
}, 50);

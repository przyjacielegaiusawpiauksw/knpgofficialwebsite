class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="header-container">
            <a href="index.html" class="brand-wrapper">
                <img src="logo na insta.jpg" alt="Logo KNPG" class="nav-logo">
                <div class="brand">
                    <h1>Przyjaciele <span>Gaiusa</span></h1>
                    <p>Wydział Prawa i Administracji UKSW</p>
                </div>
            </a>
            <nav>
                <ul>
                    <li><a href="index.html" class="nav-link">Strona Główna</a></li>
                    <li><a href="aktualnosci.html" class="nav-link">Aktualności</a></li>
                    <li><a href="wladze.html" class="nav-link">Władze Koła</a></li>
                    <li><a href="statut.html" class="nav-link">Statut</a></li>
                    <li><a href="do-pobrania.html" class="nav-link">Do pobrania</a></li>
                    
                    <!-- Ikony Social Media -->
                    <li style="margin-left: 12px; display: inline-flex; align-items: center;">
                        <a href="https://www.facebook.com/profile.php?id=100092199844313" target="_blank" rel="noopener noreferrer" title="Facebook" style="display: flex; align-items: center; color: #dbead7; transition: color 0.2s;" onmouseover="this.style.color='#e5a91e'" onmouseout="this.style.color='#dbead7'">
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            </svg>
                        </a>
                    </li>
                    <li style="display: inline-flex; align-items: center;">
                        <a href="https://www.instagram.com/knpguksw/" target="_blank" rel="noopener noreferrer" title="Instagram" style="display: flex; align-items: center; color: #dbead7; transition: color 0.2s;" onmouseover="this.style.color='#e5a91e'" onmouseout="this.style.color='#dbead7'">
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                    </li>
                    <li style="display: inline-flex; align-items: center;">
                        <a href="https://www.linkedin.com/in/ko%C5%82o-naukowe-przyjaciele-gaiusa-96b2a63a0/" target="_blank" rel="noopener noreferrer" title="LinkedIn" style="display: flex; align-items: center; color: #dbead7; transition: color 0.2s;" onmouseover="this.style.color='#e5a91e'" onmouseout="this.style.color='#dbead7'">
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
    `;

    // Automatyczne podświetlanie aktywnej zakładki (klasa .active)
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = this.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href');
      if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>&copy; Studencko-Doktoranckie Koło Naukowe Przyjaciele Gaiusa | Uniwersytet Kardynała Stefana Wyszyńskiego w Warszawie</p>
        <p>Wydział Prawa i Administracji | ul. Wóycickiego 1/3, bud. 17, pok. 1732, 01-963 Warszawa</p>
        <p>Kontakt: knpg.uksw@gmail.com</p>
      </footer>
    `;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
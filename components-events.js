class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="header-container">
            <a href="../index.html" class="brand-wrapper">
                <img src="../logo na insta.jpg" alt="Logo KNPG" class="nav-logo">
                <div class="brand">
                    <h1>Przyjaciele <span>Gaiusa</span></h1>
                    <p>Wydział Prawa i Administracji UKSW</p>
                </div>
            </a>
            <nav>
                <ul>
                    <li><a href="../index.html" class="nav-link">Strona Główna</a></li>
                    <li><a href="../aktualnosci.html" class="nav-link">Aktualności</a></li>
                    <li><a href="../wladze.html" class="nav-link">Władze Koła</a></li>
                    <li><a href="../statut.html" class="nav-link">Statut</a></li>
                    <li><a href="../do-pobrania.html" class="nav-link">Do pobrania</a></li>
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
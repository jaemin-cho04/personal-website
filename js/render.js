// ============================================================
//  RENDER.JS
//  Reads the global data constants from data/*.js and builds
//  all section content into the DOM. Each function targets one
//  section. To debug a section, call its function in the console.
// ============================================================


// ── Hero ────────────────────────────────────────────────────
function renderHero() {
  document.querySelector('#about .container').innerHTML = `
    <div class="hero-content">
      <div>
        <div class="hero-badge"><span>🤖</span> ${PROFILE.badge}</div>
        <h1>
          ${PROFILE.headline[0]}
          <span class="gradient-text">${PROFILE.headline[1]}</span>
        </h1>
        <p class="hero-description">${PROFILE.bio}</p>
        <div class="cta-buttons">
          <a href="#projects" class="btn btn-primary">Explore Projects</a>
          <a href="#contact"  class="btn btn-secondary">Let's Talk</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="floating-cards">
          ${PROFILE.heroCards.map(c => `
            <div class="float-card">
              <div class="float-card-icon">${c.icon}</div>
              <h3>${c.title}</h3>
              <p>${c.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}


// ── Skills ──────────────────────────────────────────────────
function renderSkills() {
  document.querySelector('#skills .skills-grid').innerHTML = SKILLS.map(s => `
    <div class="skill-category">
      <h3><span class="skill-icon">${s.icon}</span> ${s.category}</h3>
      <div class="skill-list">
        ${s.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}


// ── Experience ──────────────────────────────────────────────
function renderExperience() {
  document.querySelector('#experience .timeline').innerHTML = EXPERIENCE.map(e => `
    <div class="timeline-item">
      <div class="experience-title">${e.title}</div>
      <div class="experience-company">${e.company}</div>
      <div class="experience-date">${e.date}</div>
      <p class="experience-description">${e.description}</p>
      <ul class="experience-highlights">
        ${e.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
      <div class="tech-badges">
        ${e.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}


// ── Projects ────────────────────────────────────────────────
function renderProjects() {
  document.querySelector('#projects .projects-grid').innerHTML = PROJECTS.map(p => `
    <div class="project-card">
      <div class="project-header">
        <div>
          <div class="project-category">${p.category}</div>
          <h3 class="project-title">${p.title}</h3>
        </div>
        <div class="project-date">${p.date}</div>
      </div>
      <p class="project-description">${p.description}</p>
      <div class="tech-badges">
        ${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
      </div>
      ${p.links.length ? `<div class="project-links">${p.links.map(l => `<a href="${l.url}" class="project-link">${l.label}</a>`).join('')}</div>` : ''}
    </div>
  `).join('');
}


// ── Contact ─────────────────────────────────────────────────
function renderContact() {
  const { email, linkedin, github } = PROFILE.contact;
  document.querySelector('#contact .contact-info').innerHTML = `
    <div class="contact-item">
      <div class="contact-icon">📧</div>
      <div class="contact-details">
        <h3>Email</h3>
        <a href="mailto:${email}">${email}</a>
      </div>
    </div>
    <div class="contact-item">
      <div class="contact-icon">💼</div>
      <div class="contact-details">
        <h3>LinkedIn</h3>
        <a href="${linkedin.url}" target="_blank" rel="noopener">${linkedin.label}</a>
      </div>
    </div>
    <div class="contact-item">
      <div class="contact-icon">🐙</div>
      <div class="contact-details">
        <h3>GitHub</h3>
        <a href="${github.url}" target="_blank" rel="noopener">${github.label}</a>
      </div>
    </div>
  `;
}


// ── Footer ──────────────────────────────────────────────────
function renderFooter() {
  const { email, linkedin, github } = PROFILE.contact;
  const { year, tagline } = PROFILE.footer;

  document.querySelector('.social-links').innerHTML = `
    <a href="${github.url}"   target="_blank" rel="noopener" aria-label="GitHub">🐙</a>
    <a href="${linkedin.url}" target="_blank" rel="noopener" aria-label="LinkedIn">💼</a>
    <a href="mailto:${email}" aria-label="Email">📧</a>
  `;
  document.querySelector('footer p').textContent =
    `© ${year} Jaemin Cho · ${tagline}`;
}


// ── Init ────────────────────────────────────────────────────
// Scripts load at end of <body>, so the DOM is already built.
renderHero();
renderSkills();
renderExperience();
renderProjects();
renderContact();
renderFooter();

// ─────────────────────────────────────────────────────────────
//  main.js  —  Application logic
//  Renders all content from data.js, handles i18n and modal.
// ─────────────────────────────────────────────────────────────

(function () {
  "use strict";

  // ── State ──────────────────────────────────────────────────
  let currentLang = "en";

  // ── DOM helpers ────────────────────────────────────────────
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html) e.innerHTML = html;
    return e;
  }

  // ── i18n ───────────────────────────────────────────────────
  function t(key) {
    return PORTFOLIO.i18n[currentLang][key] || PORTFOLIO.i18n.en[key] || key;
  }

  function applyTranslations() {
    $$("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      node.textContent = t(key);
    });

    // Update CV download link for current language
    var cvBtn = $("#cv-download-btn");
    if (cvBtn && PORTFOLIO.cv) {
      cvBtn.href = PORTFOLIO.cv[currentLang] || PORTFOLIO.cv.en;
    }
  }

  // ── Render: status terminal card ───────────────────────────
  function renderStatusTerminal() {
    const wrap = $("#status-terminal");
    if (!wrap) return;
    wrap.innerHTML = PORTFOLIO.statusLines.map((line) => `
      <div class="term-line">
        <span class="term-key">${line.label}</span>
        <span class="term-sep">:</span>
        <span class="term-val${line.highlight ? " term-highlight" : ""}">${line.value}</span>
      </div>
    `).join("");

    // Animate lines in
    wrap.querySelectorAll(".term-line").forEach((l, i) => {
      l.style.animationDelay = `${0.6 + i * 0.1}s`;
    });
  }

  // ── Render: experience timeline ────────────────────────────
  function renderExperience() {
    const wrap = $("#timeline-exp");
    if (!wrap) return;
    wrap.innerHTML = PORTFOLIO.experience.map((job) => `
      <div class="timeline-item">
        <div class="tl-dot"></div>
        <div class="tl-content">
          <div class="tl-head">
            <span class="tl-role">${job.role[currentLang] || job.role.en}</span>
            <span class="tl-period">${job.period[currentLang] || job.period.en}</span>
          </div>
          <span class="tl-org">${job.org}</span>
          <ul class="tl-bullets">
            ${(job.bullets[currentLang] || job.bullets.en).map((b) => `<li>${b}</li>`).join("")}
          </ul>
          <div class="tl-tags">
            ${job.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </div>
      </div>
    `).join("");
  }

  // ── Render: education timeline ─────────────────────────────
  function renderEducation() {
    const wrap = $("#timeline-edu");
    if (!wrap) return;
    wrap.innerHTML = PORTFOLIO.education.map((edu) => `
      <div class="timeline-item">
        <div class="tl-dot"></div>
        <div class="tl-content">
          <div class="tl-head">
            <span class="tl-role">${edu.degree[currentLang] || edu.degree.en}</span>
            <span class="tl-period">${edu.period[currentLang] || edu.period.en}</span>
          </div>
          <span class="tl-org">${edu.org}</span>
        </div>
      </div>
    `).join("");
  }

  // ── Render: certifications grid ────────────────────────────
  function renderCerts() {
    const wrap = $("#certs-grid");
    if (!wrap) return;
    wrap.innerHTML = PORTFOLIO.certifications.map((cert) => `
      <a class="cert-card" href="${cert.url}" target="_blank" rel="noopener"
         style="--cert-color:${cert.color}">
        <i class="${cert.icon} cert-icon"></i>
        <div class="cert-info">
          <span class="cert-name">${cert.name}</span>
          <span class="cert-issuer">${cert.issuer} · ${cert.date[currentLang] || cert.date.en}</span>
          <div class="cert-skills">
            ${cert.skills.map((s) => `<span class="tag">${s}</span>`).join("")}
          </div>
        </div>
      </a>
    `).join("");
  }

  // ── Render: skills grid ────────────────────────────────────
  function renderSkills() {
    const wrap = $("#skills-grid");
    if (!wrap) return;
    wrap.innerHTML = PORTFOLIO.skills.map((group) => `
      <div class="skill-group">
        <span class="skill-group-label">${group.group[currentLang] || group.group.en}</span>
        <div class="skill-items">
          ${group.items.map((item) => `
            <div class="skill-item">
              <i class="${item.icon}"></i>
              <span>${item.name}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");
  }

  // ── Render: projects grid ──────────────────────────────────
  function renderProjects() {
    const wrap = $("#projects-grid");
    if (!wrap) return;
    wrap.innerHTML = PORTFOLIO.projects.map((proj) => `
      <article class="project-card" data-id="${proj.id}">
        <header class="proj-header">
          <div class="proj-title-row">
            <h3 class="proj-name">${proj.name}</h3>
            <div class="proj-header-actions">
              <a class="proj-icon-link" href="${proj.repo}" target="_blank" rel="noopener"
                 title="${t("btn.repo")}">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </header>
        <p class="proj-desc">${proj.short[currentLang] || proj.short.en}</p>
        <div class="proj-tags">
          ${proj.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <footer class="proj-footer">
          <a class="btn btn-sm btn-outline" href="${proj.repo}" target="_blank" rel="noopener">
            <i class="fa-brands fa-github"></i> ${t("btn.repo")}
          </a>
          <button class="btn btn-sm btn-accent notes-btn" data-id="${proj.id}">
            <i class="fa-solid fa-notes-medical"></i> ${t("btn.notes")}
          </button>
        </footer>
      </article>
    `).join("");

    // Attach note button listeners
    $$(".notes-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openModal(btn.dataset.id);
      });
    });
  }

  // ── Modal ──────────────────────────────────────────────────
  function markdownToHtml(md) {
    return md
      .replace(/^## (.+)$/gm, "<h3>$1</h3>")
      .replace(/^### (.+)$/gm, "<h4>$1</h4>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/^- (.+)$/gm, "<li>$1</li>")
      .replace(/(<li>.*<\/li>)/gs, (m) => `<ul>${m}</ul>`)
      .replace(/\n{2,}/g, "</p><p>")
      .replace(/^(?!<[hup])/gm, "")
      .trim();
  }

  function openModal(projectId) {
    const proj = PORTFOLIO.projects.find((p) => p.id === projectId);
    if (!proj) return;

    const notes = proj.notes[currentLang] || proj.notes.en;
    const overlay = $("#modal-overlay");
    const titleEl = $("#modal-title");
    const bodyEl  = $("#modal-body");

    titleEl.textContent = proj.name + " — Dev Notes";
    bodyEl.innerHTML = `<div class="notes-content">${markdownToHtml(notes)}</div>`;

    overlay.classList.remove("hidden");
    overlay.classList.add("visible");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const overlay = $("#modal-overlay");
    overlay.classList.remove("visible");
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
  }

  // ── Sticky nav scroll behaviour ────────────────────────────
  function initNavScroll() {
    const navbar = $("#navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }, { passive: true });
  }

  // ── Active nav highlight ───────────────────────────────────
  function initActiveNav() {
    const sections = $$("section[id]");
    const navLinks = $$(".nav-links a");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((a) => a.classList.remove("active"));
          const active = $(`a[href="#${entry.target.id}"]`);
          if (active) active.classList.add("active");
        }
      });
    }, { threshold: 0.35 });

    sections.forEach((s) => observer.observe(s));
  }

  // ── Language toggle ────────────────────────────────────────
  function initLangToggle() {
    const btn   = $("#lang-toggle");
    const label = $("#lang-label");

    btn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "es" : "en";
      label.textContent = currentLang === "en" ? "ES" : "EN";
      renderAll();
      applyTranslations();
      setTimeout(initScrollReveal, 50);
    });
  }

  // ── Email copy to clipboard ────────────────────────────────
  function showToast(msg) {
    const toast = $("#toast");
    toast.textContent = msg;
    toast.classList.add("visible");
    setTimeout(() => toast.classList.remove("visible"), 2600);
  }

  function initEmailCopy() {
    const btn = $("#email-copy-btn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const email = PORTFOLIO.contact.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast(email + " — copied!");
      }).catch(() => {
        window.location.href = "mailto:" + email;
      });
    });
  }


  function renderAll() {
    renderStatusTerminal();
    renderExperience();
    renderEducation();
    renderCerts();
    renderSkills();
    renderProjects();
  }

  // ── Scroll reveal ──────────────────────────────────────────
  function initScrollReveal() {
    const targets = $$(".project-card, .cert-card, .timeline-item, .skill-group");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    targets.forEach((el) => observer.observe(el));
  }

  // ── Bootstrap ──────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    applyTranslations();
    initNavScroll();
    initActiveNav();
    initLangToggle();
    initEmailCopy();

    // Modal close
    $("#modal-close").addEventListener("click", closeModal);
    $("#modal-overlay").addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });

    setTimeout(initScrollReveal, 100);
  });

})();

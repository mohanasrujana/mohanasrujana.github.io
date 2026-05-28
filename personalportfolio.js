const PORTFOLIO = {
  name: "Satya Srujana Pilli",
  headline:
    "MS Computer Science @ UMass Amherst · ex-Amazon SDE · AI & full-stack builder",
  tagline:
    "I build systems that scale in production—and agents that reason when static checks aren't enough.",
  about: [
    "I started out shipping real products at Amazon—payment flows across six EU and UK markets, item-level financing, and experiments through WebLabs. That's where I learned what \"done\" means when millions of transactions depend on it.",
    "These days I'm at UMass Amherst (MS CS, CGPA 3.96), splitting time between research and builds: gaze-based preference learning at CIIR, adaptive LLM monitoring at Cisco, and forensic AI tools at RescueLab. I like problems where the metric isn't just accuracy—it's whether the system actually helps someone.",
    "Before grad school, I earned my B.E. in Computer Science from BITS Pilani Hyderabad. I'm always up for collaborations at the intersection of ML, systems, and products that ship.",
  ],
  education: [
    { school: "UMass Amherst", degree: "MS Computer Science", detail: "CGPA 3.96 · 2024–present" },
    { school: "BITS Pilani Hyderabad", degree: "B.E. Computer Science", detail: "CGPA 8.33 · 2018–2022" },
  ],
  skills: {
    languages: [
      "Java",
      "C++",
      "Python",
      "C",
      "Ruby",
      "Scala",
      "JavaScript",
      "HTML",
      "CSS",
      "Shell",
      "MATLAB",
    ],
    frameworks: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Keras",
      "OpenCV",
      "Spring Boot",
      "REST APIs",
      "MERN",
      "React",
    ],
    infra: [
      "Git",
      "AWS",
      "Docker",
      "Kubernetes",
      "Helm",
      "WebLabs",
      "Postgres",
      "MongoDB",
      "DynamoDB",
    ],
    ai: [
      "OpenAI",
      "Gemini",
      "Claude APIs",
      "Mistral",
      "RAG",
      "MCP",
      "ONNX",
      "Cursor",
      "GitHub Copilot",
    ],
    soft: [
      "Cross-functional collaboration",
      "Technical writing",
      "Stakeholder communication",
      "Agile / Scrum",
    ],
  },
  experience: [
    {
      title: "Graduate Research Extern",
      org: "Cisco · San Francisco",
      dates: "Jan 2026 – May 2026",
      bullets: [
        "Built an adaptive LLM monitoring agent with ReAct-style reasoning to detect sabotage, task drift, and hidden objectives across 50+ agent trajectories.",
        "Improved threat-detection recall by 30% over static classifiers through multi-step inspection strategies.",
        "Benchmarked static vs. adaptive monitors via ablation studies on recall and precision trade-offs.",
      ],
    },
    {
      title: "Graduate Research Assistant",
      org: "CIIR Lab · Amherst",
      dates: "Apr 2025 – Sep 2025",
      bullets: [
        "Embedded gaze-based preference signals into training, cutting multi-session data mismatches by 40% across 200+ sessions.",
        "Redesigned evaluation tables for domain-specific gaze inputs, boosting reliability by 30%.",
        "Hardened preference storage and logging, improving reward-model accuracy by 25%.",
      ],
    },
    {
      title: "SDE-1",
      org: "Amazon · Bangalore",
      dates: "Jul 2022 – Mar 2024",
      bullets: [
        "Launched credit-based installment plans across 6 EU/UK markets, boosting customer UX by 20%.",
        "Engineered item-level payment controls for ILF, increasing engagement by 28%.",
        "Cut payment transaction latency by 35%; drove A/B experiments via WebLabs with 99.9% deploy success.",
      ],
    },
    {
      title: "SDE Intern",
      org: "Amazon · Bangalore",
      dates: "Jan 2022 – Jun 2022",
      bullets: [
        "Built Vapor, an internal planning tool used by 50+ teams, reducing planning overhead by 20%.",
        "Implemented service profilers and consistency checks across distributed systems.",
      ],
    },
  ],
  projects: [
    {
      title: "LLM-Powered Crime Element Analyzer",
      context: "UMass RescueLab · Prof. Brian Levine",
      emoji: "🔍",
      visualClass: "crime",
      story:
        "A forensic pipeline using Mistral 7B and Gemma 3 to extract crime elements from chat data via few-shot prompting—cutting manual review time by 60%. Flask-ML API with CLI for batch processing across CSV, PDF, and XLSX.",
      tech: ["Python", "Flask", "Ollama", "Mistral-7B", "Gemma 3"],
      repo: null,
    },
    {
      title: "Briefly",
      context: "Summarization platform",
      emoji: "⚡",
      visualClass: "briefly",
      story:
        "Launched a summarization platform achieving ~95% accuracy via MistralAI, processing 100+ files daily for 50+ users—with 30% faster backend processing.",
      tech: ["React", "Flask", "MistralAI", "MongoDB", "Axios"],
      repo: null,
    },
  ],
  chapters: [
    { id: "intro", num: "00", label: "Intro" },
    { id: "story", num: "01", label: "Story" },
    { id: "skills", num: "02", label: "Skills" },
    { id: "experience", num: "03", label: "Work" },
    { id: "projects", num: "04", label: "Projects" },
    { id: "connect", num: "05", label: "Connect" },
  ],
  nav: [
    { href: "#story", label: "Story" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#connect", label: "Connect" },
  ],
  contact: {
    email: "ssrujanapilli@gmail.com",
    linkedin: "https://www.linkedin.com/in/satya-srujana-pilli-79a69b1ab/",
    medium: {
      url: "https://medium.com/@srujana3501",
      label: "Stories & essays on Medium",
      blurb: "A few technical articles—and plenty of everyday life.",
    },
    github: "https://github.com/mohanasrujana",
  },
  easterEgg: {
    messages: [
      "Plot twist: you're still scrolling. Respect. 🎬",
      "Achievement unlocked: Triple-clicked a name. 🏆",
      "Fun fact: I also write essays when I'm not debugging agents. ✍️",
    ],
  },
};

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function init() {
  renderHero();
  renderAbout();
  renderMediumCallout();
  renderSkills();
  renderExperience();
  renderProjects();
  renderContact();
  renderNav();
  renderChapterRail();
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("footer-name").textContent = PORTFOLIO.name;
  setupReveal();
  setupChapterSpy();
  setupMobileNav();
  setupEasterEgg();
}

function renderHero() {
  document.getElementById("hero-headline").textContent = PORTFOLIO.headline;
  const taglineEl = document.getElementById("hero-tagline");
  taglineEl.innerHTML = `<em>${PORTFOLIO.tagline.split("—")[0].trim()}</em>${
    PORTFOLIO.tagline.includes("—")
      ? " — " + PORTFOLIO.tagline.split("—").slice(1).join("—").trim()
      : ""
  }`;
}

function renderAbout() {
  const container = document.getElementById("about-content");
  const paragraphs = PORTFOLIO.about
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("");
  const edu = PORTFOLIO.education
    .map(
      (e) =>
        `<span class="education-tag"><strong>${escapeHtml(e.school)}</strong> · ${escapeHtml(e.degree)} · ${escapeHtml(e.detail)}</span>`
    )
    .join("");
  container.innerHTML = `${paragraphs}<div class="education-tags">${edu}</div>`;
}

function renderMediumCallout() {
  const { medium } = PORTFOLIO.contact;
  document.getElementById("medium-callout").innerHTML = `
    <p class="medium-callout__label">Off-duty</p>
    <p>${escapeHtml(medium.blurb)}</p>
    <a href="${medium.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(medium.label)} →</a>
  `;
}

function renderSkills() {
  const groups = [
    { key: "languages", title: "Languages", class: "languages" },
    { key: "frameworks", title: "Frameworks & ML", class: "frameworks" },
    { key: "infra", title: "Infra & Data", class: "infra" },
    { key: "ai", title: "AI & Tools", class: "ai" },
    { key: "soft", title: "Soft skills", class: "soft" },
  ];
  const container = document.getElementById("skills-content");
  container.innerHTML = groups
    .map((g) => {
      const pills = PORTFOLIO.skills[g.key]
        .map((s) => `<span class="skill-pill">${escapeHtml(s)}</span>`)
        .join("");
      return `
        <div class="skills-group skills-group--${g.class} reveal">
          <h3 class="skills-group__title">${escapeHtml(g.title)}</h3>
          <div class="skill-pills">${pills}</div>
        </div>`;
    })
    .join("");
}

function renderExperience() {
  const list = document.getElementById("experience-list");
  list.innerHTML = PORTFOLIO.experience
    .map(
      (job, i) => `
      <li class="timeline-item reveal reveal-delay-${Math.min(i + 1, 3)}">
        <div class="timeline-item__header">
          <h3 class="timeline-item__title">${escapeHtml(job.title)}</h3>
          <span class="timeline-item__org">${escapeHtml(job.org)}</span>
          <span class="timeline-item__dates">${escapeHtml(job.dates)}</span>
        </div>
        <ul class="timeline-item__bullets">
          ${job.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
        </ul>
      </li>`
    )
    .join("");
}

function renderProjects() {
  const list = document.getElementById("projects-list");
  list.innerHTML = PORTFOLIO.projects
    .map(
      (p, i) => `
      <article class="project-card reveal reveal-delay-${Math.min(i + 1, 2)}">
        <div class="project-card__visual project-card__visual--${p.visualClass}">
          <span class="project-card__emoji" aria-hidden="true">${p.emoji}</span>
        </div>
        <div class="project-card__body">
          <p class="project-card__context">${escapeHtml(p.context)}</p>
          <h3 class="project-card__title">${escapeHtml(p.title)}</h3>
          <p class="project-card__story">${escapeHtml(p.story)}</p>
          <div class="project-card__tech">
            ${p.tech.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
          </div>
          ${
            p.repo
              ? `<a class="project-card__link" href="${p.repo}" target="_blank" rel="noopener noreferrer">View source →</a>`
              : ""
          }
        </div>
      </article>`
    )
    .join("");
}

function renderContact() {
  const { email, linkedin, medium, github } = PORTFOLIO.contact;
  document.getElementById("connect-lede").textContent =
    "Open to research collaborations, internships, and interesting builds. Pick your channel:";
  document.getElementById("contact-links").innerHTML = `
    <a class="contact-card" href="mailto:${email}">
      <span class="contact-card__icon" aria-hidden="true">✉️</span>
      <span class="contact-card__label">Email</span>
      <span class="contact-card__value">${escapeHtml(email)}</span>
    </a>
    <a class="contact-card" href="${linkedin}" target="_blank" rel="noopener noreferrer">
      <span class="contact-card__icon" aria-hidden="true">💼</span>
      <span class="contact-card__label">LinkedIn</span>
      <span class="contact-card__value">Connect professionally</span>
      <span class="contact-card__hint">Career & networking</span>
    </a>
    <a class="contact-card contact-card--medium" href="${medium.url}" target="_blank" rel="noopener noreferrer">
      <span class="contact-card__icon" aria-hidden="true">✍️</span>
      <span class="contact-card__label">Medium</span>
      <span class="contact-card__value">${escapeHtml(medium.label)}</span>
      <span class="contact-card__hint">${escapeHtml(medium.blurb)}</span>
    </a>
    <a class="contact-card" href="${github}" target="_blank" rel="noopener noreferrer">
      <span class="contact-card__icon" aria-hidden="true">⌨️</span>
      <span class="contact-card__label">GitHub</span>
      <span class="contact-card__value">@mohanasrujana</span>
    </a>
  `;
}

function renderNav() {
  document.getElementById("site-nav-list").innerHTML = PORTFOLIO.nav
    .map(
      (n) =>
        `<li><a href="${n.href}" data-section="${n.href.slice(1)}">${escapeHtml(n.label)}</a></li>`
    )
    .join("");
}

function renderChapterRail() {
  document.getElementById("chapter-rail").innerHTML = PORTFOLIO.chapters
    .map(
      (c) =>
        `<li><a class="chapter-rail__link" href="#${c.id}" data-section="${c.id}" aria-label="Chapter ${c.num}: ${c.label}" title="${c.label}"></a></li>`
    )
    .join("");
}

function setupReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (prefersReducedMotion) {
    reveals.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => observer.observe(el));
}

function setupChapterSpy() {
  const sections = document.querySelectorAll(".chapter[data-chapter]");
  const railLinks = document.querySelectorAll(".chapter-rail__link");
  const navLinks = document.querySelectorAll(".site-nav__list a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          railLinks.forEach((link) => {
            link.classList.toggle(
              "is-active",
              link.dataset.section === id
            );
          });
          navLinks.forEach((link) => {
            link.classList.toggle(
              "is-active",
              link.dataset.section === id
            );
          });
        }
      });
    },
    { threshold: 0.35, rootMargin: "-20% 0px -55% 0px" }
  );
  sections.forEach((s) => observer.observe(s));
}

function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
}

function setupEasterEgg() {
  const nameEl = document.getElementById("hero-name");
  let clicks = 0;
  let timeout;

  nameEl.addEventListener("click", () => {
    clicks += 1;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      clicks = 0;
    }, 600);
    if (clicks >= 3) {
      clicks = 0;
      triggerEasterEgg();
    }
  });
}

function triggerEasterEgg() {
  const nameEl = document.getElementById("hero-name");
  const toast = document.getElementById("easter-toast");
  const messages = PORTFOLIO.easterEgg.messages;
  const msg = messages[Math.floor(Math.random() * messages.length)];

  nameEl.classList.add("is-wiggle");
  setTimeout(() => nameEl.classList.remove("is-wiggle"), 500);

  toast.textContent = msg;
  toast.hidden = false;
  toast.classList.add("is-shown");

  if (!prefersReducedMotion) {
    spawnConfetti();
  }

  setTimeout(() => {
    toast.classList.remove("is-shown");
    setTimeout(() => {
      toast.hidden = true;
    }, 400);
  }, 3200);
}

function spawnConfetti() {
  const colors = ["#ff6b4a", "#a78bfa", "#fbbf24", "#60a5fa", "#34d399"];
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = 1.5 + Math.random() * 2 + "s";
    piece.style.animationDelay = Math.random() * 0.5 + "s";
    document.body.appendChild(piece);
    piece.addEventListener("animationend", () => piece.remove());
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

document.addEventListener("DOMContentLoaded", init);

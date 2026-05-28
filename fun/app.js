const DOSSIER = {
  name: "Satya Srujana Pilli",
  headline:
    "MS Computer Science @ UMass · ex-Amazon SDE · part-time detective energy",
  tagline:
    "By day: shipping code & catching rogue LLM agents. By night: coffee, movies, and rewatching the Nine-Nine for the 99th time.",
  about: [
    "Subject began career at Amazon Bangalore—payment systems across six EU/UK markets, item-level financing, WebLabs experiments. Learned that \"production-ready\" is not a vibe; it's a requirement.",
    "Currently at UMass Amherst (MS CS, CGPA 3.96). Active files: gaze-based preferences at CIIR Lab, adaptive LLM monitoring at Cisco, forensic AI at RescueLab. Motivated by systems that actually help people—not just leaderboard numbers.",
    "Prior education: B.E. Computer Science, BITS Pilani Hyderabad. Open to collaborations where ML, systems, and shipped products intersect.",
  ],
  education: [
    { school: "UMass Amherst", degree: "MS Computer Science", detail: "CGPA 3.96" },
    { school: "BITS Pilani", degree: "B.E. Computer Science", detail: "CGPA 8.33" },
  ],
  vibes: {
    coffee: {
      order: "Oat latte, extra shot",
      note: "Caffeine level monitored in real time. Click the mug to brew another.",
    },
    b99: {
      note: "Rewatch comfort show. Assignment: stay smort, stay noice.",
      tags: ["Jake & Amy", "Holt's deadpan", "Terry loves yogurt"],
    },
    movies: {
      note: "Heist films, sci-fi, anything with a third-act twist.",
      picks: ["Inception", "Knives Out", "Interstellar", "The Martian", "B99 (yes, it's cinema)"],
    },
  },
  skills: {
    languages: ["Java", "Python", "C++", "JavaScript", "Scala", "Ruby", "C", "SQL"],
    frameworks: ["PyTorch", "TensorFlow", "React", "Spring Boot", "Flask", "MERN"],
    infra: ["AWS", "Docker", "Kubernetes", "Postgres", "MongoDB", "Git"],
    ai: ["OpenAI", "Claude", "Mistral", "RAG", "MCP", "GitHub Copilot"],
  },
  experience: [
    {
      title: "Graduate Research Extern",
      org: "Cisco · San Francisco",
      dates: "Jan 2026 – May 2026",
      bullets: [
        "Adaptive LLM monitoring agent (ReAct-style) across 50+ trajectories.",
        "+30% threat-detection recall vs static classifiers.",
        "Ablation benchmarks on recall/precision trade-offs.",
      ],
    },
    {
      title: "Graduate Research Assistant",
      org: "CIIR Lab · Amherst",
      dates: "Apr 2025 – Sep 2025",
      bullets: [
        "Gaze-based preference signals; −40% multi-session mismatches.",
        "Evaluation redesign; +30% reliability, faster experiment cycles.",
        "Reward-model accuracy +25%; eliminated silent data-loss bugs.",
      ],
    },
    {
      title: "SDE-1",
      org: "Amazon · Bangalore",
      dates: "Jul 2022 – Mar 2024",
      bullets: [
        "Installment plans across 6 EU/UK markets (+20% UX).",
        "Item-level financing (+28% engagement); −35% payment latency.",
        "WebLabs A/B across 12 launches; 99.9% deploy success.",
      ],
    },
    {
      title: "SDE Intern",
      org: "Amazon · Bangalore",
      dates: "Jan 2022 – Jun 2022",
      bullets: [
        "Vapor planning tool for 50+ teams (−20% overhead).",
        "Service profilers & consistency checks on distributed systems.",
      ],
    },
  ],
  projects: [
    {
      id: "CASE-001",
      title: "LLM Crime Element Analyzer",
      context: "RescueLab · Prof. Brian Levine",
      emoji: "🔎",
      story:
        "Forensic pipeline with Mistral 7B & Gemma 3—few-shot extraction from chat data. −60% manual review. Flask API + CLI; 10k+ messages across 3 investigations.",
      tech: ["Python", "Flask", "Mistral", "Gemma"],
    },
    {
      id: "CASE-002",
      title: "Briefly",
      context: "Summarization HQ",
      emoji: "🎬",
      story:
        "~95% accuracy via MistralAI; 100+ files/day, 50+ users. Backend tuned for −30% processing time.",
      tech: ["React", "Flask", "MongoDB", "MistralAI"],
    },
  ],
  contact: {
    email: "ssrujanapilli@gmail.com",
    linkedin: "https://www.linkedin.com/in/satya-srujana-pilli-79a69b1ab/",
    github: "https://github.com/mohanasrujana",
    medium: {
      url: "https://medium.com/@srujana3501",
      label: "Off-duty essays on Medium",
      blurb: "Tech articles & everyday life stories.",
    },
  },
  nav: [
    { href: "#vibes", label: "Intel" },
    { href: "#dossier", label: "Dossier" },
    { href: "#arsenal", label: "Arsenal" },
    { href: "#field-reports", label: "Reports" },
    { href: "#open-cases", label: "Cases" },
    { href: "#tip-line", label: "Tip line" },
  ],
  quotes: [
    "Cool cool cool cool cool — ready to ship. ✓",
    "Noice. Smort. Toit. (Also: solid test coverage.)",
    "The case is closed — but the PR is still open.",
    "Title of your autobiography: *Code & Caffeine*.",
    "Bingpot! You found the portfolio.",
    "I need a lieutenant to review my PRs. Any volunteers?",
    "Subject drinks coffee. Film at eleven.",
  ],
  easterEggs: [
    "🎉 NOICE! Detective level: Senior Smort.",
    "☕ Brewed fresh. Caffeine: MAXIMUM.",
    "📺 Popcorn protocol activated.",
    "🚔 Nine-Nine approved. Toit.",
  ],
};

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

let coffeeLevel = 87;
let quoteIndex = 0;
let nameClicks = 0;
let nameClickTimer;

function init() {
  renderNav();
  renderHero();
  renderVibes();
  renderDossier();
  renderMediumNote();
  renderArsenal();
  renderFieldReports();
  renderOpenCases();
  renderTipLine();
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("footer-name").textContent = DOSSIER.name;
  setupQuoteTicker();
  setupCoffeeWidget();
  setupNameEasterEgg();
  setupNoiceKeyboard();
  setupNavSpy();
}

function renderNav() {
  document.getElementById("precinct-nav").innerHTML = DOSSIER.nav
    .map(
      (n) =>
        `<a href="${n.href}" data-section="${n.href.slice(1)}">${escapeHtml(n.label)}</a>`
    )
    .join("");
}

function renderHero() {
  document.getElementById("hero-headline").textContent = DOSSIER.headline;
  document.getElementById("hero-tagline").textContent = DOSSIER.tagline;
  document.getElementById("quote-ticker").textContent = DOSSIER.quotes[0];
}

function renderVibes() {
  const { coffee, b99, movies } = DOSSIER.vibes;
  document.getElementById("vibes-grid").innerHTML = `
    <article class="vibe-card vibe-card--coffee pop-in">
      <div class="vibe-card__icon" aria-hidden="true">☕</div>
      <h3 class="vibe-card__title">Coffee protocol</h3>
      <p class="vibe-card__text"><strong>Order:</strong> ${escapeHtml(coffee.order)}</p>
      <p class="vibe-card__text">${escapeHtml(coffee.note)}</p>
    </article>
    <article class="vibe-card vibe-card--b99 pop-in" style="animation-delay:0.1s">
      <div class="vibe-card__icon" aria-hidden="true">🚔</div>
      <h3 class="vibe-card__title">99th Precinct</h3>
      <p class="vibe-card__text">${escapeHtml(b99.note)}</p>
      <div class="vibe-card__tags">
        ${b99.tags.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
      </div>
    </article>
    <article class="vibe-card vibe-card--movies pop-in" style="animation-delay:0.2s">
      <div class="vibe-card__icon" aria-hidden="true">🎬</div>
      <h3 class="vibe-card__title">Movie night</h3>
      <p class="vibe-card__text">${escapeHtml(movies.note)}</p>
      <div class="film-strip" aria-label="Favorite picks">
        ${movies.picks.map((p) => `<span class="film-strip__frame">${escapeHtml(p)}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderDossier() {
  const paragraphs = DOSSIER.about
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("");
  const edu = DOSSIER.education
    .map(
      (e) =>
        `<span class="edu-stamp">${escapeHtml(e.school)} · ${escapeHtml(e.degree)} (${escapeHtml(e.detail)})</span>`
    )
    .join("");
  document.getElementById("dossier-body").innerHTML =
    paragraphs + `<div class="edu-stamps">${edu}</div>`;
}

function renderMediumNote() {
  const m = DOSSIER.contact.medium;
  document.getElementById("medium-note").innerHTML = `
    <strong>📎 Off-duty writing (not LinkedIn)</strong>
    <p>${escapeHtml(m.blurb)}</p>
    <a href="${m.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(m.label)} →</a>
  `;
}

function renderArsenal() {
  const groups = [
    { key: "languages", title: "Languages & scripts" },
    { key: "frameworks", title: "Frameworks & ML" },
    { key: "infra", title: "Infra & data" },
    { key: "ai", title: "AI toolkit" },
  ];
  document.getElementById("arsenal-body").innerHTML = groups
    .map(
      (g) => `
      <div class="arsenal-group">
        <h3 class="arsenal-group__title">${escapeHtml(g.title)}</h3>
        <div class="evidence-tags">
          ${DOSSIER.skills[g.key].map((s) => `<span class="evidence-tag">${escapeHtml(s)}</span>`).join("")}
        </div>
      </div>`
    )
    .join("");
}

function renderFieldReports() {
  document.getElementById("field-reports-list").innerHTML = DOSSIER.experience
    .map(
      (job) => `
      <li class="report-card pop-in">
        <h3 class="report-card__title">${escapeHtml(job.title)}</h3>
        <p class="report-card__org">${escapeHtml(job.org)}</p>
        <p class="report-card__dates">${escapeHtml(job.dates)}</p>
        <ul>
          ${job.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
        </ul>
      </li>`
    )
    .join("");
}

function renderOpenCases() {
  document.getElementById("open-cases-list").innerHTML = DOSSIER.projects
    .map(
      (p) => `
      <article class="case-file pop-in">
        <span class="case-file__pin" aria-hidden="true"></span>
        <div class="case-file__header">
          <span class="case-file__emoji" aria-hidden="true">${p.emoji}</span>
          <span class="case-file__id">${escapeHtml(p.id)}</span>
        </div>
        <p class="case-file__context" style="font-size:0.8rem;color:var(--muted);margin-bottom:0.35rem">${escapeHtml(p.context)}</p>
        <h3 class="case-file__title">${escapeHtml(p.title)}</h3>
        <p class="case-file__story">${escapeHtml(p.story)}</p>
        <div class="case-file__tech">
          ${p.tech.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
        </div>
      </article>`
    )
    .join("");
}

function renderTipLine() {
  const { email, linkedin, github, medium } = DOSSIER.contact;
  document.getElementById("tip-lede").textContent =
    "Got a lead? Collaboration? Just want to debate heist-movie endings? Drop a line:";
  document.getElementById("tip-cards").innerHTML = `
    <a class="tip-card" href="mailto:${email}">
      <span class="tip-card__emoji" aria-hidden="true">✉️</span>
      <span class="tip-card__label">Email</span>
      <span class="tip-card__value">${escapeHtml(email)}</span>
    </a>
    <a class="tip-card" href="${linkedin}" target="_blank" rel="noopener noreferrer">
      <span class="tip-card__emoji" aria-hidden="true">💼</span>
      <span class="tip-card__label">LinkedIn</span>
      <span class="tip-card__value">Professional contact</span>
    </a>
    <a class="tip-card tip-card--medium" href="${medium.url}" target="_blank" rel="noopener noreferrer">
      <span class="tip-card__emoji" aria-hidden="true">✍️</span>
      <span class="tip-card__label">Medium</span>
      <span class="tip-card__value">${escapeHtml(medium.label)}</span>
    </a>
    <a class="tip-card" href="${github}" target="_blank" rel="noopener noreferrer">
      <span class="tip-card__emoji" aria-hidden="true">⌨️</span>
      <span class="tip-card__label">GitHub</span>
      <span class="tip-card__value">@mohanasrujana</span>
    </a>
  `;
}

function setupQuoteTicker() {
  const el = document.getElementById("quote-ticker");
  setInterval(() => {
    quoteIndex = (quoteIndex + 1) % DOSSIER.quotes.length;
    el.style.opacity = "0";
    setTimeout(() => {
      el.textContent = DOSSIER.quotes[quoteIndex];
      el.style.opacity = "1";
    }, 300);
  }, 5000);
  el.style.transition = "opacity 0.3s";
}

function setupCoffeeWidget() {
  const btn = document.getElementById("coffee-btn");
  const liquid = document.getElementById("coffee-liquid");
  const pct = document.getElementById("coffee-pct");

  function updateCoffee() {
    liquid.style.height = coffeeLevel + "%";
    pct.textContent = coffeeLevel + "%";
    btn.classList.toggle("is-empty", coffeeLevel < 15);
  }

  updateCoffee();

  btn.addEventListener("click", () => {
    btn.classList.add("is-brewing");
    setTimeout(() => btn.classList.remove("is-brewing"), 400);

    if (coffeeLevel < 100) {
      coffeeLevel = Math.min(100, coffeeLevel + 15);
    } else {
      coffeeLevel = 100;
      showToast("☕ Already at maximum brew. Holt would approve.");
      updateCoffee();
      return;
    }

    updateCoffee();
    if (coffeeLevel >= 100) {
      showToast("☕ Caffeine levels: TOIT.");
    }
  });
}

function setupNameEasterEgg() {
  const nameEl = document.getElementById("hero-name");
  nameEl.addEventListener("click", () => {
    nameClicks += 1;
    clearTimeout(nameClickTimer);
    nameClickTimer = setTimeout(() => {
      nameClicks = 0;
    }, 700);
    if (nameClicks >= 3) {
      nameClicks = 0;
      nameEl.classList.add("is-noice");
      setTimeout(() => nameEl.classList.remove("is-noice"), 500);
      const msg =
        DOSSIER.easterEggs[Math.floor(Math.random() * DOSSIER.easterEggs.length)];
      showToast(msg);
      if (!prefersReducedMotion) {
        spawnCoffeeBeans();
      }
    }
  });
}

function setupNoiceKeyboard() {
  let buffer = "";
  document.addEventListener("keydown", (e) => {
    if (e.key.length !== 1) return;
    buffer = (buffer + e.key.toLowerCase()).slice(-5);
    if (buffer === "noice") {
      buffer = "";
      showToast("🎺 NOICE. Smort visitor detected.");
      document.getElementById("hero-name").classList.add("is-noice");
      setTimeout(
        () => document.getElementById("hero-name").classList.remove("is-noice"),
        500
      );
    }
  });
}

function setupNavSpy() {
  const sections = document.querySelectorAll(".dossier-panel[id]");
  const links = document.querySelectorAll(".precinct-nav a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach((link) => {
            link.classList.toggle("is-active", link.dataset.section === id);
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: "-15% 0px -50% 0px" }
  );

  sections.forEach((s) => observer.observe(s));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.hidden = false;
  toast.classList.add("is-shown");
  setTimeout(() => {
    toast.classList.remove("is-shown");
    setTimeout(() => {
      toast.hidden = true;
    }, 350);
  }, 2800);
}

function spawnCoffeeBeans() {
  const emojis = ["☕", "🎬", "🚔", "✨", "📎"];
  for (let i = 0; i < 20; i++) {
    const el = document.createElement("span");
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.cssText = `
      position:fixed;
      left:${Math.random() * 100}vw;
      top:-20px;
      font-size:${1 + Math.random()}rem;
      z-index:300;
      pointer-events:none;
      animation: bean-fall ${1.5 + Math.random()}s linear forwards;
    `;
    document.body.appendChild(el);
    el.addEventListener("animationend", () => el.remove());
  }
  if (!document.getElementById("bean-style")) {
    const style = document.createElement("style");
    style.id = "bean-style";
    style.textContent = `@keyframes bean-fall{to{transform:translateY(100vh) rotate(360deg);opacity:0;}}`;
    document.head.appendChild(style);
  }
}

function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

document.addEventListener("DOMContentLoaded", init);

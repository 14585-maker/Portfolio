@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700;800&family=Sarabun:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

/* ==========================================================================
   TOKENS
   ========================================================================== */
:root {
  --void: #05060f;
  --deep-space: #0b0d2b;
  --nebula-indigo: #1b1548;
  --nebula-purple: #7b3fe4;
  --nebula-pink: #e85dc0;
  --star-cyan: #5eead4;
  --star-gold: #f2c879;
  --ink: #eef0ff;
  --ink-soft: #a7a3c9;
  --ink-faint: #6d6a94;
  --line: rgba(167, 163, 201, 0.16);
  --line-bright: rgba(94, 234, 212, 0.35);
  --card-bg: rgba(18, 17, 46, 0.55);
  --card-bg-solid: #12112e;
  --radius: 18px;
  --radius-sm: 10px;
  --shadow-glow: 0 0 40px rgba(123, 63, 228, 0.25);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  background: var(--void);
  color: var(--ink);
  font-family: 'Sarabun', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  position: relative;
  overflow-x: hidden;
}

/* Nebula ambient glow blobs, sit behind everything */
body::before,
body::after {
  content: '';
  position: fixed;
  z-index: -2;
  width: 60vw;
  height: 60vw;
  max-width: 700px;
  max-height: 700px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.35;
  pointer-events: none;
  animation: drift 26s ease-in-out infinite alternate;
}

body::before {
  top: -10%;
  left: -12%;
  background: radial-gradient(circle, var(--nebula-purple), transparent 70%);
}

body::after {
  bottom: -15%;
  right: -10%;
  background: radial-gradient(circle, var(--nebula-pink), transparent 70%);
  animation-delay: -13s;
}

@keyframes drift {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(4vw, 5vh) scale(1.12); }
}

#starfield {
  position: fixed;
  inset: 0;
  z-index: -1;
  display: block;
  pointer-events: none;
}

h1, h2, h3, .display {
  font-family: 'Prompt', sans-serif;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
  letter-spacing: 0.2px;
}

a { color: inherit; text-decoration: none; }

::selection { background: var(--nebula-purple); color: #fff; }

/* ==========================================================================
   TOP NAV
   ========================================================================== */
.topnav {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 6vw;
  background: rgba(5, 6, 15, 0.65);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}

.topnav::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: -1px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--star-cyan), var(--nebula-pink), transparent);
  opacity: 0.6;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Prompt', sans-serif;
  font-weight: 600;
  font-size: 1.02rem;
  color: #fff;
}

.brand-badge {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, var(--star-gold), var(--nebula-purple) 75%);
  color: var(--void);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.78rem;
  letter-spacing: 0.5px;
  box-shadow: 0 0 18px rgba(242, 200, 121, 0.55);
}

.navlinks {
  display: flex;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navlinks a {
  position: relative;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.92rem;
  color: var(--ink-soft);
  transition: color 0.2s, background 0.2s;
  white-space: nowrap;
}

.navlinks a:hover { color: var(--ink); background: rgba(255,255,255,0.05); }

.navlinks a[aria-current="page"] {
  color: var(--void);
  background: linear-gradient(120deg, var(--star-cyan), var(--nebula-pink));
  font-weight: 600;
  box-shadow: 0 0 16px rgba(94, 234, 212, 0.35);
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 720px) {
  .nav-toggle { display: block; }
  .navlinks {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(11, 13, 43, 0.97);
    backdrop-filter: blur(14px);
    padding: 10px 6vw 18px;
    display: none;
    gap: 4px;
    border-bottom: 1px solid var(--line);
  }
  .navlinks.open { display: flex; }
  .navlinks a { padding: 12px 14px; border-radius: 8px; }
}

/* ==========================================================================
   PAGE SHELL
   ========================================================================== */
main {
  max-width: 960px;
  margin: 0 auto;
  padding: 56px 6vw 90px;
  position: relative;
}

.page-header {
  margin-bottom: 44px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--line);
  position: relative;
}

.eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.74rem;
  letter-spacing: 3px;
  color: var(--star-cyan);
  text-transform: uppercase;
  margin-bottom: 10px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.eyebrow::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--star-cyan);
  box-shadow: 0 0 8px var(--star-cyan);
}

.page-header h1 {
  font-size: 2.1rem;
  background: linear-gradient(120deg, #fff, var(--ink-soft) 120%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* ==========================================================================
   HERO (index) — mission-badge layout
   ========================================================================== */
.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: center;
  padding: 60px 0 56px;
}

@media (max-width: 780px) {
  .hero { grid-template-columns: 1fr; padding-top: 36px; }
}

.hero .kicker {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  letter-spacing: 3px;
  color: var(--star-gold);
  text-transform: uppercase;
  display: block;
  margin-bottom: 16px;
}

.hero h1 {
  font-size: clamp(2.1rem, 5vw, 3.1rem);
  line-height: 1.22;
}

.hero .accent {
  background: linear-gradient(120deg, var(--star-cyan), var(--nebula-pink));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero p.lede {
  color: var(--ink-soft);
  font-size: 1.06rem;
  margin-top: 20px;
  max-width: 48ch;
}

.hero-cta {
  margin-top: 32px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.btn {
  font-family: 'Prompt', sans-serif;
  font-size: 0.92rem;
  font-weight: 500;
  padding: 13px 26px;
  border-radius: 999px;
  border: 1px solid var(--line-bright);
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s, color 0.2s;
  display: inline-block;
}

.btn-solid {
  background: linear-gradient(120deg, var(--nebula-purple), var(--nebula-pink));
  color: #fff;
  border-color: transparent;
}
.btn-solid:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(232, 93, 192, 0.35); }

.btn-ghost { color: var(--ink); }
.btn-ghost:hover {
  background: rgba(94, 234, 212, 0.08);
  border-color: var(--star-cyan);
  transform: translateY(-3px);
}

/* ---- Mission badge (ID card) ---- */
.id-card {
  background: linear-gradient(165deg, rgba(27, 21, 72, 0.9), rgba(11, 13, 43, 0.9));
  border-radius: var(--radius);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-glow);
  overflow: hidden;
  position: relative;
  transform: rotate(-1.5deg);
  transition: transform 0.35s ease;
}
.id-card:hover { transform: rotate(0deg); }

.id-card-top {
  padding: 16px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dashed var(--line);
}

.id-card-top .school {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 2px;
  color: var(--ink-soft);
  text-transform: uppercase;
}

.gold-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--star-gold);
  box-shadow: 0 0 10px var(--star-gold);
  animation: pulse-dot 2.4s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.55; transform: scale(0.75); }
}

.id-card-body {
  display: flex;
  gap: 20px;
  padding: 26px 22px;
  align-items: center;
}

/* orbiting ring device around the id photo */
.id-photo {
  position: relative;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.id-photo .ring {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  border: 1px solid var(--line-bright);
  border-top-color: var(--star-cyan);
  animation: spin 9s linear infinite;
}

.id-photo .ring2 {
  position: absolute;
  inset: -18px;
  border-radius: 50%;
  border: 1px dashed rgba(232, 93, 192, 0.35);
  animation: spin-rev 16s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }
@keyframes spin-rev { to { transform: rotate(-360deg); } }

.id-photo .core {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: radial-gradient(circle at 35% 30%, #2a2464, var(--void) 75%);
  border: 2px solid var(--star-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  color: var(--ink-faint);
  font-size: 0.68rem;
  text-align: center;
}

.id-photo .core img { width: 100%; height: 100%; object-fit: cover; }

.id-info .name { font-family: 'Prompt', sans-serif; font-weight: 700; font-size: 1.18rem; color: #fff; }
.id-info .role { color: var(--ink-soft); font-size: 0.9rem; margin-top: 5px; }

.id-card-strip {
  height: 8px;
  background: repeating-linear-gradient(45deg, var(--star-gold), var(--star-gold) 10px, transparent 10px, transparent 20px);
  opacity: 0.7;
}

/* ==========================================================================
   NAV LINK CARDS (index quick links)
   ========================================================================== */
.grid-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 44px;
}

.link-card {
  background: var(--card-bg);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
}

.link-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(180px circle at var(--mx, 50%) var(--my, 0%), rgba(94, 234, 212, 0.14), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}

.link-card:hover::before { opacity: 1; }

.link-card:hover {
  transform: translateY(-6px);
  border-color: var(--line-bright);
  box-shadow: 0 18px 36px rgba(11, 13, 43, 0.55);
}

.link-card .num {
  font-family: 'JetBrains Mono', monospace;
  color: var(--star-gold);
  font-weight: 500;
  font-size: 0.82rem;
}

.link-card h3 { margin-top: 10px; font-size: 1.12rem; }
.link-card p { color: var(--ink-soft); font-size: 0.9rem; margin: 8px 0 0; }

/* ==========================================================================
   GENERIC CARD
   ========================================================================== */
.card {
  background: var(--card-bg);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 30px 32px;
  margin-bottom: 22px;
  backdrop-filter: blur(6px);
}

/* ==========================================================================
   PROFILE (personal.html)
   ========================================================================== */
.profile-block {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.profile-photo-wrap {
  position: relative;
  width: 176px;
  height: 216px;
  flex-shrink: 0;
}

.profile-photo-wrap .orbit-ring {
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  border: 1px solid var(--line-bright);
  opacity: 0.6;
}

.profile-photo-wrap .orbit-ring::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--star-cyan);
  box-shadow: 0 0 10px var(--star-cyan);
  transform-origin: 4px 122px;
  animation: spin 7s linear infinite;
}

.profile-photo {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-sm);
  border: 2px solid var(--star-gold);
  object-fit: cover;
  background: linear-gradient(160deg, var(--nebula-indigo), var(--void));
  display: block;
}

dl.info-list {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 14px 24px;
  margin: 0;
  min-width: 220px;
}
dl.info-list dt {
  font-family: 'JetBrains Mono', monospace;
  color: var(--ink-faint);
  font-size: 0.76rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-top: 2px;
}
dl.info-list dd {
  margin: 0;
  font-weight: 500;
  color: var(--ink);
}

/* ==========================================================================
   TIMELINE — flight path (education.html)
   ========================================================================== */
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 13px;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background: linear-gradient(180deg, var(--star-cyan), var(--nebula-purple) 50%, var(--nebula-pink));
  opacity: 0.5;
}

.timeline li {
  position: relative;
  padding: 2px 0 34px 42px;
}

.timeline li .node {
  position: absolute;
  left: 0;
  top: 4px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, var(--star-gold), var(--nebula-purple) 80%);
  border: 2px solid var(--void);
  box-shadow: 0 0 0 1px var(--line-bright), 0 0 16px rgba(123, 63, 228, 0.45);
}

.timeline .year {
  font-family: 'JetBrains Mono', monospace;
  color: var(--star-cyan);
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 1px;
  display: block;
}

.timeline h3 { margin-top: 6px; font-size: 1.12rem; }
.timeline p { color: var(--ink-soft); margin: 6px 0 0; font-size: 0.95rem; }

/* ==========================================================================
   WORKS / ACTIVITIES GRID
   ========================================================================== */
.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 22px;
}

.work-card {
  transition: transform 0.25s, box-shadow 0.25s;
}
.work-card:hover { transform: translateY(-6px); box-shadow: 0 18px 36px rgba(11,13,43,0.55); }

.work-card .thumb {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-sm);
  background:
    radial-gradient(circle at 25% 20%, rgba(94,234,212,0.18), transparent 55%),
    radial-gradient(circle at 75% 75%, rgba(232,93,192,0.18), transparent 55%),
    var(--deep-space);
  border: 1px dashed var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ink-faint);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  overflow: hidden;
  margin-bottom: 16px;
}
.work-card .thumb img { width: 100%; height: 100%; object-fit: cover; }
.work-card h3 { font-size: 1.05rem; }
.work-card p { color: var(--ink-soft); font-size: 0.9rem; margin: 6px 0 0; }
.work-card .tag {
  display: inline-block;
  margin-top: 12px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.5px;
  color: var(--star-cyan);
  background: rgba(94, 234, 212, 0.08);
  border: 1px solid rgba(94, 234, 212, 0.25);
  padding: 4px 12px;
  border-radius: 999px;
}

/* ==========================================================================
   CONTACT
   ========================================================================== */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.contact-icon {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, var(--nebula-purple), var(--void) 80%);
  border: 1px solid var(--line-bright);
  color: var(--star-cyan);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.contact-item .label {
  font-size: 0.8rem;
  color: var(--ink-faint);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.contact-item .value { font-weight: 500; color: var(--ink); margin-top: 2px; }

.note {
  background: rgba(242, 200, 121, 0.06);
  border: 1px dashed var(--star-gold);
  border-radius: var(--radius-sm);
  padding: 16px 20px;
  font-size: 0.9rem;
  color: var(--ink-soft);
}

/* ==========================================================================
   SCROLL REVEAL (driven by script.js)
   ========================================================================== */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* ==========================================================================
   FOOTER
   ========================================================================== */
footer {
  text-align: center;
  padding: 34px 6vw 60px;
  color: var(--ink-faint);
  font-size: 0.82rem;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.5px;
}

/* ==========================================================================
   ACCESSIBILITY
   ========================================================================== */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
  html { scroll-behavior: auto; }
  .reveal { opacity: 1; transform: none; }
}

a:focus-visible, button:focus-visible {
  outline: 2px solid var(--star-cyan);
  outline-offset: 3px;
  border-radius: 4px;
}

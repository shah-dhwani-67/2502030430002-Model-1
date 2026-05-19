// ═══════════════════════════════════════
//   NexaGrow Digital – Global Scripts
// ═══════════════════════════════════════

/* ── Mobile hamburger ── */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

/* ── Scroll reveal ── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── Portfolio filter ── */
function filterPort(btn, cat) {
  document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.port-card').forEach(card => {
    const c = card.getAttribute('data-cat') || '';
    card.style.display = (cat === 'all' || c.includes(cat)) ? 'block' : 'none';
  });
}

/* ── Form submit ── */
function submitForm(prefix) {
  const name  = document.getElementById(prefix + '-name')?.value.trim();
  const phone = document.getElementById(prefix + '-phone')?.value.trim();
  if (!name || !phone) { alert('Please fill in your name and phone number.'); return; }
  document.getElementById(prefix + '-success').style.display = 'block';
  ['name','biz','phone','email','msg'].forEach(f => {
    const el = document.getElementById(prefix + '-' + f);
    if (el) el.value = '';
  });
  ['service','budget'].forEach(f => {
    const el = document.getElementById(prefix + '-' + f);
    if (el) el.selectedIndex = 0;
  });
  setTimeout(() => { document.getElementById(prefix + '-success').style.display = 'none'; }, 5000);
}

/* ── Set active nav link ── */
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  setActiveNav();
});

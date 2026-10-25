function languageFromLocation() {
  const requested = new URLSearchParams(location.search).get('lang');
  if (requested === 'it' || requested === 'en') return requested;
  try { return localStorage.getItem('infn-epics-site-language') === 'it' ? 'it' : 'en'; } catch (_) { return 'en'; }
}
function setLanguage(lang) {
  const chosen = lang === 'it' ? 'it' : 'en';
  document.documentElement.lang = chosen;
  document.title = chosen === 'it' ? 'EPIK8S | Guida rapida, architettura e manuale' : 'EPIK8S | Quick start, architecture & manual';
  document.querySelectorAll('[data-content-lang]').forEach(el => { el.hidden = el.dataset.contentLang !== chosen; });
  document.querySelectorAll('[data-en][data-it]').forEach(el => { el.textContent = el.dataset[chosen]; });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === chosen)));
  document.getElementById('home-link').href = `../?lang=${chosen}`;
  document.getElementById('footer-home').href = `../?lang=${chosen}`;
  const url = new URL(location.href); url.searchParams.set('lang', chosen);
  history.replaceState(null, '', url.pathname + url.search + url.hash);
  try { localStorage.setItem('infn-epics-site-language', chosen); } catch (_) {}
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
setLanguage(languageFromLocation());

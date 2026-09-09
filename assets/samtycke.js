/* Cookiesamtycke för Head of Happiness.
   Plausible är cookiefri och laddas separat i sidhuvudet, utan samtycke.
   Google Analytics laddas först när besökaren aktivt sagt ja. */
(function () {
  var GA_ID = 'G-Q3QL8BHB1B';
  var NYCKEL = 'hoh-samtycke';
  var laddad = false;

  function laddaGA() {
    if (laddad) return;
    laddad = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });
  }

  function las() { try { return localStorage.getItem(NYCKEL); } catch (e) { return null; } }
  function skriv(v) { try { localStorage.setItem(NYCKEL, v); } catch (e) {} }

  var val = las();
  if (val === 'ja') { laddaGA(); return; }
  if (val === 'nej') { return; }

  function bygg() {
    if (document.getElementById('hoh-samtycke')) return;

    var ruta = document.createElement('div');
    ruta.id = 'hoh-samtycke';
    ruta.setAttribute('role', 'dialog');
    ruta.setAttribute('aria-label', 'Kakor på den här webbplatsen');
    ruta.style.cssText = 'position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;background:#FBF7EF;border:1px solid rgba(18,50,82,0.16);border-radius:16px;box-shadow:0 10px 34px rgba(18,50,82,0.16);padding:20px 22px;font-family:Figtree,system-ui,-apple-system,sans-serif;color:#123252;';

    var text = document.createElement('p');
    text.style.cssText = 'margin:0 0 16px;font-size:15px;line-height:1.6;color:rgba(18,50,82,0.82);';
    text.innerHTML = 'Vi vill gärna förstå hur sajten används, och till det behöver vi kakor. Du väljer själv. Besöksstatistik utan kakor samlar vi oavsett. <a href="/cookiepolicy/" style="color:#A25A4D;text-decoration:underline;text-underline-offset:2px;">Om kakor</a>';

    var rad = document.createElement('div');
    rad.style.cssText = 'display:flex;flex-wrap:wrap;gap:10px;';

    function knapp(etikett, primar) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = etikett;
      b.style.cssText = 'flex:1 1 140px;min-height:46px;padding:0 22px;border-radius:999px;font-family:inherit;font-size:15px;font-weight:600;cursor:pointer;' +
        (primar
          ? 'background:#123252;color:#FBF7EF;border:1px solid #123252;'
          : 'background:transparent;color:#123252;border:1px solid rgba(18,50,82,0.3);');
      return b;
    }

    var ja = knapp('Godkänn', true);
    var nej = knapp('Nej tack', false);

    function stang() { if (ruta.parentNode) ruta.parentNode.removeChild(ruta); }
    ja.addEventListener('click', function () { skriv('ja'); laddaGA(); stang(); });
    nej.addEventListener('click', function () { skriv('nej'); stang(); });

    rad.appendChild(ja);
    rad.appendChild(nej);
    ruta.appendChild(text);
    ruta.appendChild(rad);
    document.body.appendChild(ruta);
    ja.focus();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bygg);
  } else {
    bygg();
  }
})();

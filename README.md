# headofhappiness.se

Statisk webbplats för Head of Happiness. Ren HTML och CSS, inga byggsteg och inga beroenden.

## Filer

| Fil | Sida |
| --- | --- |
| index.html | Start |
| for-arbetsgivare.html | För arbetsgivare |
| for-dig-sjalv.html | För dig själv |
| programmet.html | Utbildnings- och träningsprogrammet |
| varfor-investera.html | Varför investera |
| halsosamtal.html | Personliga hälsosamtal |
| om-oss.html | Om oss |
| fa-ett-forslag.html | Få ett förslag (formulär) |
| 404.html | Felsida |
| assets/ | Bilder |

## Publicera med GitHub Pages

1. Lägg innehållet i det här repots rot på grenen `main`.
2. Settings → Pages → Source: Deploy from a branch → main / root.
3. Settings → Pages → Custom domain: `www.headofhappiness.se` (filen CNAME finns redan).
4. Hos Loopia: peka `www` med CNAME till `headofhappiness.github.io`, och apex `headofhappiness.se` med A-poster till GitHub Pages IP-adresser (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153).
5. Kryssa i Enforce HTTPS när certifikatet är utfärdat.

## Innan domänen pekas om

Bokningen av hälsosamtal och programmet ligger hos Wix och nås via subdomäner: `samtal.headofhappiness.se` (hälsosamtal) och `boka.headofhappiness.se` (programmet). Koppla båda i Wix och kontrollera att de fungerar innan DNS för www och apex pekas om. först därefter om huvuddomänen.

## Att göra

- Formuläret på fa-ett-forslag.html postar till Formspree (form-ID xljryoap). Fälten heter foretag, namn, epost, antal samt en checkbox per tjänst (screening, forelasning, nudging, program, halsosamtal). Ämnesrad sätts via det dolda fältet `_subject`, och `_gotcha` är Formsprees skräppostfälla.
- Bokningsknappen på halsosamtal.html pekar mot samtal.headofhappiness.se/booking-calendar/hälsosamtal. Programknapparna på for-dig-sjalv.html pekar mot boka.headofhappiness.se.
- Tre bilder saknas på programmet.html (skärmbilder från appen och foto från gruppträff).

## DNS hos Loopia

| Namn | Typ | Värde |
| --- | --- | --- |
| www | CNAME | headofhappiness.github.io |
| @ | A | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 |
| samtal | CNAME | enligt Wix (bokning av hälsosamtal) |
| boka | CNAME | enligt Wix (programmet) |

Ordning: koppla samtal och boka i Wix först, verifiera, byt sedan www och apex.

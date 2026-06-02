# StudyFlow

StudyFlow je web aplikacija za planiranje ucenja namenjena studentima koji zele da organizuju gradivo, prate napredak i imaju pregled najvaznijih akademskih obaveza na jednom mestu.

Projekat je nastao kao deo domaceg zadatka iz predmeta **Klijentske veb tehnologije i skriptni jezici**. Dizajn aplikacije je prvo razradjen u Figmi, a zatim implementiran kao React Router aplikacija.

## Opis projekta

Ideja aplikacije je da studentima omoguci pregledniji rad tokom semestra i ispitnog roka. Kroz StudyFlow korisnik moze da se registruje ili prijavi, pristupi dashboard-u, prati planove ucenja, evidentira predmete i pregleda svoj profil sa akademskim statistikama.

Trenutna implementacija sadrzi osnovnu strukturu aplikacije, layout, autentifikacione stranice, profil rutu, dashboard rutu i prilagodjenu 404 stranicu. Dokumentacijom i Figma dizajnom su predvidjeni dodatni moduli za predmete i planove ucenja.

## Tehnologije

- React 19
- React Router 7
- TypeScript
- Vite
- Tailwind CSS 4
- CSS

## Funkcionalnosti

Implementirano:

- globalni layout sa header navigacijom i footer-om
- Login stranica sa formom za prijavu
- Register stranica sa formom za kreiranje naloga
- Dashboard ruta
- Profile ruta
- aktivni linkovi u navigaciji preko `NavLink`
- catch-all 404 ruta
- custom Not Found stranica
- responzivni vizuelni elementi i asset-i iz `public/images`

Planirano prema dokumentaciji i Figma dizajnu:

- Study Plans stranica sa listom planova ucenja
- detaljan prikaz pojedinacnog plana
- dodavanje, izmena i brisanje poglavlja u planu
- Subjects stranica sa tabelom predmeta
- dodavanje, izmena i brisanje predmeta
- filtriranje predmeta po statusu
- akademske statistike na profilu
- podesavanja naloga
- study timer i pregled predstojecih ispita

## Stranice i rute

| Ruta | Stranica | Opis |
| --- | --- | --- |
| `/` | Dashboard | Pocetna stranica aplikacije nakon ulaska u sistem |
| `/login` | Login | Forma za prijavu korisnika |
| `/register` | Register | Forma za registraciju novog korisnika |
| `/profile` | Profile | Profil korisnika |
| `*` | Not Found | Prilagodjena 404 stranica za nepostojece rute |

## Struktura projekta

```text
studyflow/
|-- app/
|   |-- commonComponents/
|   |   |-- Header.tsx
|   |   `-- Footer.tsx
|   |-- dashboard/
|   |   `-- Dashboard.tsx
|   |-- login/
|   |   |-- Login.tsx
|   |   `-- components/
|   |-- register/
|   |   |-- Register.tsx
|   |   `-- components/
|   |-- profile/
|   |   `-- Profile.tsx
|   |-- routes/
|   |   |-- home.tsx
|   |   |-- login.tsx
|   |   |-- register.tsx
|   |   |-- profile.tsx
|   |   `-- not-found.tsx
|   |-- app.css
|   |-- constants.tsx
|   |-- root.tsx
|   `-- routes.ts
|-- public/
|   `-- images/
|-- package.json
|-- react-router.config.ts
`-- vite.config.ts
```

## Pokretanje projekta

Potrebno je instalirati Node.js i npm.

Instalacija zavisnosti:

```bash
npm install
```

Pokretanje development servera:

```bash
npm run dev
```

Aplikacija ce biti dostupna na:

```text
http://localhost:5173
```

## Dostupne komande

```bash
npm run dev
```

Pokrece aplikaciju u development modu.

```bash
npm run build
```

Kreira production build aplikacije.

```bash
npm run start
```

Pokrece buildovanu aplikaciju preko React Router servera.

```bash
npm run typecheck
```

Generise React Router tipove i pokrece TypeScript proveru.

## Autor

Aleksandar Radojicic  
Broj indeksa: 2023/0205  
Fakultet organizacionih nauka, Univerzitet u Beogradu

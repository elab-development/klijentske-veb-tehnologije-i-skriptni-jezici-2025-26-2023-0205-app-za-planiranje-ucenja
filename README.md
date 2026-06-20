# StudyFlow

StudyFlow je responzivna web aplikacija za planiranje ucenja namenjena studentima koji zele da prate predmete, ispitne obaveze, vreme ucenja i akademski napredak na jednom mestu.

Projekat je nastao kao deo domaceg zadatka iz predmeta **Klijentske veb tehnologije i skriptni jezici**. Aplikacija je implementirana kao React Router aplikacija, uz TypeScript, Tailwind CSS i custom CSS za finalni responsive UI.

## Trenutno stanje aplikacije

Aplikacija sada ima kompletiran korisnicki tok za prijavu/registraciju, dashboard, profil i pracenje predmeta. Interfejs je prilagodjen desktop i mobilnim ekranima: header je sticky, footer je responzivan, tabele se na telefonu prikazuju kao kartice, a modalni prozori imaju mobilni layout.

## Tehnologije

- React 19
- React Router 7
- TypeScript
- Vite
- Tailwind CSS 4
- CSS
- Local Storage za cuvanje tokena, korisnika i teme

## Funkcionalnosti

Implementirano:

- Login stranica sa prijavom korisnika
- Register stranica sa kreiranjem naloga
- Dashboard sa ukupnim napretkom, study timer-om i karticama predstojecih testova
- Subjects stranica sa listom predmeta
- filtriranje predmeta po statusu, ispitnom roku i godini
- dodavanje, izmena i brisanje predmeta kroz modal
- mobilni prikaz predmeta kao kartica umesto siroke tabele
- Profile stranica sa korisnickim podacima, biografijom, statistikama i podesavanjima
- izmena profila kroz modal
- light/dark tema
- aktivni linkovi u navigaciji
- sticky header i responzivni footer
- custom 404 stranica
- responsive dizajn za telefon, tablet i desktop

Napomena:

- Navigacioni link za `/study-plan` postoji u header-u, ali modul za planove ucenja jos nije implementiran.

## Stranice i rute

| Ruta | Stranica | Opis |
| --- | --- | --- |
| `/` | Dashboard | Pregled napretka, timer i testovi |
| `/login` | Login | Prijava postojeceg korisnika |
| `/register` | Register | Registracija novog korisnika |
| `/subjects` | Subjects | Pregled, filtriranje, dodavanje, izmena i brisanje predmeta |
| `/profile` | Profile | Korisnicki profil, statistike i podesavanja |
| `*` | Not Found | Prilagodjena 404 stranica |

## Struktura projekta

```text
studyflow/
|-- app/
|   |-- api/
|   |   |-- auth.ts
|   |   |-- client.ts
|   |   `-- subjects.ts
|   |-- commonComponents/
|   |   |-- Footer.tsx
|   |   `-- Header.tsx
|   |-- dashboard/
|   |   |-- Dashboard.tsx
|   |   |-- TimerContext.tsx
|   |   `-- components/
|   |-- login/
|   |   |-- Login.tsx
|   |   `-- components/
|   |-- models/
|   |   |-- Subject.ts
|   |   `-- User.ts
|   |-- profile/
|   |   |-- Profile.tsx
|   |   `-- components/
|   |-- register/
|   |   |-- Register.tsx
|   |   `-- components/
|   |-- routes/
|   |   |-- home.tsx
|   |   |-- login.tsx
|   |   |-- not-found.tsx
|   |   |-- profile.tsx
|   |   |-- register.tsx
|   |   `-- subjects.tsx
|   |-- subjects/
|   |   |-- Subjects.tsx
|   |   `-- components/
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

Udji u folder aplikacije:

```bash
cd studyflow
```

Instaliraj zavisnosti:

```bash
npm install
```

Pokreni development server:

```bash
npm run dev
```

Aplikacija je podrazumevano dostupna na:

```text
http://localhost:5173
```

Ako je port zauzet, Vite/React Router moze ponuditi drugi port.

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

## API i podaci

Aplikacija koristi API sloj iz `app/api/` za autentifikaciju i predmete. Token i korisnicki podaci se cuvaju u `localStorage`, a tema se cuva pod kljucem `theme`.

## Autor

Aleksandar Radojicic  
Broj indeksa: 2023/0205  
Fakultet organizacionih nauka, Univerzitet u Beogradu

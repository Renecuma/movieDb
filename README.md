# movieDb

Mobilní aplikace pro procházení filmů, vedení vlastního seznamu zhlédnutých filmů a sdílení hodnocení s ostatními uživateli.

Projekt do předmětu **Programování mobilních aplikací (AP5PM)**, UTB 2026.
Autor: **René Čuma**

---

## Funkce

### Procházení filmů
- Bannery (plakáty) filmů v horizontálních řadách – *Trending Now*, *Top Rated*, *New Releases*
- Řadu lze rozbalit do mřížky (tlačítko **Expand / Shrink**)
- Nekonečné scrollování – další filmy se načítají automaticky při přiblížení ke konci řady
- Detail filmu s popisem, žánry, rokem vydání a průměrným hodnocením

### Uživatelský účet
- Registrace a přihlášení uživatele
- **Zhlédnuté filmy** – uživatel si označí filmy, které už viděl
- **Chci vidět (watchlist)** – seznam filmů, které si chce pustit později
- Oba seznamy jsou uložené na účtu, takže jsou dostupné na jakémkoli zařízení

### Komentáře a hodnocení
- Hodnocení filmu (např. 1–5 hvězdiček)
- Psaní komentářů k filmům a čtení komentářů ostatních uživatelů
- Úprava a mazání vlastních komentářů

---

## Stav vývoje

- [x] Založení projektu (Ionic + Angular + Capacitor)
- [x] Navigace přes záložky (tabs)
- [x] Stránka s řadami filmů, rozbalováním a nekonečným scrollem (zatím zástupná data)
- [x] Stránka *O aplikaci*
- [ ] Napojení na API s reálnými filmy a plakáty
- [ ] Detail filmu
- [ ] Registrace a přihlášení
- [ ] Seznamy *Zhlédnuté* a *Chci vidět*
- [ ] Hodnocení a komentáře
- [ ] Sestavení pro Android / iOS

---

## Technologie

| Oblast | Technologie |
| --- | --- |
| Framework | [Ionic 9](https://ionicframework.com/) + [Angular 22](https://angular.dev/) (standalone komponenty, signals) |
| Nativní běh | [Capacitor 8](https://capacitorjs.com/) (Android / iOS) |
| Jazyk | TypeScript 6 |
| Ikony | [Ionicons](https://ionic.io/ionicons) |
| Testy | [Vitest](https://vitest.dev/) + jsdom |
| Linting | ESLint + angular-eslint |

---

## Struktura projektu

```
src/
├── app/
│   ├── tabs/          # spodní lišta se záložkami a routing záložek
│   ├── tab1/          # Filmy – řady s bannery, rozbalování, nekonečný scroll
│   ├── tab2/          # Historie (připravuje se)
│   ├── tab3/          # O aplikaci
│   ├── app.component.*
│   └── app.routes.ts
├── assets/            # ikony a obrázky
├── environments/      # konfigurace pro dev / produkci
├── theme/             # Ionic proměnné a barvy
└── global.scss
```

---

## Spuštění

### Požadavky
- [Node.js](https://nodejs.org/) (LTS)
- npm
- Pro mobilní build: Android Studio (Android) nebo Xcode (iOS, jen macOS)

### Instalace

```bash
git clone https://github.com/Renecuma/movieDb.git
cd movieDb
npm install
```

### Vývojový server

```bash
npm start
```

Aplikace poběží na `http://localhost:4200`. Pro mobilní náhled otevřete v prohlížeči vývojářské nástroje a přepněte na zobrazení zařízení.

Alternativně přes Ionic CLI:

```bash
npx ionic serve
```

### Další příkazy

| Příkaz | Popis |
| --- | --- |
| `npm run build` | Produkční build do složky `www/` |
| `npm run watch` | Build s automatickým přestavěním při změně |
| `npm test` | Spuštění unit testů (Vitest) |
| `npm run lint` | Kontrola kódu ESLintem |

### Build pro Android / iOS

```bash
npm run build
npx cap add android      # poprvé (případně ios)
npx cap sync
npx cap open android     # otevře projekt v Android Studiu
```

---

## Licence

Školní projekt – vytvořeno pro studijní účely.

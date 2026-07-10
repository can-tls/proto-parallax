# Proto Parallax

Proto Parallax ist eine statische, modulare Astro-Anwendung für ein persönliches Profil und einen Lebenslauf. Die Seite ist als datengetriebenes Layout aufgebaut: Inhalte wie Profil, Skills, Berufserfahrung und Ausbildung werden getrennt von der Darstellung gepflegt und in wiederverwendbaren Komponenten zusammengeführt.

## Ziel des Projekts

Das Projekt soll eine kompakte, flexible und gut wartbare Basis für eine digitale Bewerbungs- oder Portfolioseite sein. Der Fokus liegt auf klarer Struktur, einfacher Pflege und einem Ausgabeformat, das sich ohne großen Aufwand weiterverwenden lässt.

Wichtige Eigenschaften:

- modular aufgebaut mit getrennten Komponenten für Sidebar, Timeline und Layout
- statisch gerendert mit Astro
- datengetrieben über TypeScript und Content Collections
- leicht erweiterbar für weitere Inhalte, Sprachen oder Abschnitte
- gut geeignet als Grundlage für einen PDF-Export oder eine druckfreundliche Version

## Aufbau

Die Seite ist bewusst in kleine, austauschbare Bausteine zerlegt:

- [src/data/profile.ts](src/data/profile.ts) enthält persönliche Stammdaten und Kurzbeschreibung
- [src/data/skills.ts](src/data/skills.ts) enthält die Skill-Liste mit Bewertung
- [src/components/Sidebar.astro](src/components/Sidebar.astro) rendert Profilbild, Kontaktdaten und Skills
- [src/components/ExperienceTimeline.astro](src/components/ExperienceTimeline.astro) rendert Berufserfahrung und Ausbildung aus den Content Collections
- [src/layouts/Layout.astro](src/layouts/Layout.astro) definiert das Seiten-Layout
- [src/pages/index.astro](src/pages/index.astro) setzt die Startseite zusammen

Die Inhalte für Erfahrung und Ausbildung liegen in [src/content](src/content) und werden über Astro Content Collections geladen. Dadurch bleibt die Struktur stabil, während Texte und Stationen unabhängig von der Oberfläche gepflegt werden können.

## Warum statisch

Die Anwendung wird als statische Site gebaut. Das ist sinnvoll, weil der Inhalt überwiegend redaktionell ist und sich selten zur Laufzeit ändert. Vorteile davon sind:

- sehr einfache Bereitstellung
- schnelle Ladezeiten
- wenig Infrastrukturaufwand
- gute Kompatibilität mit Hosting, Archivierung und Druckausgabe

## PDF-Export

Die Seite ist so aufgebaut, dass daraus leicht eine PDF-Version erzeugt werden kann. Das kann auf mehreren Wegen passieren:

- über den Browserdruckdialog mit anschließender Speicherung als PDF
- über einen automatisierten Headless-Browser-Workflow, etwa mit Playwright oder Puppeteer
- über einen externen Build-Schritt, der die statische Seite in ein druckoptimiertes PDF überführt

Wichtig ist dabei: Das Projekt ist bereits statisch genug, um als Basis für so einen Export zu dienen. Eine eigene PDF-Pipeline ist aktuell nicht fest verdrahtet, kann aber ohne grundlegenden Umbau ergänzt werden.

## Entwicklung

Voraussetzung ist Node.js 22.12 oder neuer.

1. Abhängigkeiten installieren: npm install
2. Lokalen Entwicklungsserver starten: npm run dev
3. Produktionsbuild erstellen: npm run build
4. Build lokal prüfen: npm run preview

## Projektstruktur

```text
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
└── README.md
```

## Erweiterungsideen

- weitere Sektionen wie Projekte, Zertifikate oder Sprachen ergänzen
- Mehrsprachigkeit auf Basis derselben Datenstruktur aufbauen
- ein dediziertes Druck- oder PDF-Layout ergänzen
- Inhalte aus Markdown weiter ausbauen, wenn längere Stationen gepflegt werden sollen

## Tech Stack

- Astro
- TypeScript
- Content Collections
- komponentenbasierte UI-Struktur

## Hinweise

Die Seite ist auf klare Trennung von Inhalt und Darstellung ausgelegt. Das macht spätere Änderungen einfacher, etwa wenn das Layout angepasst, die Inhalte erweitert oder zusätzliche Ausgaben wie eine druckoptimierte Version benötigt werden.
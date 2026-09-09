# FerienparkFinder / ferienpark-vergleich

Moderne statische Next.js-V1 einer Meta-Suchmaschine für Ferienparks in Europa. Die V1 verwendet ausschließlich klar gekennzeichnete Demo-Daten und Mock-Provider.

## Voraussetzungen
- Node.js 20+
- npm 10+

## Installation
```bash
npm install
npm run dev
```
Öffne anschließend `http://localhost:3000`.

## Production Build
```bash
npm run build
```
Next.js erzeugt dank `output: "export"` ein statisches `out/`-Verzeichnis. Für eine lokale Vorschau eines statischen Exports kann z. B. ein einfacher statischer HTTP-Server verwendet werden; `npm start` ist primär für einen klassischen Next-Server gedacht und nicht für den reinen GitHub-Pages-Export.

## GitHub Pages
1. Repository nach GitHub pushen.
2. Unter **Settings → Pages** als Quelle **GitHub Actions** auswählen.
3. Auf `main` pushen.
4. `.github/workflows/deploy.yml` baut und veröffentlicht `out/`.

Bei einem Repository mit Projektpfad kann später zusätzlich ein `basePath`/`assetPrefix` in `next.config.ts` konfiguriert werden.

## Projektstruktur
- `app/` – App Router, Seiten und Layout
- `components/` – UI, Suche, Karten, Vergleich
- `lib/types/` – zentrale TypeScript-Modelle
- `lib/data/` – Provider, Parks, Facilities und Demo-Angebote
- `lib/search/` – Filter-, Sortier- und Preis-Leistungslogik
- `lib/connectors/` – Provider-Connector-Abstraktion und Mock-Connector
- `.github/workflows/` – GitHub-Pages-Deployment

## Demo-Daten
15 Parks von EuroParcs, Roompot, Center Parcs, Molecaten und TopParken. Preise und Verfügbarkeiten sind **Beispielwerte** und nicht live/buchbar. Das UI zeigt den Demo-Modus entsprechend an.

## Provider-Connectoren
`ProviderConnector` definiert `search()` und `getPark()`. Der `MockProviderConnector` liefert aktuell lokale Daten. Für die Live-Version können je Anbieter Connectoren ergänzt werden, die ausschließlich zulässige Quellen nutzen: offizielle APIs, Affiliate-Feeds, Partnerprogramme, strukturierte Datenfeeds oder direkte Kooperationen. Unkontrolliertes Scraping ist nicht Teil der Architektur.

## Spätere API-/Datenbankintegration
Die UI arbeitet mit normalisierten `Park`, `Accommodation` und `Offer`-Objekten. Ein späteres Backend kann Connector-Antworten normalisieren, cachen und in PostgreSQL speichern. Preisbestandteile (`basePrice`, `cleaningFee`, `bookingFee`, `petFee`, `touristTax`, `optionalFees`) sind bereits getrennt modelliert.

## Affiliate-Integration
Parks besitzen `bookingUrl`; das Modell sieht zusätzlich `affiliateUrl`, `trackingProvider` und `trackingParams` vor. In V1 führt die CTA nur zu einem konfigurierbaren Platzhalter. Tracking sollte erst nach einer geeigneten Consent-Lösung aktiviert werden.

## Datenschutz
V1 benötigt kein Login. Favoriten und Vergleichsauswahl werden ausschließlich per `localStorage` gehalten. Keine unnötigen Tracking-Cookies sind enthalten. Vor Live-Betrieb müssen Datenschutzerklärung, Impressum, Consent und Affiliate-Hinweise rechtlich geprüft und finalisiert werden.

## Architektur-Roadmap
- **V2:** echte Providerquellen, API, PostgreSQL, Accounts, Verfügbarkeit, Preise, Affiliate-Tracking
- **V3:** weitere Anbieter, Preisverlauf, Preisalarm, Karten, Unterkunftsvergleich, Empfehlungen
- **V4:** Europa, automatische Datenaktualisierung, KI-Reiseassistent, flexible Daten und Preisprognosen

### Connector-Registry
`lib/connectors/registry.ts` ordnet Provider-IDs den jeweiligen Connector-Klassen zu. `normalizer.ts` bildet Provider-Ergebnisse auf das interne Suchmodell ab. Dadurch bleiben UI und Suchalgorithmus unabhängig von einzelnen Anbietern.

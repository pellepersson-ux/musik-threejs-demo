# Tonverkstan – teknisk arkitektur

## Plattform

Tonverkstan är en single-page-applikation byggd med:

- Vite 7
- JavaScript ES modules
- Three.js
- Globe.gl finns som projektberoende
- Netlify för publicering
- GitHub som versionshantering och källa för Netlify-deploy

## Applikationsstart

`src/main.js` är applikationens startpunkt.

Filen:

- skapar sidans huvudflöde
- renderar Header och Footer
- innehåller projektets enkla interna router
- kopplar navigationens knappar till respektive sida

Ändringar i `src/main.js` är arkitekturkänsliga.

## Komponenter

Återanvändbara komponenter finns i:

`src/components/`

Befintliga komponenter ska återanvändas när det är möjligt.

## Sidor

Sidfunktioner finns i:

`src/pages/`

Varje större pedagogiskt område ska i första hand hållas isolerat i sin egen sidmodul.

## Visuell design

Huvuddesignen finns i:

`src/style.css`

CSS-variabler i `:root` fungerar som början till projektets designsystem.

Befintliga färger, gradienter, spacing och visuella mönster ska betraktas som godkända tills ett uttryckligt designuppdrag säger något annat.

Vissa komponenter innehåller fortfarande inline-stilar. Dessa får inte automatiskt flyttas eller skrivas om som del av en annan uppgift.

## Världsmusik och 3D

`src/pages/WorldMusic.js` är en prestandakänslig modul.

Den innehåller:

- Three.js-scen
- jordglob
- markörer
- stjärnfält
- OrbitControls
- raycasting
- tooltip
- informationsmodal
- kontinuerlig animationsloop

Ändringar i denna fil ska göras små och mätbara.

Pedagogiskt beteende och befintligt visuellt gränssnitt ska bevaras vid prestandaoptimering.

## Målplattform

Primär teknisk målplattform är skolans Chromebooks, inklusive äldre och svaga modeller.

Utvecklingsdatorns prestanda får inte användas som bevis för att en 3D-funktion är tillräckligt lätt.

Prestandaförändringar ska testas på den svaga referens-Chromebooken.

## Arbetsprincip

Förändringsordning:

1. Dokumentera nuläge.
2. Definiera en liten ändring.
3. Ange berörda filer.
4. Gör minsta möjliga diff.
5. Kontrollera `git diff`.
6. Testa lokalt.
7. Testa på Chromebook när prestanda berörs.
8. Commit först när beteendet är verifierat.

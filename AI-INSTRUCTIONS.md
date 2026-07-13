# AI-instruktioner för Tonverkstan

## Projektets mål
Tonverkstan är en musikpedagogisk lärmiljö.

Primär målgrupp:
- Årskurs 7–9

Sekundär målgrupp:
- Årskurs 2–6

Teknisk prioritet:
- Ska fungera på svaga Chromebooks
- Ska vara tydlig, lättnavigerad och tillgänglig
- Enkelhet får inte göra designen barnslig

## Absoluta regler

- Bevara befintligt visuellt gränssnitt.
- Ändra inte navigation, färger, typografi, layout eller sidstruktur utan uttryckligt uppdrag.
- Gör minsta möjliga kodändring.
- Skriv inte om hela filer när en lokal ändring räcker.
- Ta inte bort fungerande funktioner.
- Byt inte ramverk eller bibliotek utan uttryckligt godkännande.
- Lägg inte till nya beroenden utan uttryckligt godkännande.
- Ändra inte flera funktioner samtidigt om uppgiften gäller en avgränsad del.
- Optimera i första hand för svaga Chromebooks.
- Bevara tangentbordsnavigering och tillgänglighet.
- Ladda inte alla bilder, ljudfiler eller 3D-resurser vid sidstart.
- Ändra inte filer utanför angivet arbetsområde utan att först förklara varför.

## Före varje ändring

AI:n ska först ange:

1. Vilka filer som behöver ändras.
2. Varför varje fil behöver ändras.
3. Vad som uttryckligen lämnas orört.
4. Vilka risker ändringen har.
5. Hur ändringen kan återställas.

Ingen kodändring ska göras innan denna plan är tydlig.

## Under arbetet

- Redigera befintlig kod.
- Ersätt inte hela filer i onödan.
- Håll varje ändring liten och avgränsad.
- Behåll befintliga namn, komponenter och visuella mönster.
- Följ projektets nuvarande struktur.

## Efter varje ändring

AI:n ska redovisa:

1. Exakt vad som ändrades.
2. Alla ändrade filer.
3. Hur ändringen testas.
4. Eventuella kvarvarande risker.
5. Om gränssnittet eller beteendet påverkades.

## Git-regler

- Arbeta aldrig direkt på main.
- En uppgift per branch.
- En fungerande del per commit.
- Kontrollera alltid git diff före commit.
- Om diffen är större än uppgiften kräver ska ändringen stoppas och granskas.

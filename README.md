# M133 Projekt Dorfladen
Das Dorfladen Projekt von Olivier Lüthy

## Inbetriebnahme
Hier wird beschrieben, was die Vorraussetzungen sind für das Projekt und wie man das Projekt starten kann

### Vorraussetzungen
Bevor man mein Projekt starten kann, müssen folgende Dinge vorhanden sein:
1. Webbrowser muss installiert sein (Google Chrome, Firefox oder Opera)
2. Deno muss ebenfalls installiert sein

Wenn man Deno installiert hat muss man überprüfen, ob man die Version 1.4.6 installiert hat.
Um das zu überprüfen muss man im Windows Command Prompt oder im VS Code Terminal ```deno --version``` eingeben. Ist die Version richtig, kann man dieses Unterkapitel überspringen.
Falls es nicht die richtige Version ist, muss man im Windows Command Prompt oder im VS Code Terminal ```deno upgrade --version 1.4.6``` eingeben, damit man die Version 1.4.6 von Deno hat.

### Projekt starten
Als nächstse muss man entweder via Terminal von VS Code oder durch das Windows Command Prompt auf den Ordner zugreifen. 
Bei dem Projekt sollte man auf den Pfad ```C:\Users\[Username]\Documents\M133-Dorfladen``` gelangen, wenn man den Ordner unter Dokumente abgelegt hat.

Danach sollte man durch den Command ```deno run --allow-all --allow-read using_ejs.js``` den Server problemlos starten können.
Ist dies der Fall, muss man den Browser öffnen und dann auf den Port 5500 zugreifen. Dies macht man, indem man in der Browser-Suche ```http://localhost:8000/``` eingibt.
Gibt man den Befehl ein, sollte man mein Projekt sehen.

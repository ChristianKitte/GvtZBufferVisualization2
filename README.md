# GvtZBufferVisualization
Visualisierung von Tiefe mit Hilfe des Z-Buffers in WebGL
**Dozent: Prof. Dr. Felix Gers (Berliner Hochschule für Technik)**

![image](https://user-images.githubusercontent.com/32162305/150810942-99672aac-99af-47ea-849b-ba263fae0c3f.png)

---

**Graphical Visualisation Technologies**

**Dozent: Prof. Dr. Felix Gers (Berliner Hochschule für Technik)**

**Studiengang Medieninformatik Online MA, Wintersemester 2022/23**

**University of Applied Sciences Emden/Leer, Faculty of Technology, Department of Electrical Engineering and
Informatics**

---

### Einsendeaufgabe EA7 : Z-Puffer-Visualisierung

[zur Webseite](https://gvt.ckitte.de/ea7/)

Im Rahmen der sechsten Einsendeaufgabe sollen vier Kugeln interaktiv durch einen Torus fliegen. 

Im Rahmen der Umsetzung der Aufgabe, kreisen innerhalb der Anwendung vier Kugeln kontinuierlich um einen sich drehenden Torus, wobei ihre Bahn zumeist durch den Mittelpunkt des Torus verläuft. Hierbei berühren sich die Kugeln auf ihren Kreisbahnen nicht. 



![](assets/2022-11-24-15-44-36-image.png)



Die Anwendung verwendet als Grundgerüst, den in der sechsten Einsendeaufgabe genutzte Code. Alle hier vorhandene Interaktion ist auch in dieser Lösung verfügbar.

Die Anzeige des Gittergerüsts der Kugeln und des Torus kann durch die links unten verfügbare Checkbox gesteuert werden. Über der daneben befindlichen Checkbox kann die Animation der Szene ein- und ausgeschaltet werden. Einzelschritte sind daher nicht implementiert

Bild

Um trotz der farbigen Vertices, wie sie für die Farbe der Fragmente notwendig sind, schwarze Linien zu erhalten, wurde vor deren Ausgabe das entsprechende Farbattribut disabled.

### Aufteilung des Codes

Im Rahmen der Bearbeitung wurde das bisherige Programmgerüst aus der fünften Einsendeaufgabe in Teilen stark überarbeitet und erweitert. Als externe Bibliothek zur Berechnung der Matrizen und Vektoren kommt [**glMatrix**](https://glmatrix.net/)  (Ordner extern) zum Einsatz.

Als Startpunkt dient das Modul **app.js**, welches mit Hilfe von **Startup.js** aktiviert wird. So gut wie alle Konfigurationen und UI Handler befinden sich in **configure.js**. Die Datei **main.css** enthält alle benötigten Klassen, um die Grafik einfach einzubinden. In der Datei **layout.css** wird das Layout der Webseite selbst festgelegt. Daneben kommt Bootstrap für die Buttons zum Einsatz.

Alle allgemeinen Module befinden sich im Ordner **module**, alle Module, welche einen Körper definieren im Ordner **models**. 

Das Modul **mod_shader** enthält die Shader Dateien und ermöglicht den Zugriff darauf. Das Modul **mod_webgl** initiert WebGL und kapselt dessen Komplexität.  Für jedes Modell wurde ein Modul angelegt, welches in der Hauptsache die Erstellung des Modells (Vertices, Linien und Dreiecke) steuert. Für das Modell einer rekursiven Kugel ist ebenso dessen gesamte Programmlogik dort vorhanden.

Die Orchestrierung der Szenen, deren Anzeige sowie das Handling der Tasttatureingabe befindet sich im Hauptmodul **app.js**. 

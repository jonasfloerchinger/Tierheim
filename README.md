# Tierheim
Verteilte Systeme Abgabe
Thema: Tierheim mit Hunden, Katzen und Hamstern


Frage 1: Beschreibt ein konkretes Anwendungsszenario für den entwickelten Service und schildert (in wenigen Worten) eine mögliche Gesamt-Architektur, in welcher sich diese befinden könnte.

Antwort:
Angenommen, ein Tierheimbetreiber möchte die Informationen über die verfügbaren Hunde und Katzen auf seiner Website aktualisieren, um potenzielle Adoptivfamilien über die verfügbaren Tiere zu informieren. Der Betreiber könnte nun einfach das entwickelte Backend verwenden, um die Datenbank mit den Informationen zu aktualisieren, einschließlich der Hunderassen, Katzenarten, Alter, Größe, Geschlecht und Bilder der Tiere.
Sobald die Informationen aktualisiert sind, können potenzielle Adoptivfamilien auf die Website des Tierheims zugreifen und durch die verfügbaren Tiere stöbern. Sie können nach bestimmten Arten, Rassen, Größen oder anderen Kriterien filtern, um die Suche zu erleichtern.
Wenn eine Familie ein Tier gefunden hat, das ihnen gefällt, können sie eine Anfrage stellen, um mehr Informationen über das Tier zu erhalten oder um es zu adoptieren. Der Betreiber des Tierheims erhält dann eine Benachrichtigung über die Anfrage und kann entsprechend reagieren.

-------------------------------------------------------------------------------------------

Frage 2: Welche Probleme können entstehen, wenn der entwickelte Service von mehreren Parteien verwendet wird? Beschreibt zwei Probleme sowie mögliche Lösungen. 

Skalierungsprobleme: Wenn ein Service von vielen Benutzern gleichzeitig genutzt wird, kann es zu Engpässen und Leistungsproblemen kommen. Die Folgen können eine unzureichende Reaktionszeit, Verzögerungen bei der Datenverarbeitung und sogar Ausfallzeiten des Services sein.

Lösung: Eine Möglichkeit, dieses Problem zu lösen, besteht darin, den Service auf eine Cloud-Infrastruktur zu migrieren, die eine automatische Skalierung ermöglicht. Auf diese Weise kann der Service automatischauf die Anzahl der Benutzer reagieren und die benötigten Ressourcen bereitstellen, um eine optimale Leistung sicherzustellen.

Sicherheitsprobleme: Wenn ein Service von mehreren Parteien genutzt wird, kann es schwierig sein, die Sicherheit zu gewährleisten. Jede Partei kann möglicherweise sensible Daten anderer Parteien zugreifen, was ein Risiko für die Vertraulichkeit und Integrität der Daten darstellt. 

Lösung: Eine mögliche Lösung besteht darin, eine starke Authentifizierung und Autorisierung zu implementieren, um sicherzustellen, dass nur autorisierte Benutzer auf den Service zugreifen können. Es ist auch wichtig, Sicherheitsüberwachungen durchzuführen, um potenzielle Schwachstellen und und Angriffe zu verhindern. Darüber hinaus sollten die Daten verschlüsselt werden, um sicherzustellen, dass sie vor unbefugtem Zugriff geschützt sind.



Frage 3: Was ist abseits der reinen Programmierung für die Produktivsetzung des entwickelten Services zu beachten? Nenne mindestens zwei Aspekte und führe diese in ein paar Sätzen aus.

Antwort:
Sicherheit: Der Service muss ebenso sicher sein, um vor Angriffen und Datenverlust zu schützen.

Infrastrukur-Management: Neben der Programmierung, muss der Service auch auf einer geeigneten Infrastruktur gehostet werden. Außerdem müssen Aspekte wie Skalierbarkeit, Ausfallsicherheit, Lastverteilung und Monitoring berücksichtigt werden.

Deployment-Prozess: Eine kontrollierende und automatisierte Bereitstellung des Services ist durch die Verwendung von DevOps-Methoden oder Tools wie CI/CD-Pipelines und Containerisierung erforderlich. 

Dokumentation und Schulung: Wie üblich, muss auch eine umfassende Dokumentation für den Service vorhanden sein, undzwar nicht nur für Entwickler, sondern auch für Tester, Betreiber und Benutzer muss diese verständlich sein.
Außerdem müssen Benutzer und Betreiber für den Service geschult werden, um sicherzustellen, dass der Service produktionsbereit ist reibungslos betrieben werden kann. Ein Support-Team sollte ebensfalls vorhanden sein, um bei Problemen zu helfen und technischen Support zu bieten.

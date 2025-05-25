Weather App, Bucur Amalia, 1132

Introducere

Aplicația „Weather App” este o aplicație web modernă dezvoltată în React care oferă informații despre vreme pentru orice oraș introdus de utilizator. Ea folosește două servicii cloud prin API REST pentru a prelua date meteo și imagini tematice dinamice.

1. Descriere problemă 
Utilizatorii doresc să obțină rapid informații meteo într-un format clar și vizual. În același timp, experiența de utilizare este îmbunătățită de un fundal care reflectă starea vremii sau orașul selectat. Soluția propusă oferă o interfață intuitivă, atractivă vizual și adaptată contextului.

2. Descriere API 
 OpenWeatherMap API
Endpoint: https://api.openweathermap.org/data/2.5/weather
Parametru: q=oraș, appid=cheie, units=metric
Răspuns: JSON cu temperatură, descriere, umiditate, vânt și icon meteo

Unsplash API
Endpoint: https://api.unsplash.com/search/photos
Parametru: query=oraș + weather, Client-ID=cheie
Răspuns: JSON cu link către imagine de fundal

3. Flux de date 
Pași:
Utilizatorul introduce un oraș
Se trimite cerere GET la OpenWeatherMap
Se preiau și afișează: temperatură, umiditate, vânt, icon
Se trimite cerere GET la Unsplash cu query=oraș
Se setează fundalul paginii cu imaginea primită

4. Referințe
https://openweathermap.org/current
https://unsplash.com/developers
https://reactjs.org
https://axios-http.com




### Getestet mit
Chrome

### Besonderheiten
- Verwendung des Svelte-Moduls svelte-navigator [[Ref LMS]](https://lms.vawi.de/vawi/mod/forum/discuss.php?d=14634#p48009)
```
  "dependencies": {
    "sirv-cli": "^2.0.0",
    "svelte-navigator": "^3.1.6"
  }
```  
- Änderung des Parameters "start" in der package.json

vorher
```
"start": "sirv public --no-clear"
```

nachher
```
"start": "sirv public -s --no-clear --port 5000"
```

### Installation und Anwendung
```
npm install
npm run dev
```
Erreichbar unter http://localhost:5000

### Sonstiges
| Index  | Bedeutung | Farbcode |
| ------------- | ------------- | ------------- |
| 1  | sehr geringe Gefahr  | #b8e29b |
| 2  | geringe Gefahr   |     #d9f8c4          |
| 3  | mittlere Gefahr  |      #f9f9c5         |
| 4  | hohe Gefahr  |          #fad9a1     |
| 5  | sehr ohe Gefahr  |      #f37878         |

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
| Index   | Bedeutung            | Farbcode                                                               |
| --------| -------------------- | ---------------------------------------------------------------------- |
| 1       | sehr geringe Gefahr  | ![#b8e29b](https://via.placeholder.com/15/b8e29b/b8e29b.png) `#b8e29b` |
| 2       | geringe Gefahr       | ![#d9f8c4](https://via.placeholder.com/15/d9f8c4/d9f8c4.png) `#d9f8c4` |
| 3       | mittlere Gefahr      | ![#f9f9c5](https://via.placeholder.com/15/f9f9c5/f9f9c5.png) `#f9f9c5` |
| 4       | hohe Gefahr          | ![#fad9a1](https://via.placeholder.com/15/fad9a1/fad9a1.png) `#fad9a1` |
| 5       | sehr hohe Gefahr     | ![#f37878](https://via.placeholder.com/15/f37878/f37878.png) `#fad9a1` |

### Screenshot
[![Ansicht: Gruppiert nach Bundesländern, sortiert nach Namen](https://i.postimg.cc/0jV7MG8M/Screenshot-2022-07-18-032222.png)](https://postimg.cc/y3SD2Z3s)
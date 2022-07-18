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

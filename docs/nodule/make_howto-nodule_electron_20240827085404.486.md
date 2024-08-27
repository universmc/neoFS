## Comment utiliser le nodule Electron :

Electron est un framework de Node.js permettant de créer des applications dématérialisées (Desktop) à partir de technologies web (HTML, CSS, JavaScript). 

Voici comment démarrer avec Electron :

**1. Installation:**

```bash
npm install -g electron
```

**2. Création d'un projet:**

```bash
mkdir mon-application-electron
cd mon-application-electron
electron-forge init
```

Electron-forge est un outil de création de projet pour Electron, qui vous aidera à configurer votre projet et à organiser vos fichiers.

**3. Structure du projet:**

Le projet Electron généré par electron-forge aura la structure suivante:

```
mon-application-electron/
├── main.js
├── renderer/
│   ├── index.html
│   └── index.js
└── package.json
```

* **main.js**:  Ce fichier contient le code principal de l'application Electron, qui gère la fenêtre et la communication avec le renderer process.
* **renderer/**: Ce répertoire contient le code du côté client de l'application, qui s'exécute dans le navigateur intégré à Electron.
* **index.html**:  Le fichier HTML principal de l'application.
* **index.js**: Le fichier JavaScript principal du renderer process.
* **package.json**: Le fichier de configuration du projet, qui contient les dépendances et les scripts de votre application.

**4. Démarrage de l'application:**

```bash
npm run start
```

Ceci lancera votre application Electron dans une fenêtre.

**5. Développement:**

Vous pouvez maintenant développer votre application en modifiant les fichiers HTML, CSS et JavaScript. N'oubliez pas que les changements dans le renderer process ne seront pas visibles immédiatement. Vous devrez peut-être redémarrer l'application pour voir les modifications.

**Ressources utiles:**

* **Documentation officielle d'Electron:** https://www.electronjs.org/docs
* **Electron Forge:** https://www.electronforge.io/

**Exemples simples:**

* **Créer une fenêtre avec un bouton:**

```javascript
// main.js
const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // Active l'accès à Node.js depuis le renderer
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
```

* **Ajouter un event listener au bouton dans le renderer:**

```javascript
// index.js
document.getElementById('mon-bouton').addEventListener('click', () => {
  console.log('Le bouton a été cliqué!');
});
```




##  howto-nodule_node-emoji : Ajouter des emojis à votre projet Node.js 

`node-emoji` est un petit module Node.js qui vous permet d'utiliser facilement des emojis dans vos applications.  

**Installation:**

```bash
npm install node-emoji
```

**Utilisation:**

1. **Importer le module:**

```javascript
const emoji = require('node-emoji');
```

2. **Affichez un emoji:**

```javascript
console.log(emoji.get('smile')); // Affiche : 😊
```

3. **Utilisez des emojis dans des chaînes de caractères:**

```javascript
const message = `Bonjour ${emoji.get('wave')} !`;
console.log(message); // Affiche : Bonjour 👋 !
```

**Fonctionnalités:**

* **`emoji.get(name)`:**  Retourne l'emoji correspondant au nom donné (par exemple, `smile`, `wave`, `heart`).
* **`emoji.list()`:**  Retourne une liste des emojis disponibles.

**Exemple complet:**

```javascript
const emoji = require('node-emoji');

console.log(`Bonjour ${emoji.get('wave')} !`); // Affiche : Bonjour 👋 !

const emojis = emoji.list();
console.log(emojis); // Affiche la liste des emojis disponibles

console.log(emoji.get('thumbs_up')); // Affiche 👍
```

**Astuces:**

* Vous pouvez trouver la liste complète des emojis disponibles sur [https://unicode.org/emoji/](https://unicode.org/emoji/).
* `node-emoji` utilise la bibliothèque Unicode pour afficher les emojis, assurez-vous que votre terminal ou votre environnement de développement prend en charge les emojis Unicode.




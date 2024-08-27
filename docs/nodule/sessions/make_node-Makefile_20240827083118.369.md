```javascript
import React from 'react';

const Header = ({ title, content }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{content}</p>
    </header>
  );
};

export default Header;
```

**Utilisation du composant:**

```javascript
import Header from './header'; // Assurez-vous que le fichier est situé dans le même répertoire

function App() {
  return (
    <div>
      <Header title="Mon Titre" content="Mon Contenu" />
    </div>
  );
}
```

**Explication:**

* Le composant `Header` est une fonction React qui prend deux propriétés: `title` et `content`.
* Le composant retourne un élément `header` qui contient un élément `h1` affichant le titre et un élément `p` affichant le contenu.
* Le composant `App` utilise le composant `Header` en lui passant les valeurs souhaitées pour les propriétés `title` et `content`.

**Makefile (exemple):**

```makefile
start:
	node index.js

index.js: header.js
	touch index.js

clean:
	rm -f index.js

```

**Explication du Makefile:**

* La règle `start` exécute le serveur Node.js.
* La règle `index.js` crée un fichier `index.js` vide.
* La règle `clean` supprime le fichier `index.js`.

**Remarques:**

* Vous pouvez modifier le contenu du composant `Header` pour répondre à vos besoins spécifiques.
* Vous devrez adapter le Makefile en fonction de la structure de votre projet.




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

**Explication du code:**

1. **Importation de React:**
   - `import React from 'react';` importe la bibliothèque React nécessaire pour créer des composants.

2. **Composant Header:**
   - `const Header = ({ title, content }) => { ... };` définit un composant fonctionnel appelé `Header`.
   - `({ title, content })` utilise des props pour recevoir les valeurs du titre et du contenu à partir de l'endroit où le composant est utilisé.

3. **Structure du composant:**
   - Le composant retourne un élément `header` contenant:
     - Un élément `h1` affichant le titre transmis via la prop `title`.
     - Un élément `p` affichant le contenu transmis via la prop `content`.

4. **Exportation par défaut:**
   - `export default Header;` permet d'exporter le composant `Header` par défaut, ce qui signifie qu'il peut être importé et utilisé dans d'autres fichiers comme `Header`.

**Utilisation du composant:**

```javascript
import Header from './Header'; // Assurez-vous que le chemin est correct

function MyComponent() {
  return (
    <div>
      <Header title="Mon titre" content="Mon contenu" />
    </div>
  );
}
```

Dans cet exemple, `Header` est utilisé avec le titre "Mon titre" et le contenu "Mon contenu".




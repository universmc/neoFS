## Comment utiliser le nodule `node-sass`

`node-sass` est un outil puissant pour compiller du code Sass (Syntactically Awesome Style Sheets) en CSS utilisable par les navigateurs. Voici comment l'utiliser :

**1. Installation:**

Utilisez npm pour installer `node-sass`:

```bash
npm install node-sass --save-dev
```

**2. Configuration:**

* **Fichiers Sass:** Créez des fichiers avec l'extension `.scss` ou `.sass` pour votre code style.
* **Fichier de compilation:** Configurez un fichier de compilation pour spécifier les fichiers Sass à compiler et le nom du fichier CSS généré.

**3. Compilation:**

Utilisez la commande `node-sass` dans votre terminal pour compiler les fichiers Sass en CSS.

```bash
node-sass input.scss output.css
```

* **`input.scss`:** Le nom du fichier Sass à compiler.
* **`output.css`:** Le nom du fichier CSS généré.

**4. Utilisation dans votre projet:**

* **Includez le fichier CSS généré:** Ajoutez la ligne suivante dans votre fichier HTML ou votre fichier de style pour inclure le CSS généré.

```html
<link rel="stylesheet" href="output.css">
```

**5. Options supplémentaires:**

`node-sass` offre de nombreuses options de compilation. Consultez la documentation officielle pour plus d'informations : [https://www.npmjs.com/package/node-sass](https://www.npmjs.com/package/node-sass)

**Exemple simple:**

**input.scss:**

```scss
body {
  background-color: #f0f0f0;
  color: #333;
}

h1 {
  color: blue;
}
```

**Compilez le fichier:**

```bash
node-sass input.scss output.css
```

**Incluez le fichier CSS:**

```html
<link rel="stylesheet" href="output.css">
```

**Remarque:** `node-sass` utilise le compilateur Sass C++ sous le capot. Il est important de s'assurer que ce compilateur est installé sur votre système.

## Ressources supplémentaires:

* **Documentation officielle de `node-sass`:** [https://www.npmjs.com/package/node-sass](https://www.npmjs.com/package/node-sass)
* **Documentation de Sass:** [https://sass-lang.com/documentation](https://sass-lang.com/documentation)




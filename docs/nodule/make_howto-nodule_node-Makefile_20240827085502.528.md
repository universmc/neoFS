## Comment utiliser le nodule `node-makefile`

Le nodule `node-makefile` vous permet d'utiliser les principes de Makefiles dans vos projets Node.js.  

**Voici comment l'utiliser :**

1. **Installation:**

```bash
npm install node-makefile
```

2. **Création d'un fichier Makefile:**

Créez un fichier `Makefile` dans le répertoire racine de votre projet.  

**Exemple simple:**

```makefile
# Définition de la cible principale
all: build test

# Cible build: Compilez votre code
build:
    node index.js > output.js

# Cible test: Exécutez vos tests
test:
    jest
```

3. **Exécution des cibles:**

Utilisez `node-makefile` pour exécuter les cibles définies dans votre `Makefile`.

* `make`: Exécute la cible `all` par défaut.
* `make build`: Exécute la cible `build`.
* `make test`: Exécute la cible `test`.


**Fonctionnalités:**

* **Définition de cibles:**  Définissez des tâches spécifiques comme `build`, `test`, `clean` etc. 
* **Dépendances:** Spécifiez les dépendances entre les cibles pour exécuter les tâches dans l'ordre correct.
* **Variables:** Définissez des variables pour personnaliser votre Makefile.
* **Règles:** Créez des règles pour automatiser des tâches répétitives.

**Avantages:**

* **Automatisation:** Simplifiez la gestion des tâches répétitives comme la compilation, le test et la construction du projet.
* **Organisation:** Structurez votre projet avec des cibles et des dépendances claires.
* **Partage:** Facilitez le partage et la collaboration sur vos projets.

**Ressources:**

* [Documentation officielle de `node-makefile`](https://www.npmjs.com/package/node-makefile)
* [Tutoriels Makefiles](https://www.tutorialspoint.com/make/index.htm)




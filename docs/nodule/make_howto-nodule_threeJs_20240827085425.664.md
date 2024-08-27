## Comment utiliser Three.js dans un projet Node.js

Three.js est une bibliothèque JavaScript puissante pour créer des expériences 3D dans le navigateur. Bien qu'elle soit principalement utilisée côté client, vous pouvez l'intégrer à des projets Node.js pour générer des scènes 3D statiques ou animées, les exporter en différents formats ou les utiliser pour des tâches d'analyse et de manipulation de modèles 3D.

**Voici les étapes pour utiliser Three.js dans un projet Node.js :**

1. **Installation :**

   Utilisez npm ou yarn pour installer Three.js et ses dépendances :

   ```bash
   npm install three
   ```

2. **Création d'un serveur Node.js :**

   Créez un fichier `index.js` ou similaire pour votre serveur. 

3. **Intégration de Three.js :**

   Importez les modules nécessaires de Three.js dans votre serveur Node.js.

   ```javascript
   const THREE = require('three');
   ```

4. **Création de la scène 3D :**

   Créez une scène Three.js, une caméra et un renderer :

   ```javascript
   const scene = new THREE.Scene();
   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
   const renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

5. **Ajout d'objets à la scène :**

   Créez des objets 3D (cubes, sphères, etc.) et ajoutez-les à la scène :

   ```javascript
   const geometry = new THREE.BoxGeometry();
   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
   const cube = new THREE.Mesh(geometry, material);
   scene.add(cube);
   ```

6. **Animation :**

   Utilisez une boucle d'animation pour mettre à jour la position des objets et dessiner la scène :

   ```javascript
   function animate() {
     requestAnimationFrame(animate);
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene, camera);
   }
   animate();
   ```

7. **Exécution du serveur :**

   Lancez votre serveur Node.js pour afficher la scène 3D :

   ```bash
   node index.js
   ```

**Points importants :**

* **Rendering côté serveur :**

  Il existe des bibliothèques comme `three-render-to-canvas` qui permettent de rendre des scènes Three.js côté serveur et d'exporter l'image en format JPEG, PNG, etc.

* **Formats 3D :**

  Vous pouvez utiliser des modèles 3D dans différents formats (OBJ, GLTF, FBX) avec Three.js.

* **Interaction utilisateur :**

  Si vous souhaitez interagir avec la scène 3D, vous devrez utiliser un framework web comme React ou Vue.js pour gérer l'interface utilisateur et les événements utilisateur.



En résumé, bien que Three.js soit principalement utilisé côté client, il peut être intégré à des projets Node.js pour générer et manipuler des scènes 3D statiques ou animées. 



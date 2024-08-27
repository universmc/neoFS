const fs = require("fs");
const path = require("path"); // Ajouté pour utiliser path.join
const Groq = require("groq-sdk");
const groq = new Groq();
const packageNode = new Groq("./package.json");

// // Charger les fichiers JSON de rôles Groq
 const role = JSON.parse(fs.readFileSync(path.join(__dirname, 'role.json'), 'utf8'));

// const rolesAssistant = JSON.parse(fs.readFileSync(path.join(__dirname, 'roles/roles-assistant.json'), 'utf8'));
// const rolesUser = JSON.parse(fs.readFileSync(path.join(__dirname, 'roles/roles-user.json'), 'utf8'));
const work = `
[object Object]+[object Object] 

Phase 1 : Initialisation de l'instance

* Création d'un répertoire de travail
* Installation des dépendances nécessaires (three.js, groq-sdk)
* Configuration de base

Phase 2 : Conceptualisation mathématiques et Gémométrie

* Définition des concepts clés (schéma de pliage, formats informatique utilisables)
* Création d'une structure de données pour représenter un pliage
* Création d'une fonction pour convertir les étapes de pliage en coordonnées 3D

Phase 3 : Configuration 

* Création d'un fichier HTML pour afficher le pliag * Création d'un fichier SCSS pour gérer la grille d'affichag * Création d'un fichier JavaScript pour gérer les étapes de pliage et les animation * Intégration de la bibliothèque three.js pour l'affichage 3 * Intégration de la bibliothèque groq-sdk pour la programmation du format de répons * Ajout de timecodes (timestamp Unix) pour chaque étape de pliage

Phase 4 : Test et Déploiement

* Test de l'application
* Déploiement sur un serveur web

Note: Les étapes ci-dessus sont un exemple de plan de développement pour un projet d'origami en utilisant des technologies web. Il est possible que des étapes supplémentaires ou différentes soient nécessaires en fonction des besoins spécifiques du projet.

`
const dev = `${packageNode}+${role}+${work}`
async function main() {
    groq.chat.completions.create({
        messages: [
            {role: "system", name:"systemDream", content:"✨_pi : Phase 1 > Initialisation de l'instance"},
            {role: "assistant", name:"✨_pi", content: "Initialisation en cours..."},
            {role: "assistant", name:"✨_pi", content: "Analise de la video Youtube > `https://www.youtube.com/watch?v=CiVk1dtRF6Q` pour structuré ta formation"},
            {role: "user", name:"TS", content: "Formation Origami, l’art du pliage au service de la Recherche"},
            {role: "system", name:"systemDream", content:"Phase 2: Conceptualisation mathématiques et Gémométrie"},
            {role: "assistant", name:"✨_pi", content: "Définition des concepts clés schéma de pliage, formats informatique ulisable exemple .html assimié a une feuille de papier le javascript les asyncrone en Json pour les étape du pliage avec timeCode (TimeStamp unix) et le .scss display grid en nanometre pour annimé le pliage avec le cdnJs threeJs et groq-sdk pour la programmation du format de reponse..."},
            //    {role: "user", name:"ts", content: "Attente des concepts role et context"},
            {role: "assistant", name:"✨_pi", content: dev},
            {role: "system", name:"systemDream", content:"Phase 3: Configuration."},
            {role: "user", name:"TS", content: " : Ta réponse devrait être rédigé et encapsulé avec des balise au format HTML en respectant les normes du Web sémantique W3C"},
            {role: "assistant", name:"✨_pi", content: "index.html"},
        // {role: "assistant", name:"✨_pi", content: "Configuration des paramètres système..."},
        // {role: "user", name:"umcTokens", content: "Confirmation de la configuration"},
        // {role: "system", name:"systemDream", content:"Phase 4: Entraînement du modèle IA"},
        // {role: "assistant", name:"✨_pi", content: "Entraînement en cours..."},
        // {role: "user", name:"umcTokens", content: "Suivi de l'entraînement"},
        // // Correction de la duplication et de la faute de frappe
        // {role: "system", name:"systemDream", content:"Phase 5: Itération & Scripts Frontend"},
        // {role: "assistant", name:"✨_pi", content: "Itération sur les scripts Frontend..."},
        // {role: "user", name:"umcTokens", content: "Révision des scripts Frontend"},
        // {role: "system", name:"systemDream", content:"Phase 6: Test & Débogage"},
        // {role: "assistant", name:"✨_pi", content: "Tests et débogage en cours..."},
        // {role: "user", name:"umcTokens", content: "Attente des résultats de test"},
        // {role: "system", name:"systemDream", content:"Phase 7: Validation & Documentation"},
        // {role: "assistant", name:"✨_pi", content: "Validation et création de la documentation..."},
        // {role: "user", name:"umcTokens", content: "Vérification de la documentation"},
        // {role: "system", name:"systemDream", content:"Phase 8: Déploiement de la version système"},
        // {role: "assistant", name:"✨_pi", content: "Préparation au déploiement..."},
        // {role: "user", name:"umcTokens", content: "Prêt pour le déploiement"},
        // {role: "system", name:"systemDream", content:"Phase 9: Annonce de l'affiliation et contribution"},
        // {role: "assistant", name:"✨_pi", content: "Annonce en cours..."},
        // {role: "user", name:"umcTokens", content: "Participation à l'annonce"},
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.5,
        max_tokens: 4096,
        top_p: 1,
        stop: null,
        stream: false
    }).then((chatCompletion) => {
        const htmlContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = path.join("Origami_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html");
        fs.writeFileSync(outputFilePath, htmlContent);
        console.log("Documentation générée et enregistrée dans " + outputFilePath);
    });
}

main();

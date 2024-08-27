const fs = require("fs");
const path = require("path"); // Ajouté pour utiliser path.join
const Groq = require("groq-sdk");
const groq = new Groq();
const packageNode = new Groq("./package.json");

// // Charger les fichiers JSON de rôles Groq
// const rolesSystem = JSON.parse(fs.readFileSync(path.join(__dirname, 'roles/roles-system.json'), 'utf8'));
// const rolesAssistant = JSON.parse(fs.readFileSync(path.join(__dirname, 'roles/roles-assistant.json'), 'utf8'));
// const rolesUser = JSON.parse(fs.readFileSync(path.join(__dirname, 'roles/roles-user.json'), 'utf8'));

async function main() {
    groq.chat.completions.create({
        messages: [
            {role: "system", name:"systemDream", content:"✨_pi : Phase 1 > Initialisation de l'instance"},
            {role: "assistant", name:"✨_pi", content: "Initialisation en cours..."},
            {role: "assistant", name:"✨_pi", content: "Analyse de la video Youtube > `https://www.youtube.com/watch?v=CiVk1dtRF6Q` pour structuré ta formation"},
            {role: "user", name:"umc", content: "Formation Origami, l’art du pliage au service de la Recherche"},
            {role: "system", name:"systemDream", content:"Phase 2: Conceptualisation mathématiques et Gémométrie"},
            {role: "assistant", name:"✨_pi", content: "Définition des concepts clés schéma de pliage, formats informatique ulisable exemple .html assimié a une feuille de papier le javascript les asyncrone en Json pour les étape du pliage avec timeCode (TimeStamp unix) et le .scss display grid en nanometre pour annimé le pliage avec le cdnJs threeJs et groq-sdk pour la programmation du format de reponse..."},
            {role: "user", name:"umc", content: "dans ce contexte nous allons faire des recherches sur certains algorithmes fractal en obtenant une approche métaphysique ouvert au calcul quantique pour cela nous allons nous référer à Pythagore sur Évolution de l'embranchement grâce a la géométrie du triangle rectangle et de la premier division, Une citation de Pythagore « toute chose des nombres » pourra t'aider dans la démarche de l'en faire des recherches aussi sur, René Descartes pour son intégration des vecteurs au travers des relation de Challes et donc de vecteur ou matrice vectoriel dans une phrase ou prompt par exemple : une chose qui est toujours vrai : relier 2 points en eux forme toujours une droite ou ligne et donc pliable puis fait des recherche sur les algorithmes de Mr Fibonacci et la représentation de la spirale dans la nature la nature se plie se déplie au gré de son évolution dans le temps exemple d'une rose"},
            {role: "system", name:"systemDream", content:"Phase 3: Configuration"},
            {role: "assistant", name:"✨_pi", content:"tes réponses devront être rédigé au format !HTML:5 tu pourras mettre des couleurs grâce au langage de programmation feuille de style en CSS créer des animations en scss et JavaScript et des infrastructures ou des modèles schéma, étapes de pliage au format json et / ou graphQl gql, Pour cela tu pourras utiliser un archiviste le copilote de GitHub et les normes de validation du Web sémantique W3C Tu présentera donc le plan de développement l'orgimi dans un canvas ou figure avec les libs cndJS (threeJS) "},
            {role: "user", name:"umc", content: "Configuration des paramètres système..[epoch (formation, recherche, présentation{plan,étape,schéma[pliage]figure,media,video})]."},
            {role: "assistant", name:"✨_pi", content: "Confirmation de la configuration"},
            {role: "system", name:"systemDream", content:"Phase 4: Entraînement du modèle IA gemma2-9b-it"},
            {role: "assistant", name:"✨_pi", content: "génération d'une page index.html complète en html:5 entre intégrant la présentation de la formation, l'analyse sommaire de la video youtube sur l'art de l'origami, les étapes et le schéma de pliage de la feuille style css les <script>(<figures/> en javascript)</script> dans un premier temps section par section puis Puis tu intégrera les asynchrone js/json les algorithmes en JavaScript avec les librairies afin de générer le canevas et donc le média vidéo dans la page HTML "},
//            {role: "user", name:"umc", content:`
//                {
//  "exercice": {
//    "titre": "Exercice 1 - Origami",
//    "presentation": {
//      "texte": "Dans ce premier exercice, nous aborderons la géométrie et les algorithmes utilisés dans l'art du pliage, l'origami. Nous nous référerons à Pythagore et sa citation \"toute chose des nombres\" pour appréhender la conceptualisation mathématique et la géométrie du triangle, première division. Nous étudierons également la suite de Fibonacci et la représentation de la spirale dans la nature."
//    },
//    "etapes": [
//      {
//        "numero": 1,
//        "image": "step1.png",
//        "texte": "Commencez par plier la feuille en deux dans le sens de la longueur, puis ouvrez-la."
//      },
//      {
//        "numero": 2,
//        "image": "step2.png",
//        "texte": "Prenez un coin de la feuille et pliez-le vers le pli central, en alignant les bords. Répétez l'opération de l'autre côté."
//      },
//      // ...
//    ],
//    "schemaPliage": {
//      "image": "schema-pliage.png",
//      "texte": "Schéma de pliage"
//    },
//    "media": {
//      "type": "video",
//      "source": "origami.mp4"
//    }
//  }
//`},
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
        model: "gemma2-9b-it",
        temperature: 0.4,
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

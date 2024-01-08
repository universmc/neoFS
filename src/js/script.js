// Chargement et conversion du contenu Markdown
fetch('src/inc/stepID/step1.md')
  .then(response => {
    if (!response.ok) {
        throw new Error(`Erreur HTTP, statut ${response.status}`);
    }
    return response.text();
  })
  .then(markdown => {
    const htmlContent = marked(markdown);
    document.querySelector('.devops-item').innerHTML = htmlContent;
  })
  .catch(error => console.error('Erreur de chargement du fichier Markdown:', error));

// Chargement des données JSON pour la metaDescription, l'image, et le lien
fetch('backend/json/stepId.json')
  .then(response => {
    if (!response.ok) {
        throw new Error(`Erreur HTTP, statut ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const step1Data = data.steps.find(step => step.numeroId === 1);
    document.getElementById('metaDescription_step1').textContent = step1Data.metaDescription;
    document.getElementById('img_step1').src = step1Data.imgUrl;
    document.getElementById('mdUrl_step1').href = step1Data.mdUrl;
  })
  .catch(error => console.error('Erreur de chargement des données JSON:', error));

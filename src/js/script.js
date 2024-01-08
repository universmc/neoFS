fetch('http://localhost:3000/json/dev-plan')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const contentDiv = document.getElementById('devPlanContent');
    
    Object.entries(data).forEach(([key, value]) => {
      const section = document.createElement('section');
      section.innerHTML = `<h2>${key}</h2><p>${JSON.stringify(value, null, 2)}</p>`;
      contentDiv.appendChild(section);
    });
  })
  .catch(error => {
    console.error('Error fetching the development plan:', error);
    // Vous pouvez afficher un message d'erreur dans votre HTML ici
  });

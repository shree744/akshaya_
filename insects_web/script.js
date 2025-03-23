// Database of plants and insects with their interactions
const database = {
    plants: [
      { id: 'tomato', name: 'Tomato (Solanum lycopersicum)' },
      { id: 'corn', name: 'Corn (Zea mays)' },
      { id: 'rose', name: 'Rose (Rosa spp.)' },
      { id: 'apple', name: 'Apple Tree (Malus domestica)' },
      { id: 'oak', name: 'Oak Tree (Quercus spp.)' },
      { id: 'wheat', name: 'Wheat (Triticum spp.)' },
      { id: 'pine', name: 'Pine Tree (Pinus spp.)' },
      { id: 'rice', name: 'Rice (Oryza sativa)' },
      { id: 'potato', name: 'Potato (Solanum tuberosum)' },
      { id: 'coffee', name: 'Coffee Plant (Coffea spp.)' },
      { id: 'sunflower', name: 'Sunflower (Helianthus annuus)' },
      { id: 'strawberry', name: 'Strawberry (Fragaria ananassa)' },
      { id: 'cucumber', name: 'Cucumber (Cucumis sativus)' },
      { id: 'carrot', name: 'Carrot (Daucus carota)' },
      { id: 'cotton', name: 'Cotton (Gossypium hirsutum)' },
      { id: 'citrus', name: 'Citrus (Citrus spp.)' },
      { id: 'maple', name: 'Maple Tree (Acer spp.)' },
      { id: 'soybean', name: 'Soybean (Glycine max)' },
      { id: 'grape', name: 'Grape (Vitis vinifera)' },
      { id: 'banana', name: 'Banana (Musa spp.)' }
    ],
    
    insects: [
      { id: 'ladybug', name: 'Ladybug (Coccinellidae)' },
      { id: 'aphid', name: 'Aphid (Aphidoidea)' },
      { id: 'bee', name: 'Honey Bee (Apis mellifera)' },
      { id: 'beetle', name: 'Japanese Beetle (Popillia japonica)' },
      { id: 'butterfly', name: 'Monarch Butterfly (Danaus plexippus)' },
      { id: 'weevil', name: 'Boll Weevil (Anthonomus grandis)' },
      { id: 'ant', name: 'Fire Ant (Solenopsis invicta)' },
      { id: 'grasshopper', name: 'Grasshopper (Caelifera)' },
      { id: 'spider', name: 'Garden Spider (Araneidae)' },
      { id: 'moth', name: 'Codling Moth (Cydia pomonella)' }
    ],
    
    relationships: [
      {
        plantId: 'tomato',
        insectId: 'ladybug',
        type: 'beneficial',
        description: 'Ladybugs prey on harmful pests like aphids and whiteflies that attack tomato plants.'
      },
      {
        plantId: 'tomato',
        insectId: 'aphid',
        type: 'harmful',
        description: 'Aphids suck sap from tomato plants, causing yellowing, stunted growth, and leaf curl.'
      },
      {
        plantId: 'corn',
        insectId: 'bee',
        type: 'beneficial',
        description: 'While corn is primarily wind-pollinated, bees can increase pollination efficiency.'
      },
      {
        plantId: 'corn',
        insectId: 'beetle',
        type: 'harmful',
        description: 'Japanese beetles feed on corn silk, preventing proper pollination and kernel development.'
      },
      {
        plantId: 'rose',
        insectId: 'aphid',
        type: 'harmful',
        description: 'Aphids cluster on rose buds and new growth, causing distortion and weakening the plant.'
      },
      {
        plantId: 'rose',
        insectId: 'ladybug',
        type: 'beneficial',
        description: 'Ladybugs are natural predators of aphids, helping to control these common rose pests.'
      },
      {
        plantId: 'apple',
        insectId: 'bee',
        type: 'beneficial',
        description: 'Bees are essential pollinators for apple trees, ensuring fruit production.'
      },
      {
        plantId: 'apple',
        insectId: 'moth',
        type: 'harmful',
        description: 'Codling moth larvae bore into apples, causing significant fruit damage and loss.'
      },
      {
        plantId: 'oak',
        insectId: 'butterfly',
        type: 'neutral',
        description: 'Many butterflies rest on oak trees but do not significantly impact their health.'
      },
      {
        plantId: 'oak',
        insectId: 'ant',
        type: 'beneficial',
        description: 'Certain ants protect oak trees from defoliating insects in exchange for habitat.'
      },
      {
        plantId: 'wheat',
        insectId: 'weevil',
        type: 'harmful',
        description: 'Weevils can devastate stored wheat grains, causing significant post-harvest losses.'
      },
      {
        plantId: 'wheat',
        insectId: 'spider',
        type: 'beneficial',
        description: 'Spiders prey on many wheat pests, providing natural pest control.'
      },
      {
        plantId: 'pine',
        insectId: 'beetle',
        type: 'harmful',
        description: 'Bark beetles can introduce fungal infections that can kill pine trees.'
      },
      {
        plantId: 'pine',
        insectId: 'ant',
        type: 'neutral',
        description: 'Many ant species use pine trees for shelter without significantly impacting the tree.'
      },
      {
        plantId: 'rice',
        insectId: 'grasshopper',
        type: 'harmful',
        description: 'Grasshoppers can consume large amounts of rice foliage, reducing yield.'
      },
      {
        plantId: 'rice',
        insectId: 'spider',
        type: 'beneficial',
        description: 'Spiders in rice paddies help control pest populations that damage rice plants.'
      },
      {
        plantId: 'potato',
        insectId: 'beetle',
        type: 'harmful',
        description: 'Colorado potato beetles can rapidly defoliate potato plants, severely reducing yields.'
      },
      {
        plantId: 'potato',
        insectId: 'ladybug',
        type: 'beneficial',
        description: 'Ladybugs prey on aphids and small insects that can damage potato plants.'
      },
      {
        plantId: 'coffee',
        insectId: 'bee',
        type: 'beneficial',
        description: 'Bees improve pollination of coffee flowers, increasing yield and quality.'
      },
      {
        plantId: 'coffee',
        insectId: 'beetle',
        type: 'harmful',
        description: 'Coffee berry borers are beetles that damage coffee berries, reducing crop value.'
      },
      // New relationships for additional plants
      {
        plantId: 'sunflower',
        insectId: 'bee',
        type: 'beneficial',
        description: 'Bees are primary pollinators for sunflowers, increasing seed production and quality.'
      },
      {
        plantId: 'sunflower',
        insectId: 'beetle',
        type: 'harmful',
        description: 'Sunflower beetles feed on foliage and can severely damage young plants.'
      },
      {
        plantId: 'strawberry',
        insectId: 'bee',
        type: 'beneficial',
        description: 'Bees pollinate strawberry flowers, resulting in better-formed, larger fruits.'
      },
      {
        plantId: 'strawberry',
        insectId: 'aphid',
        type: 'harmful',
        description: 'Aphids stunt strawberry plant growth and can transmit viral diseases.'
      },
      {
        plantId: 'cucumber',
        insectId: 'bee',
        type: 'beneficial',
        description: 'Bees are essential for cucumber pollination, improving fruit set and reducing misshapen fruits.'
      },
      {
        plantId: 'cucumber',
        insectId: 'beetle',
        type: 'harmful',
        description: 'Cucumber beetles damage leaves and stems and can transmit bacterial wilt disease.'
      },
      {
        plantId: 'carrot',
        insectId: 'ladybug',
        type: 'beneficial',
        description: 'Ladybugs control aphid populations that can damage carrot foliage.'
      },
      {
        plantId: 'carrot',
        insectId: 'moth',
        type: 'harmful',
        description: 'Carrot rust flies (a type of moth) lay eggs near carrot plants, and larvae tunnel into roots.'
      },
      {
        plantId: 'cotton',
        insectId: 'ladybug',
        type: 'beneficial',
        description: 'Ladybugs prey on cotton aphids and other small pests, reducing crop damage.'
      },
      {
        plantId: 'cotton',
        insectId: 'weevil',
        type: 'harmful',
        description: 'Boll weevils destroy cotton bolls by laying eggs inside them, causing severe yield losses.'
      },
      {
        plantId: 'citrus',
        insectId: 'ladybug',
        type: 'beneficial',
        description: 'Ladybugs consume scale insects and aphids that damage citrus trees.'
      },
      {
        plantId: 'citrus',
        insectId: 'aphid',
        type: 'harmful',
        description: 'Aphids feed on citrus leaves, causing curling and potential transmission of citrus tristeza virus.'
      },
      {
        plantId: 'maple',
        insectId: 'spider',
        type: 'beneficial',
        description: 'Spiders control populations of pests that defoliate maple trees.'
      },
      {
        plantId: 'maple',
        insectId: 'aphid',
        type: 'harmful',
        description: 'Aphids produce honeydew that leads to sooty mold on maple leaves, reducing photosynthesis.'
      },
      {
        plantId: 'soybean',
        insectId: 'bee',
        type: 'beneficial',
        description: 'Bees increase soybean pollination efficiency, potentially increasing yield.'
      },
      {
        plantId: 'soybean',
        insectId: 'beetle',
        type: 'harmful',
        description: 'Japanese beetles skeletonize soybean leaves, reducing photosynthetic area.'
      },
      {
        plantId: 'grape',
        insectId: 'ladybug',
        type: 'beneficial',
        description: 'Ladybugs feed on grape phylloxera and other harmful insects affecting grapevines.'
      },
      {
        plantId: 'grape',
        insectId: 'moth',
        type: 'harmful',
        description: 'Grape berry moths damage grape clusters by feeding on berries and creating entry points for disease.'
      },
      {
        plantId: 'banana',
        insectId: 'ant',
        type: 'beneficial',
        description: 'Certain ant species protect banana plants from herbivorous insects.'
      },
      {
        plantId: 'banana',
        insectId: 'weevil',
        type: 'harmful',
        description: 'Banana weevils tunnel through the corm of banana plants, weakening them and reducing yields.'
      },
      {
        plantId: 'sunflower',
        insectId: 'butterfly',
        type: 'neutral',
        description: 'Monarch butterflies occasionally visit sunflowers for nectar but have minimal impact on the plant.'
      },
      {
        plantId: 'strawberry',
        insectId: 'spider',
        type: 'beneficial',
        description: 'Spiders prey on various strawberry pests, acting as natural pest control.'
      },
      {
        plantId: 'cucumber',
        insectId: 'ant',
        type: 'neutral',
        description: 'Ants occasionally visit cucumber flowers for nectar without significant impact on the plant.'
      },
      {
        plantId: 'carrot',
        insectId: 'ant',
        type: 'neutral',
        description: 'Ants typically don\'t directly affect carrot plants, though they may farm aphids nearby.'
      },
      {
        plantId: 'cotton',
        insectId: 'spider',
        type: 'beneficial',
        description: 'Spiders prey on numerous cotton pests, helping reduce pesticide dependency.'
      },
      {
        plantId: 'citrus',
        insectId: 'bee',
        type: 'beneficial',
        description: 'Bees pollinate citrus flowers, improving fruit set and quality in many varieties.'
      },
      {
        plantId: 'maple',
        insectId: 'moth',
        type: 'harmful',
        description: 'Maple leafcutter moths create distinctive circular cuts in maple leaves for their cocoons.'
      },
      {
        plantId: 'soybean',
        insectId: 'grasshopper',
        type: 'harmful',
        description: 'Grasshoppers can consume large amounts of soybean foliage, especially during drought.'
      },
      {
        plantId: 'grape',
        insectId: 'bee',
        type: 'neutral',
        description: 'Bees visit grape flowers but most grape varieties are wind-pollinated.'
      },
      {
        plantId: 'banana',
        insectId: 'spider',
        type: 'beneficial',
        description: 'Spiders help control various insect pests that affect banana plants.'
      }
    ]
  };
  
  // DOM elements
  const plantSelect = document.getElementById('plantSelect');
  const insectSelect = document.getElementById('insectSelect');
  const relationshipSelect = document.getElementById('relationshipSelect');
  const resultsInfo = document.getElementById('resultsInfo');
  const resultsContainer = document.getElementById('results');
  
  // Upload section elements
  const uploadArea = document.getElementById('uploadArea');
  const uploadPrompt = document.getElementById('uploadPrompt');
  const fileInput = document.getElementById('fileInput');
  const previewContainer = document.getElementById('previewContainer');
  const imagePreview = document.getElementById('imagePreview');
  const removeButton = document.getElementById('removeButton');
  const analyzeButton = document.getElementById('analyzeButton');
  const resultContainer = document.getElementById('resultContainer');
  const resultContent = document.getElementById('resultContent');
  
  // Common plant and insect features for image recognition simulation
  const plantFeatures = [
    { keywords: ['tomato', 'red', 'fruit', 'solanum'], id: 'tomato' },
    { keywords: ['corn', 'yellow', 'maize', 'cob', 'zea'], id: 'corn' },
    { keywords: ['rose', 'flower', 'red', 'pink', 'thorns'], id: 'rose' },
    { keywords: ['apple', 'fruit', 'red', 'green', 'malus'], id: 'apple' },
    { keywords: ['oak', 'tree', 'leaves', 'acorn', 'quercus'], id: 'oak' },
    { keywords: ['sunflower', 'yellow', 'large', 'helianthus'], id: 'sunflower' },
    { keywords: ['strawberry', 'red', 'fruit', 'fragaria'], id: 'strawberry' },
    { keywords: ['cucumber', 'green', 'vegetable', 'cucumis'], id: 'cucumber' },
  ];
  
  const insectFeatures = [
    { keywords: ['ladybug', 'red', 'spots', 'beetle', 'coccinellidae'], id: 'ladybug' },
    { keywords: ['aphid', 'small', 'green', 'pest', 'aphidoidea'], id: 'aphid' },
    { keywords: ['bee', 'yellow', 'black', 'stripes', 'apis', 'honey'], id: 'bee' },
    { keywords: ['beetle', 'japanese', 'green', 'popillia'], id: 'beetle' },
    { keywords: ['butterfly', 'monarch', 'orange', 'wings', 'danaus'], id: 'butterfly' },
    { keywords: ['ant', 'small', 'black', 'red', 'solenopsis', 'fire'], id: 'ant' },
  ];
  
  // Populate select dropdowns
  function populateDropdowns() {
    // Populate plants dropdown
    database.plants.forEach(plant => {
      const option = document.createElement('option');
      option.value = plant.id;
      option.textContent = plant.name;
      plantSelect.appendChild(option);
    });
    
    // Populate insects dropdown
    database.insects.forEach(insect => {
      const option = document.createElement('option');
      option.value = insect.id;
      option.textContent = insect.name;
      insectSelect.appendChild(option);
    });
  }
  
  // Filter relationships based on selected options
  function filterRelationships() {
    const selectedPlant = plantSelect.value;
    const selectedInsect = insectSelect.value;
    const selectedRelationship = relationshipSelect.value;
    
    let filteredRelationships = database.relationships;
    
    // Apply plant filter
    if (selectedPlant !== 'all') {
      filteredRelationships = filteredRelationships.filter(rel => rel.plantId === selectedPlant);
    }
    
    // Apply insect filter
    if (selectedInsect !== 'all') {
      filteredRelationships = filteredRelationships.filter(rel => rel.insectId === selectedInsect);
    }
    
    // Apply relationship type filter
    if (selectedRelationship !== 'all') {
      filteredRelationships = filteredRelationships.filter(rel => rel.type === selectedRelationship);
    }
    
    return filteredRelationships;
  }
  
  // Update results info text
  function updateResultsInfo(filteredRelationships) {
    const selectedPlant = plantSelect.value;
    const selectedInsect = insectSelect.value;
    const selectedRelationship = relationshipSelect.value;
    
    let infoText = `Displaying ${filteredRelationships.length} `;
    
    if (selectedRelationship !== 'all') {
      infoText += `${selectedRelationship} `;
    }
    
    infoText += 'relationship';
    if (filteredRelationships.length !== 1) infoText += 's';
    
    if (selectedPlant !== 'all') {
      const plantName = database.plants.find(p => p.id === selectedPlant).name;
      infoText += ` for ${plantName}`;
    } else {
      infoText += ' for all plants';
    }
    
    if (selectedInsect !== 'all') {
      const insectName = database.insects.find(i => i.id === selectedInsect).name;
      infoText += ` and ${insectName}`;
    }
    
    resultsInfo.innerHTML = `<p>${infoText}</p>`;
  }
  
  // Render relationship cards
  function renderRelationships(relationships) {
    resultsContainer.innerHTML = '';
    
    if (relationships.length === 0) {
      resultsContainer.innerHTML = '<div class="loading">No relationships found matching your criteria.</div>';
      return;
    }
    
    relationships.forEach(relationship => {
      const plant = database.plants.find(p => p.id === relationship.plantId);
      const insect = database.insects.find(i => i.id === relationship.insectId);
      
      const card = document.createElement('div');
      card.className = `relationship-card ${relationship.type}`;
      
      card.innerHTML = `
        <div class="card-header ${relationship.type}">
          <h3>${insect.name} + ${plant.name}</h3>
          <span>${relationship.type.charAt(0).toUpperCase() + relationship.type.slice(1)}</span>
        </div>
        <div class="card-body">
          <p><strong>Plant:</strong> ${plant.name}</p>
          <p><strong>Insect:</strong> ${insect.name}</p>
          <p>${relationship.description}</p>
        </div>
      `;
      
      resultsContainer.appendChild(card);
    });
  }
  
  // Update display based on selected filters
  function updateDisplay() {
    const filteredRelationships = filterRelationships();
    updateResultsInfo(filteredRelationships);
    renderRelationships(filteredRelationships);
  }
  
  // Event listeners for filter changes
  plantSelect.addEventListener('change', updateDisplay);
  insectSelect.addEventListener('change', updateDisplay);
  relationshipSelect.addEventListener('change', updateDisplay);
  
  // Initialize the page
  function initialize() {
    populateDropdowns();
    updateDisplay();
    initializeImageUpload();
  }
  
  // Image upload functionality
  function initializeImageUpload() {
    // Handle file selection
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file && file.type.startsWith('image/')) {
        displayPreview(file);
      }
    });
  
    // Handle drag and drop
    uploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadArea.classList.add('dragover');
    });
  
    uploadArea.addEventListener('dragleave', () => {
      uploadArea.classList.remove('dragover');
    });
  
    uploadArea.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadArea.classList.remove('dragover');
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        fileInput.files = e.dataTransfer.files;
        displayPreview(file);
      }
    });
  
    // Handle remove button click
    removeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      resetUpload();
    });
  
    // Handle analyze button click
    analyzeButton.addEventListener('click', () => {
      analyzeImage();
    });
  }
  
  // Display image preview
  function displayPreview(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.src = e.target.result;
      uploadPrompt.style.display = 'none';
      previewContainer.style.display = 'flex';
      analyzeButton.disabled = false;
    };
    reader.readAsDataURL(file);
  }
  
  // Reset upload area
  function resetUpload() {
    fileInput.value = '';
    imagePreview.src = '';
    uploadPrompt.style.display = 'flex';
    previewContainer.style.display = 'none';
    analyzeButton.disabled = true;
    resultContainer.style.display = 'none';
  }
  
  // Simulate image analysis
  function analyzeImage() {
    // Show loading state
    analyzeButton.disabled = true;
    analyzeButton.textContent = 'Analyzing...';
    resultContainer.style.display = 'none';
    
    // Simulate processing time
    setTimeout(() => {
      const analysis = simulateImageAnalysis();
      displayAnalysisResult(analysis);
      analyzeButton.textContent = 'Analyze Image';
      analyzeButton.disabled = false;
    }, 2000);
  }
  
  // Simulate image recognition (in a real app, this would use an actual ML model)
  function simulateImageAnalysis() {
    // For demo purposes, randomly decide if it's a plant or insect
    const isPlant = Math.random() > 0.5;
    
    if (isPlant) {
      // Randomly select a plant from the database
      const randomPlant = database.plants[Math.floor(Math.random() * database.plants.length)];
      const plantInfo = plantFeatures.find(p => p.id === randomPlant.id) || plantFeatures[0];
      
      // Find relationships for this plant
      const relationships = database.relationships.filter(r => r.plantId === randomPlant.id);
      
      // Determine if it's mostly harmful or beneficial
      const harmful = relationships.filter(r => r.type === 'harmful').length;
      const beneficial = relationships.filter(r => r.type === 'beneficial').length;
      
      let effect = 'neutral';
      if (harmful > beneficial) effect = 'harmful';
      else if (beneficial > harmful) effect = 'beneficial';
      
      return {
        type: 'plant',
        id: randomPlant.id,
        name: randomPlant.name,
        effect: effect,
        confidence: Math.floor(Math.random() * 30 + 70), // Random confidence between 70-99%
        features: plantInfo.keywords.join(', '),
        relationships: relationships
      };
    } else {
      // Randomly select an insect from the database
      const randomInsect = database.insects[Math.floor(Math.random() * database.insects.length)];
      const insectInfo = insectFeatures.find(i => i.id === randomInsect.id) || insectFeatures[0];
      
      // Find relationships for this insect
      const relationships = database.relationships.filter(r => r.insectId === randomInsect.id);
      
      // Determine if it's mostly harmful or beneficial
      const harmful = relationships.filter(r => r.type === 'harmful').length;
      const beneficial = relationships.filter(r => r.type === 'beneficial').length;
      
      let effect = 'neutral';
      if (harmful > beneficial) effect = 'harmful';
      else if (beneficial > harmful) effect = 'beneficial';
      
      return {
        type: 'insect',
        id: randomInsect.id,
        name: randomInsect.name,
        effect: effect,
        confidence: Math.floor(Math.random() * 30 + 70), // Random confidence between 70-99%
        features: insectInfo.keywords.join(', '),
        relationships: relationships
      };
    }
  }
  
  // Display analysis results
  function displayAnalysisResult(analysis) {
    let iconClass = 'neutral';
    let iconSymbol = '❔';
    let resultTitle = 'Neutral';
    
    if (analysis.effect === 'beneficial') {
      iconClass = 'beneficial';
      iconSymbol = '✓';
      resultTitle = 'Beneficial';
    } else if (analysis.effect === 'harmful') {
      iconClass = 'harmful';
      iconSymbol = '✗';
      resultTitle = 'Harmful';
    }
    
    // Create the result HTML
    const resultHTML = `
      <div class="result-icon ${iconClass}">${iconSymbol}</div>
      <div class="result-message">
        <h4>Identified as ${analysis.name}</h4>
        <p>This ${analysis.type} is generally considered <strong>${resultTitle}</strong> 
        ${analysis.type === 'plant' ? 'to insects' : 'to plants'}</p>
        <p>Confidence: ${analysis.confidence}%</p>
      </div>
    `;
    
    // Create details section with relationships
    let relationshipsHTML = '';
    if (analysis.relationships.length > 0) {
      relationshipsHTML = `
        <div class="result-details">
          <h4>Common ${analysis.type === 'plant' ? 'Insect' : 'Plant'} Interactions:</h4>
          <ul>
      `;
      
      // Show up to 3 relationships
      const displayRelationships = analysis.relationships.slice(0, 3);
      displayRelationships.forEach(rel => {
        const relatedItem = analysis.type === 'plant' 
          ? database.insects.find(i => i.id === rel.insectId)
          : database.plants.find(p => p.id === rel.plantId);
        
        relationshipsHTML += `
          <li>
            <strong>${relatedItem.name}</strong> (${rel.type}): 
            ${rel.description}
          </li>
        `;
      });
      
      relationshipsHTML += `
          </ul>
        </div>
      `;
    }
    
    // Set the result content
    resultContent.innerHTML = resultHTML + relationshipsHTML;
    resultContainer.style.display = 'block';
    
    // Update the filter dropdowns to show more info about this species
    if (analysis.type === 'plant') {
      plantSelect.value = analysis.id;
    } else {
      insectSelect.value = analysis.id;
    }
    
    // Update the relationship display
    updateDisplay();
    
    // Scroll to results
    resultContainer.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Run initialization when the page loads
  document.addEventListener('DOMContentLoaded', initialize);
  
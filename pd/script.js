const plantDiseases = [
    {
      id: 1,
      name: "Late Blight",
      plant: "Tomato",
      severity: "High",
      image: "https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-02/late%20blight%203.jpg",
      shortDescription: "A devastating fungal disease that can destroy tomato crops within days under favorable conditions.",
      symptoms: [
        "Dark, water-soaked spots on leaves, stems, and fruits",
        "White, fuzzy growth on undersides of leaves in humid conditions",
        "Brown lesions on stems",
        "Rapidly spreading leaf death",
        "Firm, dark brown spots on fruits"
      ],
      causes: [
        "Caused by the fungus-like organism Phytophthora infestans",
        "Thrives in cool, wet weather (60-70°F, high humidity)",
        "Spreads by wind, rain splash, and contaminated tools",
        "Can overwinter in potato tubers and volunteer plants"
      ],
      prevention: [
        "Plant resistant varieties when available",
        "Space plants for good air circulation",
        "Avoid overhead irrigation",
        "Apply preventative fungicides during favorable conditions",
        "Remove and destroy infected plants immediately",
        "Rotate crops with non-solanaceous plants"
      ],
      treatment: [
        "Apply fungicides containing copper, chlorothalonil, or mancozeb at first sign",
        "Remove and destroy all infected plant parts",
        "Harvest remaining healthy fruits immediately",
        "Clear all plant debris at end of season",
        "In severe cases, remove and dispose of entire plants"
      ],
      conditions: {
        temperature: "60-68°F (15-20°C) is optimal for disease development",
        humidity: "High humidity (>90%) favors disease spread",
        soil: "Well-draining soil helps prevent disease",
        light: "Full sun helps foliage dry quickly after rain or dew",
        water: "Avoid wetting foliage; use drip irrigation"
      }
    },
    {
      id: 2,
      name: "Powdery Mildew",
      plant: "Cucumber",
      severity: "Medium",
      image: "https://extension.umn.edu/sites/extension.umn.edu/files/powdery-mildew-squash.jpg",
      shortDescription: "A common fungal disease that appears as white powdery spots on leaves, reducing plant vigor and yield.",
      symptoms: [
        "White, powdery spots on upper leaf surfaces",
        "Entire leaves become covered with white powder",
        "Yellowing and premature death of affected leaves",
        "Stunted growth and reduced yields",
        "Distorted leaves and shoots"
      ],
      causes: [
        "Caused by several species of fungi (commonly Podosphaera xanthii or Erysiphe cichoracearum)",
        "Favored by warm, dry days and cool, humid nights",
        "Poor air circulation",
        "Excessive nitrogen fertilization",
        "Overwinters on plant debris"
      ],
      prevention: [
        "Plant resistant varieties",
        "Space plants for good air circulation",
        "Avoid excessive nitrogen fertilization",
        "Remove and destroy affected leaves promptly",
        "Apply preventative fungicides",
        "Use overhead irrigation occasionally to wash spores off leaves"
      ],
      treatment: [
        "Apply fungicides containing sulfur, potassium bicarbonate, or neem oil",
        "Spray a solution of 1 part milk to 9 parts water as an organic treatment",
        "Remove and destroy severely infected plant parts",
        "Increase air circulation around plants",
        "Maintain consistent soil moisture"
      ],
      conditions: {
        temperature: "68-80°F (20-27°C) is optimal for disease development",
        humidity: "High humidity promotes spore germination, but dry leaf surfaces favor infection",
        soil: "Well-draining soil with balanced nutrients",
        light: "Full sun to partial shade",
        water: "Consistent soil moisture; avoid overhead watering"
      }
    },
    {
      id: 3,
      name: "Black Spot",
      plant: "Rose",
      severity: "Medium",
      image: "https://extension.missouri.edu/media/wysiwyg/Extensiondata/Pub/images/mg12/blackspot4.jpg",
      shortDescription: "A common fungal disease that creates black spots on rose leaves, causing defoliation and weakening plants.",
      symptoms: [
        "Circular black spots with feathery margins on leaves",
        "Yellow halos around spots",
        "Leaves turning yellow and dropping prematurely",
        "Reduced flowering",
        "Stems may develop dark lesions"
      ],
      causes: [
        "Caused by the fungus Diplocarpon rosae",
        "Spreads through water splash",
        "Favored by warm, wet conditions",
        "Spores overwinter on fallen leaves and stems",
        "Poor air circulation"
      ],
      prevention: [
        "Plant resistant varieties",
        "Provide good air circulation around plants",
        "Avoid overhead watering",
        "Remove and destroy fallen leaves",
        "Apply preventative fungicides in early spring",
        "Prune to maintain open center"
      ],
      treatment: [
        "Apply fungicides containing chlorothalonil, myclobutanil, or copper",
        "Remove and destroy infected leaves and canes",
        "Apply neem oil or potassium bicarbonate as organic options",
        "Clean up all fallen leaves and debris",
        "Improve air circulation by selective pruning"
      ],
      conditions: {
        temperature: "75-85°F (24-29°C) with wet foliage is ideal for infection",
        humidity: "High humidity promotes disease development",
        soil: "Well-draining soil with balanced nutrients",
        light: "Full sun (6+ hours) helps leaves dry quickly after rain or dew",
        water: "Morning watering at soil level only; avoid wetting foliage"
      }
    },
    {
      id: 4,
      name: "Fire Blight",
      plant: "Apple",
      severity: "High",
      image: "https://extension.usu.edu/pests/ipm/files/uploads/images/fire-blight/fire-blight-tree.jpg",
      shortDescription: "A bacterial disease that causes branches to look as if they've been scorched by fire, potentially killing trees.",
      symptoms: [
        "Blackened, withered blossoms that cling to the tree",
        "Wilted shoots that form a shepherd's crook",
        "Cankers on branches with oozing bacterial slime",
        "Scorched appearance of leaves and branches",
        "Fruit mummification"
      ],
      causes: [
        "Caused by the bacterium Erwinia amylovora",
        "Enters plants through flowers, natural openings, or wounds",
        "Spread by rain, insects, birds, and pruning tools",
        "Favored by warm, wet spring weather",
        "Moves systemically through the plant"
      ],
      prevention: [
        "Plant resistant varieties",
        "Avoid excessive nitrogen fertilization",
        "Apply copper-based sprays during dormant season",
        "Avoid overhead irrigation",
        "Control insect pests that may spread the disease",
        "Inspect regularly during growing season"
      ],
      treatment: [
        "Prune infected branches 12-18 inches below visible symptoms",
        "Sterilize pruning tools between cuts with 10% bleach solution",
        "Apply streptomycin during bloom period (where legal)",
        "Remove and destroy all infected material",
        "Avoid pruning during wet weather"
      ],
      conditions: {
        temperature: "75-85°F (24-29°C) is optimal for disease development",
        humidity: "Wet conditions favor disease spread",
        soil: "Well-draining soil; avoid waterlogged conditions",
        light: "Full sun for optimal tree health",
        water: "Consistent soil moisture; avoid overhead irrigation"
      }
    },
    {
      id: 5,
      name: "Fusarium Wilt",
      plant: "Banana",
      severity: "High",
      image: "https://www.cabi.org/isc/sites/default/files/styles/hero_image/public/panama-disease-tropical-fusarium-trm4.jpg",
      shortDescription: "A devastating soil-borne fungal disease that causes wilting, yellowing, and death of banana plants.",
      symptoms: [
        "Yellowing of the oldest leaves, progressing to younger leaves",
        "Leaves collapse and hang down the pseudostem",
        "Brown discoloration of internal vascular tissue",
        "Split pseudostem with yellow-brown discoloration",
        "Stunted growth and poor fruit development"
      ],
      causes: [
        "Caused by the soil-borne fungus Fusarium oxysporum f. sp. cubense",
        "Spread through infected planting material, soil, water, and tools",
        "Can remain viable in soil for decades",
        "Multiple races affecting different banana varieties",
        "Tropical Race 4 (TR4) threatens Cavendish bananas globally"
      ],
      prevention: [
        "Use disease-free planting material",
        "Plant resistant varieties when available",
        "Implement strict quarantine measures",
        "Clean and disinfect tools and machinery",
        "Avoid moving soil from infected areas",
        "Control water runoff from infected areas"
      ],
      treatment: [
        "No effective chemical treatment exists",
        "Remove and destroy infected plants",
        "Quarantine affected areas",
        "Leave land fallow or plant non-host crops",
        "Hot water treatment for planting materials",
        "Soil solarization may reduce inoculum levels"
      ],
      conditions: {
        temperature: "75-85°F (24-29°C) favors disease development",
        humidity: "High humidity doesn't directly affect this soil-borne disease",
        soil: "Acidic soils (pH<6) increase disease severity; well-draining soil reduces it",
        light: "Full sun for optimal plant health",
        water: "Moderate, consistent moisture; avoid waterlogging"
      }
    },
    {
      id: 6,
      name: "Downy Mildew",
      plant: "Grape",
      severity: "High",
      image: "https://cpb-us-e1.wpmucdn.com/blogs.cornell.edu/dist/0/7265/files/2017/01/picture4-1rjsrr3.jpg",
      shortDescription: "A destructive fungal disease that can devastate grape harvests, affecting leaves, shoots, and fruits.",
      symptoms: [
        "Yellow, angular spots on upper leaf surfaces",
        "White, downy growth on undersides of leaves",
        "Brown, irregular lesions on shoots and stems",
        "Shriveled, discolored fruit clusters",
        "Premature leaf drop"
      ],
      causes: [
        "Caused by the oomycete Plasmopara viticola",
        "Favored by cool, wet conditions",
        "Spreads through water splash and wind",
        "Overwinters in fallen leaves and fruit",
        "Requires standing water for infection"
      ],
      prevention: [
        "Plant resistant varieties",
        "Train vines for optimal air circulation",
        "Remove suckers and excess foliage around fruit zone",
        "Apply preventative fungicides before symptoms appear",
        "Avoid overhead irrigation",
        "Remove leaf litter at end of season"
      ],
      treatment: [
        "Apply fungicides containing copper, mancozeb, or phosphorous acid",
        "Remove and destroy heavily infected leaves and clusters",
        "Improve air circulation through pruning",
        "Maintain balanced nutrition to improve plant health",
        "Continue protective spray program until dry conditions prevail"
      ],
      conditions: {
        temperature: "60-68°F (15-20°C) is optimal for disease development",
        humidity: "High humidity (>85%) favors disease spread",
        soil: "Well-draining soil reduces splash dispersal",
        light: "Open canopy for light penetration and air circulation",
        water: "Drip irrigation to avoid wetting foliage"
      }
    },
    {
      id: 7,
      name: "Rust",
      plant: "Bean",
      severity: "Medium",
      image: "https://extension.umn.edu/sites/extension.umn.edu/files/bean-rust.jpg",
      shortDescription: "A fungal disease characterized by rusty spots on leaves that can severely reduce yields of bean crops.",
      symptoms: [
        "Small, rusty-brown pustules on leaf undersides",
        "Yellowing of leaf tissue around pustules",
        "Angular lesions bounded by leaf veins",
        "Premature defoliation in severe cases",
        "Stunted growth and reduced yields"
      ],
      causes: [
        "Caused by the fungus Uromyces appendiculatus",
        "Favored by moderate temperatures and high humidity",
        "Spreads by wind-blown spores",
        "Requires 10-18 hours of leaf wetness for infection",
        "Multiple races with varying virulence"
      ],
      prevention: [
        "Plant resistant varieties",
        "Space plants for good air circulation",
        "Rotate crops (3-year cycle)",
        "Apply preventative fungicides",
        "Avoid overhead irrigation",
        "Plant early to avoid peak rust season"
      ],
      treatment: [
        "Apply fungicides containing chlorothalonil, mancozeb, or copper",
        "Remove and destroy infected plant debris",
        "Increase spacing between plants to improve air circulation",
        "Avoid working in fields when foliage is wet",
        "Maintain balanced nutrition to improve plant health"
      ],
      conditions: {
        temperature: "65-85°F (18-29°C) is optimal for disease development",
        humidity: "High humidity (>95%) favors spore germination",
        soil: "Well-draining soil with balanced nutrients",
        light: "Full sun helps foliage dry quickly after rain or dew",
        water: "Morning watering at soil level only; avoid wetting foliage"
      }
    },
    {
      id: 8,
      name: "Anthracnose",
      plant: "Mango",
      severity: "Medium",
      image: "https://www2.ipm.ucanr.edu/agriculture/avocado/anthracnose/anthracnose-on-fruit1.jpg",
      shortDescription: "A fungal disease that affects mango flowers, leaves, and fruits, causing dark spots and fruit rot.",
      symptoms: [
        "Black, sunken lesions on fruits",
        "Dark angular spots on leaves",
        "Blossom blight causing flower drop",
        "Twig dieback with dark lesions",
        "Fruit rot during ripening"
      ],
      causes: [
        "Caused by the fungus Colletotrichum gloeosporioides",
        "Favored by warm, wet weather",
        "Spreads through water splash and wind",
        "Overwinters in twig lesions and fruit mummies",
        "More severe in humid coastal areas"
      ],
      prevention: [
        "Prune trees for good air circulation",
        "Avoid overhead irrigation",
        "Apply preventative fungicides during flowering",
        "Harvest fruit at proper maturity",
        "Remove and destroy fallen fruits and leaves",
        "Hot water treatment (55°C for 5 minutes) for harvested fruit"
      ],
      treatment: [
        "Apply fungicides containing copper, mancozeb, or azoxystrobin",
        "Prune out dead and diseased twigs",
        "Improve air circulation through canopy management",
        "Protect fruits from mechanical damage",
        "Post-harvest hot water treatment"
      ],
      conditions: {
        temperature: "77-86°F (25-30°C) is optimal for disease development",
        humidity: "High humidity (>80%) favors disease spread",
        soil: "Well-draining soil reduces risk",
        light: "Open canopy for air circulation and light penetration",
        water: "Avoid overhead irrigation; water at soil level"
      }
    },
    {
      id: 9,
      name: "Bacterial Leaf Spot",
      plant: "Pepper",
      severity: "Medium",
      image: "https://aggie-horticulture.tamu.edu/vegetable/files/2012/01/BLS-pepper.png",
      shortDescription: "A bacterial disease that creates dark, water-soaked spots on pepper leaves, reducing plant vigor and yield.",
      symptoms: [
        "Small, water-soaked spots on leaves that turn brown",
        "Yellow halos around leaf spots",
        "Spots may coalesce, causing leaf drop",
        "Dark, raised spots on fruits",
        "Defoliation in severe cases"
      ],
      causes: [
        "Caused by bacteria Xanthomonas campestris pv. vesicatoria",
        "Spread by water splash, contaminated tools, and seeds",
        "Favored by warm, wet conditions",
        "Survives in crop debris and seeds",
        "Enters plants through natural openings and wounds"
      ],
      prevention: [
        "Use disease-free seeds and transplants",
        "Apply copper-based sprays preventatively",
        "Rotate crops (2-3 year cycle)",
        "Avoid overhead irrigation",
        "Remove and destroy crop debris after harvest",
        "Space plants for good air circulation"
      ],
      treatment: [
        "Apply copper-based bactericides",
        "Remove and destroy severely infected plants",
        "Improve air circulation around plants",
        "Avoid working with plants when wet",
        "Maintain balanced nutrition to improve plant health"
      ],
      conditions: {
        temperature: "75-86°F (24-30°C) is optimal for disease development",
        humidity: "High humidity promotes bacterial growth",
        soil: "Well-draining soil with balanced nutrients",
        light: "Full sun for optimal plant health",
        water: "Drip irrigation to avoid wetting foliage"
      }
    },
    {
      id: 10,
      name: "Early Blight",
      plant: "Potato",
      severity: "Medium",
      image: "https://extension.umn.edu/sites/extension.umn.edu/files/early-blight.jpg",
      shortDescription: "A fungal disease that causes dark spots with concentric rings on potato leaves, stems, and tubers.",
      symptoms: [
        "Dark, concentric rings on lower leaves (target-like spots)",
        "Yellowing around lesions",
        "Lesions may coalesce, causing leaf blight",
        "Stem lesions that are dark, sunken, and elongated",
        "Dark, sunken lesions on tubers"
      ],
      causes: [
        "Caused by the fungus Alternaria solani",
        "Favored by warm, wet conditions with periods of dry weather",
        "Spreads through wind, rain splash, and contact",
        "Overwinters in soil, plant debris, and tubers",
        "Stress and nutrient deficiency increase susceptibility"
      ],
      prevention: [
        "Plant resistant varieties",
        "Use disease-free seed potatoes",
        "Rotate crops (3-4 year cycle)",
        "Space plants for good air circulation",
        "Apply preventative fungicides",
        "Mulch to prevent soil splash"
      ],
      treatment: [
        "Apply fungicides containing chlorothalonil, mancozeb, or copper",
        "Remove and destroy lower infected leaves",
        "Improve air circulation around plants",
        "Avoid overhead irrigation",
        "Maintain balanced nutrition to improve plant health"
      ],
      conditions: {
        temperature: "75-85°F (24-29°C) is optimal for disease development",
        humidity: "Alternating wet and dry periods favor disease development",
        soil: "Well-draining soil with balanced nutrients",
        light: "Full sun helps foliage dry quickly after rain or dew",
        water: "Morning watering at soil level only; avoid wetting foliage"
      }
    },
    // Additional common plant diseases
    {
      id: 11,
      name: "Citrus Greening",
      plant: "Citrus",
      severity: "High",
      image: "https://edis.ifas.ufl.edu/media/figure1_huanglongbing.jpg",
      shortDescription: "A devastating bacterial disease that affects all citrus varieties, causing asymmetrical yellowing of leaves and misshapen, bitter fruits.",
      symptoms: [
        "Asymmetrical yellow mottling of leaves",
        "Stunted yellow shoots",
        "Twig dieback",
        "Small, lopsided, bitter fruits",
        "Premature fruit drop"
      ],
      causes: [
        "Caused by the bacterium Candidatus Liberibacter asiaticus",
        "Spread primarily by Asian citrus psyllid insect",
        "Can also spread through grafting infected plant material",
        "Bacteria lives in the phloem (food-conducting tissues)",
        "No cure once a tree is infected"
      ],
      prevention: [
        "Plant disease-free certified trees",
        "Control psyllid populations with appropriate insecticides",
        "Regular scouting for early detection",
        "Remove and destroy infected trees",
        "Maintain tree health through proper nutrition and care",
        "Quarantine new plant material"
      ],
      treatment: [
        "No effective cure exists for infected trees",
        "Enhanced nutrition programs may extend productive life",
        "Thermotherapy (heat treatment) may reduce bacteria temporarily",
        "Remove and destroy infected trees to prevent spread",
        "Replace with resistant or tolerant varieties if available"
      ],
      conditions: {
        temperature: "No specific temperature requirements for the bacteria",
        humidity: "Not directly influenced by humidity",
        soil: "Poor growing conditions can increase susceptibility",
        light: "Full sun is required for citrus trees",
        water: "Consistent moisture without waterlogging"
      }
    },
    {
      id: 12,
      name: "White Rust",
      plant: "Chrysanthemum",
      severity: "Medium",
      image: "https://www7.inra.fr/hyp3/images/6031471.jpg",
      shortDescription: "A fungal disease that produces white pustules on the undersides of leaves, causing distortion and stunting of plants.",
      symptoms: [
        "White or yellowish pustules on leaf undersides",
        "Yellow spots on upper leaf surfaces",
        "Leaf distortion and twisting",
        "Stunted growth",
        "Reduced flowering"
      ],
      causes: [
        "Caused by the fungus Puccinia horiana",
        "Spread by wind, water splash, and handling infected plants",
        "Favored by cool, wet conditions",
        "Spores can survive for months in dry conditions",
        "Commonly introduced via infected cuttings"
      ],
      prevention: [
        "Use disease-free cuttings and plants",
        "Space plants for good air circulation",
        "Avoid overhead irrigation",
        "Apply preventative fungicides",
        "Remove and destroy infected leaves",
        "Control humidity in greenhouses"
      ],
      treatment: [
        "Apply fungicides containing myclobutanil or tebuconazole",
        "Remove and destroy heavily infected plants",
        "Improve air circulation around plants",
        "Reduce humidity",
        "Maintain balanced nutrition"
      ],
      conditions: {
        temperature: "60-70°F (16-21°C) is optimal for disease development",
        humidity: "High humidity (>90%) favors spore germination",
        soil: "Well-draining soil reduces risk",
        light: "Full sun to partial shade",
        water: "Avoid wetting foliage; water at soil level"
      }
    }
  ];
  
  // Additional plant types for dropdown
  const additionalPlants = [
    "Wheat", "Corn", "Soybean", "Rice", "Cotton", 
    "Sunflower", "Strawberry", "Blueberry", "Spinach", 
    "Lettuce", "Carrot", "Onion", "Garlic", "Peach", 
    "Cherry", "Plum", "Fig", "Avocado", "Grapefruit", 
    "Orange", "Lemon", "Lime", "Pear", "Cabbage", 
    "Cauliflower", "Broccoli", "Peanut", "Sweet Potato", 
    "Squash", "Watermelon", "Cantaloupe", "Mint", "Basil", 
    "Rosemary", "Thyme", "Lavender", "Coffee", "Cocoa", 
    "Olive", "Walnut", "Almond", "Pecan", "Cashew", 
    "Sugarcane", "Pineapple", "Papaya", "Kiwi"
  ];
  
  // DOM Elements
  const diseaseGrid = document.getElementById('diseaseGrid');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const plantDropdown = document.getElementById('plantDropdown');
  const modal = document.getElementById('diseaseModal');
  const modalContent = document.getElementById('modalContent');
  const closeBtn = document.querySelector('.close-button');
  const yearSpan = document.getElementById('year');
  const uploadBox = document.getElementById('uploadBox');
  const imageUpload = document.getElementById('imageUpload');
  const previewContainer = document.getElementById('previewContainer');
  const imagePreview = document.getElementById('imagePreview');
  const resetUpload = document.getElementById('resetUpload');
  const analyzeBtn = document.getElementById('analyzeBtn');
  const resultContainer = document.getElementById('resultContainer');
  const resultContent = document.getElementById('resultContent');
  
  // Set current year in footer
  yearSpan.textContent = new Date().getFullYear();
  
  // Populate plant dropdown
  function populatePlantDropdown() {
    // Get unique plants from disease data
    const existingPlants = [...new Set(plantDiseases.map(disease => disease.plant))];
    
    // Combine with additional plants and sort alphabetically
    const allPlants = [...existingPlants, ...additionalPlants].sort();
    
    // Remove duplicates
    const uniquePlants = [...new Set(allPlants)];
    
    // Create options and add to dropdown
    uniquePlants.forEach(plant => {
      const option = document.createElement('option');
      option.value = plant;
      option.textContent = plant;
      plantDropdown.appendChild(option);
    });
  }
  
  // Add error handling for images
  function handleImageError(img) {
    console.log('Image failed to load:', img.src);
    img.src = 'https://via.placeholder.com/400x300?text=Plant+Disease+Image+Not+Available';
    img.onerror = null; // Prevent infinite fallback loop
  }
  
  // Display all diseases initially
  document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing app');
    displayDiseases(plantDiseases);
    populatePlantDropdown();
    initializeImageUpload();
  });
  
  // Event Listeners
  searchInput.addEventListener('input', handleSearch);
  searchBtn.addEventListener('click', handleSearch);
  plantDropdown.addEventListener('change', handlePlantFilter);
  closeBtn.addEventListener('click', closeModal);
  resetUpload.addEventListener('click', resetImageUpload);
  analyzeBtn.addEventListener('click', analyzePlantImage);
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Functions
  function displayDiseases(diseases) {
    console.log('Displaying diseases:', diseases.length);
    diseaseGrid.innerHTML = '';
    
    if (diseases.length === 0) {
      diseaseGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 50px;">
          <p style="font-size: 1.2rem; color: var(--text-secondary);">No diseases found matching your search.</p>
        </div>
      `;
      return;
    }
    
    diseases.forEach(disease => {
      const card = document.createElement('div');
      card.className = 'disease-card';
      card.innerHTML = `
        <div class="disease-image">
          <img src="${disease.image}" alt="${disease.name}" onerror="handleImageError(this)">
        </div>
        <div class="disease-content">
          <div class="disease-tags">
            <span class="disease-tag plant-tag">${disease.plant}</span>
            <span class="disease-tag severity-tag">${disease.severity} Severity</span>
          </div>
          <h3 class="disease-title">${disease.name}</h3>
          <p class="disease-description">${disease.shortDescription}</p>
          <div class="disease-footer">
            <span class="view-details">View Details</span>
            <span class="disease-id">ID: ${disease.id}</span>
          </div>
        </div>
      `;
      
      card.addEventListener('click', () => showDiseaseDetails(disease));
      diseaseGrid.appendChild(card);
    });
  }
  
  function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    console.log('Searching for:', searchTerm);
    
    let filteredDiseases = plantDiseases;
    
    // Apply search term filter
    if (searchTerm !== '') {
      filteredDiseases = filteredDiseases.filter(disease => 
        disease.name.toLowerCase().includes(searchTerm) || 
        disease.plant.toLowerCase().includes(searchTerm) ||
        disease.shortDescription.toLowerCase().includes(searchTerm) ||
        disease.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm))
      );
    }
    
    // Apply plant dropdown filter if selected
    const selectedPlant = plantDropdown.value;
    if (selectedPlant) {
      filteredDiseases = filteredDiseases.filter(disease => 
        disease.plant === selectedPlant
      );
    }
    
    console.log('Found diseases:', filteredDiseases.length);
    displayDiseases(filteredDiseases);
  }
  
  function handlePlantFilter() {
    handleSearch(); // Reuse search function with current filters
  }
  
  function showDiseaseDetails(disease) {
    console.log('Showing details for:', disease.name);
    // Create modal content
    modalContent.innerHTML = `
      <div class="modal-header">
        <img src="${disease.image}" alt="${disease.name}" onerror="handleImageError(this)">
        <div class="modal-header-content">
          <div class="modal-tags">
            <span class="modal-tag plant-tag">${disease.plant}</span>
            <span class="modal-tag severity-tag">${disease.severity} Severity</span>
          </div>
          <h2 class="modal-title">${disease.name}</h2>
        </div>
      </div>
      
      <div class="modal-tabs">
        <div class="modal-tab active" data-tab="symptoms">Symptoms</div>
        <div class="modal-tab" data-tab="causes">Causes</div>
        <div class="modal-tab" data-tab="prevention">Prevention</div>
        <div class="modal-tab" data-tab="treatment">Treatment</div>
        <div class="modal-tab" data-tab="conditions">Conditions</div>
      </div>
      
      <div class="tab-content">
        <div id="symptoms-content" class="tab-panel active">
          <h3>Symptoms</h3>
          <ul class="info-list">
            ${disease.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
          </ul>
        </div>
        
        <div id="causes-content" class="tab-panel" style="display: none;">
          <h3>Causes</h3>
          <ul class="info-list">
            ${disease.causes.map(cause => `<li>${cause}</li>`).join('')}
          </ul>
        </div>
        
        <div id="prevention-content" class="tab-panel" style="display: none;">
          <h3>Prevention</h3>
          <ul class="info-list">
            ${disease.prevention.map(method => `<li>${method}</li>`).join('')}
          </ul>
        </div>
        
        <div id="treatment-content" class="tab-panel" style="display: none;">
          <h3>Treatment</h3>
          <ul class="info-list">
            ${disease.treatment.map(method => `<li>${method}</li>`).join('')}
          </ul>
        </div>
        
        <div id="conditions-content" class="tab-panel" style="display: none;">
          <h3>Ideal Conditions</h3>
          <div class="condition-cards">
            <div class="condition-card">
              <h4>Temperature</h4>
              <p>${disease.conditions.temperature}</p>
            </div>
            <div class="condition-card">
              <h4>Humidity</h4>
              <p>${disease.conditions.humidity}</p>
            </div>
            <div class="condition-card">
              <h4>Soil</h4>
              <p>${disease.conditions.soil}</p>
            </div>
            <div class="condition-card">
              <h4>Light</h4>
              <p>${disease.conditions.light}</p>
            </div>
            <div class="condition-card">
              <h4>Water</h4>
              <p>${disease.conditions.water}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Add tab switching functionality
    const tabs = modalContent.querySelectorAll('.modal-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Deactivate all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Hide all panels
        const panels = modalContent.querySelectorAll('.tab-panel');
        panels.forEach(panel => panel.style.display = 'none');
        
        // Activate clicked tab
        tab.classList.add('active');
        
        // Show corresponding panel
        const panelId = `${tab.dataset.tab}-content`;
        document.getElementById(panelId).style.display = 'block';
      });
    });
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
  
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Re-enable scrolling
  }
  
  // Image upload functionality
  function initializeImageUpload() {
    // Click on upload box should trigger file input
    uploadBox.addEventListener('click', () => {
      imageUpload.click();
    });
    
    // Handle file selection
    imageUpload.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        if (file.type.match('image.*')) {
          const reader = new FileReader();
          
          reader.onload = function(e) {
            imagePreview.src = e.target.result;
            uploadBox.style.display = 'none';
            previewContainer.style.display = 'block';
            analyzeBtn.disabled = false;
          }
          
          reader.readAsDataURL(file);
        } else {
          alert('Please select an image file');
        }
      }
    });
    
    // Drag and drop functionality
    uploadBox.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadBox.style.backgroundColor = 'var(--primary-light)';
    });
    
    uploadBox.addEventListener('dragleave', (e) => {
      e.preventDefault();
      uploadBox.style.backgroundColor = '';
    });
    
    uploadBox.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadBox.style.backgroundColor = '';
      
      if (e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        if (file.type.match('image.*')) {
          const reader = new FileReader();
          
          reader.onload = function(e) {
            imagePreview.src = e.target.result;
            uploadBox.style.display = 'none';
            previewContainer.style.display = 'block';
            analyzeBtn.disabled = false;
          }
          
          reader.readAsDataURL(file);
        } else {
          alert('Please drop an image file');
        }
      }
    });
  }
  
  function resetImageUpload() {
    imageUpload.value = '';
    imagePreview.src = '';
    uploadBox.style.display = 'block';
    previewContainer.style.display = 'none';
    resultContainer.style.display = 'none';
    analyzeBtn.disabled = true;
  }
  
  function analyzePlantImage() {
    // Show loading state
    analyzeBtn.textContent = 'Analyzing...';
    analyzeBtn.disabled = true;
    
    // Simulate processing delay
    setTimeout(() => {
      // For demo purposes, randomly select a disease
      const randomDiseaseIndex = Math.floor(Math.random() * plantDiseases.length);
      const detectedDisease = plantDiseases[randomDiseaseIndex];
      
      // Display results
      resultContainer.style.display = 'block';
      resultContent.innerHTML = `
        <div style="display: flex; align-items: center; margin-bottom: 15px;">
          <div style="background-color: var(--success); color: white; padding: 8px; border-radius: 50%; margin-right: 10px;">
            <i class="fas fa-check"></i>
          </div>
          <h4>Disease Detected: ${detectedDisease.name}</h4>
        </div>
        
        <p style="margin-bottom: 15px;">This appears to be <strong>${detectedDisease.name}</strong> on <strong>${detectedDisease.plant}</strong>.</p>
        
        <p style="margin-bottom: 10px;"><strong>Confidence:</strong> 87%</p>
        
        <p style="margin-bottom: 10px;"><strong>Description:</strong> ${detectedDisease.shortDescription}</p>
        
        <div style="margin-top: 20px;">
          <button class="analyze-btn" style="background-color: var(--primary-dark);" onclick="showDiseaseDetails(plantDiseases[${randomDiseaseIndex}])">
            View Complete Details
          </button>
        </div>
      `;
      
      // Reset button state
      analyzeBtn.textContent = 'Analyze Plant';
      analyzeBtn.disabled = false;
      
      // Scroll to results
      resultContainer.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
  }
  
  // Add animation to cards on scroll
  function animateOnScroll() {
    const cards = document.querySelectorAll('.disease-card');
    
    cards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (cardPosition < screenPosition) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Initialize card animations
  window.addEventListener('load', () => {
    console.log('Window loaded, initializing animations');
    const cards = document.querySelectorAll('.disease-card');
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    setTimeout(() => {
      animateOnScroll();
    }, 200);
  });
  
  window.addEventListener('scroll', animateOnScroll);
  
  // Add the global error handler function to the window object
  window.handleImageError = handleImageError;
  
function LoadLinkedScene(sceneName) {
  var sceneId = GetIdBySceneName(sceneName);

  document.querySelectorAll('.Room').forEach(function(r) {
    r.classList.remove('clicked');
  });
  document.querySelector("#" + sceneId).classList.add('clicked');
}
var sceneDictionary = {
  'R1': 'scene1',
  'R2': 'scene2',
  'R3': 'scene3',
  'R4': 'scene5',
  'R5': 'scene_05_1_pano_hallway_reconstructed',
  'R6': 'scene_06_1_pano_library_reconstructed',
  'R7': 'scene_07_1_pano_kitchen_reconstructed',
  'R8': 'scene_08_1_pano_bedroom_reconstructed',
  'R9': 'scene_09_1_pano_bathroom_reconstructed',
  'R10': 'scene_10_1_pano_garden_reconstructed',
  'R11': 'scene_11_1_pano_patio_reconstructed',
  'R12': 'scene_12_1_pano_garage_reconstructed'
};

// Get element ID by scene name
function GetIdBySceneName(sceneName) {
  for (var key in sceneDictionary) {
    if (sceneDictionary[key] === sceneName) {
      console.log(`Scene match: ${key} → ${sceneName}`);
      return key;
    }
  }
  console.warn(`No match found for scene: ${sceneName}`);
  return null;
}

// Main krpano initialization function
function krpanoReady(krpanoObj) {
  console.log('krpano initialized successfully');

  // Set up click handlers for all scene elements
  for (var elementId in sceneDictionary) {
    var sceneName = sceneDictionary[elementId];
    var element = document.getElementById(elementId);

    if (element) {
      element.addEventListener('click', createClickHandler(elementId, sceneName, krpanoObj));
    } else {
      console.warn(`Element not found: #${elementId}`);
    }
  }

  // Optional: Add hotspot click example here if needed
}

// Create click handler with closure to preserve parameters
function createClickHandler(elementId, sceneName, krpanoObj) {
  return function() {
    console.log(`Clicked: ${elementId} (${sceneName})`);

    // Update UI
    document.querySelectorAll('.Room').forEach(function(r) {
      r.classList.remove('active', 'clicked');
    });
    document.getElementById(elementId).classList.add('active', 'clicked');

    // Load scene
    var sceneId = GetIdBySceneName(sceneName);
    if (sceneId) {
      var krpanoCall = `loadscene("${sceneName}", null, MERGE, BLEND(0.3));`;
      console.log(`Executing: ${krpanoCall}`);

      try {
        krpanoObj.call(krpanoCall);
      } catch (err) {
        console.error(`Error loading scene: ${err.message}`);
      }
    }
  };
}
// (Optional) Handle clicks on panorama container if you want coordinate picking
document.addEventListener('DOMContentLoaded', function() {
  var panoramaContainer = document.getElementById('pano-container');
  var hotspotContainer = document.getElementById('hotspot-container');

  if (panoramaContainer) {
    panoramaContainer.addEventListener('click', function(e) {
      var x = e.offsetX / panoramaContainer.offsetWidth;
      var y = e.offsetY / panoramaContainer.offsetHeight;

      var krpanoCoordinates = convertToKrpanoCoordinates(x, y);

      alert('Krpano coordinates: \nath: ' + krpanoCoordinates.ath + '\natv: ' + krpanoCoordinates.atv);

      var hotspotPoint = document.createElement('div');
      hotspotPoint.className = 'hotspot-point';
      hotspotPoint.style.left = (x * 100) + '%';
      hotspotPoint.style.top = (y * 100) + '%';
      hotspotContainer.appendChild(hotspotPoint);
    });
  }
});

function UpdateActiveRoomFromScene(sceneName) {
  console.log(`Update from hotspot scene: ${sceneName}`);

  var matchedId = GetIdBySceneName(sceneName);

  document.querySelectorAll('.Room').forEach(function(r) {
    r.classList.remove('active', 'clicked');
  });

  if (matchedId) {
    var matchedElement = document.getElementById(matchedId);
    if (matchedElement) {
      matchedElement.classList.add('active', 'clicked');
    } else {
      console.warn(`No element found for ID ${matchedId}`);
    }
  } else {
    console.warn(`No matching room found for scene ${sceneName}`);
  }
}

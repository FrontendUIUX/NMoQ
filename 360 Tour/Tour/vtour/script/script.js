// // Dictionary mapping room IDs to scene names
// var sceneDictionary = {
//   'R1': 'scene_38_1_pano_entrance_reconstructed',
//   'R2': 'scene_01_2_pano_g1_reconstructed_b2',
//   'R3': 'scene_02_1_pano_g1_reconstructed'
// };

// // Function to open the VTPopup
// function openVTPopup() {
//   const popup = $('.vtpopup');
//   const overlay = $('.overlay');
//   if (popup.length && overlay.length) {
//     popup.fadeIn();
//     overlay.fadeIn();
//   }
// }
// function closeVTPopup() {
//     $('.vtpopup').fadeOut();
//     $('.overlay').fadeOut();
//   }
// // Handle click on overlay to close popup
// $(document).ready(function () {
//   $('.overlay').click(function () {
//     $('.vtpopup').fadeOut();
//     $(this).fadeOut();
//   });
// });

// // Function to load a linked scene
// function LoadLinkedScene(krpano, roomId) {
//   var sceneName = sceneDictionary[roomId];

//   if (!sceneName) {
//     console.error("Scene not found for Room ID:", roomId);
//     return;
//   }

//   // Remove 'clicked' class from all room elements
//   document.querySelectorAll('.Room').forEach(function (r) {
//     r.classList.remove('clicked');
//   });

//   // Add 'clicked' class to the clicked element
//   var roomElement = document.getElementById(roomId);
//   if (roomElement) {
//     roomElement.classList.add('clicked');
//     console.log("Clicked Room:", roomId);
//   } else {
//     console.error("Room element not found:", roomId);
//     return;
//   }

//   // Load the corresponding scene
//   console.log("Loading Scene:", sceneName);
//   krpano.call('loadscene(' + sceneName + ', null, MERGE, BLEND(.3), null, null);');
// }

// // Function to initialize krpano-related logic
// function krpanoReady(krpanoObj) {
//   // Attach click listeners to room elements
//   for (var roomId in sceneDictionary) {
//     var element = document.getElementById(roomId);
//     if (element) {
//       element.addEventListener('click', (function (currentRoomId) {
//         return function () {
//           LoadLinkedScene(krpanoObj, currentRoomId);
//         };
//       })(roomId));
//     } else {
//       console.warn("Element with ID", roomId, "not found.");
//     }
//   }

//   // Load default scene if defined
//   var defaultRoomId = 'R1'; // Change as needed
//   if (sceneDictionary.hasOwnProperty(defaultRoomId)) {
//     LoadLinkedScene(krpanoObj, defaultRoomId);
//   }
// }

// // Convert relative coordinates to krpano spherical coordinates
// function convertToKrpanoCoordinates(x, y) {
//   var ath = (x * 360) - 180;  // [-180, 180]
//   var atv = (y * 180) - 90;   // [-90, 90]
//   return { ath: ath, atv: atv };
// }

// // // Panorama initialization on DOM load
// // document.addEventListener('DOMContentLoaded', function () {
// //   var panoramaContainer = document.getElementById('pano');
// //   var hotspotContainer = document.getElementById('hotspot-container');

// //   // Embed krpano
// //   var viewer = embedpano({
// //     xml: 'tour.xml',
// //     target: 'pano',
// //     passQueryParameters: 'startscene,startlookat',
// //     onready: krpanoReady
// //   });

// //   if (panoramaContainer) {
// //     panoramaContainer.addEventListener('click', function (e) {
// //       var x = e.offsetX / panoramaContainer.offsetWidth;
// //       var y = e.offsetY / panoramaContainer.offsetHeight;
// //       var krpanoCoordinates = convertToKrpanoCoordinates(x, y);
// //       // Visual marker (optional)
// //       if (hotspotContainer) {
// //   var hotspotPoint = document.createElement('div');
// //   hotspotPoint.className = 'hotspot-point';
// //   hotspotPoint.style.left = (x * 100) + '%';
// //   hotspotPoint.style.top = (y * 100) + '%';
// //   hotspotContainer.appendChild(hotspotPoint);
// // } else {
// //   console.warn('hotspot-container not found in DOM.');
// // }

// //     });
// //   }
// // });


// Store data
const storesData = [
    {
        id: 1,
        name: "Nike 4D",
        address: "Shop No. -71 & 72, 4D Square, Chandkheda",
        city: "Ahmedabad",
        state: "Gujarat",
        zip: "380005",
        country: "IN",
        status: "Open",
        closingTime: "9:30 pm",
        distance: "8.6 km",
        lat: 23.0798,
        lng: 72.5738
    },
    {
        id: 2,
        name: "Nike CG Road 2",
        address: "GF-1, Shopper Plaza-III, C.G.Road, Opposite Municipal Mkt",
        city: "Ahmedabad",
        state: "Gujarat",
        zip: "380009",
        country: "IN",
        status: "Open",
        closingTime: "10:00 pm",
        distance: "12.1 km",
        lat: 23.0362,
        lng: 72.5663
    },
    {
        id: 3,
        name: "Nike Ahmedabad City",
        address: "Alpha One Mall, Vastrapur",
        city: "Ahmedabad",
        state: "Gujarat",
        zip: "380015",
        country: "IN",
        status: "Open",
        closingTime: "10:00 pm",
        distance: "5.2 km",
        lat: 23.0470,
        lng: 72.5316
    },
    {
        id: 4,
        name: "Nike Factory Store",
        address: "Himalaya Mall, Drive-In Road",
        city: "Ahmedabad",
        state: "Gujarat",
        zip: "380052",
        country: "IN",
        status: "Open",
        closingTime: "9:00 pm",
        distance: "7.9 km",
        lat: 23.0506,
        lng: 72.5452
    },
    {
        id: 5,
        name: "Nike Outlet",
        address: "Kankaria Lake Front, Maninagar",
        city: "Ahmedabad",
        state: "Gujarat",
        zip: "380008",
        country: "IN",
        status: "Open",
        closingTime: "8:00 pm",
        distance: "9.3 km",
        lat: 23.0101,
        lng: 72.5991
    }
];

// Initialize map
let map;
let markers = [];
let currentZoom = 12;
const centerLat = 23.0395;
const centerLng = 72.5660;

// Map initialization function (would normally use Google Maps API)
function initMap() {
    // Create a simple map representation
    map = document.getElementById('map');
    map.style.backgroundImage = "url('/api/placeholder/1200/800')";
    map.style.backgroundSize = "cover";
    map.style.backgroundPosition = "center";

    // Add markers for each store
    renderMarkers();
}

// Render markers on map
function renderMarkers() {
    // In a real app, this would use the Google Maps API to place markers
    console.log("Markers would be placed at:");
    storesData.forEach(store => {
        console.log(`${store.name}: ${store.lat}, ${store.lng}`);
    });
}

// Render store list
function renderStoreList() {
    const storesListContainer = document.getElementById('stores-list');
    storesListContainer.innerHTML = '';

    storesData.forEach(store => {
        const storeItem = document.createElement('div');
        storeItem.className = 'store-item';
        storeItem.dataset.id = store.id;

        storeItem.innerHTML = `
  <div class="store-name">
    ${store.name}
    <span class="distance">${store.distance} <span class="chevron">›</span></span>
  </div>
  <div class="store-address">
    ${store.address}<br>
    ${store.city}, ${store.state}, ${store.zip}, ${store.country}
  </div>
  <div class="store-status">
    <span class="open">${store.status}</span>
    <span>Closes at ${store.closingTime}</span>
  </div>
`;

        storeItem.addEventListener('click', () => {
            // In a real app, this would center the map on the selected store
            console.log(`Selected store: ${store.name}`);
        });

        storesListContainer.appendChild(storeItem);
    });

    // Add "View all stores" link
    const viewAllLink = document.createElement('a');
    viewAllLink.className = 'view-all';
    viewAllLink.innerText = 'View all stores';
    viewAllLink.href = 'https://www.google.com/maps/search/Nike+Store/@22.941733,72.579217,11z?hl=en&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D'; // Replace with your desired URL
    viewAllLink.target = '_blank'; // Optional: opens link in a new tab
    
    // Optional: If you still want to handle clicks via JavaScript
    viewAllLink.addEventListener('click', (event) => {
        console.log('View all stores clicked');
        // event.preventDefault(); // Uncomment this if you want to prevent navigation
    });
    
    storesListContainer.appendChild(viewAllLink);
    
}

// Handle search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        // In a real app, this would filter the store list and update the map
        console.log(`Searching for: ${query}`);
    });
}

// Handle zoom controls
function setupZoomControls() {
    const zoomIn = document.getElementById('zoom-in');
    const zoomOut = document.getElementById('zoom-out');

    zoomIn.addEventListener('click', () => {
        currentZoom = Math.min(currentZoom + 1, 20);
        console.log(`Zoom level: ${currentZoom}`);
    });

    zoomOut.addEventListener('click', () => {
        currentZoom = Math.max(currentZoom - 1, 1);
        console.log(`Zoom level: ${currentZoom}`);
    });
}

// Handle filter button
function setupFilterButton() {
    const filterBtn = document.querySelector('.filter-btn');
    filterBtn.addEventListener('click', () => {
        console.log('Filter button clicked');
    });
}

// Initialize the application
function init() {
    initMap();
    renderStoreList();
    setupSearch();
    setupZoomControls();
    setupFilterButton();
}

// Start the application when the page loads
document.addEventListener('DOMContentLoaded', init);
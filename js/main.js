function initMap() {
  // Location
  const location = { lat: 43.450878, lng: 21.793367 }
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    center: location,
    zoom: 8
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: location, map: map });
}


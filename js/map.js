const map = L.map("js-map", {
  center: [41.48214, -71.31051],
  zoom: 17
});
const greenIcon = L.icon({
  iconUrl: "./svg/icon-location.svg",
  iconSize: [66, 88]
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

L.marker(
  [41.48214, -71.31051],
  { icon: greenIcon },
  { alt: "Modern Art Gallery" }
)
  .addTo(map)
  .bindPopup("Modern Art Gallery");

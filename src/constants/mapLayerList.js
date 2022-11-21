export const mapLayerList = [
  {
    value: "googleMap",
    url: "https://mts.google.com/vt/hl=tr&x={x}&y={y}&z={z}",
    label: <div style={{ fontSize: "1.2rem" }}>Google Map</div>,
  },
  {
    value: "googleTrafficMap",
    url: "https://mts.google.com/vt/lyrs=m@221097413,traffic&x={x}&y={y}&z={z}",
    label: <div style={{ fontSize: "1.2rem" }}>Traffic Map</div>,
  },
  {
    value: "googleSatelliteMap",
    url: "https://mt.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}",
    label: <div style={{ fontSize: "1.2rem" }}>Satellite Map</div>,
  },
  {
    value: "googleTerrainMap",
    url: "https://mt.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}",
    label: <div style={{ fontSize: "1.2rem" }}>Terrain Map</div>,
  },
  {
    value: "openStreet",
    url: "http://tile.openstreetmap.org/{z}/{x}/{y}.png",
    label: <div style={{ fontSize: "1.2rem" }}>Open Street</div>,
  },
];

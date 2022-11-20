// OpenLayers
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import BingMaps from "ol/source/BingMaps";

// Map Layer
export const rasterLayer = () => {
  const styles = [
    "RoadOnDemand",
    "Aerial",
    "AerialWithLabelsOnDemand",
    "CanvasDark",
  ];

  const layers = [];

  for (let i = 0; i < styles.length; i++) {
    layers.push(
      new TileLayer({
        visible: false,
        preload: Infinity,
        source: new BingMaps({
          key: process.env.REACT_APP_GOOGLE_KEY,
          imagerySet: styles[i],
        }),
      })
    );
  }
  return layers;
};

// Features Layer
export const vectorLayer = new VectorLayer({
  source: new VectorSource(),
  preload: Infinity,
});

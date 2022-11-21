// OpenLayers
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ";
import { mapLayerList } from "constants/mapLayerList";

// Map Layer
export const rasterLayer = () => {
  const layers = mapLayerList.map((layer) => {
    return new TileLayer({
      visible: false,
      preload: Infinity,
      value: layer.value,
      source: new XYZ({
        url: layer.url,
        cacheSize: 99999999999,
      }),
    });
  });
  return layers;
};

// Features Layer
export const vectorLayer = new VectorLayer({
  source: new VectorSource(),
  preload: Infinity,
});

// OpenLayers
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Icon, Style } from "ol/style";
import { fromLonLat } from "ol/proj";
import { transform } from "ol/proj";

export const singleClickHandler = (e, mapRef, marker, color) => {
  // Get coord from map
  const clickedCoord = mapRef.current.getCoordinateFromPixel(e.pixel);

  // Transform coord
  const transformedCoord = transform(clickedCoord, "EPSG:3857", "EPSG:4326");

  // Create new feature
  const feature = new Feature({
    geometry: new Point(fromLonLat(transformedCoord)),
  });
  // Style created feature
  feature.setStyle(
    new Style({
      image: new Icon({
        crossOrigin: "anonymous",
        src: `marker/${marker}`,
        color: color,
      }),
    })
  );
  return feature;
};

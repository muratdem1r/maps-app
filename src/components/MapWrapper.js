import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Styles
import styles from "assets/styles/Map.module.css";

// OpenLayer
import Map from "ol/Map";
import View from "ol/View";
import { unByKey } from "ol/Observable";
import VectorSource from "ol/source/Vector";

// Layers
import { rasterLayer, vectorLayer } from "map/Layers";

// Handlers
import { singleClickHandler } from "map/Handlers";

// Actions
import { addFeature } from "store/actions/mapActions";

function MapWrapper() {
  const dispatch = useDispatch();
  const [listenerKey, setListenerKey] = useState(null);

  const { features, marker, layer, markerColor } = useSelector(
    (state) => state.mapReducer
  );

  const [map, setMap] = useState(null);
  const mapRef = useRef();
  mapRef.current = map;

  const rasterLayers = rasterLayer();

  useEffect(() => {
    // MAP Create
    const newMap = new Map({
      target: mapRef.current,
      layers: [...rasterLayers, vectorLayer],
      view: new View({
        projection: "EPSG:3857",
        center: [3996201.257074305, 4566415.098549256],
        zoom: 4,
      }),
      controls: [],
    });
    setMap(newMap);
  }, []);

  const listener = (e) => {
    if (listenerKey) {
      unByKey(listenerKey);
    }
    const key = map.on("singleclick", (e) => {
      const newFeature = singleClickHandler(e, mapRef, marker, markerColor);
      dispatch(addFeature(newFeature));
    });
    setListenerKey(key);
  };

  useEffect(() => {
    if (map) {
      listener();
    }
  }, [marker, markerColor, map]);

  useEffect(() => {
    let layerName, mapLayer;

    // set only selected layer visible
    for (let i = 0; i < rasterLayers.length; i++) {
      layerName = rasterLayers[i].values_.source.imagerySet_;
      mapLayer = map?.values_.layergroup.values_.layers.array_[i];
      if (layerName === layer) {
        rasterLayers[i].setVisible(true);
        mapLayer?.setVisible(true);
      } else {
        rasterLayers[i].setVisible(false);
        mapLayer?.setVisible(false);
      }
    }
  }, [layer]);

  useEffect(() => {
    vectorLayer.setSource(
      new VectorSource({
        features: features,
      })
    );
  }, [features]);

  return (
    <div
      style={{
        cursor: `url("marker/red/${marker}") 25 90 , auto`,
        marginTop: "2rem",
      }}
      ref={mapRef}
      className={styles.map_container}
    ></div>
  );
}

export default MapWrapper;

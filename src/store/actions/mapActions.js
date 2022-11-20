import {
  SET_MAP,
  ADD_FEATURE,
  DELETE_FEATURE,
  UPDATE_FEATURE,
  CHANGE_MARKER,
  CHANGE_MARKER_COLOR,
  CHANGE_LAYER,
} from "../types/mapTypes";

export const setMap = (map) => (dispatch) => {
  dispatch({ type: SET_MAP, payload: map });
};

export const addFeature = (coords) => (dispatch) => {
  dispatch({ type: ADD_FEATURE, payload: coords });
};

export const deleteFeature = (id) => (dispatch) => {
  dispatch({ type: DELETE_FEATURE, payload: id });
};

export const updateFeature = (id, icon, color) => (dispatch) => {
  dispatch({ type: UPDATE_FEATURE, payload: { id, icon, color } });
};

export const changeMarker = (marker) => (dispatch) => {
  dispatch({ type: CHANGE_MARKER, payload: marker });
};

export const changeMarkerColor = (markerColor) => (dispatch) => {
  dispatch({ type: CHANGE_MARKER_COLOR, payload: markerColor });
};

export const changeLayer = (layer) => (dispatch) => {
  dispatch({ type: CHANGE_LAYER, payload: layer });
};

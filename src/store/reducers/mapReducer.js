const initialState = {
  features: [],
  tableData: [],
  marker: "location.png",
  markerColor: "#FA5252",
  layer: "googleMap",
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_MARKER":
      return { ...state, marker: action.payload };

    case "CHANGE_MARKER_COLOR":
      return { ...state, markerColor: action.payload };

    case "CHANGE_LAYER":
      return { ...state, layer: action.payload };

    case "ADD_FEATURE":
      return {
        ...state,
        features: [...state.features, action.payload],
        tableData: [
          ...state.tableData,
          {
            id: action.payload.ol_uid,
            icon: `marker/black/${
              action.payload.style_.image_.iconImage_.src_.split("/")[1]
            }`,
            color: action.payload.style_.image_.iconImage_.color_,
            coords: action.payload.values_.geometry.flatCoordinates,
          },
        ],
      };

    case "DELETE_FEATURE":
      const newFeatures = state.features.filter(
        (item) => item.ol_uid !== action.payload
      );
      const newTableData = state.tableData.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        features: newFeatures,
        tableData: newTableData,
      };

    case "UPDATE_FEATURE":
      const updatedFeatures = state.features.map((feature) => {
        if (feature.ol_uid === action.payload.id) {
          feature.style_.image_.color_ = action.payload.color;
        }
        return feature;
      });

      const updatedTableData = state.tableData.map((feature) => {
        if (feature.id === action.payload.id) {
          feature.color = action.payload.color;
        }
        return feature;
      });
      return {
        ...state,
        features: updatedFeatures,
        tableData: updatedTableData,
      };

    default:
      return state;
  }
};

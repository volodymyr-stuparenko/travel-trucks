export const selectAllCampers = (state) => state.campers.campers.items;
export const selectLoadingCampers = (state) =>
  state.campers.campers.loadingCampers;
export const selectErrorCampers = (state) => state.campers.campers.errorCampers;
export const selectPage = (state) => state.campers.campers.page;
export const selectPages = (state) => state.campers.campers.pages;
export const selectTotalCampers = (state) => state.campers.campers.total;
export const selectEquipment = (state) =>
  state.campers.campers.vehicleEquipment;
export const selectvehicleType = (state) => state.campers.campers.vehicleType;

export const selectCamper = (state) => state.campers.camper.camper;
export const selectLoadingCamper = (state) =>
  state.campers.camper.loadingCamper;

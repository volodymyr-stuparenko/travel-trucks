export function buildCampersUrl({
  page = 1,
  limit = 5,
  filterEquipment = [],
  filterVehicleType = null,
  location = '',
}) {
  const params = new URLSearchParams({
    page,
    limit,
  });

  filterEquipment.forEach((value) => {
    params.append(
      value === 'automatic' ? 'transmission' : value,
      value === 'automatic' ? 'automatic' : 'true'
    );
  });

  if (filterVehicleType) {
    params.append('form', filterVehicleType);
  }

  if (location) {
    params.append('location', location);
  }

  return `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${params.toString()}`;
}

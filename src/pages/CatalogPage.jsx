import Container from '../components/Container';
import SearchForm from '../components/SearchForm';
import CatalogList from '../components/CatalogList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCampers } from '../redux/campers/operations';
import { selectFilters } from '../redux/filters/selectors';
import { selectPage } from '../redux/campers/selectors';
import { useEffect } from 'react';

function CatalogPage() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(
      fetchAllCampers({
        page,
        filterEquipment: filters.equipment,
        filterVehicleType: filters.vehicleType,
        location: filters.location,
      })
    );
  }, [dispatch, page, filters]);

  return (
    <Container>
      <div className="flex flex-row gap-16 pt-12">
        <SearchForm />
        <CatalogList />
      </div>
    </Container>
  );
}

export default CatalogPage;

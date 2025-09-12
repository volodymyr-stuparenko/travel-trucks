import Container from '../components/Container';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamper } from '../redux/campers/operations';
import { selectCamper, selectLoadingCamper } from '../redux/campers/selectors';
import Icon from '../components/Icon';
import ContactForm from '../components/ContactForm';
import { useEffect } from 'react';
import Loader from '../components/Loader';

function DetailsPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamper({ id }));
  }, [dispatch, id]);

  const camper = useSelector(selectCamper);
  const isLoading = useSelector(selectLoadingCamper);

  return (
    <Container>
      {!isLoading && camper && (
        <div className="pt-12">
          <h1 className="font-semibold text-[24px] leading-[1.33] text-dark mb-2">
            {camper.name}
          </h1>
          <div className="flex items-center mb-4">
            <Icon id="star-yellow" width={16} height={16} className="mr-1" />
            <p className="mr-4">
              {camper.rating}({camper.reviews.length} Reviews)
            </p>
            <Icon id="map" width={16} height={16} className="mr-1" />
            <p>{camper.location}</p>
          </div>
          <p className="font-semibold text-[24px] leading-[1.33] text-dark mb-7">
            €{camper.price.toFixed(2)}
          </p>
          <ul className="flex  gap-12 justify-items-start mb-7">
            {camper.gallery.map(({ original }) => (
              <li
                key={original}
                className="w-[292px] h-[315px] overflow-hidden shrink-0"
              >
                <img
                  src={original}
                  className="rounded-[10px] object-cover w-full h-full object-center"
                />
              </li>
            ))}
          </ul>
          <p className="font-normal text-[16px] leading-[1.5] text-grayDark mb-[60px]">
            {camper.description}
          </p>
          <ContactForm />
        </div>
      )}
      {isLoading && <Loader />}
    </Container>
  );
}

export default DetailsPage;

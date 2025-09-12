import Button from './Button';
import Icon from './Icon';
import FeatureBadge from './FeatureBadge';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toogleFavorite } from '../redux/favorites/slice';

function CapmerCard({ camperData, isFavorite }) {
  const img = camperData.gallery[0].thumb;
  const alt = `${camperData.name} Image`;
  const link = `/catalog/${camperData.id}`;

  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(toogleFavorite(camperData.id));
  };

  return (
    <div className="p-6 flex flex-row gap-6 border border-grayLight rounded-[20px]">
      <div className="rounded-[10px] w-[292px] h-[320px] overflow-hidden shrink-0">
        <img
          src={img}
          className="object-cover w-full h-full object-center"
          alt={alt}
        />
      </div>
      <div className="w-full">
        <div className="flex flex-row justify-between mb-2">
          <h3 className="font-semibold text-[24px] leading-[1.33] text-dark">
            {camperData.name}
          </h3>
          <div className="flex gap-3 items-center">
            <p className="font-semibold text-[24px] leading-[1.33] text-dark">
              €{camperData.price.toFixed(2)}
            </p>
            <button className="cursor-pointer" onClick={handleFavorite}>
              <Icon
                id="heart"
                width={26}
                height={24}
                className={clsx(
                  isFavorite && 'text-redLight',
                  !isFavorite && 'text-dark'
                )}
              />
            </button>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <Icon id="star-yellow" width={16} height={16} className="mr-1" />
          <p className="mr-4">
            {camperData.rating}({camperData.reviews.length} Reviews)
          </p>
          <Icon id="map" width={16} height={16} className="mr-1" />
          <p>{camperData.location}</p>
        </div>
        <p className="mb-6 font-normal text-base leading-6 text-grayDark line-clamp-1">
          {camperData.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {camperData.transmission === 'automatic' && <FeatureBadge />}
          {camperData.engine === 'petrol' && <FeatureBadge icon="Petrol" />}
          {camperData.kitchen && <FeatureBadge icon="kitchen" />}
          {camperData.radio && <FeatureBadge icon="radio" />}
          {camperData.bathroom && <FeatureBadge icon="bathroom" />}
          {camperData.refrigerator && <FeatureBadge icon="refrigerator" />}
          {camperData.microwave && <FeatureBadge icon="microwave" />}
          {camperData.gas && <FeatureBadge icon="gas" />}
          {camperData.water && <FeatureBadge icon="water" />}
          {camperData.AC && <FeatureBadge icon="AC" />}
        </div>
        <Button as="link" to={link} width={166}>
          Show more
        </Button>
      </div>
    </div>
  );
}

export default CapmerCard;

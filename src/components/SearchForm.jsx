import Button from './Button';
import { Formik, Form, Field } from 'formik';
import FormFilterButton from './FormFilterButton';
import Icon from './Icon';
import { useDispatch } from 'react-redux';
import { changeFilters } from '../redux/filters/slice';
import { resetPage } from '../redux/campers/slice';

const vehicleEquipment = [
  { value: 'AC', label: 'AC', icon: 'AC' },
  { value: 'automatic', label: 'Automatic', icon: 'automatic' },
  { value: 'kitchen', label: 'Kitchen', icon: 'kitchen' },
  { value: 'TV', label: 'TV', icon: 'TV' },
  { value: 'bathroom', label: 'Bathroom', icon: 'bathroom' },
];

const vehicleTypes = [
  { value: 'panelTruck', label: 'Van', icon: 'Van' },
  { value: 'fullyIntegrated', label: 'Fully Integrated', icon: 'Integrated' },
  { value: 'alcove', label: 'Alcove', icon: 'alcove' },
];

const initialValues = {
  location: '',
  equipment: [],
  type: '',
};

function SearchForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(resetPage());
    dispatch(
      changeFilters({
        location: values.location,
        equipment: values.equipment,
        vehicleType: values.type,
      })
    );
  };

  return (
    <div className="w-[360px] flex shrink-0">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form>
            {/* Location */}
            <div className="flex flex-col gap-2 mb-10">
              <label
                htmlFor="location"
                className="font-normal text-[16px] leading-[1.5] text-gray"
              >
                Location
              </label>
              <div className="relative">
                <Icon
                  id="map"
                  width={20}
                  height={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2"
                />
                <Field
                  name="location"
                  placeholder="City"
                  className="rounded-[12px] bg-grayExtraLight h-[56px] pl-12 w-full"
                />
              </div>
            </div>

            {/* Filters title */}
            <h3 className="font-medium text-[16px] leading-[1.5] text-grayDark mb-8">
              Filters
            </h3>

            {/* Vehicle equipment */}
            <div>
              <h4 className="font-semibold text-[20px] leading-[1.2] text-dark mb-6">
                Vehicle equipment
              </h4>
              <div className="bg-grayLight w-full h-[1px] mb-6" />
              <div className="flex flex-wrap gap-x-3 gap-y-2 mb-8">
                {vehicleEquipment.map((item) => (
                  <FormFilterButton
                    key={item.value}
                    onClick={() => {
                      if (values.equipment.includes(item.value)) {
                        setFieldValue(
                          'equipment',
                          values.equipment.filter((v) => v !== item.value)
                        );
                      } else {
                        setFieldValue('equipment', [
                          ...values.equipment,
                          item.value,
                        ]);
                      }
                    }}
                    label={item.label}
                    icon={item.icon}
                    selected={values.equipment.includes(item.value)}
                  />
                ))}
              </div>
            </div>

            {/* Vehicle type */}
            <div className="mb-10">
              <h4 className="font-semibold text-[20px] leading-[1.2] text-dark mb-6">
                Vehicle type
              </h4>
              <div className="bg-grayLight w-full h-[1px] mb-6" />
              <div className="flex gap-3">
                {vehicleTypes.map((item) => (
                  <FormFilterButton
                    key={item.value}
                    onClick={() =>
                      setFieldValue(
                        'type',
                        values.type === item.value ? '' : item.value
                      )
                    }
                    label={item.label}
                    icon={item.icon}
                    selected={values.type === item.value}
                  />
                ))}
              </div>
            </div>

            {/* Submit */}
            <Button as="button" width={166} type="submit">
              Search
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SearchForm;

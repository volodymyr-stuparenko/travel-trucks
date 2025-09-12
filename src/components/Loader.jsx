import { DotLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const Loader = () => {
  return (
    <div>
      <DotLoader
        color="#b29eff"
        loading={true}
        cssOverride={override}
        size={27}
        aria-label="Loading..."
      />
    </div>
  );
};

export default Loader;

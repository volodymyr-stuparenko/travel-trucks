import Container from '../../components/Container';
import css from './HomePage.module.css';
import clsx from 'clsx';
import Button from '../../components/Button';

function HomePage() {
  return (
    <div
      className={clsx(
        css.background,
        'bg-no-repeat bg-cover pt-[260px] h-screen'
      )}
    >
      <Container>
        <div>
          <h1 className="text-grayExtraLight font-semibold text-[48px] leading-[0.66] mb-4">
            Campers of your dreams
          </h1>
          <h2 className="text-grayExtraLight font-semibold text-[24px] leading-[1.33] mb-10">
            You can find everything you want in our catalog
          </h2>
          <Button as="link" to="/catalog" width={173}>
            View Now
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;

import Container from './Container';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Icon from './Icon';

function AppBar() {
  const setActiveClass = ({ isActive }) => {
    return clsx(
      'font-medium text-[16px] leading-[1.5] text-center text-dark hover:text-red',
      isActive && 'text-red'
    );
  };

  return (
    <header className="bg-grayExtraLight border-b border-grayLighter w-full">
      <Container>
        <div className="h-[72px] flex items-center justify-start flex-row gap-[450px]">
          <NavLink to="/">
            <Icon id="logo" width={136} height={16} />
          </NavLink>
          <nav>
            <ul className="flex gap-8">
              <li>
                <NavLink className={setActiveClass} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={setActiveClass} to="/catalog">
                  Catalog
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default AppBar;

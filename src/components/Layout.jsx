import AppBar from './AppBar';
import { Outlet } from 'react-router-dom';
import { SvgSprite } from './SvgSprite';

function Layout() {
  return (
    <>
      <SvgSprite />
      <AppBar />
      <main className="min-h-screen bg-no-repeat bg-cover w-full">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

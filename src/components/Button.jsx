import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

function Button({
  children,
  as = 'button',
  to,
  variant = 'red',
  width = 173,
  onClick,
  type = 'button',
}) {
  const classes = clsx(
    'cursor-pointer flex items-center justify-center rounded-[200px] h-[56px]',
    'text-[16px] font-medium leading-[1.5] tracking-[-0.01em]',
    width === 145 && 'w-[145px]',
    width === 166 && 'w-[166px]',
    width === 173 && 'w-[173px]',
    variant === 'red' && ['bg-redLight text-white', 'hover:bg-red'],
    variant === 'white' && [
      'bg-white text-dark border border-grayLight',
      'hover:border-red',
    ]
  );
  return as === 'button' ? (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  ) : (
    <NavLink to={to} className={classes}>
      {children}
    </NavLink>
  );
}

export default Button;

import clsx from 'clsx';
import Icon from './Icon';

function FormFilterButton({ onClick, selected, icon, label }) {
  return (
    <button
      className={clsx(
        'border w-[112px] h-[96px] rounded-[12px] border-grayLight items-center justify-center',
        selected ? 'border-red-700' : 'border-gray-600'
      )}
      type="button"
      onClick={onClick}
    >
      <div className="flex flex-col gap-2 items-center">
        <Icon id={icon} width={32} height={32} />
        <span>{label}</span>
      </div>
    </button>
  );
}

export default FormFilterButton;

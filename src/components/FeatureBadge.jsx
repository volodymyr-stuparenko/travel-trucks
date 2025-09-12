import Icon from './Icon';

function FeatureBadge({ icon = 'automatic' }) {
  return (
    <span className="rounded-[100px] px-3 py-[18px] h-12 bg-grayLighter mix-blend-multiply inline-flex items-center justify-start flex-row gap-2">
      <Icon id={icon} width={20} height={20} />
      <span className="capitalize">{icon}</span>
    </span>
  );
}

export default FeatureBadge;

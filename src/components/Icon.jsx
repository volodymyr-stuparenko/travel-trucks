function Icon({ id, className = '', width = 24, height = 24 }) {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`#${id}`} />
    </svg>
  );
}

export default Icon;

const LineHorizontalBlack = ({ ...props }) => {
  return (
    <svg
      width="220"
      height="1"
      viewBox="0 0 220 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line x1="0.5" y1="0.5" x2="219.5" y2="0.5" stroke="black" />
    </svg>
  );
};

export default LineHorizontalBlack;

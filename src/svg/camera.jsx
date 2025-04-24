export const CameraIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="cam" viewBox="0 0 32 32">
      <path
        d="M24,25h2a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1H22L21,8H11l-1,3H6a1,1,0,0,0-1,1V24a1,1,0,0,0,1,1H8"
        style={{
          fill: "none",
          stroke: "#0832ff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <circle
        cx={16}
        cy={20}
        r={6}
        style={{
          fill: "none",
          stroke: "#0832ff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <polygon
        points="21 8 11 8 10 10 22 10 21 8"
        style={{ fill: "#0832ff" }}
      />
      <line
        x1={10}
        x2={22}
        y1="11.5"
        y2="11.5"
        style={{ fill: "none", stroke: "#0832ff", strokeMiterlimit: 10 }}
      />
    </svg>
  );
};

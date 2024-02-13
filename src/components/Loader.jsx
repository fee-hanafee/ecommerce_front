

export default function Loader() {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-20 z-40 "></div>
      <div className="fixed inset-0 z-50 ">
        <div className="flex items-center justify-center min-h-full">
          <svg
           
            width="100%"
            height="100%"
            xmlns="https://www.w3.org/2000/svg"
        
            viewBox="0 0 100 100"
          >
            <circle cx="27.5" cy="62.5" r="5" fill="#000">
              <animate
                attributeName="cy"
                calcMode="spline"
                keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
                repeatCount="indefinite"
                values="62.5;37.5;62.5;62.5"
                keyTimes="0;0.25;0.5;1"
                dur="1s"
                begin="-0.5s"
              ></animate>
            </circle>
            <circle cx="42.5" cy="62.5" r="5" fill="#333">
              <animate
                attributeName="cy"
                calcMode="spline"
                keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
                repeatCount="indefinite"
                values="62.5;37.5;62.5;62.5"
                keyTimes="0;0.25;0.5;1"
                dur="1s"
                begin="-0.375s"
              ></animate>
            </circle>
            <circle cx="57.5" cy="48.4263" r="5" fill="#666">
              <animate
                attributeName="cy"
                calcMode="spline"
                keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
                repeatCount="indefinite"
                values="62.5;37.5;62.5;62.5"
                keyTimes="0;0.25;0.5;1"
                dur="1s"
                begin="-0.25s"
              ></animate>
            </circle>
            <circle cx="72.5" cy="38.9" r="5" fill="#999">
              <animate
                attributeName="cy"
                calcMode="spline"
                keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
                repeatCount="indefinite"
                values="62.5;37.5;62.5;62.5"
                keyTimes="0;0.25;0.5;1"
                dur="1s"
                begin="-0.125s"
              ></animate>
            </circle>
          </svg>
        </div>
      </div>
    </>
  );
}

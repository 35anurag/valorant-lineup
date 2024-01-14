import React, { useRef, useState, useContext } from "react";
import { useGesture } from "@use-gesture/react";
import { mainContext } from "../context/MainContext";
import { mapContext } from "../context/MapContext";

const Mapimg = () => {
  const { mapId, setMapId, mapImg, setMapImg } = useContext(mainContext);
  const [crop, setCrop] = useState({ x: 0, y: 0, scale: 1 });
  const imageRef = useRef();
  const { data } = useContext(mapContext);

  useGesture(
    {
      onDragStart: () => {
        imageRef.current.style.transition = "none";
      },
      onDrag: ({ movement: [dx, dy] }) => {
        setCrop((crop) => ({
          ...crop,
          x: crop.x + dx * 1,
          y: crop.y + dy * 1,
        }));
      },
      onDragEnd: () => {
        imageRef.current.style.transition = "transform 0.3s ease-out";
      },

      onPinch: ({ offset: [d] }) => {
        // console.log(d)
        if(d <= 2.6525817388323194 && d>=0.6863799531749226){
          // console.log(d)
          setCrop((crop) => ({ ...crop, scale:  d }));
        }
      },
    },
    {
      target: imageRef,
      eventOptions: { passive: false },
    }
  );
  return (
    <div className="text-white">
      {data.map((data) => (
        <div key={data.id}>
          {mapId === data.id ? (
            <img
              ref={imageRef}
              style={{
                transform: `translate3d(${crop.x}px, ${crop.y}px, 0) scale(${crop.scale})`,
                touchAction: "none",
              }}
              className="rotate-180"
              src={mapImg}
              alt="map"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Mapimg;

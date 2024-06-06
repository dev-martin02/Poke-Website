import { useEffect, useState } from "react";
import fire from "../../assets/icons/fire.svg";
import grass from "../../assets/icons/grass.svg";
import water from "../../assets/icons/water.svg";
import flying from "../../assets/icons/flying.svg";
import poison from "../../assets/icons/poison.svg";
import electric from "../../assets/icons/electric.svg";

export default function TypeTag({ children, types }) {
  const [ringColor, setRingColor] = useState({});

  const styles = {
    fire: {
      background: "bg-orange-500",
      fontColor: "text-white",
      backgroundImg: fire,
    },
    poison: {
      background: "bg-purple-500",
      fontColor: "text-white",
      backgroundImg: poison,
    },
    grass: {
      background: "bg-lime-600",
      fontColor: "text-white",
      backgroundImg: grass,
    },
    flying: {
      background: "bg-sky-600",
      fontColor: "text-white",
      backgroundImg: flying,
    },
    water: {
      background: "bg-blue-600",
      fontColor: "text-white",
      backgroundImg: water,
    },
    electric: {
      background: "bg-yellow-400",
      fontColor: "text-white",
      backgroundImg: electric,
    },
  };

  useEffect(() => {
    const iconImg = styles[types];
    setRingColor(() => iconImg);
  }, [types]);

  return (
    <div
      className={`flex justify-center align-middle ring-1 p-1 mt-1 ring-white rounded-lg font-semibold text-sm`}
    >
      {/* How can I make the icon color be a certain color?  */}
      {ringColor && (
        <img
          src={ringColor.backgroundImg}
          alt="pokemon type icon"
          className="h-4 self-center"
        />
      )}
      <p>{children}</p>
    </div>
  );
}

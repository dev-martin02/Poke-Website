import { useEffect, useState } from "react";
import pokemonStyle from "../pokemonStyle";

export default function TypeTag({ children, types }) {
  const [ringColor, setRingColor] = useState({});

  useEffect(() => {
    const iconImg = pokemonStyle[types];
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

import { useEffect, useState } from "react";

export default function TypeTag({ children, types }) {
  const [ringColor, setRingColor] = useState("");
  useEffect(() => {
    switch (types) {
      case "fire":
        setRingColor("ring-red-500 px-2");
        break;
      case "poison":
        setRingColor("ring-purple-500");
        break;
      case "grass":
        setRingColor("ring-lime-600");
        break;
      case "flying":
        setRingColor("ring-sky-300");
        break;
      case "water":
        setRingColor("ring-blue-600");
        break;
      default:
        setRingColor("ring-gray-500");
    }
  }, [types]);

  return (
    <>
      <span
        className={`p-1 m-1 ring-1 ${ringColor} rounded-lg font-semibold text-sm`}
      >
        {children}
      </span>
      <button className={`${types}`}></button>
    </>
  );
}

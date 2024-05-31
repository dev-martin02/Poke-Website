import { Link } from "react-router-dom";
import fire from "../../assets/icons/fire.svg";
import grass from "../../assets/icons/grass.svg";
import water from "../../assets/icons/water.svg";
import Flying from "../../assets/icons/flying.svg";
import Poison from "../../assets/icons/poison.svg";
import Electric from "../../assets/icons/electric.svg";

export default function PokeTypeNav() {
  const types = [
    { name: "Fire", imgIcon: fire, className: "bg-orange-500 text-white" },
    { name: "Water", imgIcon: water, className: "bg-blue-600 text-white" },
    { name: "Grass", imgIcon: grass, className: "bg-lime-600 text-white" },
    {
      name: "Electric",
      imgIcon: Electric,
      className: "bg-yellow-300  text-white",
    },
    { name: "Poison", imgIcon: Poison, className: "bg-purple-500 text-white" },
    { name: "Flying", imgIcon: Flying, className: "bg-sky-200  text-white" },
  ];

  return (
    <>
      {types.map((type, index) => (
        <div
          className={`p-2 m-2 rounded-lg font-semibold text-sm flex align-middle ${type.className}`}
        >
          <img src={type.imgIcon} alt="" className=" h-5" />
          <Link key={index} to={`/${type.name}`}>
            {type.name}
          </Link>
        </div>
      ))}
    </>
  );
}

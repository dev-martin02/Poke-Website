import { Link } from "react-router-dom";

export default function PokeTypeNav() {
  const types = [
    { name: "Fire", className: "bg-red-500 text-white" },
    { name: "Water", className: "bg-blue-600 text-white" },
    { name: "Grass", className: "bg-lime-600 text-white" },
    { name: "Electric", className: "bg-yellow-300" },
    { name: "Poison", className: "bg-purple-950 text-white" },
    { name: "Flying", className: "bg-sky-200" },
  ];

  return (
    <>
      {types.map((type, index) => (
        <Link
          key={index}
          to={`/${type.name}`}
          className={`p-2 m-2 rounded-lg font-semibold text-sm ${type.className}`}
        >
          {type.name}
        </Link>
      ))}
    </>
  );
}

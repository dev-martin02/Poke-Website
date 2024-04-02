export default function Home() {
  return (
    <>
      <header className="flex justify-between">
        <h1>Poke-Website</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Login</a>
          <a href="#">Choose a Type</a>
        </nav>
      </header>

      <main className="flex flex-col my-4">
        <h2 className="flex justify-center">
          Welcome to the BEST POKEMON website{" "}
        </h2>
        {/* in mobile version this bar-nav should be able to drag to show all the pokemon type */}
        <nav className="flex align-middle justify-around">
          <a href="#">Fire</a>
          <a href="#">Water</a>
          <a href="#">Plant</a>
          <a href="#">Electric</a>
          <a href="#">Ghost</a>
          <a href="#">Ice</a>
        </nav>
        <section id="PokemonCard" className="">
          <div className="mx-2 my-3 p-2 flex border-double border-4 border-red-500">
            <img src="" alt="Pokemon Image" />
            <div id="card-content" className=" mx-10">
              <p>Name</p>
              <p>Type</p>
              <button className="bg-transparent hover:bg-red-500 text-white-700 font-semibold hover:text-white my-2 py-1 px-2 border border-red-500 hover:border-transparent rounded">
                See More
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

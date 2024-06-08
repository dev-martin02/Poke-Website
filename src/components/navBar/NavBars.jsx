export default function NavBars({ children }) {
  /*
Add a pagination bar to the navBar and add more types 
*/

  return (
    <>
      <nav className="flex sm:flex-col align-middle justify-around w-52">
        {children}
      </nav>
    </>
  );
}

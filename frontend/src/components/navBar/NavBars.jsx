export default function NavBars({ children }) {
  return (
    <>
      <nav className="flex sm:flex-col align-middle justify-around w-52">
        {children}
      </nav>
    </>
  );
}

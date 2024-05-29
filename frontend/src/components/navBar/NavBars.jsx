export default function NavBars({ children }) {
  return (
    <>
      <nav className="flex sm:flex-col align-middle justify-around">
        {children}
      </nav>
    </>
  );
}

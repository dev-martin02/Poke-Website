export default function Form({ children, submit = null }) {
  return (
    <form onSubmit={submit} className="flex flex-col bg-cyan-100">
      {children}
    </form>
  );
}

// Form.jsx
export default function Form({ children, submit = null }) {
  // Change prop name to "children"
  return (
    <form onSubmit={submit} className="flex flex-col bg-cyan-100">
      {children}
    </form>
  );
}

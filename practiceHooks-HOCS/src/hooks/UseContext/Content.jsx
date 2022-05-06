import { useShow } from "./context/ShowContext";

function Content() {
  const { visible, toggleShow } = useShow();
  return (
    <>
      <h3>Some Title</h3>
      <button onClick={toggleShow}>
        {visible === false ? "show message" : "hide message"}{" "}
      </button>
    </>
  );
}

export default Content;

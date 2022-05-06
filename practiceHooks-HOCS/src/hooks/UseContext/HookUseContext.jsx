import Content from "./Content";
import { ShowProvider } from "./context/ShowContext";
import Message from "./Message";

export const HookUseContext = () => {
  return (
    <div>
      <h2>Context</h2>
      <ShowProvider>
        <Content />
        <Message />
      </ShowProvider>
    </div>
  );
};

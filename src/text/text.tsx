import { useState } from "react";

export function Text(): JSX.Element {
  const [state, setState] = useState<boolean>(false);

  const toggleTextHandler = (): void => {
    setState(!state);
  };

  return (
    <div className="text">
      <button onClick={toggleTextHandler}>Toggle Text</button>
      {state ? <div> 'Text' </div> : null}
    </div>
  );
}

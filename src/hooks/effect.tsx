import { useEffect, useState } from "react";

export function Effect() {
  const [toggle, setToggle] = useState(false);

  const myEffect = () => {
    console.log("this is a effect function", toggle);
  };

  useEffect(myEffect, [toggle]);

  const handleToggle: React.ChangeEventHandler<HTMLInputElement> = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <h1>Effect Hook</h1>
      <input type="checkbox" onChange={handleToggle} />
    </div>
  );
}

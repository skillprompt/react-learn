import { useState } from "react";

export function UserAge() {
  const [age, setAge] = useState(0);

  // HOMEWORK: find the type of the event parameter
  const handleAgeChange = (event) => {
    console.log("event", event.target.value);
    setAge(parseInt(event.target.value));
  };

  return (
    <div>
      <form>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" onChange={handleAgeChange} />
      </form>

      <h2>Your age is: {age}</h2>
    </div>
  );
}

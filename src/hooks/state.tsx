import { useState } from "react";

export function UserAge() {
  const [age, setAge] = useState(0);

  const handleAgeChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setAge(parseInt(event.target.value));
  };

  const handleBtnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    alert(`The age is: ${age}`);

    // can send the data to the server
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    alert(`from form, the age is: ${age}`);

    // can send the data to the server
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" onChange={handleAgeChange} />

        <button type="button" onClick={handleBtnClick}>
          Submit
        </button>

        <button type="submit">Submit using form</button>
      </form>

      <h2>Your age is: {age}</h2>
    </div>
  );
}

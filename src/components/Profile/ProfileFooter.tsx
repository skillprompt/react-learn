import { useUserCtx } from "../../store/user-context";

export function ProfileFooter() {
  const ctxOutput = useUserCtx();
  const loggedInUser = ctxOutput.username;

  return (
    <div style={{ border: "1px solid black" }}>
      <h1>Footer</h1>

      <select
        onChange={(event) => {
          const value = event.target.value;
          ctxOutput.handleUserNameChange(value);
        }}
      >
        <option selected={"Shyam" === loggedInUser}>Shyam</option>
        <option selected={"Ram" === loggedInUser}>Ram</option>
      </select>
    </div>
  );
}

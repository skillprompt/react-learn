import { useUserCtx } from "../../store/user-context";

export function ProfileFooter() {
  const ctxOutput = useUserCtx();
  const loggedInUser = ctxOutput.username;

  return (
    <div style={{ border: "1px solid black" }}>
      <h1>Footer</h1>

      <select>
        <option>{loggedInUser}</option>
        <option>Shyam</option>
      </select>
    </div>
  );
}

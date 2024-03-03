import { useUserCtx } from "../../store/user-context";

export function ProfileNav() {
  const ctxOutput = useUserCtx();
  const loggedInUser = ctxOutput.username;

  return (
    <div style={{ border: "1px solid black" }}>
      <h1>Logo of app</h1>
      {loggedInUser ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
}

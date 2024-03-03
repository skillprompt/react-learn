import { useUserCtx } from "../../store/user-context";
import { ProfileFooter } from "./ProfileFooter";
import { ProfileNav } from "./ProfileNavbar";

export function ProfileMainComponent() {
  const ctxOutput = useUserCtx();
  const username = ctxOutput.username;

  return (
    <div>
      <p>Logged in user is: {username}</p>

      <ProfileNav />

      <div style={{ padding: "100px" }}>main content</div>
      <ProfileFooter />
    </div>
  );
}

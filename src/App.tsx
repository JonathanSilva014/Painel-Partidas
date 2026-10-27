
import UserGreeting from "./components/userGreeting";

export default function App() {
  const user = {
    id: "1",
    primeiro: "Alberto",
    ultimo: "Menezes",
  };

  return (
    <UserGreeting user={user} />
  );
}

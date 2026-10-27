
import UserGreeting from "./components/userGreeting";
import Soma from "./components/soma";

export default function App() {
  const user = {
    id: "1",
    primeiro: "Alberto",
    ultimo: "Menezes",
  };

  return (
    <>
      <UserGreeting user={user} />
      <Soma a={10} b={20} />
    </>
  );
}

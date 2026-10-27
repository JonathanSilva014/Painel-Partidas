interface User {
    id: string
    primeiro: string
    ultimo: string
}

interface UserGreetingProps {
    user: User
}


export default function UserGreeting({ user }: UserGreetingProps) {
  return (
    <div className="bg-red-500 p-4">
      <h1>
        Olá, {user.primeiro} {user.ultimo}
      </h1>
    </div>
  );
}
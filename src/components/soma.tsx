
interface SomaProps {
  a: number;
  b: number;
}

export default function Soma({ a, b }: SomaProps) {
  const somar = a + b;

  return (
    <>
      <h1 className="text-white p-4 bg-blue-500">Soma dos números!</h1>
      <p>{a} + {b} = {somar}</p>
    </>
  );
}

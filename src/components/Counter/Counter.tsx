import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-600 p-6 rounded-lg shadow-md max-w-sm mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Contador Boladão</h2>
      <p className="text-center text-lg mb-4">Valor: {count}</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Diminuir
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Aumentar
        </button>
      </div>
    </div>
  );
}

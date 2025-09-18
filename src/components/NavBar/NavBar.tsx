export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Meu App</h1>
        <ul className="flex gap-6">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">Sobre</li>
          <li className="hover:text-gray-200 cursor-pointer">Contato</li>
        </ul>
      </div>
    </nav>
  );
}

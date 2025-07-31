import img from "../assets/react.svg";

export default function Navbar() {
  return (
    <div>
      <header className="flex items-center justify-between bg-white py-5 px-4 shadow-lg">
        <div>
          <img src={img} alt="website logo" className="cursor-pointer" />
        </div>
        <span className="text-orange-400">Arvind Kumar</span>

        <button className="bg-blue-500 py-2 px-5 rounded-md cursor-pointer hover:bg-red-500 ">
          History
        </button>
      </header>
    </div>
  );
}

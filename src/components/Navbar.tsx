export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-bold tracking-wide">Sammunat</h1>

        <button className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}

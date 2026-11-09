function Header() {
  return (
    <header className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl mb-6">
      <h1 className="text-4xl font-extrabold text-cyan-400 mb-2">Марта Чіх</h1>
      <p className="text-xl text-slate-300 mb-4">Фахівець з кібербезпеки / Python & C# Developer</p>
      
      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
        <p>Email: <a href="mailto:marta.chikh.kb.2025@lpnu.ua" className="text-cyan-300 hover:underline">marta.chikh.kb.2025@lpnu.ua</a></p>
        <span>|</span>
        <p>GitHub: <a href="https://github.com/martachikhkb2025-crypto/veb.git" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">github.com/martachikhkb2025</a></p>
      </div>
    </header>
  );
}

export default Header;
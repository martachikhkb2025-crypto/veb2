function Experience() {
  return (
    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-cyan-500 pb-2">Навчальні проєкти</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-slate-900">Лабораторний практикум з кібербезпеки (Python)</h3>
        <a href="https://github.com/martachikhkb2025-crypto/veb.git" target="_blank" rel="noreferrer" className="text-cyan-600 hover:underline text-sm mb-3 block">Репозиторій проєкту</a>
        <ul className="list-disc list-inside text-slate-700 space-y-1 ml-2">
          <li>Розробка консольних утиліт мовою Python для перевірки безпеки даних.</li>
          <li>Реалізація базових криптографічних алгоритмів.</li>
          <li>Використання Git для контролю версій.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-slate-900">Аналіз систем (СУІБ)</h3>
        <ul className="list-disc list-inside text-slate-700 space-y-1 ml-2 mt-3">
          <li>Вивчення вимог побудови СУІБ за стандартом ISO/IEC 27001.</li>
          <li>Оцінка ризиків та розробка рекомендацій щодо захисту.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
import { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "page dark" : "page"}>
      <div className="container">
        <div className="top-bar">
          <button className="theme-btn" onClick={() => setDark(!dark)}>
            {dark ? "☀️ Світла тема" : "🌙 Нічна тема"}
          </button>
        </div>

        <header className="card header">
          <h1>Чіх Марта Романівна</h1>
          <p>
            Контактна інформація:{" "}
            <a href="mailto:marta.chikh.kb.2025@lpnu.ua">
              marta.chikh.kb.2025@lpnu.ua
            </a>
          </p>
        </header>

        <section className="card">
          <h2>Про мене та Навички</h2>
          <p>
            Я — цілеспрямована студентка спеціальності «Кібербезпека» з інтересом до розробки вебзастосунків. Постійно опановую сучасні технології та прагну професійного розвитку в IT. Швидко навчаюся, вмію ефективно шукати та аналізувати інформацію, із задоволенням розв'язую складні логічні задачі.
          </p>
          <ul>
            <li>Розуміння принципів роботи Інтернету та клієнт-серверної архітектури</li>
            <li>Тайм-менеджмент та вміння працювати в команді</li>
            <li>Англійська мова на рівні читання технічної документації</li>
          </ul>
        </section>

        <section className="card">
          <h2>Освіта</h2>
          <p>
            Національний університет «Львівська політехніка», спеціальність
            125 «Кібербезпека»
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
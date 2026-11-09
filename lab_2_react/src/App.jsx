import { useState, useEffect } from 'react';
import Footer from './Footer';
import Reviews from './Reviews';
import ContactForm from './ContactForm';

export default function App() {
    const [theme, setTheme] = useState('light');

    // Автоматичне визначення теми при завантаженні
    useEffect(() => {
        const currentHour = new Date().getHours();
        setTheme((currentHour >= 7 && currentHour < 21) ? 'light' : 'dark');
    }, []);

    // Додавання/видалення класу dark-mode на тег <body> (як прописано у твоєму CSS)
    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <>
            <header>
                <h1>React Резюме</h1>
                <button onClick={toggleTheme}>
                    {theme === 'light' ? 'Увімкнути нічну тему' : 'Увімкнути денну тему'}
                </button>
            </header>
            
            <main>
                <Reviews />
            </main>
            
            <ContactForm />
            <Footer />
        </>
    );
}
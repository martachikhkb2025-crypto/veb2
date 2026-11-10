import { useEffect, useState } from 'react';

export default function Footer() {
    const [info, setInfo] = useState({ os: '', browser: '' });

    useEffect(() => {
        const sysInfo = {
            os: navigator.platform,
            browser: navigator.userAgent
        };
        localStorage.setItem('systemInfo', JSON.stringify(sysInfo));
        setInfo(JSON.parse(localStorage.getItem('systemInfo')));
    }, []);

    return (
        <footer>
            <p>Система: {info.os}</p>
            <p>Браузер: {info.browser}</p>
            <p>© 2026 Марта Чіх. Всі права захищено.</p>
        </footer>
    );
}
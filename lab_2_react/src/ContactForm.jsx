import { useEffect, useRef } from 'react';

export default function ContactForm() {
    const dialogRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (dialogRef.current) {
                dialogRef.current.showModal();
            }
        }, 60000); // 1 хвилина

        return () => clearTimeout(timer);
    }, []);

    return (
        <dialog ref={dialogRef}>
            <h3 style={{ marginTop: 0 }}>Зворотний зв'язок</h3>
            <form action="https://formspree.io/f/mwllwrvq" method="POST">
                <label>Ім'я <input type="text" name="name" required /></label>
                <label>Email <input type="email" name="email" required /></label>
                <label>Телефон <input type="tel" name="phone" required /></label>
                <label>Повідомлення <textarea name="message" required rows="3"></textarea></label>
                
                <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                    <button type="submit">Надіслати</button>
                    <button type="button" onClick={() => dialogRef.current.close()}>Закрити</button>
                </div>
            </form>
        </dialog>
    );
}
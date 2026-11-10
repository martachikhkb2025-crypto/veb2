import { useEffect, useState } from 'react';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const variantNumber = 27; // Заміни на свій порядковий номер у журналі

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error("Помилка завантаження:", err));
    }, []);

    return (
        <section className="section">
            <h2>Відгуки</h2>
            <div>
                {reviews.map(review => (
                    // Використовуємо клас .review з твого styles.css
                    <div key={review.id} className="review">
                        <h3>{review.name}</h3>
                        <p>{review.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
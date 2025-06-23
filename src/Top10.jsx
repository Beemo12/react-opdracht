import styles from './Top10.module.css';
 
 
const films = [
    { title: "fast and furious 1", director: "Rob Cohen" },
    { title: "fast and furious 2", director: "Rob Cohen" },
    { title: "fast and furious 3", director: "Rob Cohen" },
    { title: "fast and furious 4", director: "Rob Cohen" },
    { title: "fast and furious 5", director: "Rob Cohen" },
    { title: "fast and furious 6", director: "Rob Cohen" },
    { title: "fast and furious 7", director: "Rob Cohen" },
    { title: "fast and furious 8", director: "Rob Cohen" },
    { title: "fast and furious 9", director: "Rob Cohen" },
    { title: "fast and furious 10", director: "Rob Cohen" }
];
 
function Top10Item(props) {
    return (
        <li className={styles.book}>
            <div className={styles.bookNumber}>{props.number}</div>
            <div className={styles.bookContainer}>
                <h2 className={styles.bookTitle}>{props.title}</h2>
                <p className={styles.bookAuthor}>by {props.director}</p>
            </div>
        </li>
    );
}
 
export function Top10() {
    return (
        <section className={styles.TopItem10}>
            <h1>Top 10 Beste Films (2000–2025)</h1>
            <ol className={styles.book__list}>
                {films.map((film, index) => (
                    <Top10Item
                        key={index}
                        number={index + 1}
                        title={film.title}
                        director={film.director}
                    />
                ))}
            </ol>
        </section>
    );
}
 
 
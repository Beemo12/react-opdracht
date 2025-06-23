import styles from './Top10.module.css'
export function Top10(){
    return(
        <section className='top10'>
        <h1>Top 10 Favorite Books</h1>
        <ol className='book__list'>
            <Top10Item/>
            <Top10Item/>
            <Top10Item/>
            <Top10Item/>
        </ol>
    </section>
    
    )
}

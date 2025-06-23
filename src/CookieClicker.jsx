import React, { useState } from 'react';
import styles from './CookieClicker.module.css';

export function CookieClicker() {
    const [cookies, setCookies] = useState(0);
    const [grandmas, setGrandmas] = useState(0);
    
    const handleClick = () => {
        setCookies(cookies + 1 + grandmas);
    };
    
    function buyGrandma() {
        const grandmaCost = 20 * (1.15 ** grandmas);
        if (cookies >= grandmaCost) {
            setGrandmas(grandmas + 1);
            setCookies(cookies - grandmaCost);
        }
    }
    
    const grandmaCost = 20 * (1.15 ** grandmas);
    
    return (
        <section className={styles.cookieClicker}>
            <h2>Cookie Clicker</h2>
            <p>Cookies: {cookies}</p>
            <button className={styles.cookie} onClick={handleClick}></button>
            
            <div>
                <label htmlFor="button">Grandmas: {grandmas}</label>
                <button 
                    className={styles.upgrade} 
                    onClick={buyGrandma}
                    disabled={cookies < grandmaCost}
                >
                    Buy grandma ({Math.floor(grandmaCost)} cookies)
                </button>
            </div>
        </section>
    );
}
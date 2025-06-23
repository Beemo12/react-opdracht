import React from 'react';
import styles from './App.module.css';
import { AboutMe } from './AboutMe';
import { Top10 } from './Top10';
import { CookieClicker } from './cookieclicker';
import { Pokemon } from './pokemon';

function App() {
  return (
    
    <main className="min-h-screen bg-white p-8">
      <nav className={styles.navbar}>
	<ul className={styles.list}>
	<li className={styles.listItem}>
		<a href="#">Home</a>
	</li>
	<li className={styles.listItem}>
		<a href="/about">About</a>
	</li>
	<li className={styles.listItem}>
		<a href="/contact">Contact</a>
	</li>
  </ul>
</nav>


<Routes>
        <Route index element={<About />} />
        <Route path="/games" element={<Games/>} />
      </Routes>
    </main>
  );
}

export default App;
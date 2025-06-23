import React from 'react';
import styles from './App.module.css';
import { Routes, Route,Link } from 'react-router';
import { About } from './About';
import { Games } from './Games'
import { Contact } from './Contact'

function App() {
  return (

    <main className="min-h-screen bg-white p-8">
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
          <Link to="/">Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/games">Games</Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route index element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
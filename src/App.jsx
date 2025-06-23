import React from 'react';
import { AboutMe } from './AboutMe';
import { Top10 } from './Top10';
import { CookieClicker } from './cookieclicker';

function App() {
  return (
    <main className="min-h-screen bg-white p-8">
      <AboutMe />
      <Top10 />
      <CookieClicker/>
    </main>
  );
}

export default App;
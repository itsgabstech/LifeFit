// PESSOA 2 - PR 2: Complete this component
// TODO: Implementar página home com exercícios e plano do dia

import Header from './header';
import ExerciseCard from './exercise-card';
import DailyPlan from './daily-plan';
import Navigation from './navigation';
import { useState } from 'react';

interface HomeProps {
  userName: string;
  onLogout: () => void;
}

export default function Home({ userName, onLogout }: HomeProps) {
  const [currentNav, setCurrentNav] = useState('home');

  return (
    <main className="min-h-screen bg-slate-950 text-white pb-24">
      <Header userName={userName} onLogout={onLogout} />

      <div className="px-4 py-6 max-w-2xl mx-auto">
        {/* TODO: Add Popular Exercises section here */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Exercícios Populares</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {/* Add ExerciseCard components here */}
          </div>
        </section>

        {/* TODO: Add Daily Plan section here */}
        <DailyPlan />
      </div>

      <Navigation currentNav={currentNav} setCurrentNav={setCurrentNav} onLogout={onLogout} />
    </main>
  );
}

'use client';

import { useState } from 'react';
import Header from '@/components/header';
import ExerciseCard from '@/components/exercise-card';
import DailyPlan from '@/components/daily-plan';
import Navigation from '@/components/navigation';
import Image from 'next/image'; // Import Image

interface HomeProps {
    userName: string;
    onLogout: () => void;
}

// Updated with Stable Unsplash URLs
const popularExercises = [
    {
        id: 1,
        title: "Yoga Matinal",
        calories: "120 kcal",
        duration: "20 min",
        // Stable Yoga Image
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "HIIT Intenso",
        calories: "350 kcal",
        duration: "30 min",
        // Stable Cardio Image
        image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Core Power",
        calories: "200 kcal",
        duration: "15 min",
        // Stable Abs Image
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
    }
];

export default function Home({ userName, onLogout }: HomeProps) {
    const [currentNav, setCurrentNav] = useState('home');

    return (
        <main className="min-h-screen bg-slate-950 text-white pb-24 relative overflow-hidden">
            {/* Background Gradient Effect */}
            <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none z-0"></div>

            <Header userName={userName} onLogout={onLogout} />

            <div className="px-4 py-6 max-w-2xl mx-auto relative z-10 space-y-8">

                {/* Popular Exercises Section */}
                <section>
                    <div className="flex justify-between items-end mb-4">
                        <h2 className="text-xl font-bold">Exercícios Populares</h2>
                        <button className="text-sm text-amber-400 hover:text-amber-300 font-medium transition-colors">
                            Ver todos
                        </button>
                    </div>

                    {/* Horizontal Scroll Container */}
                    <div className="flex gap-4 overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide snap-x">
                        {popularExercises.map((ex) => (
                            <ExerciseCard
                                key={ex.id}
                                title={ex.title}
                                calories={ex.calories}
                                duration={ex.duration}
                                image={ex.image}
                            />
                        ))}
                    </div>
                </section>

                {/* Daily Plan Section with Hero Image */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-white">Plano do Dia e Sugestões</h2>
                    </div>
                    <p className="text-slate-400 text-sm mb-6">Maximize seus resultados com nosso treino completo sugerido para você.</p>

                    {/* Hero Image Card */}
                    <div className="relative w-full h-64 md:h-80 bg-slate-800 rounded-3xl overflow-hidden mb-8 shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920&auto=format&fit=crop"
                            alt="Treino do dia"
                            fill
                            className="object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <span className="inline-block bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full mb-2">Sugestão de Hoje</span>
                            <h3 className="text-2xl font-bold text-white">Treino de Corpo Inteiro</h3>
                            <p className="text-slate-300">45 min • Intensidade Média</p>
                        </div>
                    </div>

                    <DailyPlan />
                </section>
            </div>

            <Navigation
                currentNav={currentNav}
                setCurrentNav={setCurrentNav}
                onLogout={onLogout}
            />
        </main>
    );
}
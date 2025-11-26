    'use client';

    import { useState } from 'react';
    import Image from 'next/image';

    interface PlanItem {
        id: number;
        name: string;
        count: string;
        progress: number;
        status: 'pending' | 'in-progress' | 'completed';
        image: string;
    }

    const planItems: PlanItem[] = [
        {
            id: 1,
            name: 'Flexão',
            count: '100 Flexões por dia', // Fixed encoding
            progress: 45,
            status: 'in-progress',
            image: '/push-ups-exercise.jpg',
        },
        {
            id: 2,
            name: 'Agachamento',
            count: '50 Agachamentos por dia',
            progress: 70,
            status: 'completed',
            image: '/squats-exercise.png',
        },
        {
            id: 3,
            name: 'Flexão com o joelho',
            count: '30 Flexões por dia',
            progress: 20,
            status: 'pending',
            image: '/knee-push-ups.jpg',
        },
    ];

    export default function DailyPlan() {
        const [items, setItems] = useState(planItems);

        const handleProgressUpdate = (id: number) => {
            setItems(
                items.map((item) => {
                    if (item.id === id) {
                        // Increment progress by 25, max out at 100
                        const newProgress = Math.min(item.progress + 25, 100);
                        return {
                            ...item,
                            progress: newProgress,
                            status: newProgress === 100 ? 'completed' : 'in-progress',
                        };
                    }
                    return item;
                })
            );
        };

        return (
            <section className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-foreground">Plano do Dia</h2>
                    <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full">
              Intermediário
            </span>
                </div>

                <div className="space-y-3">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="bg-slate-800/50 rounded-xl p-4 flex gap-4 hover:bg-slate-800 transition-colors cursor-pointer"
                            onClick={() => handleProgressUpdate(item.id)}
                        >
                            {/* Exercise Image - Converted to Next/Image */}
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-700">
                                <Image
                                    src={item.image || '/placeholder.svg'}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="font-semibold text-white mb-1">{item.name}</h3>
                                <p className="text-sm text-slate-400 mb-3">{item.count}</p>

                                {/* Progress Bar */}
                                <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                                    <div
                                        className={`h-full transition-all duration-300 ${
                                            item.status === 'completed'
                                                ? 'bg-amber-400'
                                                : 'bg-amber-400'
                                        }`}
                                        // Fixed Syntax Error Here (added backticks)
                                        style={{ width: `${item.progress}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs text-slate-400 mt-1">{item.progress}%</p>
                            </div>

                            {/* Status Badge */}
                            <div className="flex-shrink-0 flex items-center justify-center">
                                {item.status === 'completed' && (
                                    <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                                        <span className="text-slate-950 font-bold">✓</span>
                                    </div>
                                )}
                                {item.status === 'in-progress' && (
                                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                                        <span className="text-slate-300 text-xs">⟳</span>
                                    </div>
                                )}
                                {item.status === 'pending' && (
                                    <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                                        <span className="text-slate-400 text-xs">→</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
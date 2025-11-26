'use client';

import { Play } from 'lucide-react';

interface ExerciseCardProps {
    title: string;
    calories: string;
    duration: string;
    image: string;
}

export default function ExerciseCard({
                                         title,
                                         calories,
                                         duration,
                                         image,
                                     }: ExerciseCardProps) {
    return (
        <div className="min-w-[280px] relative rounded-2xl overflow-hidden group cursor-pointer snap-center flex-shrink-0">
            <div className="relative h-40 bg-slate-800">
                <img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* UPDATED GRADIENT:
                   Changed to 'bg-gradient-to-b' (Top to Bottom) with darkness
                   at BOTH ends (from-black/80 ... to-black/80)
                   This ensures the top text and bottom badges always have a dark backdrop.
                */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="flex justify-between items-start">
                    {/* UPDATED TEXT:
                       Added 'drop-shadow-md' and a specific shadow value to create a
                       "border" effect around the white text.
                    */}
                    <h3 className="text-lg font-bold text-white text-balance drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        {title}
                    </h3>

                    <button className="bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg scale-90 group-hover:scale-100">
                        <Play className="w-5 h-5 fill-current" />
                    </button>
                </div>

                {/* Stats */}
                <div className="flex gap-3 text-xs font-medium">
                    <div className="flex items-center gap-1 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1">
                        <span className="text-amber-400">⏱️</span>
                        <span className="text-slate-100">{duration}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1">
                        <span className="text-orange-500">🔥</span>
                        <span className="text-slate-100">{calories}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
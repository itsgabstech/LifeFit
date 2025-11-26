import { Bell } from 'lucide-react';

interface HeaderProps {
    userName: string;
    onLogout: () => void;
}

export default function Header({ userName }: HeaderProps) {
    return (
        <div className="bg-slate-900/50 backdrop-blur-md border-b border-slate-800 sticky top-0 z-20">
            <div className="px-4 py-4 max-w-2xl mx-auto flex justify-between items-center">
                <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Bem-vindo de volta</p>
                    <h1 className="text-xl font-bold text-white">
                        Olá, <span className="text-amber-400">{userName}</span> 👋
                    </h1>
                    <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Sua plataforma de treinos personalizados!</p>
                </div>

                <button className="relative p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                    <Bell className="w-5 h-5 text-slate-200" />
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-slate-900"></span>
                </button>
            </div>
        </div>
    );
}
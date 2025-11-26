import { Home, Calendar, User, LogOut } from 'lucide-react';

interface NavigationProps {
    currentNav: string;
    setCurrentNav: (nav: string) => void;
    onLogout: () => void;
}

export default function Navigation({ currentNav, setCurrentNav, onLogout }: NavigationProps) {
    const navItems = [
        { id: 'home', icon: Home, label: 'Início' },
        { id: 'calendar', icon: Calendar, label: 'Agenda' },
        { id: 'profile', icon: User, label: 'Perfil' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 z-20 pb-safe">
            <div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentNav === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setCurrentNav(item.id)}
                            className={`flex flex-col items-center justify-center space-y-1 w-16 transition-colors ${
                                isActive ? 'text-amber-400' : 'text-slate-500 hover:text-slate-300'
                            }`}
                        >
                            <Icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} />
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </button>
                    );
                })}

                {/* Logout Button separated visually */}
                <div className="h-8 w-px bg-slate-800 mx-2"></div>

                <button
                    onClick={onLogout}
                    className="flex flex-col items-center justify-center space-y-1 w-16 text-red-400 hover:text-red-300 transition-colors"
                >
                    <LogOut className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Sair</span>
                </button>
            </div>
        </div>
    );
}
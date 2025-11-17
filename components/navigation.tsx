// PESSOA 3 - PR 3: Complete this component
// TODO: Implementar barra de navegação inferior com 4 botões

interface NavigationProps {
  currentNav: string;
  setCurrentNav: (nav: string) => void;
  onLogout: () => void;
}

export default function Navigation({
  currentNav,
  setCurrentNav,
  onLogout,
}: NavigationProps) {
  // TODO: Add navigation items here
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-950 border-t border-slate-800">
      <div className="max-w-2xl mx-auto px-4 py-3 flex justify-around items-center">
        {/* Add your navigation buttons here */}
      </div>
    </div>
  );
}

// PESSOA 1 - PR 1: Complete this component
// TODO: Implementar header com nome do usuário e logout

interface HeaderProps {
  userName: string;
  onLogout: () => void;
}

export default function Header({ userName, onLogout }: HeaderProps) {
  // TODO: Add header content here
  return (
    <div className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
      <div className="px-4 py-4 max-w-2xl mx-auto">
        {/* Add your header content here */}
      </div>
    </div>
  );
}

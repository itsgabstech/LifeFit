// PESSOA 1 - PR 1: Complete this component
// TODO: Implementar formulário de login com validação

interface LoginProps {
  onLogin: (email: string, name: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  // TODO: Add your login form here
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">FitApp</h1>
        {/* Add your login form here */}
      </div>
    </main>
  );
}

// PESSOA 2 - PR 2: Complete this component
// TODO: Implementar card de exercício com imagem, calorias e duração

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
  // TODO: Add exercise card content here
  return (
    <div className="min-w-[280px] relative rounded-2xl overflow-hidden bg-slate-800">
      {/* Add your exercise card here */}
    </div>
  );
}

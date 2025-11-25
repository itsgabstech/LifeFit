// PESSOA 2 - PR 2: Dashboard - Exercise Card

interface ExerciseCardProps {
  title: string;
  calories: string;
  duration: string;
  image: string;
  sets?: string; // séries e repetições
  videoUrl?: string; // link do vídeo demonstrativo
}

export default function ExerciseCard({
  title,
  calories,
  duration,
  image,
  sets,
  videoUrl,
}: ExerciseCardProps) {
  return (
    <div className="min-w-[280px] relative rounded-2xl overflow-hidden bg-slate-800 p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p>🔥 Calorias: {calories}</p>
      <p>⏱️ Duração: {duration}</p>
      {sets && <p>💪 Séries/Repetições: {sets}</p>}
      {videoUrl && (
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          🎥 Ver vídeo demonstrativo
        </a>
      )}
    </div>
  );
}

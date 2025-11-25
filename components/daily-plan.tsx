import ExerciseCard from "./exercise-card";

export default function DailyPlan() {
  const exercises = [
    {
      title: "Push-Up (Flexão de braço)",
      calories: "50",
      duration: "3x12 repetições",
      image: "https://www.verywellfit.com/thmb/PushUp.jpg", // exemplo de imagem
      sets: "3 séries de 12 repetições",
      videoUrl: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    },
    {
      title: "Squat (Agachamento)",
      calories: "70",
      duration: "4x15 repetições",
      image: "https://www.spotebi.com/wp-content/uploads/2014/10/squat-exercise-illustration.jpg",
      sets: "4 séries de 15 repetições",
      videoUrl: "https://www.youtube.com/watch?v=aclHkVaku9U",
    },
    {
      title: "Plank (Prancha abdominal)",
      calories: "20",
      duration: "3x30 segundos",
      image: "https://www.verywellfit.com/thmb/plank.jpg",
      sets: "3 séries de 30 segundos",
      videoUrl: "https://www.youtube.com/watch?v=pSHjTRCQxIw",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {exercises.map((ex, i) => (
        <ExerciseCard key={i} {...ex} />
      ))}
    </div>
  );
}

export function generateExercise(topic: string) {
  return {
    topic,
    exercise: `Generate an exercise about ${topic}`,
    correction: `Step-by-step correction for ${topic}`,
    skills: ["reasoning", "problem solving"]
  };
}

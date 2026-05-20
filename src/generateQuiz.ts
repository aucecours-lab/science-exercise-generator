export function generateQuiz(topic: string) {
  return {
    topic,
    questions: [
      {
        question: `What is the main concept of ${topic}?`,
        difficulty: "easy"
      }
    ]
  };
}

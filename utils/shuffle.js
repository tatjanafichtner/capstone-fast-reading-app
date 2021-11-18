// Function to display all possible answers in QuestionCard randomly

export const shuffleAnswerArray = (array) => {
  return [...array].sort(() => {
    Math.random() - 0.5;
  });
};

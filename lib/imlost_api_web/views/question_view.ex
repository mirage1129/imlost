defmodule ImlostApiWeb.QuestionView do
  use ImlostApiWeb, :view

  def render("index.json", %{questions: questions}) do
    %{
        questions: Enum.map(questions, &questions_json/1)
     }
  end
  def questions_json(question) do
    %{
       message: question.content
    }
  end

end

defmodule ImlostApiWeb.QuestionController do
  use ImlostApiWeb, :controller

  alias ImlostApi.Classrooms
  alias ImlostApi.Classrooms.Question

  # def action(conn, _) do
  #   class = Classrooms.get_class!(conn.params["class_id"])
  #   args = [conn, conn.params, class]
  #   apply(__MODULE__, action_name(conn), args)
  # end

  def index(conn, %{"id" => id}) do
    questions = Classrooms.list_questions(id)
    render(conn, "index.json", questions: questions)
  end

  # def new(conn, _params, class) do
  #   changeset = Classrooms.change_question(%Question{class_id: class.id})
  #   render(conn, "new.html", changeset: changeset, class: class)
  # end

  # def create(conn, %{"question" => question_params}, class_id) do
  #   question_params = question_params |> Map.put("class_id", class_id)

  #   case Classrooms.create_question(question_params) do
  #     {:ok, question} ->
  #       questions = Classrooms.list_questions(class_id)
  #       render(conn, "index.json", questions: questions, class: class_id)
  #   end
  # end

  # def show(conn, %{"id" => id}, class) do
  #   question = Classrooms.get_question!(class, id)
  #   render(conn, "show.html", question: question, class: class)
  # end

  def edit(conn, %{"id" => id}, class) do
    question = Classrooms.get_question!(class, id)
    changeset = Classrooms.change_question(question)
    render(conn, "edit.html", question: question, changeset: changeset, class: class)
  end

  def update(conn, %{"id" => id, "question" => question_params}, class) do
    question = Classrooms.get_question!(class, id)

    case Classrooms.update_question(question, question_params) do
      {:ok, question} ->
        conn
        |> put_flash(:info, "Question updated successfully.")
        |> redirect(to: Routes.question_path(conn, :show, class, question))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", question: question, changeset: changeset, class: class)
    end
  end

  def delete(conn, %{"id" => id}, class) do
    question = Classrooms.get_question!(class, id)
    {:ok, _question} = Classrooms.delete_question(question)

    conn
    |> put_flash(:info, "Question deleted successfully.")
    |> redirect(to: Routes.question_path(conn, :index, class))
  end
end

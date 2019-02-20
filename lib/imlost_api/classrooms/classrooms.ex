defmodule ImlostApi.Classrooms do
  @moduledoc """
  The Classrooms context.
  """

  import Ecto.Query, warn: false
  alias ImlostApi.Repo
  alias ImlostApi.Classrooms.Class

  def list_classes do
    Repo.all(Class)
  end

  def get_class_by_name(params) do
    search_term = get_in(params, ["query"])

    Class
    |> Class.search(search_term)
    |> Repo.one()
  end

  def search(query, search_term) do
    wildcard_search = "%#{search_term}%"

    from class in query,
    where: ilike(class.name, ^wildcard_search)
  end

  def get_class!(id), do: Repo.get!(Class, id)

  def create_class(attrs \\ %{}) do
    %Class{}
    |> Class.changeset(attrs)
    |> Repo.insert()
  end

  def update_class(%Class{} = class, attrs) do
    class
    |> Class.changeset(attrs)
    |> Repo.update()
  end

  def delete_class(%Class{} = class) do
    Repo.delete(class)
  end

  def change_class(%Class{} = class) do
    Class.changeset(class, %{})
  end

  alias ImlostApi.Classrooms.Question

  def list_questions(class) do
    Question
    |> where([q], q.class_id == ^class.id)
    |> Repo.all
  end

  def get_question!(class, id) do
    Question
    |> where([q], q.class_id == ^class.id)
    |> Repo.get!(id)
  end

  def create_question(attrs \\ %{}) do
    %Question{}
    |> Question.changeset(attrs)
    |> Repo.insert()
  end

  def update_question(%Question{} = question, attrs) do
    question
    |> Question.changeset(attrs)
    |> Repo.update()
  end

  def delete_question(%Question{} = question) do
    Repo.delete(question)
  end

  def change_question(%Question{} = question) do
    Question.changeset(question, %{})
  end
end

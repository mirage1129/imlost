defmodule ImlostApiWeb.ClassController do
  use ImlostApiWeb, :controller

  alias ImlostApi.Classrooms
  alias ImlostApi.Classrooms.Question
  alias ImlostApi.Accounts

  def create(conn, %{"class" => class_params}) do
    case Classrooms.create_class(class_params) do
      {:ok, class} ->
        Accounts.create_user(class)
        # IO.puts(class.id)
        render conn, "show.json", id: class.id
    end
  end

  def show(conn, params) do
    class = Classrooms.get_class_by_name(params)
    Accounts.create_user(class)
    render(conn, "show.json", class: class)
  end

end

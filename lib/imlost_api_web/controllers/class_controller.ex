defmodule ImlostApiWeb.ClassController do
  use ImlostApiWeb, :controller

  alias ImlostApi.Classrooms
  alias ImlostApi.Classrooms.Class

  def index(conn, params) do
    class = Classrooms.get_class_by_name(params)
    render(conn, "show.html", class: class)
  end

  def create(conn, %{"class" => class_params}) do
    case Classrooms.create_class(class_params) do
      {:ok, class} ->
        conn
        |> put_flash(:info, "Class created successfully.")
        |> redirect(to: Routes.class_path(conn, :show, class))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    class = Classrooms.get_class!(id)
    render(conn, "show.html", class: class)
  end
end

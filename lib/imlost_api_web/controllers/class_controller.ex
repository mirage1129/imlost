defmodule ImlostApiWeb.ClassController do
  use ImlostApiWeb, :controller

  alias ImlostApi.Classrooms
  alias ImlostApi.Classrooms.Class

  def index(conn, _params) do
    classes = Classrooms.list_classes()
    render(conn, "index.html", classes: classes)
  end

  def new(conn, _params) do
    changeset = Classrooms.change_class(%Class{})
    render(conn, "new.html", changeset: changeset)
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

  def edit(conn, %{"id" => id}) do
    class = Classrooms.get_class!(id)
    changeset = Classrooms.change_class(class)
    render(conn, "edit.html", class: class, changeset: changeset)
  end

  def update(conn, %{"id" => id, "class" => class_params}) do
    class = Classrooms.get_class!(id)

    case Classrooms.update_class(class, class_params) do
      {:ok, class} ->
        conn
        |> put_flash(:info, "Class updated successfully.")
        |> redirect(to: Routes.class_path(conn, :show, class))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", class: class, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    class = Classrooms.get_class!(id)
    {:ok, _class} = Classrooms.delete_class(class)

    conn
    |> put_flash(:info, "Class deleted successfully.")
    |> redirect(to: Routes.class_path(conn, :index))
  end
end

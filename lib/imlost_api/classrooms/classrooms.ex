defmodule ImlostApi.Classrooms do
  @moduledoc """
  The Classrooms context.
  """

  import Ecto.Query, warn: false
  alias ImlostApi.Repo
  alias ImlostApi.Classrooms.Class

  def list_classes(params) do
    search_term = get_in(params, ["query"])

    Class
    |> Class.search(search_term)
    |> Repo.all()
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
end

defmodule ImlostApi.Classrooms.Class do
  use Ecto.Schema
  import Ecto.Changeset
  import Ecto.Query


  schema "classes" do
    field :name, :string
    has_many :user, ImlostApi.Accounts.User
    timestamps()
  end

  @doc false
  def changeset(class, attrs) do
    class
    |> cast(attrs, [:name])
    |> validate_required([:name])
  end

  def search(query, search_term) do
    wildcard_search = "%#{search_term}%"

    from class in query,
    where: ilike(class.name, ^wildcard_search)
  end

end

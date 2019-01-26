defmodule ImlostApi.Classrooms.Class do
  use Ecto.Schema
  import Ecto.Changeset


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
end

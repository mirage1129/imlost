defmodule ImlostApi.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset


  schema "users" do
    belongs_to :class, ImlostApi.Classrooms.Class

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [])
    |> validate_required([])
  end
end

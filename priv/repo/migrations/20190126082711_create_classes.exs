defmodule ImlostApi.Repo.Migrations.CreateClasses do
  use Ecto.Migration

  def change do
    create table(:classes) do
      add :name, :string

      timestamps()
    end

    create index(:classes, [:name])
  end
end

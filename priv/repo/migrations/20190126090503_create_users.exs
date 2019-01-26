defmodule ImlostApi.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :class_id, references(:classes, on_delete: :delete_all)

      timestamps()
    end

    create index(:users, [:class_id])
  end
end

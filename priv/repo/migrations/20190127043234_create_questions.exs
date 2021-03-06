defmodule ImlostApi.Repo.Migrations.CreateQuestions do
  use Ecto.Migration

  def change do
    create table(:questions) do
      add :content, :text
      add :upvotes, :integer
      add :user_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:questions, [:user_id])
  end
end

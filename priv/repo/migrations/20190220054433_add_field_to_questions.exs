defmodule ImlostApi.Repo.Migrations.AddFieldToQuestions do
  use Ecto.Migration

  def change do
    alter table(:questions) do
      add :class_id, references(:classes, on_delete: :nothing)
    end
  end
end

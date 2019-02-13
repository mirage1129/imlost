defmodule ImlostApiWeb.ClassView do
  use ImlostApiWeb, :view

  def render("show.json", %{class: class}) do
    %{
      class: classes_json(class)
    }
  end

  def classes_json(class) do
    %{
      id: class.id,
      name: class.name
    }
  end

end

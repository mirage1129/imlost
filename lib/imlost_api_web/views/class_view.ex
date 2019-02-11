defmodule ImlostApiWeb.ClassView do
  use ImlostApiWeb, :view

  def render("show.json", class) do
    %{
       id: class.id,
       name: class.name
    }
  end


end

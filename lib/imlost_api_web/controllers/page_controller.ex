defmodule ImlostApiWeb.PageController do
  use ImlostApiWeb, :controller
  alias ImlostApi.Classrooms
  alias ImlostApi.Classrooms.Class

  def index(conn, _params) do
    changeset = Classrooms.change_class(%Class{})
    render(conn, "index.html", changeset: changeset)
  end
end

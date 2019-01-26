defmodule ImlostApiWeb.PageController do
  use ImlostApiWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end

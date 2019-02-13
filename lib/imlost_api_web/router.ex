defmodule ImlostApiWeb.Router do
  use ImlostApiWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ImlostApiWeb do
    pipe_through :api
    resources "/classes", ClassController, only: [:create]
    get "/:query", ClassController, :show

  end

end

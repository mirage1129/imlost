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

  scope "/", ImlostApiWeb do
    pipe_through :browser
    get "/", PageController, :index
    resources "/classes", ClassController, only: [:index, :create, :show]
  end

  # Other scopes may use custom stacks.
  # scope "/api", ImlostApiWeb do
  #   pipe_through :api
  # end
end

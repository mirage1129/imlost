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
  resources "/classes", ClassController, only: [:index, :create, :show]
  end

end

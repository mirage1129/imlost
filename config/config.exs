# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :imlost_api,
  ecto_repos: [ImlostApi.Repo]

# Configures the endpoint
config :imlost_api, ImlostApiWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "QylQJwJT7cQ9uHbN13Gy4ooen9R/LkldB+o9HnmwQjiNL6ykFX1cDjH89OT0/J2h",
  render_errors: [view: ImlostApiWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: ImlostApi.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"

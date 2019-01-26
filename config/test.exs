use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :imlost_api, ImlostApiWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :imlost_api, ImlostApi.Repo,
  username: "postgres",
  password: "postgres",
  database: "imlost_api_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

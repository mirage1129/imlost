defmodule ImlostApi.Repo do
  use Ecto.Repo,
    otp_app: :imlost_api,
    adapter: Ecto.Adapters.Postgres
end

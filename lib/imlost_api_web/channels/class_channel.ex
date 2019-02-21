defmodule ImlostApiWeb.ClassChannel do
  use Phoenix.Channel
  alias ImlostApi.Classrooms

  def join("class:" <> class_id, _message, socket) do
    {:ok, %{channel: "class:#{class_id}"}, assign(socket, :class_id, class_id)}
  end

def handle_in("new_question", %{"body" => body}, socket) do
    class_id = socket.assigns[:class_id]

    Classrooms.create_question(%{content: body, class_id: class_id})
    # %{"question" => class_params}
    broadcast!(socket, "class:#{class_id}:new_question", %{body: body})
    {:noreply, socket}
  end

end

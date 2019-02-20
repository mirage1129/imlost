defmodule ImlostApiWeb.ClassChannel do
  use Phoenix.Channel

  def join("class:" <> class_id, _message, socket) do
    {:ok, %{channel: "class:#{class_id}"}, assign(socket, :class_id, class_id)}
  end

def handle_in("new_question", %{"body" => body}, socket) do
    class_id = socket.assigns[:class_id]
    broadcast!(socket, "class:#{class_id}:new_question", %{body: body})
    {:noreply, socket}
  end

end

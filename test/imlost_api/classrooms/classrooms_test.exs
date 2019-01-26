defmodule ImlostApi.ClassroomsTest do
  use ImlostApi.DataCase

  alias ImlostApi.Classrooms

  describe "classes" do
    alias ImlostApi.Classrooms.Class

    @valid_attrs %{name: "some name"}
    @update_attrs %{name: "some updated name"}
    @invalid_attrs %{name: nil}

    def class_fixture(attrs \\ %{}) do
      {:ok, class} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Classrooms.create_class()

      class
    end

    test "list_classes/0 returns all classes" do
      class = class_fixture()
      assert Classrooms.list_classes() == [class]
    end

    test "get_class!/1 returns the class with given id" do
      class = class_fixture()
      assert Classrooms.get_class!(class.id) == class
    end

    test "create_class/1 with valid data creates a class" do
      assert {:ok, %Class{} = class} = Classrooms.create_class(@valid_attrs)
      assert class.name == "some name"
    end

    test "create_class/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Classrooms.create_class(@invalid_attrs)
    end

    test "update_class/2 with valid data updates the class" do
      class = class_fixture()
      assert {:ok, %Class{} = class} = Classrooms.update_class(class, @update_attrs)
      assert class.name == "some updated name"
    end

    test "update_class/2 with invalid data returns error changeset" do
      class = class_fixture()
      assert {:error, %Ecto.Changeset{}} = Classrooms.update_class(class, @invalid_attrs)
      assert class == Classrooms.get_class!(class.id)
    end

    test "delete_class/1 deletes the class" do
      class = class_fixture()
      assert {:ok, %Class{}} = Classrooms.delete_class(class)
      assert_raise Ecto.NoResultsError, fn -> Classrooms.get_class!(class.id) end
    end

    test "change_class/1 returns a class changeset" do
      class = class_fixture()
      assert %Ecto.Changeset{} = Classrooms.change_class(class)
    end
  end
end

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

  describe "questions" do
    alias ImlostApi.Classrooms.Question

    @valid_attrs %{content: "some content", upvotes: 42}
    @update_attrs %{content: "some updated content", upvotes: 43}
    @invalid_attrs %{content: nil, upvotes: nil}

    def question_fixture(attrs \\ %{}) do
      {:ok, question} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Classrooms.create_question()

      question
    end

    test "list_questions/0 returns all questions" do
      question = question_fixture()
      assert Classrooms.list_questions() == [question]
    end

    test "get_question!/1 returns the question with given id" do
      question = question_fixture()
      assert Classrooms.get_question!(question.id) == question
    end

    test "create_question/1 with valid data creates a question" do
      assert {:ok, %Question{} = question} = Classrooms.create_question(@valid_attrs)
      assert question.content == "some content"
      assert question.upvotes == 42
    end

    test "create_question/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Classrooms.create_question(@invalid_attrs)
    end

    test "update_question/2 with valid data updates the question" do
      question = question_fixture()
      assert {:ok, %Question{} = question} = Classrooms.update_question(question, @update_attrs)
      assert question.content == "some updated content"
      assert question.upvotes == 43
    end

    test "update_question/2 with invalid data returns error changeset" do
      question = question_fixture()
      assert {:error, %Ecto.Changeset{}} = Classrooms.update_question(question, @invalid_attrs)
      assert question == Classrooms.get_question!(question.id)
    end

    test "delete_question/1 deletes the question" do
      question = question_fixture()
      assert {:ok, %Question{}} = Classrooms.delete_question(question)
      assert_raise Ecto.NoResultsError, fn -> Classrooms.get_question!(question.id) end
    end

    test "change_question/1 returns a question changeset" do
      question = question_fixture()
      assert %Ecto.Changeset{} = Classrooms.change_question(question)
    end
  end
end

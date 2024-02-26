import { useEffect, useState } from "react";
import styles from "./TodosList.module.css";
import { FiTrash } from "react-icons/fi";
import { MdEdit } from "react-icons/md";

type TTodoItem = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export function TodosList() {
  const [todos, setTodos] = useState<TTodoItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedTodo, setSelectedTodo] = useState<TTodoItem | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        const jsonData = response.json();
        return jsonData;
      })
      .then((jsonData) => {
        console.log("jsonData", jsonData);
        setTodos(jsonData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const handleDeleteTodo = (id: number) => {
    // delete the id 5
    console.log("delete", id);

    // TODO: backend integration
    // because there is no api

    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  // derived state
  // const selectedTodo = todos.find((todo) => todo.id === selectedId);

  const handleTitleChange = (value: string) => {
    setSelectedTodo((prevValue) => {
      if (prevValue) {
        return {
          // id: prevValue.id,
          // completed: prevValue.completed,
          // userId: prevValue.userId,
          ...prevValue,
          title: value,
        };
      } else {
        return prevValue;
      }
    });
  };

  const handleCompletedChange = (checked: boolean) => {
    setSelectedTodo((prevValue) => {
      if (prevValue) {
        return {
          id: prevValue.id,
          title: prevValue.title,
          completed: checked,
          userId: prevValue.userId,
        };
      } else {
        return prevValue;
      }
    });
  };

  const handleFormSubmission = () => {
    // state
    // backend request
    const updatedTodos = todos.map((todo) => {
      if (todo.id === selectedTodo?.id) {
        return selectedTodo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
    setIsModalOpen(false);

    // form data
    // const formData = new FormData(target);
    // const title = formData.get("title") as string;
    // const completed = formData.get("completed") as string;
    // const id = formData.get("id") as string;
    // const userId = formData.get("userId") as string;

    // const updatedTodos = todos.map((todo) => {
    //   if (todo.id === parseInt(id)) {
    //     return {
    //       id: parseInt(id),
    //       title: title,
    //       completed: completed === "on",
    //       userId: parseInt(userId),
    //     };
    //   } else {
    //     return todo;
    //   }
    // });
    // setTodos(updatedTodos);
    // setIsModalOpen(false);
  };

  return (
    <div className={styles.todos_list_container}>
      <h2>List of Todos</h2>

      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              id: {todo.id}, title: {todo.title}, completed:
              {todo.completed ? "Yes" : "No"}
              <FiTrash
                onClick={() => {
                  handleDeleteTodo(todo.id);
                }}
              />
              <MdEdit
                onClick={() => {
                  console.log("Edit", todo.id);
                  setIsModalOpen(true);
                  setSelectedTodo({
                    id: todo.id,
                    title: todo.title,
                    completed: todo.completed,
                    userId: todo.userId,
                  });
                }}
              />
            </li>
          );
        })}
      </ul>

      {isModalOpen ? (
        <div className="modal-todo">
          <h1>Todo modal (id: {selectedTodo?.id})</h1>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleFormSubmission();
            }}
          >
            <input type="hidden" name="id" value={selectedTodo?.id} />
            <input type="hidden" name="userId" value={selectedTodo?.userId} />
            <input
              name="title"
              type="text"
              value={selectedTodo?.title}
              onChange={(event) => {
                const value = event.target.value;
                handleTitleChange(value);
              }}
            />
            <input
              name="completed"
              type="checkbox"
              checked={selectedTodo?.completed}
              onChange={(event) => {
                const isChecked = event.target.checked;
                handleCompletedChange(isChecked);
              }}
            />
            <button>Update</button>
          </form>

          <button
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Close Modal
          </button>
        </div>
      ) : null}
    </div>
  );
}

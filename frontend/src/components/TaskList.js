import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import axios from "axios";
import { toast } from "react-toastify";

function TaskList(props) {
  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });
  const { name } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //   const getTasks = async () => {
  //     setIsLoading(true);
  //     try {
  //       const { data } = await axios.get(`${URL}/api/tasks`);
  //       setTasks(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       toast.error(error.message);
  //       setIsLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     getTasks();
  //   }, []);

  const createTask = async (e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("Input field cannot be empty");
    }
    try {
      await axios.post(`http://localhost:5000/api/tasks`, formData);
      toast.success("Task added successfully");
      setFormData({ ...formData, name: "" });
      //   getTasks();
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  //   const deleteTask = async (id) => {
  //     try {
  //       await axios.delete(`${URL}/api/tasks/${id}`);
  //       getTasks();
  //     } catch (error) {
  //       toast.error(error.message);
  //     }
  //   };

  //   useEffect(() => {
  //     const cTask = tasks.filter((task) => {
  //       return task.completed === true;
  //     });
  //     setCompletedTasks(cTask);
  //   }, [tasks]);

  //   const getSingleTask = async (task) => {
  //     setFormData({ name: task.name, completed: false });
  //     setTaskID(task._id);
  //     setIsEditing(true);
  //   };

  //   const updateTask = async (e) => {
  //     e.preventDefault();
  //     if (name === "") {
  //       return toast.error("Input field cannot be empty.");
  //     }
  //     try {
  //       await axios.put(`${URL}/api/tasks/${taskID}`, formData);
  //       setFormData({ ...formData, name: "" });
  //       setIsEditing(false);
  //       getTasks();
  //     } catch (error) {
  //       toast.error(error.message);
  //     }
  //   };

  //   const setToComplete = async (task) => {
  //     const newFormData = {
  //       name: task.name,
  //       completed: true,
  //     };
  //     try {
  //       await axios.put(`${URL}/api/tasks/${task._id}`, newFormData);
  //       getTasks();
  //     } catch (error) {
  //       toast.error(error.message);
  //     }
  //   };

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm
        name={name}
        handleInputChange={handleInputChange}
        createTask={createTask}
      />
      <div className="--flex-between --pb">
        <p>
          <b>Total Task:</b> 0
        </p>
        <p>
          <b>Completed Task:</b> 0
        </p>
      </div>
      <hr />
      <Task />
    </div>
  );
}

export default TaskList;

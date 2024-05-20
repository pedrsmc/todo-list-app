import { useRef, useState } from "react"
import { Task } from "./components/Task"

import styles from './App.module.css'

export function App() {
  let newList = []

  const inputTask = useRef(null)
  const [tasks, setTasks] = useState([])


  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      addTask()
    }
  }

  function removeAll() {
    while (tasks.length) {
      tasks.pop()
    }

    newList = [...tasks]

    setTasks(newList)
  }

  function addTask() {
    if (inputTask.current.value) {
      const newTask = {
        id: tasks.length + 1,
        title: inputTask.current.value,
        status: false
      }

      newList = [...tasks, newTask]
      setTasks(newList)

    } else {

      return
    }

    inputTask.current.value = ""
  }

  function taskCompleted(id) {
    const taskFinded = tasks.findIndex(item => item.id === id)

    if (taskFinded === -1) {
      return
    }

    if (tasks[taskFinded].status) {
      tasks[taskFinded].status = false
    } else {
      tasks[taskFinded].status = true
    }

    newList = [...tasks]

    setTasks(newList)
  }

  return (
    <main>
      <h1>To-do App</h1>

      <div className={styles.inputDiv} >
        <input placeholder="Digite aqui a sua tarefa..." type="text" ref={inputTask} className={styles.inputField} onKeyDown={handleKeyPress} />
        <button onClick={addTask} className={styles.buttons}>Add</button>
        <button onClick={removeAll} className={styles.buttons}>Remove All</button>
      </div>

      {tasks.length > 0 && tasks.map((item) => (
        <Task key={item.id} taskItem={item} taskCompleted={taskCompleted} />
      ))}

      {!tasks.length && <p>Nenhuma tarefa foi adicionada...</p>}
    </main>
  )
}
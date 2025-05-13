import './App.css'
import Greeting from './components/DynamicDashboard'
import Messages from './components/Messages'
import TaskList from './components/TaskList'

function App() {

  return (
    <>
      <div>
        <Greeting />
        <Messages />
        <TaskList />
      </div>
    </>
  )
}

export default App

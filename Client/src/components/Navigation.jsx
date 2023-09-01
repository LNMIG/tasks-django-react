import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="navbar navbar-light bg-light w-75 mx-auto my-3 rounded">
      <div className="container-fluid d-flex flex-row justify-content-evenly">
      <Link to="/tasks" className="navbar-brand mb-0 mx-0 h1 btn btn-outline-dark">Task App</Link>
      <Link to="/tasks-create" className="navbar-brand mb-0 mx-0 h1 btn btn-outline-dark">Create task</Link>
      </div>
    </nav>
  )
}

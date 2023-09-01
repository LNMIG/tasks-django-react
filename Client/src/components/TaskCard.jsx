export function taskCard({ task }) {
  return (
    <div className="card w-75 text-white bg-primary mb-3">
      <div className="card-header p-2">
        <span className="card-title fs-3 ps-3">{task.title}</span>
        {task.done
          ?
          <button type="button"
            className="btn btn-success p-0 float-end border border-2"
            style={{ width: '2.5rem' }}
            onClick={() => { }}>
            <i className="bi bi-clipboard2-check-fill fs-4"></i>
          </button>
          :
          <button type="button"
            className="btn btn-danger p-0 float-end border border-2"
            style={{ width: '2.5rem' }}
            onClick={() => { }}>
            <i className="bi bi-clipboard-x-fill fs-4"></i>
          </button>
        }
      </div>
      <div className="card-body">
        <p className="card-text">{task.description}</p>
      </div>
    </div>
  )
}
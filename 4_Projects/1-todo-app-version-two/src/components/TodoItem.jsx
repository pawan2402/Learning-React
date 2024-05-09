function TodoItem({ todoName, todoDate }) {

  return (
    <div className="row">
      <div className="col-5 py-2">{todoName}</div>
      <div className="col-4 py-2">{todoDate}</div>
      <div className="col-3 py-2">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

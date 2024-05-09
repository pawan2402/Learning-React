function TodoInput() {
  return (
    <div className="row">
      <div className="col-5 py-2">
        <input type="text" placeholder="Enter Your Todo" />
      </div>
      <div className="col-4 py-2">
        <input type="date" />
      </div>
      <div className="col-3 py-2">
        <button type="button" className="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
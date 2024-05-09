function TodoInput() {
  return (
    <div class="row">
      <div class="col-5 py-2">
        <input type="text" placeholder="Enter Your Todo" />
      </div>
      <div class="col-4 py-2">
        <input type="date" />
      </div>
      <div class="col-3 py-2">
        <button type="button" class="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
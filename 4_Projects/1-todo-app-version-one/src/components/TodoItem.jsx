function TodoItem() {
    let todoName = 'Buy PS5';
    let todoDate = '26/11/2024';


  return (
    <div class="row">
      <div class="col-5 py-2">{todoName}</div>
      <div class="col-4 py-2">{todoDate}</div>
      <div class="col-3 py-2">
        <button type="button" class="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

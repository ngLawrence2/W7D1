export const fetchTodos = () => {
  return $.ajax({
    url: 'http://localhost:3000/api/todos',
    method: 'GET',
    dataType: 'json'
  });
};

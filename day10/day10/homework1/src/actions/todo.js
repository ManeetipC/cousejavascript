export const ADDTODO = 'ADD_TODO';
export const DELETETODO = 'DELETE_TODO';

let id = 1;
export const addTodo = (text) => {
  return { type: ADDTODO, id: id++, text: text };
}

export const deleteTodo = (id) => {
  return { type: DELETETODO, id: id };
}

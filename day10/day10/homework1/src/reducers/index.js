import { ADDTODO, DELETETODO } from '../actions/todo'
const initState = {
  todos: [
    {
      id: 0,
      text: 'Use Redux'
    }
  ]
}
export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case ADDTODO:
      return { ...state, todos: [...state.todos, { id: action.id, text: action.text }] }
    case DELETETODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) }
    default:
      return state;
  }


}
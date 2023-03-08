export const initalState = {
    count: 0,
};

export const reducer = (state, action) => {
  switch(action.type){
    case 'INCREMENT' :
      return {count: state.count + action.value};
    case 'DECREMENT' :
      return {count: state.count - action.value};
    case 'RESET' :
      return {count: action.value};
    default :
      return state;
  }
}

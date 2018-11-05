const initialState = {
  tree: {
    "name": "templates",
    "root": true,
    "isOpen": true,
    "children": []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TREE':
      return {
        ...state,
        tree: action.tree
      };
    case 'GET_TREE':
      return {
        ...state,
        tree: action.tree
      };
    default:
  }
  return state;
};

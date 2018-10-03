const initialState = {
  lang: 'ru',
  langs: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANG':
      return {
        ...state,
        lang: action.lang
      };
    case 'GET_LANGS':
      return {
        ...state,
        langs: action.langs
      };
    default:
  }
  return state;
};

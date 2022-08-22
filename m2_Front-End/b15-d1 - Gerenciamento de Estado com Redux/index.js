const Redux = require("redux");

const INITIAL_STATE = {
  login: false,
  email: "",
};

const actionMakeLogin = (email) => ({
  type: "LOGIN",
  email,
});

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
        info: "Login Realizado com sucesso",
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(actionMakeLogin("teste@teste.com"));
console.log(store.getState());

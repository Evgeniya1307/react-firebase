const DarkModeReducer = (state, action) => {
  //три действия светлый тёмный или переключения 
  switch (action.type) {
    case "LIGHT": {
      return {
        darkMode: false,
      };
    }
    case "DARK": {
      return {
        darkMode: true,
      };
    }
    case "TOGGLE": {
      return {
        darkMode: !state.darkMode, //вернёт противоположность тёмному режиму
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;

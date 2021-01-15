const initialState = {
  data: {
    province: [],
    timeline: {
      cases: {},
      deaths: {},
      recovered: {}
    }
  },
  loading: false,
  error: ''
};

export const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HISTORY_LOADING':
      return {
        ...state,
        loading: true,
        error: ''
      };

    case 'HISTORY_FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: ''
      };

    case 'HISTORY_FETCH_ERROR':
      return {
        ...state,
        // clear data
        data: {
          province: [],
          timeline: {
            cases: {},
            deaths: {},
            recovered: {}
          }
        },
        error: action.payload,
        loading: false
      };

    default: return state;
  }
}
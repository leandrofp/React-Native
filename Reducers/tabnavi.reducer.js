const initialState = {
    count1: 5,  
    isFetching: false,
    errorMessage: '',
    people: []
};

export function tabnavi(state = initialState, action){
    
    switch(action.type) {
        case 'INCREMENT_COUNTER':      
            state = Object.assign({}, state, {
                ...state,
                count1: state.count1 + 1
            });
           return state;
      
        case 'DECREMENT_COUNTER':
            state = Object.assign({}, state, {
                ...state,
                count1: state.count1 - 1
            });
            return state;

        case 'FETCHING_PEOPLE_REQUEST':
            return {...state, isFetching: true};
         case 'FETCHING_PEOPLE_FAILURE':
            return {...state, isFetching: false, errorMessage: action.payload  };
         case 'FETCHING_PEOPLE_SUCCESS':
            return {...state, isFetching: false, people: action.payload };    
 

        default:
           return state;
    }
   }
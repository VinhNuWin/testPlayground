const initialState = {
    formId: '',
    form: {
        logo: null,
        companyName: '',
        title: '',
        description: ''
    },
    basicForm: {
        fullName: '',
        age: '',

        saved: false
    },
    cardQuestion: [{
        title: '',
        choix: [
            'hi',
            'no',
        ],
        type: '',
    }],
    error: "",
    loading: false,
};

const addRequestReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'SET_STATE':
            return { ...state, ...action.payload }
            default:
                return state
    }
};

export default addRequestReducer;
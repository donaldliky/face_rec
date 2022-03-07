import { CREATE_TOKEN_ACTION } from '../constants/ActionType';

var initialState = {
    faceProfile: '',
    voiceProfile: '',
    address: '',
    name: '',
    description: '',
    price: ''
};

const token = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TOKEN_ACTION:
            console.log("action", action);
            return { ...action.token };
        default: return { ...state };
    }
};


export default token;
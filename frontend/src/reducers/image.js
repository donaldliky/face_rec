import { CREATE_FACE_PROFILE_ACTION } from '../constants/ActionType';

var initialState = {
    image: ''
};

const image = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_FACE_PROFILE_ACTION:
            console.log("action", action);
            return { ...state, image: action.image };
        default: return { ...state };
    }
};


export default image;
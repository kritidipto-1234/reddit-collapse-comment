import { createStore } from "redux";

const initialState = { value: 0 };

function reducer(state = initialState, action) {
    const newState = { ...state };

    switch (action.type) {
        case "ADD":
            newState.value++;
            break;

        case "SUBSTRACT":
            newState.value--;
            break;
        default:
            console.log("No action type matched");
    }

    console.log(newState);

    return newState;
}

const store = createStore(reducer);

export default store;

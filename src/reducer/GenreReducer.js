
const initialState = {
    comedy: "false",
    action: "false",
    adventure: "false"
}


const GenreReducer = (state = initialState, action) => {
    state = { ...state };

    switch (action.type) {
        case "comedy":
            state = { ...state, comedy: action.payload };
            break;
        case "action":
            state = { ...state, action: action.payload };
            break;
        case "adventure":
            state = { ...state, adventure: action.payload };
            break;
    }
    return state;
};
export default GenreReducer;
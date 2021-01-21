
const initialState = {
    generalVal : "false",
    businessVal: "false",
    sportsVal: "false",
    entertainmentVal: "false"
}


const newsreducer = (state = initialState, action) => {
state = {...state};
switch(action.type) {
    
    case "general":
        if(state.generalVal == 'true') {
            state = {...state, generalVal:"false"};
        } else {
            state = {...state, generalVal:"true"};
        }            
        break;

    case "business":
        if(state.businessVal == 'true') {
            state = {...state, businessVal:"false"};
        } else {
            state = {...state, businessVal:"true"};
        }            
    break;

    case "sports":
    if(state.sportsVal == 'true') {
        state = {...state, sportsVal:"false"};
    } else {
        state = {...state, sportsVal:"true"};
    }            
    break;

    case "entertainment":
    if(state.entertainmentVal == 'true') {
        state = {...state, entertainmentVal:"false"};
    } else {
        state = {...state, entertainmentVal:"true"};
    }            
    break;
    case "":
     state={...state, entertainmentVal:"true"};
    break;
}
return state;
};
 export default newsreducer;
export const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0,
};

export function reducer(state, action) {
    switch (action.type) {
        case "NUMBER_ADD_2":
            return { ...state, number: state.number + 2 };
        case "NUMBER_MULTI_7":
            return { ...state, number: state.number * 7 };
        case "NUMBER_DIV_25":
            return { ...state, number: state.number / 25 };
        case "NUMBER_INT":
            return { ...state, number: parseInt(state.number) };
        case "NUMBER_ADD_N":
            return { ...state, number: state.number + action.payload };
        case "LOGIN":
            return { ...state, user: { name: action.payload } }
        default:
            return { ...state };
    }
}
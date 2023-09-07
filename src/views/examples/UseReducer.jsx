import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0,
};

function reducer(state, action) {
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

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                { state.user ? 
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Sem usuário</span>
                }
                <span className="text">{state.number}</span>
                <div className="">
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "LOGIN", payload: 'Maria' })}>
                        Login
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "NUMBER_ADD_2" })}>
                        +2
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "NUMBER_MULTI_7" })}>
                        *7
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "NUMBER_DIV_25" })}>
                        /25
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "NUMBER_INT" })}>
                        Int
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "NUMBER_ADD_N", payload: -9 })}>
                        -9
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UseReducer;

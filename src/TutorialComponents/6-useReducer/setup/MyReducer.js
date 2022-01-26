
export const reducer=(state , action) =>{
    // console.log(state , action);
    // console.log(state);
    if(action.type === "ADD_ITEM"){

        const newPeople=[...state.items , action.payload];

        return {
            ...state,
            items:newPeople,
            isModalOpen:true,
            modalContent:"item added",
        };

    }

    if(action.type === "NO_VALUE"){
        return{...state , isModalOpen:true ,modalContent:"Please , enter your item"}
    }
    if(action.type === "CLOSE_MODAL"){
        return {...state , isModalOpen:false}
    }

    if (action.type === 'REMOVE_ITEM') {
        const newItems = state.items.filter(
            (item) => item.id !== action.payload
        );
        return { ...state, items: newItems };
    }

    throw new Error("no matching action type")
}

const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name:"cart",
    initialState :{
        items:[]
    },
    reducers:{
        addItem:(state,action) =>{
            //mutating the state here
            //redux toolkit uses immer behind the scenes for comparing the state
            state.items.push(action.payload);
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        //originalState ={item:["pizza"]}
        clearCart : (state) =>{
            //RTK - either Mutate the existing state or return a new state
            state.items.length =0;// originalState =[]
            //return {item: []};//this new object will be replaced inside originalState =[]
        },
    },
});
export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
    import { createSlice } from "@reduxjs/toolkit";

    const CartShop = createSlice({
    name: "CartShop",
    initialState: [],
    reducers: {
        ADD(state, action) {
        const exist = state.find((pro) => pro.id === action.payload.id);
        if (exist) {
            exist.quantity += 1;
        } else {
            const product_quantity = { ...action.payload, quantity: 1 };
            state.push(product_quantity);
        }
        },
        DELETE(state, action) {
        const del = state.find((pro) => pro.id === action.payload.id);
        state.splice(del, 1);
        },
        increaseCount(state, action) {
        const inc = state.find((x) => x.id === action.payload.id);
        if (inc) {
            inc.quantity += 1;
        }
        
        },

        decreaseCount(state, action) {

            const deac = state.find(y => y.id === action.payload.id);
            if ( deac.quantity <=1 ) {
                state.splice(deac, 1);
                
            }
            else {
                deac.quantity -= 1;
            }
            return state;
        }
        
        
    },
    

    });

    export const { ADD, increaseCount, decreaseCount, DELETE } = CartShop.actions;
    export default CartShop.reducer;

const { createSlice } = require("@reduxjs/toolkit");

const sliceSelectedCategory = createSlice(
    {
        name:"categorySelected",
        initialState:1,
        reducers:{
            setSelectCategory:(state,action)=>{
                return action.payload;
                },
                },
    }
)
export default sliceSelectedCategory.reducer;
export const { setSelectCategory } = sliceSelectedCategory.actions;
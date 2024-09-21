const { createSlice } = require("@reduxjs/toolkit");

const ShowAddressModalSlice = createSlice(

    {
        name:"showAddressModal",
        initialState:{
            isOpen:false,
            address:"تهران، تهرانپارس ، خیابان استخر، کوچه 244"
        },
        reducers:{
            setShowAddressModal:(state,action)=>{
                state.isOpen=true
                },
            setHideAddressModal:(state,action)=>{
                state.isOpen=false
                },
                setAddress:(state,{payload})=>{
                    state.address=payload
                }
                // setAddress:(state,{payload})=>({...state,address:payload})
            },
    }
)
export default ShowAddressModalSlice.reducer;
export const {setShowAddressModal,setHideAddressModal,setAddress} = ShowAddressModalSlice.actions;
import { configureStore } from "@reduxjs/toolkit";
import VendorSliceReducers from "./slicers/vendorSlicers"
import CategorySliceReducers from "./slicers/categorySlicer"
export const store = configureStore({
    reducer:{
        vendor:VendorSliceReducers,
        category:CategorySliceReducers    
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
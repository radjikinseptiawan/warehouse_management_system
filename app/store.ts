import { configureStore } from "@reduxjs/toolkit";
import VendorSliceReducers from "./slicers/vendorSlicers"
import CategorySliceReducers from "./slicers/categorySlicer"
import isOpenOverlaySlicersReducers from "./slicers/openOverlaySlicer"
import lokasiGudangSlicersReducers from './slicers/lokasiGudangSlicers'
import ProductSlicersReducers from './slicers/productSlicers'
export const store = configureStore({
    reducer:{
        vendor:VendorSliceReducers,
        category:CategorySliceReducers,
        overlay: isOpenOverlaySlicersReducers,
        gudang:lokasiGudangSlicersReducers,
        product:ProductSlicersReducers   
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
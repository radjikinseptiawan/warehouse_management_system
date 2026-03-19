import { configureStore } from "@reduxjs/toolkit";
import VendorSliceReducers from "./slicers/vendorSlicers"
import CategorySliceReducers from "./slicers/categorySlicer"
import isOpenOverlaySlicersReducers from "./slicers/openOverlaySlicer"
import lokasiGudangSlicersReducers from './slicers/lokasiGudangSlicers'
import ProductSlicersReducers from './slicers/productSlicers'
import InboundSlicersReducers from './slicers/inboundSlicers'
import OutboundSlicersReducers from "./slicers/outboundSlicers"
import  FilterSlicersReducers from "./slicers/FilterSlicers";
import KaryawanReducers from "./slicers/karyawanSlicers"
export const store = configureStore({
    reducer:{
        vendor:VendorSliceReducers,
        category:CategorySliceReducers,
        overlay: isOpenOverlaySlicersReducers,
        gudang:lokasiGudangSlicersReducers,
        product:ProductSlicersReducers,
        inbound:InboundSlicersReducers,
        outbound:OutboundSlicersReducers,
        filter:FilterSlicersReducers,
        karyawan:KaryawanReducers
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
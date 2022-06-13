import panierReducer from './panier/panierSlice'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: { 
        panier: panierReducer 
    }
})
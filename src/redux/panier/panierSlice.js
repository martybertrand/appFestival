import { createSlice } from "@reduxjs/toolkit"

export const panierSlice = createSlice({
    name: "panier",
    initialState: { connect: 0 },
    reducers: {
        connexion: (state) => {
            state.connect = 1
        },
        deconnexion: (state) => {
            state.connect = 0
        }
    },
})

export const { connexion, deconnexion } = panierSlice.actions

export default panierSlice.reducer
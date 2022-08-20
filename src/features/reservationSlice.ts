import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
    value: string[]
}

const initialState: ReservationState = {
    value: ["Selena"],
}

export const reservationsSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        },
        removeReservation: (state, action: PayloadAction<number>) => {
            // splice(index: action.payload, how many elements from that index do we want to remove from that array)
            state.value.splice(action.payload, 1)
        },
    },
});


// add: (state) => {
//     state.value.push('asdadas')
// }

export const { addReservation, removeReservation } = reservationsSlice.actions

export default reservationsSlice.reducer;
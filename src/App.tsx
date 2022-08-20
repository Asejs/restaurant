import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import customerSlice from "./features/customerSlice";
import { addReservation } from "./features/reservationSlice";



function App() {

  // then we always have the value of the "add input" in this state; reservationNameInput
  const [reservationNameInput, setReservationNameInput] = useState("")

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector(
    (state: RootState) => state.customer.value
  );


  const dispatch = useDispatch()


  // when clicking on "Add button"
  const handleAddReservations = () => {
    // if reservationNameInput is empty - just return
    // (empty string returns false: !false = true, then it will return)
    if (!reservationNameInput) return;
    // does not work like this;
    //addReservation(reservationNameInput)
    // need to dispatch the action;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
              <input value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)}/>
              <button onClick={handleAddReservations}>Add</button> 
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map(customer => {
            return <CustomerCard id={customer.id} name={customer.name} food={customer.food}/>;
          })}
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
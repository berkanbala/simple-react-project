import React, { useState } from "react";
import CustomerForm from "./components/CustomerForm/CustomerForm";
import CustomerList from "./components/CustomerList/CustomerList";
import styles from "./App.module.scss";

function App() {
  const [customers, setCustomers] = useState([]);

  const addNewCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
  };

  return (
    <div className={styles.App}>
      <h1>manage</h1>
      <CustomerForm addNewCustomer={addNewCustomer} />
      {customers.length === 0 && "There are no customers..."}
      <CustomerList customers={customers} setCustomers={setCustomers} />
    </div>
  );
}
export default App;

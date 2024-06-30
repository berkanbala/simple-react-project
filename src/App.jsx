import React, { useState } from "react";
import styles from "./App.module.scss";
import { CustomerForm } from "./components/CustomerForm/customerForm";
import { CustomerList } from "./components/CustomerList/customerList";

export function App() {
  const [customers, setCustomers] = useState([]);

  const addNewCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
  };

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <h1>manage</h1>
        <CustomerForm addNewCustomer={addNewCustomer} />
        {customers.length === 0 && "There are no customers..."}
        <CustomerList customers={customers} setCustomers={setCustomers} />
      </div>
    </div>
  );
}

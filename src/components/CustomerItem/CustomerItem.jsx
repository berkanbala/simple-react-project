import React from "react";
import styles from "./customerItem.module.scss";

export const CustomerItem = ({ customer, handleDelete }) => {
  return (
    <li className={styles.customeritem}>
      <div className={styles.customerinfo}>
        <img
          src="https://i.pravatar.cc/300"
          alt=""
          className={styles.customeravatar}
        />
        <span className={styles.customername}>{customer.customerName}</span>
      </div>
      <button
        className={styles.deletebutton}
        onClick={() => handleDelete(customer)}
      >
        <i className="bi bi-trash3"></i>
      </button>
    </li>
  );
};

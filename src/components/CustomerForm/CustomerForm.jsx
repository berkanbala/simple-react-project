import { useState } from "react";
import { Input } from "../../common/pages/input/input";
import styles from "./customerForm.module.scss";

export const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (customerName.trim().length === 0) {
      setIsValid(true);
      return;
    }

    const newCustomer = {
      id: Math.floor(Math.random() * 1000),
      customerName,
    };

    addNewCustomer(newCustomer);
    setCustomerName("");
  };

  const nameInputChangeHandler = (e) => {
    const nameValue = e.target.value;
    if (nameValue.trim().length > 0) {
      setIsValid(false);
    }
    setCustomerName(nameValue);
  };

  return (
    <form className={styles.customerform} onSubmit={handleSubmit}>
      <Input
        type="text"
        className={`${styles.customerInput} ${isValid ? styles.invalid : ""}`}
        placeholder="new"
        onChange={nameInputChangeHandler}
        value={customerName}
      />

      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
      </button>
    </form>
  );
};

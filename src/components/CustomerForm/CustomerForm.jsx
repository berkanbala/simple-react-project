import { useState } from "react";
import styles from "./CustomerForm.module.scss";
import { Input } from "../../pages/input/input";
// import plus from "../../images/plus.png";
// import { Button } from "../../pages/button/button";

const CustomerForm = ({ addNewCustomer }) => {
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
      {/* <input
        type="text"
        className={`"styles.customerinput" ${isValid ? "styles.invalid" : ""}`}
        placeholder="new"
        onChange={nameInputChangeHandler}
        value={customerName}
      /> */}
      <Input
        type="text"
        className={`"styles.customerinput" ${isValid ? "styles.invalid" : ""}`}
        placeholder="new"
        onChange={nameInputChangeHandler}
        value={customerName}
      />

      <button>
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
};

export default CustomerForm;

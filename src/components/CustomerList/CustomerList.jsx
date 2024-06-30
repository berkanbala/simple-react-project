import { CustomerItem } from "../CustomerItem/customerItem";
import styles from "./customerList.module.scss";

export const CustomerList = ({ customers, setCustomers }) => {
  const handleDelete = (item) => {
    setCustomers(customers.filter((customer) => customer.id !== item.id));
  };
  return (
    <ul className={styles.customerlist}>
      {customers.map((customer) => (
        <CustomerItem
          customer={customer}
          key={customer.id}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

import CustomerItem from "../CustomerItem/CustomerItem";
import styles from "./CustomerList.module.scss";

function CustomerList({ customers, setCustomers }) {
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
}
export default CustomerList;

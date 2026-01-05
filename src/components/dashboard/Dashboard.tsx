import { useState } from "react";
import styles from "./Dashboard.module.css";

const currencies = ["USD", "EUR", "GBP", "IDR"];

const Dashboard = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <div className={styles.headerRow}>
          <p className={styles.subtitle}>Overview of your financial data</p>
          <select
            name="Currency Selector"
            id="currencySelector"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className={styles.currencySelector}
          >
            {currencies.map((eachCurrency) => (
              <option key={eachCurrency} value={eachCurrency}>
                {eachCurrency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

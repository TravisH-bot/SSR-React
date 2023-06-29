import React from "react";
import styles from "./index.module.css";
import Card from "./Card";
import { initStore, initialCards, addItem } from "../store";
import { useDispatch } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const { cards } = dispatch(initialCards());

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src="/logo.png" className={styles.logo} alt="logo" />
      </header>
      <div className={styles.grid}>
        {cards.map((card) => (
          <Card key={card.id} />
        ))}
      </div>
      {/* <button onClick={() => dispatch(addItem(item))}></button> */}
    </div>
  );
};

export default initStore.withRedux(Index);

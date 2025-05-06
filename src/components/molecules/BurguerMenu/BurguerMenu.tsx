import css from "./BurgerMenu.module.css";
import BurguerCell from "../../atoms/BurguerCell/BurguerCell";

function BurguerMenu() {
  return (
    <div className={css.container}>
      <BurguerCell text="LOGIN" extraStyle={css.login}  />
      <BurguerCell text="FEATURES" />
      <BurguerCell text="PRICING" />
      <BurguerCell text="CONTACT" />

    </div>
  );
}

export default BurguerMenu;

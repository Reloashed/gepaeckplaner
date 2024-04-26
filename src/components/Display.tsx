import { CheckListItem } from "../types";
import style from "../styles/Display.module.css";

type DisplayProps = {
  checkList: CheckListItem[];
};

export default function Display(props: DisplayProps) {
  return (
    <>
      { props.checkList &&
        <div id={style.display}>
          <h2 id={style.title}>Kleider</h2>
          <ul className={style.list}>
            {props.checkList.map(
              (item, idx) =>
                item.category == "Kleider" && (
                  <li key={idx}>
                    <input type="checkbox" />
                    <label id={style.item}>
                      {Math.ceil(item.count)}x {item.item}
                    </label>
                  </li>
                )
            )}
          </ul>

          <h2 id={style.title}>Utensilien</h2>
          <ul className={style.list}>
            {props.checkList.map(
              (item, idx) =>
                item.category == "Utensilien" && (
                  <li key={idx}>
                    <input type="checkbox" />
                    <label id={style.item}>
                      {Math.ceil(item.count)}x {item.item}
                    </label>
                  </li>
                )
            )}
          </ul>
        </div>
      }
    </>
  );
}

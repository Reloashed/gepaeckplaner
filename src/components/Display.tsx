import { CheckListItem } from "../types";

type DisplayProps = {
  checkList: CheckListItem[];
};

export default function Display(props: DisplayProps) {
    

  return (
    <>
      <ul>
        {props.checkList.map((item) => (
          <li>
            <input type="checkbox" /> {Math.ceil(item.count)}x {item.item}
          </li>
        ))}
      </ul>
    </>
  );
}

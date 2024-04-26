import { FormEvent, useState } from "react";
import style from "../styles/Form.module.css";
import { Accomodation, Hygene, Input, Type } from "../types";

type FormProps = {
  onSave: (input: Input) => void;
};

export default function Form(props: FormProps) {
  const [input, setInput] = useState<Input>({
    days: "30",
    hygene: "normal",
    type: "beach",
    accomodation: "hotel",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSave(input);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={style.group}>
        <label>Anzahl Tage</label>
        <input
          type="range"
          min={1}
          max={30}
          className={style.slider}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, days: e.target.value }))
          }
        />
        <p>{input.days}</p>
      </div>


      <div className={style.group}>
        <label>Hygiene</label>
        <select
          name=""
          id=""
          value={input.hygene}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, hygene: e.target.value as Hygene }))
          }
        >
          <option value="clean">Sauber</option>
          <option value="normal">Normal</option>
          <option value="dirty">Dreckig</option>
        </select>
      </div>


      <div className={style.group}>
        <label>Reisetyp</label>
        <select
          name=""
          id=""
          value={input.type}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, type: e.target.value as Type }))
          }
        >
          <option value="beach">Strand</option>
          <option value="hike">Wanderung</option>
          <option value="outdoor">Generell Outdoor</option>
          <option value="ski">Ski-Ferien</option>
          <option value="other">Andere</option>
        </select>
      </div>


      <div className={style.group}>
        <label>Reiseziel</label>
        <input id={style.text} type="text" required />
      </div>


      <div className={style.group}>
        <label>Unterkunft</label>
        <select
          name=""
          id=""
          value={input.accomodation}
          onChange={(e) =>
            setInput((prev) => ({
              ...prev,
              accomodation: e.target.value as Accomodation,
            }))
          }
        >
          <option value="hotel">Hotel</option>
          <option value="tent">Zelt</option>
          <option value="house">Ferienhaus</option>
          <option value="other">Andere</option>
        </select>
      </div>
          
      <button id={style.button} type="submit">Generieren</button>
    </form>
  );
}

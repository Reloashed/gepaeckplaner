import { useState } from "react";
import Display from "../components/Display";
import Form from "../components/Form";
import { Input, CheckListItem, Item } from "../types";

export default function Planer() {
  let input: Input;
  let checkList: CheckListItem[];
  const [stateList, setStateList] = useState<CheckListItem[]>()

  const onSave = (inputForm: Input) => {
    input = inputForm;
    runAlgorithm();
    setStateList(checkList)
  };

  function runAlgorithm() {
    switch (input.hygene) {
      case "clean":
        cleanHygene();
        switch (input.type) {
          case "beach":
            beach(parseInt(input.days) / 2);
            break;
          case "hike":
            hike(parseInt(input.days) / 3);
            break;
          case "outdoor":
            outdoor(parseInt(input.days) / 3);
            break;
          case "ski":
            ski(parseInt(input.days) / 2);
            break;
          case "other":
            otherType();
            break;
        }
        break;
      case "normal":
        normalHygene();
        switch (input.type) {
          case "beach":
            beach(parseInt(input.days) / 2.5);
            break;
          case "hike":
            hike(parseInt(input.days) / 5);
            break;
          case "outdoor":
            outdoor(parseInt(input.days) / 5);
            break;
          case "ski":
            ski(parseInt(input.days) / 5);
            break;
          case "other":
            otherType();
            break;
        }
        break;
      case "dirty":
        dirtyHygene();
        switch (input.type) {
          case "beach":
            beach(parseInt(input.days) / 3);
            break;
          case "hike":
            hike(parseInt(input.days) / 8);
            break;
          case "outdoor":
            outdoor(parseInt(input.days) / 8);
            break;
          case "ski":
            ski(parseInt(input.days) / 8);
            break;
          case "other":
            otherType();
            break;
        }
        break;
    }

    switch (input.accomodation) {
        case "hotel":
            hotel()
            break
        case "house":
            house()
            break
        case "tent":
            tent()
            break
        case "other":
            otherAccomodation()
            break
    }
  }

  function cleanHygene() {
    checkList = [
      {
        category: "Kleider",
        item: "Unterhosen",
        count: parseInt(input.days) * 1.2,
        done: false,
      },
      {
        category: "Kleider",
        item: "T-Shirts",
        count: parseInt(input.days) / 1.1,
        done: false,
      },
      {
        category: "Kleider",
        item: "Hosen",
        count: parseInt(input.days) / 2,
        done: false,
      },
      {
        category: "Kleider",
        item: "Pullover",
        count: parseInt(input.days) / 3,
        done: false,
      },
      {
        category: "Kleider",
        item: "Socken",
        count: parseInt(input.days) * 1.2,
        done: false,
      },
      {
        category: "Utensilien",
        item: "Zahnbürste",
        count: 1,
        done: false,
      },
      {
        category: "Utensilien",
        item: "Zahnpasta",
        count: 1,
        done: false,
      },
      {
        category: "Utensilien",
        item: "Zahnspühlung",
        count: 1,
        done: false,
      },
      {
        category: "Utensilien",
        item: "Schampoo",
        count: 1,
        done: false,
      },
      {
        category: "Utensilien",
        item: "Abtrocknungstuch",
        count: 1,
        done: false,
      },
      {
        category: "Utensilien",
        item: "Deo",
        count: 1,
        done: false,
      },
    ];
  }
  function normalHygene() {
    checkList = [
      {
        category: "Kleider",
        item: "Unterhosen",
        count: parseInt(input.days) * 1.1,
        done: false,
      },
      {
        category: "Kleider",
        item: "T-Shirts",
        count: parseInt(input.days) / 1.5,
        done: false,
      },
      {
        category: "Kleider",
        item: "Hosen",
        count: parseInt(input.days) / 2.5,
        done: false,
      },
      {
        category: "Kleider",
        item: "Pullover",
        count: parseInt(input.days) / 5,
        done: false,
      },
      {
        category: "Kleider",
        item: "Socken",
        count: parseInt(input.days),
        done: false,
      },
      {
        category: "Utensilien",
        item: "Zahnbürste",
        count: 1,
        done: false,
      },
      {
        category: "Utensilien",
        item: "Zahnpasta",
        count: 1,
        done: false,
      },
      {
        category: "Utensilien",
        item: "Schampoo",
        count: 1,
        done: false,
      },
      {
        category: "Utensilien",
        item: "Abtrocknungstuch",
        count: 1,
        done: false,
      },
      {
        category: "Utensilien",
        item: "Deo",
        count: 1,
        done: false,
      },
    ];
  }
  function dirtyHygene() {
    checkList = [
      {
        category: "Kleider",
        item: "Unterhosen",
        count: parseInt(input.days) / 1.3,
        done: false,
      },
      {
        category: "Kleider",
        item: "T-Shirts",
        count: parseInt(input.days) / 2,
        done: false,
      },
      {
        category: "Kleider",
        item: "Hosen",
        count: parseInt(input.days) / 3,
        done: false,
      },
      {
        category: "Kleider",
        item: "Pullover",
        count: parseInt(input.days) / 7,
        done: false,
      },
      {
        category: "Kleider",
        item: "Socken",
        count: parseInt(input.days) / 1.4,
        done: false,
      },
      {
        category: "Utensilien",
        item: "Zahnbürste",
        count: 1,
        done: false,
      },
      {
        category: "Utensilien",
        item: "Zahnpasta",
        count: 1,
        done: false,
      },
      {
        category: "Utensilien",
        item: "Abtrocknungstuch",
        count: 1,
        done: false,
      },
      {
        category: "Utensilien",
        item: "Deo",
        count: 1,
        done: false,
      },
    ];
  }

  function beach(shorts: number) {
    checkList.push({
      category: "Kleider",
      item: "Badehose",
      count: 1,
      done: false,
    });
    checkList.push({
      category: "Kleider",
      item: "Kurze Hose",
      count: shorts,
      done: false,
    });
  }
  function hike(hikePants: number) {
    checkList.push({
      category: "Kleider",
      item: "Wanderhose",
      count: hikePants,
      done: false,
    });
    checkList.push({
      category: "Kleider",
      item: "Jacke",
      count: 1,
      done: false,
    });
  }
  function outdoor(hikePants: number) {
    checkList.push({
      category: "Kleider",
      item: "Wanderhose",
      count: hikePants,
      done: false,
    });
    checkList.push({
      category: "Kleider",
      item: "Jacke",
      count: 1,
      done: false,
    });
  }
  function ski(thermalClothing: number) {
    checkList.push({
      category: "Kleider",
      item: "Thermo Kleidung",
      count: thermalClothing,
      done: false,
    });
    checkList.push({
      category: "Kleider",
      item: "Skianzug",
      count: 1,
      done: false,
    });
  }
  function otherType() {}

  function hotel() {}
  function house() {}
  function tent() {
    checkList.push({
        category: "Utensilien",
        item: "Zelt",
        count: 1,
        done: false,
    });
    checkList.push({
        category: "Utensilien",
        item: "Schlafsack",
        count: 1,
        done: false,
    });
    checkList.push({
        category: "Utensilien",
        item: "Lampe",
        count: 1,
        done: false,
    });
    checkList.push({
        category: "Utensilien",
        item: "Schlafsack",
        count: 1,
        done: false,
    });
    checkList.push({
        category: "Utensilien",
        item: "Koch Utensilien",
        count: 1,
        done: false,
    });
    checkList.push({
        category: "Utensilien",
        item: "Besteck",
        count: 1,
        done: false,
    });
  }
  function otherAccomodation() {
    checkList.push({
        category: "Utensilien",
        item: "Schlafsack",
        count: 1,
        done: false,
    });
    checkList.push({
        category: "Utensilien",
        item: "Lampe",
        count: 1,
        done: false,
    });
    checkList.push({
        category: "Utensilien",
        item: "Koch Utensilien",
        count: 1,
        done: false,
    });
    checkList.push({
        category: "Utensilien",
        item: "Besteck",
        count: 1,
        done: false,
    });
  }

  return (
    <>
      <Form onSave={onSave}></Form>
      <Display checkList={stateList}></Display>
    </>
  );
}

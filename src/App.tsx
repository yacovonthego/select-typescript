import DropDown from "./components/DropDown";
import Wrapper from "./components/styled/Wrapper.styled";
import { DropDownItemType } from "./types/DropDownItem";
import { ReactComponent as RussianFlag } from "./assets/svg/Russian.svg";
import { ReactComponent as EnglishFlag } from "./assets/svg/English.svg";
import { ReactComponent as SpanishFlag } from "./assets/svg/Spanish.svg";
import { ReactComponent as GermanFlag } from "./assets/svg/German.svg";
import { ReactComponent as ItalianFlag } from "./assets/svg/Italian.svg";
import { ReactComponent as CzechFlag } from "./assets/svg/Czech.svg";

const ITEMS: DropDownItemType[] = [
  {
    icon: <RussianFlag />,
    value: "Русский",
  },
  {
    icon: <EnglishFlag />,
    value: "Английский",
  },
  {
    icon: <SpanishFlag />,
    value: "Испанский",
  },
  {
    icon: <GermanFlag />,
    value: "Немецкий",
  },
  {
    icon: <ItalianFlag />,
    value: "Итальянский",
  },
  {
    icon: <CzechFlag />,
    value: "Чешский",
  },
];

function App() {
  return (
    <div className="App">
      <Wrapper>
        <DropDown
          items={ITEMS}
          label={"Язык"}
          search
          showIcons
          multiselect
        />
      </Wrapper>
    </div>
  );
}

export default App;

import { atom } from "recoil";
import { Search } from "../../models/search";

const searchAtom = atom({
  key: "searchAtom",
  default: {} as Search
});

export { searchAtom };

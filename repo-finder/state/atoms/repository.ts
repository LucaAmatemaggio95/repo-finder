import { atom, selector } from "recoil";
import { Repository } from "../../models/repository";

const repositoryAtom = atom({
  key: "repositoryAtom",
  default: {} as Repository
});

const pageAtom = selector({
  key: "pageAtom",
  get: ({ get }) => {
    const repo = get(repositoryAtom);

    return repo.stargazers.pageInfo;
  }
});

export { repositoryAtom, pageAtom };

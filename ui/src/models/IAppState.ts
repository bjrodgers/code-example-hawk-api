import IHawk from "./IHawk";

export default interface IAppState {
  filter: string;
  hawks: Array<IHawk>;
  isLoadingList: boolean;
  isLoadingHawk: boolean;
  selectedHawk: IHawk;
};


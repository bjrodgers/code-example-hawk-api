import IHawk from "./IHawk";

export const initialState: IAppState = {
  filter: '',
  hawks: [],
  isLoadingHawk: false,
  isLoadingList: false,
  selectedHawk: <IHawk>{}
};

export default interface IAppState {
  filter: string;
  hawks: Array<IHawk>;
  isLoadingList: boolean;
  isLoadingHawk: boolean;
  selectedHawk: IHawk;
};


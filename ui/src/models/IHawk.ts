
export default interface IHawk {
    behaviorDescription: string;
    colorDescription: string;
    gender: string;
    habitatDescription: string;
    id: number;
    lengthBegin: number;
    lengthEnd: number;
    name: string;
    pictureUrl: string;
    size: string;
    weightBegin: number;
    weightEnd: number;
    wingspanBegin: number;
    wingspanEnd: number;
}

export const emptyHawk:IHawk = {
    behaviorDescription: '',
    colorDescription: '',
    gender: '',
    habitatDescription: '',
    id: 0,
    lengthBegin: 0,
    lengthEnd: 0,
    name: '',
    pictureUrl: '',
    size: '',
    weightBegin: 0,
    weightEnd: 0,
    wingspanBegin: 0,
    wingspanEnd: 0,
}
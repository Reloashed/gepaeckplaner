export type Input = {
    days: string,
    type: Type,
    hygene: Hygene,
    accomodation: Accomodation,
}
export type Accomodation = "hotel" | "tent" | "house" | "other"
export type Hygene = "clean" | "normal" | "dirty"
export type Type = "beach" | "hike" | "outdoor" | "ski" | "other"


export type CheckListItem = {
    category: string,
    item: string,
    count: number,
    done: boolean,
}
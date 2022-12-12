import { Category } from "./Category";
import { Priority } from "./Priority";

export interface Note{
    id: number,
    text: string,
    categories: Category[]
    priority:Priority
}
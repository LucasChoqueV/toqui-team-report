import { BaseResult } from "./BaseResult";

export class CollectionResult<T> extends BaseResult {
    hasItems: boolean = false;
    total: number = 0;
    page: number = 0;
    pages : number = 0;
    items: T[] = [];
    wasLoaded? : boolean = false;
}
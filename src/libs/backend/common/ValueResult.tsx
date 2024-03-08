import { BaseResult } from "./BaseResult";

export class ValueResult<T> extends BaseResult {
    result?: T;
}
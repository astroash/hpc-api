import { Knex } from "knex";

export interface TableBase {
    id: number
}

export interface ModelBase<T> {
    tableName: string,
    table: (db: Knex) => Knex.QueryBuilder<any, T>
    getOne: (db: Knex, id: number) => Promise<T>
    getList: (db: Knex) => Promise<T[]>
    create?: (db: Knex, type: T) => Promise<T>
    update?: (db: Knex, id: number, type: Partial<T>) => Promise<T>
    delete?: (db: Knex, type: T) => Promise<void>
}

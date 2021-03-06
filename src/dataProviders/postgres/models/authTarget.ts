import { Knex } from 'knex';
import { ModelBase, TableBase } from './common/Base';

export interface AuthTargetTable extends TableBase {
    targetId: number;
    type: string;
}

interface AuthTargetModel extends ModelBase<AuthTargetTable> {
}

export const authTargetModel: AuthTargetModel = {
    tableName: 'authTarget',
    table: (db) => db(authTargetModel.tableName),
    getOne: (db, id) => db(authTargetModel.tableName).select({ where: { id }}),
    getList: (db) => db(authTargetModel.tableName).select('*'),
    // create: (db, authGrant) => db(authGrantModel.tableName).insert(authGrant),
    // update: (db, id, authGrant) => db(AuthGrantModel.tableName).update(authGrant).where({ id }),
    // delete: (db, id) =>  db(AuthGrantModel.tableName).update({ deletedAt: new Date()}).where({ id }),
}

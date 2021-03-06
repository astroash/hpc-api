import { Knex } from 'knex';
import { ModelBase, TableBase } from './common/Base';

export interface AuthInviteTable extends TableBase {
    email: string;
    target: number;
    actor: number;
    roles: string[];
}

interface AuthInviteModel extends ModelBase<AuthInviteTable> {
}

export const authInviteModel: AuthInviteModel = {
    tableName: 'authInvite',
    table: (db) => db(authInviteModel.tableName),
    getOne: (db, id) => db(authInviteModel.tableName).select({ where: { id }}),
    getList: (db) => db(authInviteModel.tableName).select('*'),
    // create: (db, authGrant) => db(authGrantModel.tableName).insert(authGrant),
    // update: (db, id, authGrant) => db(AuthGrantModel.tableName).update(authGrant).where({ id }),
    // delete: (db, id) =>  db(AuthGrantModel.tableName).update({ deletedAt: new Date()}).where({ id }),
}

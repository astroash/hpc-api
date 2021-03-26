import { AuthGrantTable } from './models/authGrant';
import { AuthGranteeTable } from './models/authGrantee';
import { AuthGrantLogTable } from './models/authGrantLog';
import { AuthInviteTable } from './models/authInvite';
import { AuthTargetTable } from './models/authTarget';
import { AuthTokenTable } from './models/authToken';

declare module 'knex/types/tables' {
  interface Tables {
    authGrant: AuthGrantTable;
    authGrantee: AuthGranteeTable;
    authGrantLog: AuthGrantLogTable;
    authInvite: AuthInviteTable;
    authTarget: AuthTargetTable;
    authToken: AuthTokenTable;
  }
}

import { Field, ID, ObjectType } from 'type-graphql';

import { Brand } from '../../../commonUtils/branding';
import Organization from './organizationType';
import Participant from './participantType';

@ObjectType()
export default class participantOrganization {

    @Field(() => ID)
    id: Brand<
        number,
        { readonly s: unique symbol },
        'participantOrganizations ID'
    >;

    @Field({description: 'indicates when this was last validated on'})
    validated: boolean;

    @Field(() => Participant, {description: 'participant involved in the relationship'})
    participant: Participant;

    @Field(() => Organization, {description: 'Organization involved in the relationship'})
    organization: Organization;
}
 
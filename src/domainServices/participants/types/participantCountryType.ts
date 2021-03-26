import { Location } from 'graphql';
import { Field, ID, ObjectType } from 'type-graphql';
import { Brand } from '../../../commonUtils/branding';
import Participant from './participantType';

@ObjectType()
export default class participantCountry {
    @Field(_type => ID)
    id: Brand<
        number,
        { readonly s: unique symbol },
        'ParticipantCountry ID'
    >;

    @Field({description: 'indicates when this was last validated on'})
    validated: boolean;

    @Field(() => Participant, {description: 'participant involved in the relationship'})
    participant: Participant;

    @Field(() => Location, { description: 'location involved in the relationship' })
    location: Location;
}

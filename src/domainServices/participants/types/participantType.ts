import { Location } from 'graphql';
import { Field, ObjectType, ID } from 'type-graphql';

import { Brand } from '../../../commonUtils/branding';
import Organization from './organizationType';
import ParticipantCountry from './participantCountryType';
import ParticipantOrganization from './participantOrganisationType';

@ObjectType()
export default class Participant {

    @Field(_type => ID)
    id: Brand<
        number,
        { readonly s: unique symbol },
        'Participant ID'
    >;

    @Field({ description: 'The HID ID of the user' })
    hidId: string

    @Field({ description: 'The email of the user' })
    email: string;

    @Field({ description: 'The Name given to the user' })
    name_given: string;

    @Field({ description: 'The name of the family of users to which the user belongs to' })
    name_family: string;

    @Field(() => [ParticipantOrganization], { description: 'Relationship table between participants and organizations', nullable: true })
    participantOrganizations: ParticipantOrganization[];

    @Field(_type => [Organization], { nullable:true, description: 'The organizations to which the participant belongs to' })
    organizations: Organization[];

    @Field(() => [ParticipantCountry], { description: 'Relationship table between participants and locations', nullable: true })
    participantCountry: ParticipantCountry[];

    @Field(_type => [Location], { nullable: true, description: 'The locations associated with the participant' })
    locations: Location[];
}

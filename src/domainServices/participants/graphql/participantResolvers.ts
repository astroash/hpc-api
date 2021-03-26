import { Arg, Ctx, FieldResolver, Query, Resolver, ResolverInterface, Root } from 'type-graphql';
import ParticipantLib from '../ParticipantLib';
import Participant from '../types/participantType';


@Resolver(_of => Participant)
export default class ParticipantResolver implements ResolverInterface<Participant> {
    @Query(_returns => [Participant], {
        description: "Get all the participants",
    })
    async allParticipants(
        @Arg('email', { description: "email of the participant to filter by", nullable: true }) email: string    ) {
            return ParticipantLib.getAll()
    }

    @FieldResolver()
    async organizations(@Root() participant: Participant) {
        return participant.participantOrganizations.map(participantOrganization => participantOrganization.organization);
    }
}

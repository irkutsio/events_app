import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import { EventSummary } from '../../components/event-detail/event-summary';
import { EventContent } from '../../components/event-detail/event-content';
import { EventLogistics } from '../../components/event-detail/event-logistics';

const EventDetailPage = () => {
	const router = useRouter();
	const id = router.query.eventId;
	const event = getEventById(id);

	if (!event) {
		return <p>No event Found</p>;
	}

	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				image={event.image}
				address={event.location}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	);
};

export default EventDetailPage;

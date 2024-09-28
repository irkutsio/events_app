import { useRouter } from 'next/router';
import { EventList } from '../../components/events/eventList';
import { EventsSearch } from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data';

const AllEventsPage = () => {
	const allEvents = getAllEvents();
	const router = useRouter();

	const findEventsHandler = (year, month) => {
		const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
	};

	return (
		<>
			<EventsSearch onSearch={findEventsHandler}/>
			<EventList events={allEvents}  />
		</>
	);
};

export default AllEventsPage;

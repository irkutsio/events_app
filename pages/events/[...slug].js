import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import { EventList } from '../../components/events/eventList';
import ResultsTitle from '../../components/events/results-title';
import { Button } from '../../components/events/button';

const FilteredEventsPage = () => {
	const router = useRouter();

	const filterData = router.query.slug;
	console.log(filterData);

	if (!filterData) {
		return <p className="center">loading....</p>;
	}

	const numYear = Number(filterData[0]);
	const numMonth = Number(filterData[1]);

	if (isNaN(numYear) || isNaN(numMonth)) {
		return (
			<div className="center">
				<p>Invalid filter...</p>
				<Button link="/events">Show All Events</Button>
			</div>
		);
	}

	const filteredEvents = getFilteredEvents({
		year: numYear,
		month: numMonth,
	});

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<div className="center">
				<p>No events...</p>
				<Button link="/events">Show All Events</Button>
			</div>
		);
	}

	const date = new Date(numYear, numMonth - 1);

	return (
		<div>
			<ResultsTitle date={date} />
			<EventList events={filteredEvents} />
		</div>
	);
};

export default FilteredEventsPage;

import { EventItem } from './eventItem';
import classes from './event-list.module.css'

export const EventList = ({ events }) => {
	return (
		<ul className={classes.list}>
			{events.map(item => (
				<EventItem
					key={item.id}
					id={item.id}
					image={item.image}
					location={item.location}
					title={item.title}
					date={item.date}
				/>
			))}
		</ul>
	);
};

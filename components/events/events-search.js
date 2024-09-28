import { useRef } from 'react';
import { Button } from './button';
import classes from './events-search.module.css';

export const EventsSearch = props => {
	const yearRef = useRef();
	const monthRef = useRef();

	const submitHandler = e => {
		e.preventDefault();
		const selectedYear = yearRef.current.value;
		const selectedMonth = monthRef.current.value;
    
    props.onSearch(selectedYear, selectedMonth)
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.controls}>
				<div className={classes.control}>
					<label htmlFor="year">Year</label>
					<select id="year" ref={yearRef}>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
					</select>
				</div>
				<div className={classes.control}>
					<label htmlFor="month">Month</label>
					<select id="month" ref={monthRef}>
						<option value="1">01</option>
						<option value="2">02</option>
						<option value="3">03</option>
						<option value="4">04</option>
						<option value="5">05</option>
						<option value="6">06</option>
						<option value="7">07</option>
						<option value="8">08</option>
						<option value="9">09</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
					</select>
				</div>
			</div>
			<Button>Find Event</Button>
		</form>
	);
};

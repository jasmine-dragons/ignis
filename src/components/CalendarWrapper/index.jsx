import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './style.module.scss';

const CalendarWrapper = () => {
    return (
        <>
            <Calendar className={styles.calendar}/>
        </>
    )
}

export default CalendarWrapper;
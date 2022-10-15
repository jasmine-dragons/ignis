import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './style.module.scss';

const CalendarWrapper = () => {
  return (
    <>
      <Calendar
        className={styles.calendar}
        calendarType="US"
        next2Label={null}
        prev2Label={null}
        tileClassName={styles.calendarTile}
      />
    </>
  );
};

export default CalendarWrapper;

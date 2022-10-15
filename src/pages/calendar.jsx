import CalendarWrapper from '../components/CalendarWrapper';
import Navbar from '../components/Navbar';
import style from '../styles/pages/Calendar.module.scss';

const CalendarPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className={style.container}>
          <CalendarWrapper />
        </div>
      </main>
    </>
  );
};

export default CalendarPage;

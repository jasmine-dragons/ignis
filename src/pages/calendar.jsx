import CalendarWrapper from '../components/CalendarWrapper';
import Navbar from '../components/Navbar';
import PopupCard from '../components/PopupCard';
import style from '../styles/pages/Calendar.module.scss';

const CalendarPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <PopupCard city="San Diego" />
        <div className={style.container}>
          <CalendarWrapper />
        </div>
      </main>
    </>
  );
};

export default CalendarPage;

import React from 'react';
import * as moment from 'moment';
import styles from './CurrentWeek.module.css';

export const CurrentWeek = () => {

  const startOfWeek = moment()
  .startOf('week')
  .format('DD');
const endOfWeek = moment()
  .endOf('week')
  .format('DD');

// функция получения месяца, из того что в сторе
function getThisMonth() {
  const monthes = [
    'сiчня',
    'лютого',
    'березеня',
    'квiтня',
    'травня',
    'червня',
    'липня',
    'серпня',
    'вересеня',
    'жовтня',
    'листопадя',
    'грудня',
  ];

  return monthes[moment().get('M')];
}
const month = getThisMonth(moment().get('M'));

  return (
    <div className={styles.wrapper}>
      <p className={styles.week}>
        Тиждень: {Number(startOfWeek)}-{Number(endOfWeek)} {month}
      </p>
    </div>
  );
};


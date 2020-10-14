export const celsiusFormat = (celsius) => {
  return `${Math.round(celsius)}°`;
};

export const getTemperatureDataPoints = (list) => {
  return list.map((item) => ({
    x: new Date(item.dt_txt),
    y: item.main.temp,
  }));
};

const weekDays = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];

export const getWeekDay = (str) => {
  const date = new Date(str);
  return weekDays[date.getDay()];
};

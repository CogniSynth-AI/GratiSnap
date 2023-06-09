import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const currentDay = currentDate.getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const renderDay = (day) => {
    const dayStyle = day === currentDay ? styles.currentDay : null;

    return (
      <View style={[styles.day, dayStyle]} key={day}>
        <Text style={styles.dayText}>{day}</Text>
      </View>
    );
  };

  const renderCalendar = () => {
    const daysArray = Array.from(
      { length: daysInMonth },
      (_, index) => index + 1
    );
    const emptyDaysArray = Array.from(
      { length: firstDayOfWeek },
      (_, index) => index
    );

    return (
      <>
        <View style={styles.weekdaysContainer}>
          {weekdays.map((weekday) => (
            <Text style={styles.weekdayText} key={weekday}>
              {weekday}
            </Text>
          ))}
        </View>
        <View style={styles.daysContainer}>
          {emptyDaysArray.map((_, index) => (
            <View style={styles.emptyDay} key={`empty_${index}`} />
          ))}
          {daysArray.map((day) => renderDay(day))}
        </View>
      </>
    );
  };

  const goToPreviousMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = prevMonth === 0 ? 11 : prevMonth - 1;
      setCurrentYear(prevYear => prevMonth === 0 ? prevYear - 1 : prevYear);
      return newMonth;
    });
  };

  const goToNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = prevMonth === 11 ? 0 : prevMonth + 1;
      setCurrentYear(prevYear => prevMonth === 11 ? prevYear + 1 : prevYear);
      return newMonth;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goToPreviousMonth}>
          <Text style={styles.arrow}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>{`${months[currentMonth + 1]} ${currentYear}`}</Text>
        <TouchableOpacity onPress={goToNextMonth}>
          <Text style={styles.arrow}>{">"}</Text>
        </TouchableOpacity>
      </View>
      {renderCalendar()}
    </View>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  arrow: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  monthText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  weekdaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  weekdayText: {
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  emptyDay: {
    width: 25,
    height: 20,
    margin: 15,
  },
  day: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  currentDay: {
    backgroundColor: 'white',
  },
  dayText: {
    color: 'black',
    fontSize: 16,
  },
});

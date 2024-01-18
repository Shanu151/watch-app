import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar, LocaleConfig } from "react-native-calendars";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  today: "Today",
};
LocaleConfig.defaultLocale = "en";

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    // Fetch user data from API or AsyncStorage
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Make the API call to get user data
      const response = await fetch("https://new-api-staging.rydeu.com/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add any necessary authentication headers
        },
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data); // Set user data in state
      } else {
        console.log("Failed to fetch user data");
        console.error(
          `Server returned status ${response.status}: ${response.statusText}`
        );
        throw new Error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleLogout = async () => {
    try {
      // Clear AsyncStorage and navigate to the login screen
      await AsyncStorage.removeItem("isLoggedIn");
      navigation.navigate("LogInScreen");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const showDateTimePicker = () => {
    setShowDatePicker(true);
  };

  const hideDateTimePicker = () => {
    setShowDatePicker(false);
  };

  const handleDateChange = (event, date) => {
    hideDateTimePicker();

    if (date) {
      const formattedDate = moment(date).format("YYYY-MM-DD");
      setSelectedDate(formattedDate);
    }
  };

  const handleTimeChange = (event, date) => {
    hideDateTimePicker();

    if (date) {
      const formattedTime = moment(date).format("HH:mm");
      setSelectedTime(formattedTime);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {user && <Text style={styles.headerText}>Welcome, {user.name}!</Text>}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.datePickerContainer}>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={showDateTimePicker}
        >
          <Text style={styles.datePickerButtonText}>Select Date & Time</Text>
        </TouchableOpacity>

        {/* Display selected date and time */}
        {selectedDate && selectedTime && (
          <View style={{ alignItems: "center" }}>
            <Text style={styles.selectedDateTime}>
              Selected Date and Time: {selectedDate} {selectedTime}
            </Text>
          </View>
        )}
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="datetime"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {/* Custom calendar */}
      <Calendar
        onDayPress={(day) => console.log("selected day", day)}
        monthFormat="MMMM yyyy"
        hideArrows={false}
        hideExtraDays={true}
        disableMonthChange={true}
        markedDates={{
          [selectedDate]: {
            selected: true,
            marked: true,
            selectedColor: "#E99282",
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#E99282",
    padding: 10,
    borderRadius: 8,
    marginTop: 30,
  },
  logoutButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  datePickerContainer: {
    marginBottom: 16,
  },
  datePickerButton: {
    backgroundColor: "#E99282",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  datePickerButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  selectedDateTime: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;

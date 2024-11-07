import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { format } from "date-fns"; 
const screenWidth = Dimensions.get("window").width;

const dataAppointments = {
  labels: ["14", "15", "16", "17"],
  datasets: [
    {
      label: "Appointments",
      data: [30, 80, 45, 150],
    },
  ],
};

const dataServices = {
  labels: ["Haircut", "Facial", "Hair color", "Beard", "Massage", "Waxing"],
  datasets: [
    {
      label: "Services",
      data: [35, 20, 10, 25, 15, 10],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "#e0e0e0",
  backgroundGradientTo: "#e0e0e0",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 1,
  decimalPlaces: 0,
  propsForBackgroundLines: {
    strokeWidth: 1,
    stroke: "#ccc",
  },
  propsForBars: {
    borderRadius: 20, // Rounded bars
  },
};
const currentMonthYear = format(new Date(), "MMMM yyyy");
const StatisticsScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = React.useState("Today");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Statistics</Text>

        {/* Appointments Date Picker and Print Icon */}
        <View style={[styles.rowContainer, styles.marginTopRow]}>
          <Text style={styles.heading}>Appointments</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedDate}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedDate(itemValue)}
            >
              <Picker.Item label="Today" value="Today" />
              <Picker.Item label="Yesterday" value="Yesterday" />
              <Picker.Item label="Last 7 Days" value="Last 7 Days" />
            </Picker>
            <TouchableOpacity style={styles.iconContainer}>
              <Icon name="print" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Appointments Bar Chart */}
        <BarChart
          data={dataAppointments}
          width={screenWidth - 30}
          height={220}
          chartConfig={chartConfig}
          verticalLabelRotation={0}
          fromZero={true}
          style={styles.chart}
        />

        {/* Current Month and Year */}
        <Text style={styles.currentMonthYear}>{currentMonthYear}</Text>

        {/* Services Date Picker and Print Icon */}
        <View style={[styles.rowContainer, styles.marginTopRow]}>
          <Text style={styles.heading}>Services</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedDate}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedDate(itemValue)}
            >
              <Picker.Item label="Today" value="Today" />
              <Picker.Item label="Yesterday" value="Yesterday" />
              <Picker.Item label="Last 7 Days" value="Last 7 Days" />
            </Picker>
            <TouchableOpacity style={styles.iconContainer}>
              <Icon name="print" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Services Bar Chart */}
        <View style={styles.chartContainer}>
          <BarChart
            data={dataServices}
            width={screenWidth - 30}
            height={220}
            chartConfig={chartConfig}
            verticalLabelRotation={0}
            fromZero={true}
            style={styles.chart}
          />
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 15,
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 15,
    marginTop: 10,
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  marginTopRow: {
    marginTop: 40,
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  picker: {
    height: 40,
    width: 150,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft: 0,
    elevation: 1,
    marginRight: 10,
  },
  chartContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  chart: {
    borderRadius: 10,
  },
  iconContainer: {
    padding: 0,
    justifyContent: "center",
    marginLeft: 0,
  },

  currentMonthYear: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default StatisticsScreen;

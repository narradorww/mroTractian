import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import HighChartsReactNative from "@highcharts/highcharts-react-native";

export default function HealthScore({ healthscore }: any) {
  const [options, setOptions] = useState({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: true,
    },
    title: {
      text: "Health</br> Score",
      align: "center",
      verticalAlign: "middle",
      y: 60,
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
          distance: -50,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "75%"],
        size: "100%",
      },
    },
    series: [
      {
        type: "pie",
        name: "Health Score",
        innerSize: "50%",
        data: [
          { name: "Health Score", y: healthscore },
          {
            y: 30,
            dataLabels: {
              enabled: false,
            },
            states: {
              select: {
                color: "#f5222d",
              },
            },
          },
        ],
      },
    ],
  });

  const updateChart = () => {
    setOptions({
      ...options,
      series: [
        {
          type: "pie",
          name: "Health Score",
          innerSize: "50%",
          data: [
            { name: "Health Score", y: healthscore },
            ,
            {
              y: 100 - healthscore,
              dataLabels: {
                enabled: false,
              },
            },
          ],
        },
      ],
    });
  };

  useEffect(() => {
    updateChart();
  }, [healthscore]);

  return (
    <View style={styles.main}>
      <HighChartsReactNative
        styles={{ flex: 1, width: "100%", heigth: "100%" }}
        options={options}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});

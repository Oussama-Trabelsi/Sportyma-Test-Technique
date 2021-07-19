import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, processColor } from 'react-native';
// Components
import { RadarChart } from 'react-native-charts-wrapper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// Redux
import { useSelector } from 'react-redux';
// Types
import { Player } from 'src/interfaces/Player';
// Theme
import styles from './style';

const PlayerStats: React.FC = () => {
  const player: Player = useSelector(
    (state: any) => state.playerReducer.player,
  );
  const [data, setData] = useState<Object>({
    dataSets: [
      {
        values: [{ value: 1 }, { value: 3 }, { value: 6 }],
        label: 'Chelsea',
        config: {
          color: processColor('blue'),
          fillColor: processColor('transparent'),
          drawValues: true,
        },
      },
      {
        values: [{ value: 4 }, { value: 8 }, { value: 2 }],
        label: 'Arsenal',
        config: {
          color: processColor('red'),
          fillColor: processColor('transparent'),
          drawValues: true,
        },
      },
    ],
  });

  const xAxis = {
    valueFormatter: ['2017/2018', '2018/2019', '2019/2020', '2020/2021'],
  };

  const yAxis = {
    axisMinimum: 0,
    enabled: true,
  };

  const legend = {
    enabled: true,
    textSize: 15,
    form: 'CIRCLE',
    horizontalAlignment: 'RIGHT',
    verticalAlignment: 'TOP',
    orientation: 'VERTICAL',
    wordWrapEnabled: true,
  };

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <RadarChart
        style={styles.chart}
        data={data}
        xAxis={xAxis}
        yAxis={yAxis}
        legend={legend}
        chartDescription={{ text: 'Goals per season / club', textSize: 16 }}
        drawWeb={true}
        webLineWidth={5}
        webLineWidthInner={5}
        webAlpha={255}
        webColor={processColor(Colors.primary)}
        webColorInner={processColor('orange')}
        skipWebLineCount={1}
      />
    </SafeAreaView>
  );
};
export default PlayerStats;

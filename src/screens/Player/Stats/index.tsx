import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, processColor } from 'react-native';
// Components
import { RadarChart } from 'react-native-charts-wrapper';
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
        values: [
          { value: 1 },
          { value: 9 },
          { value: 5 },
          { value: 1 },
          { value: 7 },
          { value: 1 },
          { value: 1 },
        ],
        label: 'Arsenal',
        config: {
          color: processColor('#000000'),
          drawFilled: true,
          fillColor: processColor('#D9C5C5'),
          fillAlpha: 100,
          lineWidth: 0,
          drawValues: false,
        },
      },
      {
        values: [
          { value: 0.75 },
          { value: 0.75 },
          { value: 0.75 },
          { value: 0.75 },
          { value: 0.75 },
          { value: 0.75 },
          { value: 0.75 },
        ],
        label: 'Chelsea',
        config: {
          color: processColor('#000000'),
          drawFilled: true,
          fillColor: processColor('#F1DB93'),
          fillAlpha: 100,
          lineWidth: 0,
          drawValues: false,
        },
      },
    ],
  });

  const xAxis = {
    valueFormatter: [
      '2017/2018',
      '2017/2018',
      '2017/2018',
      '2017/2018',
      '2017/2018',
      '2017/2018',
      '2017/2018',
    ],
  };

  const yAxis = {
    axisMinimum: 0,
    axisMaximum: 1,
    enabled: false,
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
        chartDescription={{ text: '' }}
        legend={legend}
        drawWeb={true}
        webLineWidth={5}
        webLineWidthInner={5}
        webAlpha={255}
        webColor={processColor('red')}
        webColorInner={processColor('green')}
        skipWebLineCount={1}
      />
    </SafeAreaView>
  );
};
export default PlayerStats;

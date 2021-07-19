import React from 'react';
import { SafeAreaView, processColor } from 'react-native';
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

  return (
    <SafeAreaView style={styles.container}>
      <RadarChart
        style={styles.chart}
        data={player.data}
        xAxis={player.xAxis}
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

import { ProcessedColorValue } from "react-native";

enum Position {
  Goalkeeper = 'Goal keeper',
  Defender = 'Defender',
  Midfielder = 'Midfielder',
  Forward = 'Forward',
}

interface Team {
  club_id: number;
  season: string;
  number: number;
  goals: number;
}

interface Value {
  value: number;
}

interface DataSet {
  values: Array<Value>;
  label: string;
  config: {
    color: ProcessedColorValue;
    fillColor: ProcessedColorValue;
    drawValues: boolean;
  };
}

interface xAxis {
  valueFormatter: Array<string>;
}

interface Data {
  dataSets: Array<DataSet>;
}

interface Player {
  id: number;
  name: string;
  nationality: string;
  flag: string;
  birthdate: string;
  age: number;
  height: number;
  position: Position;
  teams: Array<Team>;
  data: Data;
  xAxis: xAxis;
}

export { Player, Position, Team, Value, DataSet, xAxis, Data };

enum Position {
  Goalkeeper = 'Goalkeeper',
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
}

export { Player, Position };

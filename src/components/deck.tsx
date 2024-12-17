import {ImageSourcePropType} from 'react-native';

// const AceS = require('../assets/cards/A-S.png');
// const TwoS = require('../assets/cards/2-S.png');
// const ThreeS = require('../assets/cards/3-S.png');
// const FourS = require('../assets/cards/4-S.png');
// const FiveS = require('../assets/cards/5-S.png');
// const SixS = require('../assets/cards/6-S.png');
// const SevenS = require('../assets/cards/7-S.png');
// const EightS = require('../assets/cards/8-S.png');
// const NineS = require('../assets/cards/9-S.png');
// const TenS = require('../assets/cards/10-S.png');
// const JackS = require('../assets/cards/J-S.png');
// const QueenS = require('../assets/cards/Q-S.png');
// const KingS = require('../assets/cards/K-S.png');

// const AceC = require('../assets/cards/A-C.png');
// const TwoC = require('../assets/cards/2-C.png');
// const ThreeC = require('../assets/cards/3-C.png');
// const FourC = require('../assets/cards/4-C.png');
// const FiveC = require('../assets/cards/5-C.png');
// const SixC = require('../assets/cards/6-C.png');
// const SevenC = require('../assets/cards/7-C.png');
// const EightC = require('../assets/cards/8-C.png');
// const NineC = require('../assets/cards/9-C.png');
// const TenC = require('../assets/cards/10-C.png');
// const JackC = require('../assets/cards/J-C.png');
// const QueenC = require('../assets/cards/Q-C.png');
// const KingC = require('../assets/cards/K-C.png');

// const AceH = require('../assets/cards/A-H.png');
// const TwoH = require('../assets/cards/2-H.png');
// const ThreeH = require('../assets/cards/3-H.png');
// const FourH = require('../assets/cards/4-H.png');
// const FiveH = require('../assets/cards/5-H.png');
// const SixH = require('../assets/cards/6-H.png');
// const SevenH = require('../assets/cards/7-H.png');
// const EightH = require('../assets/cards/8-H.png');
// const NineH = require('../assets/cards/9-H.png');
// const TenH = require('../assets/cards/10-H.png');
// const JackH = require('../assets/cards/J-H.png');
// const QueenH = require('../assets/cards/Q-H.png');
// const KingH = require('../assets/cards/K-H.png');

// const AceD = require('../assets/cards/A-D.png');
// const TwoD = require('../assets/cards/2-D.png');
// const ThreeD = require('../assets/cards/3-D.png');
// const FourD = require('../assets/cards/4-D.png');
// const FiveD = require('../assets/cards/5-D.png');
// const SixD = require('../assets/cards/6-D.png');
// const SevenD = require('../assets/cards/7-D.png');
// const EightD = require('../assets/cards/8-D.png');
// const NineD = require('../assets/cards/9-D.png');
// const TenD = require('../assets/cards/10-D.png');
// const JackD = require('../assets/cards/J-D.png');
// const QueenD = require('../assets/cards/Q-D.png');
// const KingD = require('../assets/cards/K-D.png');

interface ICard {
  [key: string]: ImageSourcePropType;
}

export const Deck: ICard = {
  'A:S': require('../assets/cards/A-S.png'),
  '2:S': require('../assets/cards/2-S.png'),
  '3:S': require('../assets/cards/3-S.png'),
  '4:S': require('../assets/cards/4-S.png'),
  '5:S': require('../assets/cards/5-S.png'),
  '6:S': require('../assets/cards/6-S.png'),
  '7:S': require('../assets/cards/7-S.png'),
  '8:S': require('../assets/cards/8-S.png'),
  '9:S': require('../assets/cards/9-S.png'),
  '10:S': require('../assets/cards/10-S.png'),
  'J:S': require('../assets/cards/J-S.png'),
  'Q:S': require('../assets/cards/Q-S.png'),
  'K:S': require('../assets/cards/K-S.png'),
  'A:H': require('../assets/cards/A-H.png'),
  '2:H': require('../assets/cards/2-H.png'),
  '3:H': require('../assets/cards/3-H.png'),
  '4:H': require('../assets/cards/4-H.png'),
  '5:H': require('../assets/cards/5-H.png'),
  '6:H': require('../assets/cards/6-H.png'),
  '7:H': require('../assets/cards/7-H.png'),
  '8:H': require('../assets/cards/8-H.png'),
  '9:H': require('../assets/cards/9-H.png'),
  '10:H': require('../assets/cards/10-H.png'),
  'J:H': require('../assets/cards/J-H.png'),
  'Q:H': require('../assets/cards/Q-H.png'),
  'K:H': require('../assets/cards/K-H.png'),
  'A:C': require('../assets/cards/A-C.png'),
  '2:C': require('../assets/cards/2-C.png'),
  '3:C': require('../assets/cards/3-C.png'),
  '4:C': require('../assets/cards/4-C.png'),
  '5:C': require('../assets/cards/5-C.png'),
  '6:C': require('../assets/cards/6-C.png'),
  '7:C': require('../assets/cards/7-C.png'),
  '8:C': require('../assets/cards/8-C.png'),
  '9:C': require('../assets/cards/9-C.png'),
  '10:C': require('../assets/cards/10-C.png'),
  'J:C': require('../assets/cards/J-C.png'),
  'Q:C': require('../assets/cards/Q-C.png'),
  'K:C': require('../assets/cards/K-C.png'),
  'A:D': require('../assets/cards/A-D.png'),
  '2:D': require('../assets/cards/2-D.png'),
  '3:D': require('../assets/cards/3-D.png'),
  '4:D': require('../assets/cards/4-D.png'),
  '5:D': require('../assets/cards/5-D.png'),
  '6:D': require('../assets/cards/6-D.png'),
  '7:D': require('../assets/cards/7-D.png'),
  '8:D': require('../assets/cards/8-D.png'),
  '9:D': require('../assets/cards/9-D.png'),
  '10:D': require('../assets/cards/10-D.png'),
  'J:D': require('../assets/cards/J-D.png'),
  'Q:D': require('../assets/cards/Q-D.png'),
  'K:D': require('../assets/cards/K-D.png'),
};

export const PlayingDeck: ICard = {
  hit: require('../assets/cards/hit.gif'),
  double: require('../assets/cards/double.gif'),
  stand: require('../assets/cards/stand.gif'),
};

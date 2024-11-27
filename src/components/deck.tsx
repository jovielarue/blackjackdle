import {ImageSourcePropType} from 'react-native';

const AceS = require('../assets/cards/A-S.png');
const TwoS = require('../assets/cards/2-S.png');
const ThreeS = require('../assets/cards/3-S.png');
const FourS = require('../assets/cards/4-S.png');
const FiveS = require('../assets/cards/5-S.png');
const SixS = require('../assets/cards/6-S.png');
const SevenS = require('../assets/cards/7-S.png');
const EightS = require('../assets/cards/8-S.png');
const NineS = require('../assets/cards/9-S.png');
const TenS = require('../assets/cards/10-S.png');
const JackS = require('../assets/cards/J-S.png');
const QueenS = require('../assets/cards/Q-S.png');
const KingS = require('../assets/cards/K-S.png');

const AceC = require('../assets/cards/A-C.png');
const TwoC = require('../assets/cards/2-C.png');
const ThreeC = require('../assets/cards/3-C.png');
const FourC = require('../assets/cards/4-C.png');
const FiveC = require('../assets/cards/5-C.png');
const SixC = require('../assets/cards/6-C.png');
const SevenC = require('../assets/cards/7-C.png');
const EightC = require('../assets/cards/8-C.png');
const NineC = require('../assets/cards/9-C.png');
const TenC = require('../assets/cards/10-C.png');
const JackC = require('../assets/cards/J-C.png');
const QueenC = require('../assets/cards/Q-C.png');
const KingC = require('../assets/cards/K-C.png');

const AceH = require('../assets/cards/A-H.png');
const TwoH = require('../assets/cards/2-H.png');
const ThreeH = require('../assets/cards/3-H.png');
const FourH = require('../assets/cards/4-H.png');
const FiveH = require('../assets/cards/5-H.png');
const SixH = require('../assets/cards/6-H.png');
const SevenH = require('../assets/cards/7-H.png');
const EightH = require('../assets/cards/8-H.png');
const NineH = require('../assets/cards/9-H.png');
const TenH = require('../assets/cards/10-H.png');
const JackH = require('../assets/cards/J-H.png');
const QueenH = require('../assets/cards/Q-H.png');
const KingH = require('../assets/cards/K-H.png');

const AceD = require('../assets/cards/A-D.png');
const TwoD = require('../assets/cards/2-D.png');
const ThreeD = require('../assets/cards/3-D.png');
const FourD = require('../assets/cards/4-D.png');
const FiveD = require('../assets/cards/5-D.png');
const SixD = require('../assets/cards/6-D.png');
const SevenD = require('../assets/cards/7-D.png');
const EightD = require('../assets/cards/8-D.png');
const NineD = require('../assets/cards/9-D.png');
const TenD = require('../assets/cards/10-D.png');
const JackD = require('../assets/cards/J-D.png');
const QueenD = require('../assets/cards/Q-D.png');
const KingD = require('../assets/cards/K-D.png');

interface ICard {
  [key: string]: ImageSourcePropType;
}

export const Deck: ICard = {
  'A:S': AceS,
  '2:S': TwoS,
  '3:S': ThreeS,
  '4:S': FourS,
  '5:S': FiveS,
  '6:S': SixS,
  '7:S': SevenS,
  '8:S': EightS,
  '9:S': NineS,
  '10:S': TenS,
  'J:S': JackS,
  'Q:S': QueenS,
  'K:S': KingS,
  'A:H': AceH,
  '2:H': TwoH,
  '3:H': ThreeH,
  '4:H': FourH,
  '5:H': FiveH,
  '6:H': SixH,
  '7:H': SevenH,
  '8:H': EightH,
  '9:H': NineH,
  '10:H': TenH,
  'J:H': JackH,
  'Q:H': QueenH,
  'K:H': KingH,
  'A:C': AceC,
  '2:C': TwoC,
  '3:C': ThreeC,
  '4:C': FourC,
  '5:C': FiveC,
  '6:C': SixC,
  '7:C': SevenC,
  '8:C': EightC,
  '9:C': NineC,
  '10:C': TenC,
  'J:C': JackC,
  'Q:C': QueenC,
  'K:C': KingC,
  'A:D': AceD,
  '2:D': TwoD,
  '3:D': ThreeD,
  '4:D': FourD,
  '5:D': FiveD,
  '6:D': SixD,
  '7:D': SevenD,
  '8:D': EightD,
  '9:D': NineD,
  '10:D': TenD,
  'J:D': JackD,
  'Q:D': QueenD,
  'K:D': KingD,
};

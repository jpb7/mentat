type DrillTemplate = {
  digits1: number;
  digits2: number;
  operator: string;
}

const drills: Record<string, DrillTemplate> = {
  'exercise1': {
    digits1: 2,
    digits2: 2,
    operator: '+'
  },
  'exercise2': {
    digits1: 2,
    digits2: 2,
    operator: '-'
  },
  'exercise3': {
    digits1: 2,
    digits2: 1,
    operator: '*'
  }
}

export default drills;


import React, { useState, useEffect } from 'react';
import DrillBox from './DrillBox';
import DrillButton from './DrillButton';

type DrillTemplate = {
  digits1: number;
  digits2: number;
  operator: string;
};

type DrillObject = {
  number1: number;
  number2: number;
  operator: string;
  solution: number;
}

type DrillProps = {
  drillId: string;
};

const operations: { [key: string]: Function } = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => a / b // TODO: handle division by zero
};

const getRandomNumber = (digits: number): number => {
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const performOperation = (num1: number, num2: number, operator: string) => {
  const a = Math.max(num1, num2);
  const b = Math.min(num1, num2);
  return operations[operator](a, b);
} 

const generateDrill = (template: DrillTemplate): DrillObject => {
  const { digits1, digits2, operator } = template;

  const number1 = getRandomNumber(digits1);
  const number2 = getRandomNumber(digits2);
  const solution = performOperation(number1, number2, operator);

  return { number1, number2, operator, solution };
};

const Drill: React.FC<DrillProps> = ({ drillId }) => {
  const [drill, setDrill] = useState<DrillObject | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/${drillId}`)
      .then(response => response.json())
      .then(template => setDrill(generateDrill(template)))
      .catch(error => console.error('Failed to retrieve drill: ', error));
  }, [drillId]);

  return (
    <>
      <DrillBox drill={drill} />
      <DrillButton />
    </>
  );
};

export default Drill;


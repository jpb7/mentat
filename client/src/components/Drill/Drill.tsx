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

//  Map operators to functions that return solutions
//
const calculate: { [key: string]: Function } = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => (b === 1) ? a * (b+1) : a * b,
  '/': (a: number, b: number) => a / b
};

//  Generate a random number within specified number of digits
//
const getRandomNumber = (digits: number): number => {
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//  Generate an arithmetic problem based on a template
//
const generateDrill = (template: DrillTemplate): DrillObject => {
  const { digits1, digits2, operator } = template;

  let a: number = getRandomNumber(digits1);
  let b: number = getRandomNumber(digits2);
  [a, b] = [Math.max(a, b), Math.min(a, b)]

  return { 
    number1: a,
    number2: b,
    operator: operator,
    solution: calculate[operator](a, b)
  };
};

const Drill: React.FC<DrillProps> = ({ drillId }) => {
  const [template, setTemplate] = useState<DrillTemplate | null>(null);
  const [drill, setDrill] = useState<DrillObject | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/${drillId}`) // TODO: make .env
      .then(
        response => response.json()
      )
      .then(
        fetchedTemplate => {
          setTemplate(fetchedTemplate);
          setDrill(generateDrill(fetchedTemplate));
      })
      .catch(
        error => console.error('Failed to retrieve drill: ', error)
      );
  }, [drillId]);

  const handleNewDrill = () => {
    if (!showSolution && drill) {
      setShowSolution(true);
    }
    else if (template) {
      setDrill(generateDrill(template));
      setShowSolution(false);
    }
  };

  return (
    <>
      <DrillBox drill={drill} showSolution={showSolution} />
      <DrillButton onClick={handleNewDrill} showSolution={showSolution} />
    </>
  );
};

export default Drill;


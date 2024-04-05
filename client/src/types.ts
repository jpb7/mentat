export type DrillBoxProps = {
  drill: DrillObject | null;
  showSolution: boolean;
};

export type DrillButtonProps = {
  showSolution: boolean;
};

export type DrillObject = {
  number1: number;
  number2: number;
  operator: string;
  solution: number;
};

export type DrillProps = {
  drillId: string;
};

export type DrillTemplate = {
  digits1: number;
  digits2: number;
  operator: string;
};

export type MainMenuProps = {
  exercises: { path: string; drillId: string }[];
};

export type MenuItemProps = {
  label: string;
}

export type TitleBarProps = {
	title: string;
}


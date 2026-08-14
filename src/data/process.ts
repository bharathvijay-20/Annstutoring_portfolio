export interface LearningPillar {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export const learningApproachData: LearningPillar[] = [
  {
    step: '01',
    title: 'CONCEPT CLARITY',
    description: 'Understand the idea before memorising the method.',
    iconName: 'Lightbulb'
  },
  {
    step: '02',
    title: 'STEP-BY-STEP',
    description: 'Break difficult problems into clear, manageable steps.',
    iconName: 'ListOrdered'
  },
  {
    step: '03',
    title: 'PRACTICE',
    description: 'Strengthen understanding through relevant, focused questions.',
    iconName: 'Target'
  },
  {
    step: '04',
    title: 'EXAM PREPARATION',
    description: 'Focus on effective revision and examination practice.',
    iconName: 'Award'
  }
];

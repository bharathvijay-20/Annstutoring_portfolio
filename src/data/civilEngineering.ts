export interface CivilGroup {
  category: string;
  badge: string;
  subjects: string[];
}

export const civilSubjectGroups: CivilGroup[] = [
  {
    category: 'CORE & STRUCTURAL',
    badge: 'Structural Mechanics',
    subjects: [
      'Engineering Mechanics',
      'Strength of Materials',
      'Structural Analysis',
      'Theory of Structures'
    ]
  },
  {
    category: 'OTHER CORE',
    badge: 'Core Theory Subjects',
    subjects: [
      'Fluid Mechanics',
      'Hydraulics',
      'Environmental Engineering',
      'Transportation Engineering',
      'Surveying'
    ]
  }
];

export const civilOverview = {
  title: 'Civil Engineering Theory',
  tagline: 'Understand the theory behind Civil Engineering.',
  description: 'Concept-focused academic guidance for core Civil Engineering theory subjects.'
};

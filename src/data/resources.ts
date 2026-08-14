import { ResourceCategory } from '../types';

export const learningResources: ResourceCategory[] = [
  {
    id: 'important-questions',
    title: 'Important Questions',
    description: 'Focused questions for revision and examination preparation, categorized by difficulty and chapter weightage.',
    badge: 'Exam Focused',
    icon: 'Target',
    topics: [
      'CBSE High-Frequency Question Blueprints',
      'Step-by-step Standard Model Solutions',
      'Civil Engineering Exam Derivations',
      'Chapter-wise Formula Sheets & Cheatcodes'
    ]
  },
  {
    id: 'hots-questions',
    title: 'HOTS Questions',
    description: 'Higher Order Thinking Skills questions designed to develop analytical rigor, creative problem solving, and multi-concept synthesis.',
    badge: 'Deep Concept',
    icon: 'Brain',
    topics: [
      'Multi-Chapter Geometry & Algebra Integrations',
      'Complex Beam Stress Inversion Scenarios',
      'Non-standard Boundary Value Challenges',
      'Analytical Proofs & Justifications'
    ]
  },
  {
    id: 'competency-based',
    title: 'Competency-Based Questions',
    description: 'Application-oriented questions aligned with the latest CBSE NEP guidelines and real-world engineering problem scenarios.',
    badge: 'Application',
    icon: 'Award',
    topics: [
      'Real-world Situational Mathematics',
      'Applied Hydrostatic Load Analyses',
      'Data Interpretation & Inference Tasks',
      'Critical Reasoning & Concept Validation'
    ]
  },
  {
    id: 'case-studies',
    title: 'Case Studies',
    description: 'Context-based problems connecting theoretical equations and geometric principles to realistic everyday and structural scenarios.',
    badge: 'Contextual',
    icon: 'BookOpen',
    topics: [
      'CBSE Class 10 Real-world Case Contexts',
      'Soil Stratification & Settlement Case Records',
      'Construction Schedule CPM Network Cases',
      'Hydraulic Flow Rate Field Problem Cases'
    ]
  },
  {
    id: 'solved-problems',
    title: 'Solved Problems',
    description: 'Exemplary step-by-step solutions with clear intermediate reasoning, free body diagrams, and marking-scheme discipline.',
    badge: 'Step-by-Step',
    icon: 'CheckCircle2',
    topics: [
      'Standard Board Exam Presentation Format',
      'Mohr’s Circle Step-by-Step Construction',
      'Slope-Deflection & Moment Distribution Guides',
      'Trigonometric Identity Proof Frameworks'
    ]
  },
  {
    id: 'revision-resources',
    title: 'Revision Resources',
    description: 'Concise summary charts, formula compendiums, and quick review mind-maps to reinforce learning before key examinations.',
    badge: 'Quick Review',
    icon: 'Zap',
    topics: [
      'One-Page Chapter Summary Roadmaps',
      'Civil Engineering Key Equation Sheets',
      'Trigonometry & Mensuration Tables',
      'Common Mistakes & Pitfalls Checklists'
    ]
  }
];

import { VideoItem } from '../types';

export const videoLessons: VideoItem[] = [
  // CBSE Mathematics
  {
    id: 'vid-math-1',
    title: 'Mastering Trigonometric Identities: The Intuitive Algebraic Method',
    category: 'math',
    classOrSubject: 'Class 10 CBSE',
    duration: '14 mins',
    description: 'Learn how to easily derive and manipulate sin²θ + cos²θ = 1, sec²θ - tan²θ = 1, and cosec²θ - cot²θ = 1 without rote memorisation.',
    tags: ['Class 10', 'Trigonometry', 'CBSE Board', 'Proof Method'],
    thumbnailGradient: 'from-blue-900 to-indigo-950'
  },
  {
    id: 'vid-math-2',
    title: 'Basic Proportionality Theorem (Thales Theorem): Proof & HOTS Applications',
    category: 'math',
    classOrSubject: 'Class 10 CBSE',
    duration: '18 mins',
    description: 'A crystal-clear geometric proof of BPT, followed by 3 tricky board exam problems and how to write the solution for full marks.',
    tags: ['Class 10', 'Triangles', 'Theorems', 'HOTS'],
    thumbnailGradient: 'from-slate-900 to-blue-950'
  },
  {
    id: 'vid-math-3',
    title: 'Quadratic Equations: Master the Discriminant & Nature of Roots',
    category: 'math',
    classOrSubject: 'Class 10 CBSE',
    duration: '12 mins',
    description: 'Understand the geometric meaning of the discriminant D = b² - 4ac and how to solve for unknown parameter k effortlessly.',
    tags: ['Class 10', 'Algebra', 'Quadratic', 'Board Prep'],
    thumbnailGradient: 'from-indigo-950 to-slate-900'
  },
  {
    id: 'vid-math-4',
    title: 'Class 9 Polynomials: Remainder Theorem vs Factor Theorem Demystified',
    category: 'math',
    classOrSubject: 'Class 9 CBSE',
    duration: '15 mins',
    description: 'Step-by-step conceptual walkthrough showing why polynomial division works and how to factorise cubic polynomials quickly.',
    tags: ['Class 9', 'Polynomials', 'Algebra', 'Foundations'],
    thumbnailGradient: 'from-blue-950 to-slate-900'
  },

  // Civil Engineering Theory
  {
    id: 'vid-civil-1',
    title: 'Shear Force & Bending Moment Diagrams (SFD/BMD) from First Principles',
    category: 'civil',
    classOrSubject: 'Strength of Materials',
    duration: '22 mins',
    description: 'Demystifying sign conventions, point loads, uniformly distributed loads (UDL), and point of contra-flexure with zero confusion.',
    tags: ['SOM', 'SFD & BMD', 'Structural Theory', 'Mechanics'],
    thumbnailGradient: 'from-amber-950 to-slate-950'
  },
  {
    id: 'vid-civil-2',
    title: 'Moment Distribution Method (Hardy Cross): Continuous Beam Step-by-Step',
    category: 'civil',
    classOrSubject: 'Structural Analysis',
    duration: '26 mins',
    description: 'Learn distribution factors, carry-over factors, fixed end moments, and systematic cycle balancing for multi-span continuous beams.',
    tags: ['Structural Analysis', 'Indeterminate', 'Hardy Cross', 'Theory'],
    thumbnailGradient: 'from-slate-950 to-blue-950'
  },
  {
    id: 'vid-civil-3',
    title: 'Terzaghi’s 1D Consolidation Theory: Physical Meaning & Mathematical Derivation',
    category: 'civil',
    classOrSubject: 'Soil Mechanics',
    duration: '19 mins',
    description: 'Understanding excess pore water pressure dissipation, coefficient of consolidation (Cv), and time factor (Tv) made simple.',
    tags: ['Geotechnical', 'Soil Mechanics', 'Consolidation', 'Theory'],
    thumbnailGradient: 'from-stone-900 to-amber-950'
  },
  {
    id: 'vid-civil-4',
    title: 'Euler’s Column Buckling Theory & Effective Length Concepts',
    category: 'civil',
    classOrSubject: 'Theory of Structures',
    duration: '16 mins',
    description: 'Understand the mathematical differential equation of elastic stability and why boundary conditions change critical load.',
    tags: ['Theory of Structures', 'Columns', 'Euler Buckling', 'Stability'],
    thumbnailGradient: 'from-slate-900 to-amber-950'
  }
];

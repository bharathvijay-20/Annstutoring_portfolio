export interface ClassSyllabus {
  id: string;
  grade: string;
  tagline: string;
  focus: string[];
  description: string;
  badge?: string;
  isHighPriority?: boolean;
  keyHighlights: string[];
}

export type CivilCategory = 'structural' | 'geotechnical' | 'construction' | 'core';

export interface CivilSubject {
  id: string;
  name: string;
  code?: string;
  category: CivilCategory;
  categoryName: string;
  shortDesc: string;
  keyTopics: string[];
  academicImportance: string;
}

export interface LearningProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
  outcome: string;
}

export interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  badge: string;
  icon: string;
  topics: string[];
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'math' | 'civil';
  classOrSubject: string;
  duration: string;
  description: string;
  tags: string[];
  thumbnailGradient: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'math' | 'civil' | 'admissions';
}

export interface CredentialItem {
  title: string;
  subtitle: string;
  category: 'academic' | 'engineering' | 'membership';
  details: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  target: 'Class 6' | 'Class 7' | 'Class 8' | 'Class 9' | 'Class 10' | 'Civil Engineering' | 'Other';
  subject: string;
  mode: 'Online' | 'Offline' | 'Not sure yet';
  message: string;
}

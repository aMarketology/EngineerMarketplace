import { EngineeringService, ServiceProvider, ServiceCategory } from './types';

export const mockProviders: ServiceProvider[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    company: 'Chen Engineering Solutions',
    avatar: '/avatars/sarah-chen.jpg',
    bio: 'Structural engineer with 15 years of experience in high-rise buildings and bridges. Specializes in seismic design and sustainable construction.',
    location: 'San Francisco, CA',
    yearsExperience: 15,
    expertise: ['Structural Analysis', 'Seismic Design', 'Steel Structures', 'Concrete Design'],
    rating: 4.9,
    completedProjects: 127,
    responseTime: '< 2 hours',
    languages: ['English', 'Mandarin'],
    certifications: ['PE License', 'LEED AP', 'AISC Certified'],
    hourlyRate: 150
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    company: 'Rodriguez Mechanical Designs',
    avatar: '/avatars/marcus-rodriguez.jpg',
    bio: 'Mechanical engineer specializing in HVAC systems and energy efficiency. Expert in AutoCAD and Revit MEP.',
    location: 'Austin, TX',
    yearsExperience: 12,
    expertise: ['HVAC Design', 'Energy Analysis', 'MEP Systems', 'Building Automation'],
    rating: 4.8,
    completedProjects: 89,
    responseTime: '< 4 hours',
    languages: ['English', 'Spanish'],
    certifications: ['PE License', 'ASHRAE Member', 'Revit Certified'],
    hourlyRate: 125
  },
  {
    id: '3',
    name: 'Emily Johnson',
    company: 'Johnson Electric Consulting',
    avatar: '/avatars/emily-johnson.jpg',
    bio: 'Electrical engineer with expertise in power systems, renewable energy, and smart grid technologies.',
    location: 'Denver, CO',
    yearsExperience: 10,
    expertise: ['Power Systems', 'Solar Design', 'Electrical Distribution', 'Smart Grids'],
    rating: 4.9,
    completedProjects: 156,
    responseTime: '< 1 hour',
    languages: ['English'],
    certifications: ['PE License', 'NABCEP Certified', 'IEEE Member'],
    hourlyRate: 140
  },
  {
    id: '4',
    name: 'David Kim',
    company: 'Kim Software Engineering',
    avatar: '/avatars/david-kim.jpg',
    bio: 'Software engineer with focus on embedded systems, IoT, and industrial automation solutions.',
    location: 'Seattle, WA',
    yearsExperience: 8,
    expertise: ['Embedded Systems', 'IoT Development', 'C/C++', 'Python', 'Industrial Automation'],
    rating: 4.7,
    completedProjects: 73,
    responseTime: '< 3 hours',
    languages: ['English', 'Korean'],
    certifications: ['AWS Certified', 'Certified LabVIEW Developer'],
    hourlyRate: 110
  }
];

export const mockCategories: ServiceCategory[] = [
  {
    id: 'structural',
    name: 'Structural Engineering',
    description: 'Building design, analysis, and structural calculations',
    icon: 'Building',
    subcategories: [
      { id: 'residential', name: 'Residential Design', description: 'House and apartment structural design' },
      { id: 'commercial', name: 'Commercial Buildings', description: 'Office and retail structural design' },
      { id: 'industrial', name: 'Industrial Structures', description: 'Warehouses and manufacturing facilities' },
      { id: 'bridges', name: 'Bridge Design', description: 'Bridge and infrastructure design' }
    ]
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    description: 'HVAC, mechanical systems, and energy analysis',
    icon: 'Cog',
    subcategories: [
      { id: 'hvac', name: 'HVAC Design', description: 'Heating, ventilation, and air conditioning systems' },
      { id: 'plumbing', name: 'Plumbing Systems', description: 'Water supply and drainage design' },
      { id: 'energy', name: 'Energy Analysis', description: 'Energy efficiency and sustainability studies' },
      { id: 'mechanical-systems', name: 'Mechanical Systems', description: 'General mechanical engineering services' }
    ]
  },
  {
    id: 'electrical',
    name: 'Electrical Engineering',
    description: 'Power systems, lighting, and electrical design',
    icon: 'Zap',
    subcategories: [
      { id: 'power-systems', name: 'Power Systems', description: 'Electrical distribution and power design' },
      { id: 'lighting', name: 'Lighting Design', description: 'Interior and exterior lighting solutions' },
      { id: 'solar', name: 'Solar Design', description: 'Photovoltaic and renewable energy systems' },
      { id: 'automation', name: 'Building Automation', description: 'Smart building and control systems' }
    ]
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
    description: 'Site development, utilities, and infrastructure',
    icon: 'Map',
    subcategories: [
      { id: 'site-design', name: 'Site Design', description: 'Site planning and development' },
      { id: 'utilities', name: 'Utilities Design', description: 'Water, sewer, and utility infrastructure' },
      { id: 'transportation', name: 'Transportation', description: 'Road design and traffic engineering' },
      { id: 'environmental', name: 'Environmental', description: 'Environmental impact and remediation' }
    ]
  }
];

export const mockServices: EngineeringService[] = [
  {
    id: '1',
    title: 'Residential Structural Design & Calculations',
    description: 'Complete structural engineering services for residential buildings including foundation design, framing plans, and structural calculations. I provide detailed drawings and specifications that meet all local building codes and requirements.',
    shortDescription: 'Professional structural design for residential buildings with detailed calculations and code compliance.',
    price: 2500,
    category: 'structural',
    subcategory: 'residential',
    duration: '7-10 days',
    deliverables: [
      'Structural drawings and plans',
      'Foundation design calculations',
      'Beam and column sizing',
      'Code compliance verification',
      'Stamped engineering drawings'
    ],
    skills: ['Structural Analysis', 'AutoCAD', 'Building Codes', 'Foundation Design'],
    provider: mockProviders[0],
    images: ['/services/structural-1.jpg', '/services/structural-2.jpg'],
    rating: 4.9,
    reviewCount: 45,
    isAvailable: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'HVAC System Design for Commercial Buildings',
    description: 'Design efficient HVAC systems for commercial spaces including load calculations, equipment selection, and ductwork layout. Includes energy efficiency analysis and compliance with ASHRAE standards.',
    shortDescription: 'Energy-efficient HVAC design for commercial buildings with load calculations and equipment selection.',
    price: 3200,
    category: 'mechanical',
    subcategory: 'hvac',
    duration: '5-7 days',
    deliverables: [
      'Load calculation reports',
      'Equipment specifications',
      'Ductwork layout drawings',
      'Energy analysis report',
      'System controls design'
    ],
    skills: ['HVAC Design', 'Load Calculations', 'Revit MEP', 'Energy Modeling'],
    provider: mockProviders[1],
    images: ['/services/hvac-1.jpg', '/services/hvac-2.jpg'],
    rating: 4.8,
    reviewCount: 32,
    isAvailable: true,
    createdAt: '2024-01-20',
    updatedAt: '2024-01-20'
  },
  {
    id: '3',
    title: 'Solar PV System Design & Engineering',
    description: 'Complete solar photovoltaic system design including site assessment, panel layout, electrical design, and permitting support. Optimized for maximum energy production and cost-effectiveness.',
    shortDescription: 'Professional solar PV system design with electrical engineering and permitting support.',
    price: 1800,
    category: 'electrical',
    subcategory: 'solar',
    duration: '3-5 days',
    deliverables: [
      'Site assessment report',
      'Panel layout design',
      'Electrical single-line diagram',
      'Production analysis',
      'Permit-ready drawings'
    ],
    skills: ['Solar Design', 'Electrical Engineering', 'PVsyst', 'AutoCAD Electrical'],
    provider: mockProviders[2],
    images: ['/services/solar-1.jpg', '/services/solar-2.jpg'],
    rating: 4.9,
    reviewCount: 67,
    isAvailable: true,
    createdAt: '2024-01-25',
    updatedAt: '2024-01-25'
  },
  {
    id: '4',
    title: 'IoT Device Development & Programming',
    description: 'Custom IoT device development including hardware selection, firmware programming, and cloud integration. Specializing in industrial monitoring and automation applications.',
    shortDescription: 'Custom IoT solutions with embedded programming and cloud connectivity for industrial applications.',
    price: 4500,
    category: 'electrical',
    subcategory: 'automation',
    duration: '14-21 days',
    deliverables: [
      'Hardware specifications',
      'Firmware source code',
      'Cloud integration setup',
      'Testing documentation',
      'User manual and support'
    ],
    skills: ['Embedded Systems', 'IoT Development', 'C/C++', 'Cloud Platforms'],
    provider: mockProviders[3],
    images: ['/services/iot-1.jpg', '/services/iot-2.jpg'],
    rating: 4.7,
    reviewCount: 23,
    isAvailable: true,
    createdAt: '2024-02-01',
    updatedAt: '2024-02-01'
  },
  {
    id: '5',
    title: 'Commercial Building Electrical Design',
    description: 'Complete electrical system design for commercial buildings including power distribution, lighting design, fire alarm systems, and code compliance verification.',
    shortDescription: 'Comprehensive electrical design for commercial buildings with power, lighting, and safety systems.',
    price: 2800,
    category: 'electrical',
    subcategory: 'power-systems',
    duration: '6-8 days',
    deliverables: [
      'Electrical drawings and panels',
      'Load calculations',
      'Lighting design plans',
      'Fire alarm system design',
      'Code compliance report'
    ],
    skills: ['Electrical Design', 'Power Systems', 'Lighting Design', 'Code Compliance'],
    provider: mockProviders[2],
    images: ['/services/electrical-1.jpg', '/services/electrical-2.jpg'],
    rating: 4.8,
    reviewCount: 41,
    isAvailable: true,
    createdAt: '2024-02-05',
    updatedAt: '2024-02-05'
  },
  {
    id: '6',
    title: 'Bridge Structural Analysis & Design',
    description: 'Professional bridge design services including structural analysis, seismic considerations, and construction documentation. Experience with various bridge types and materials.',
    shortDescription: 'Expert bridge design with structural analysis and seismic engineering for infrastructure projects.',
    price: 8500,
    category: 'structural',
    subcategory: 'bridges',
    duration: '21-30 days',
    deliverables: [
      'Structural analysis report',
      'Bridge design drawings',
      'Construction specifications',
      'Seismic analysis',
      'Material quantity estimates'
    ],
    skills: ['Bridge Design', 'Seismic Engineering', 'Steel Structures', 'Concrete Design'],
    provider: mockProviders[0],
    images: ['/services/bridge-1.jpg', '/services/bridge-2.jpg'],
    rating: 4.9,
    reviewCount: 18,
    isAvailable: true,
    createdAt: '2024-02-10',
    updatedAt: '2024-02-10'
  }
];
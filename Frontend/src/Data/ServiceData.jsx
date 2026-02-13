import { ChevronRight, Ruler, PenTool, Wrench, Compass, ClipboardList, Building, ArrowRight } from 'lucide-react';
import s1 from '../assets/services/architectural.webp'
import s2 from '../assets/services/intirior.webp'
import s3 from '../assets/services/engineering.webp'
import s4 from '../assets/services/vastu.webp'
import s5 from '../assets/services/project-management.webp'
import s6 from '../assets/services/urban.webp'
const ServiceData = [
    {
      id: 'architectural-consultant',
      title: 'Architectural Consultant',
      image: s1,
      // image: `https://picsum.photos/seed/architecture/600/400`,
      icon: <Ruler className="mb-2" size={28} />,
      shortDesc: 'Expert architectural guidance for your project needs',
      description: 'Our architectural consultation services provide expert guidance throughout your project lifecycle, from concept development to final construction.',
      features: [
        'Conceptual design development',
        'Feasibility studies and site analysis',
        'Building code and regulatory consultation',
        'Design review and optimization',
        'Sustainable design strategies'
      ],
      process: [
        'Initial project assessment',
        'Design concept development',
        'Detailed consultation sessions',
        'Recommendation documentation',
        'Implementation guidance'
      ]
    },
    {
      id: 'interior-design',
      title: 'Interior Design',
        image: s2,
      icon: <PenTool className="mb-2" size={28} />,
      shortDesc: 'Creating beautiful, functional interior spaces',
      description: 'Our interior design services transform spaces into beautiful, functional environments that reflect your vision and requirements.',
      features: [
        'Space planning and layout design',
        'Material and finish selection',
        'Custom furniture design',
        'Lighting design and specification',
        'Color and texture consultation'
      ],
      process: [
        'Space analysis and client interview',
        'Concept board development',
        'Material and finish selection',
        'Detailed design documentation',
        'Implementation oversight'
      ]
    },
    {
      id: 'engineering-services',
      title: 'Engineering Services',
       image: s3,
      icon: <Wrench className="mb-2" size={28} />,
      shortDesc: 'Comprehensive building systems engineering',
      description: 'Our service engineering team ensures all building systems are efficiently designed, integrated, and optimized for performance.',
      features: [
        'HVAC system design and optimization',
        'Electrical systems engineering',
        'Plumbing and sanitary engineering',
        'Fire safety systems design',
        'Energy efficiency analysis'
      ],
      process: [
        'System requirements assessment',
        'Preliminary systems design',
        'Coordination with architectural plans',
        'Detailed engineering documentation',
        'Commissioning support'
      ]
    },
    // {
    //   id: 'vastu',
    //   title: 'Vastu Services',
    //    image: s4,
    //   icon: <Compass className="mb-2" size={28} />,
    //   shortDesc: 'Ancient architectural science for harmony',
    //   description: 'Our Vastu consulting services incorporate ancient architectural science principles to create harmonized spaces that promote well-being.',
    //   features: [
    //     'Site selection and layout analysis',
    //     'Building orientation optimization',
    //     'Room placement and zoning',
    //     'Element balance and energy flow',
    //     'Remedial solutions for existing structures'
    //   ],
    //   process: [
    //     'Vastu assessment and analysis',
    //     'Detailed recommendations report',
    //     'Integration with modern design principles',
    //     'Implementation guidance',
    //     'Post-implementation evaluation'
    //   ]
    // },
    {
      id: 'project-management',
      title: 'Project Management',
       image: s5,
      icon: <ClipboardList className="mb-2" size={28} />,
      shortDesc: 'End-to-end project coordination and delivery',
      description: 'Our project management services ensure your architectural project is delivered on time, within budget, and to the highest quality standards.',
      features: [
        'Comprehensive project planning',
        'Budget management and cost control',
        'Contractor selection and coordination',
        'Schedule management and monitoring',
        'Quality assurance and control'
      ],
      process: [
        'Project initiation and planning',
        'Team assembly and coordination',
        'Progress monitoring and reporting',
        'Issue resolution and risk management',
        'Project closeout and evaluation'
      ]
    },
    {
      id: 'urban-planning',
      title: 'Urban Planning',
       image:s6,
      icon: <Building className="mb-2" size={28} />,
      shortDesc: 'Strategic planning for sustainable urban development',
      description: 'Our urban planning services create sustainable, functional, and aesthetically pleasing urban environments through strategic planning and design.',
      features: [
        'Master planning and land use design',
        'Transportation and infrastructure planning',
        'Public space and landscape design',
        'Sustainability and resilience strategies',
        'Community engagement and participatory design'
      ],
      process: [
        'Site analysis and context assessment',
        'Stakeholder consultation',
        'Concept development and visualization',
        'Detailed planning documentation',
        'Implementation strategy development'
      ]
    }
  ];

export default ServiceData
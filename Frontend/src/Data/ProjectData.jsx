import p1 from '../assets/project/mandi-gate.png'
import p2 from '../assets/project/shoping-arcade.png'
import p3 from '../assets/project/residence-lakhimpur.png'
import p4 from '../assets/project/rohit-tower.png'
import p5 from '../assets/project/rcf-lalganj.png'
import p6 from '../assets/project/residenceatgomatinagar.png'
import p7 from '../assets/project/shoping-complex.png'
import p8 from '../assets/project/tample-gosaiganj.png'
import p9 from '../assets/project/vishwnath-academy.png'
import p10 from '../assets/project/asharam.png'
import p11 from '../assets/project/bank-madurai.png'
import p12 from '../assets/project/form-house.png'
import p13 from '../assets/project/residence-gomati.png'
import p14 from '../assets/project/five-star.png'
import p15 from '../assets/project/mrrashtogi.png'
import p16 from '../assets/project/resort.png'
import p17 from '../assets/project/ice-factory.png'
import p18 from '../assets/project/iti-college.png'
const ProjectData = [
  {
    id: 1,
    title: 'Mandi Gate at Barabanki',
    slug: 'mandi-gate-commercial-barabanki',
    category: 'commercial',
    location: 'Barabanki, Uttar Pradesh',
    year: '2023',
    image: p1,
    description: 'A beautifully designed commercial gateway for Barabanki Mandi that combines functionality with aesthetic appeal, serving as a landmark for local trade.',
    featured: true
  },
  {
    id: 2,
    title: 'Shopping Arcade at Aliganj',
    slug: 'shopping-arcade-commercial-aliganj',
    category: 'commercial',
    location: 'Aliganj, Lucknow',
    year: '2022',
    image: p2,
    description: 'A vibrant shopping arcade designed with contemporary architecture to cater to urban retail needs and lifestyle experiences.'
  },
  {
    id: 3,
    title: 'Residence at Lakhimpur',
    slug: 'residence-residential-lakhimpur',
    category: 'residential',
    location: 'Lakhimpur, Uttar Pradesh',
    year: '2021',
    image: p3,
    description: 'Modern residential structure inspired by traditional Indian elements, offering comfort and sustainability in Lakhimpur.'
  },
  {
    id: 4,
    title: 'Apartment of Rohit Tower',
    slug: 'rohit-tower-urban-apartment',
    category: 'urban',
    location: 'Vikash Nagar, Lucknow',
    year: '2023',
    image: p4,
    description: 'A multi-storey urban apartment project combining smart planning and efficient space utilization for city dwellers.'
  },
  {
    id: 5,
    title: 'Residence Project of R.C.F. Lalganj',
    slug: 'residence-rcf-lalganj',
    category: 'residential',
    location: 'Raibarelly, India',
    year: '2022',
    image:p5,
    description: 'Residential villas designed with a green focus, developed for R.C.F. township residents in Lalganj.'
  },
  {
    id: 6,
    title: 'Residence Project at Gomti Nagar',
    slug: 'residence-gomti-nagar',
    category: 'residential',
    location: 'Gomti Nagar, Lucknow',
    year: '2022',
    image: p6,
    description: 'High-end residential architecture promoting eco-living and modern comfort in the heart of Gomti Nagar.'
  },
  {
    id: 7,
    title: 'Shopping Complex at Kanpur',
    slug: 'shopping-complex-kanpur',
    category: 'commercial',
    location: 'Kanpur, India',
    year: '2021',
    image:p7,
    description: 'A bustling shopping destination with modern amenities and sustainable infrastructure.',
    featured: true
  },
  {
    id: 8,
    title: 'Temple Project at Gosaiganj',
    slug: 'temple-project-gosaiganj',
    category: 'institutional',
    location: 'Gosaiganj, India',
    year: '2021',
    image: p8,
    description: 'A spiritual and cultural landmark designed to preserve heritage and offer serenity for devotees.',
    featured: true
  },
  {
    id: 9,
    title: 'Vishwanath Academy',
    slug: 'vishwanath-academy-institutional',
    category: 'institutional',
    location: 'Alambagh, Lucknow',
    year: '2021',
    image: p9,
    description: 'An educational campus developed with modern facilities to foster learning and holistic development.',
    featured: true
  },
  {
    id: 10,
    title: 'Ashram Project at Ganeshganj',
    slug: 'ashram-ganeshganj-lucknow',
    category: 'institutional',
    location: 'Ganeshganj, Lucknow',
    year: '2021',
    image: p10,
    description: 'An ashram designed to promote peace, spiritual activities, and community welfare.'
  },
  {
    id: 11,
    title: 'Bank of Madurai',
    slug: 'bank-madurai-commercial',
    category: 'commercial',
    location: 'Gomti Nagar, Lucknow',
    year: '2021',
    image: p11,
    description: 'A secure and state-of-the-art bank facility integrating smart design and customer convenience.'
  },
  {
    id: 12,
    title: 'Farm House Project',
    slug: 'farm-house-kursi-road',
    category: 'residential',
    location: 'Kursi Road, Lucknow',
    year: '2021',
    image: p12,
    description: 'A peaceful farmhouse design inspired by nature and rural lifestyle with modern amenities.'
  },
  {
    id: 13,
    title: 'Residence Project',
    slug: 'residence-gomati-nagar',
    category: 'residential',
    location: 'Gomati Nagar, Lucknow',
    year: '2021',
    image: p13,
    description: 'Elegant residential space designed for modern family living in a prime locality.'
  },
  {
    id: 14,
    title: '5-star Hotel Lucknow',
    slug: 'five-star-hotel-lucknow',
    category: 'commercial',
    location: 'Lucknow',
    year: '2021',
    image: p14,
    description: 'A luxurious hotel project in Lucknow, offering premium hospitality and grand architectural aesthetics.'
  },
  {
    id: 15,
    title: 'Residence - Mr. Rastogi',
    slug: 'residence-mr-rastogi',
    category: 'residential',
    location: 'Lucknow',
    year: '2021',
    image: p15,
    description: 'A personalized home built with attention to detail, reflecting the client’s lifestyle and design sensibility.'
  },
  {
    id: 16,
    title: 'Resort - Jeolikot',
    slug: 'resort-jeolikot-lucknow',
    category: 'hospitality',
    location: 'Lucknow',
    year: '2021',
    image: p16,
    description: 'A resort designed to bring comfort and nature together, perfect for getaways and retreats.'
  },
  {
    id: 17,
    title: 'Ice-Cream Factory - Mr. Chedilal',
    slug: 'ice-cream-factory-chedilal',
    category: 'industrial',
    location: 'Lucknow',
    year: '2021',
    image: p17,
    description: 'An industrial setup focused on hygiene, automation, and quality production for dairy products.'
  },
  {
    id: 18,
    title: 'ITI College - Unity Group',
    slug: 'iti-college-unity-group',
    category: 'institutional',
    location: 'Lucknow',
    year: '2021',
    image: p18,
    description: 'Vocational training campus equipped with modern labs, classrooms, and a skill-centric environment.'
  }
];

export default ProjectData;

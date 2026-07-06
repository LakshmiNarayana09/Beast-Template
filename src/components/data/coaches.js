import coach1 from '../../assets/coaches/coach1.png';
import coach2 from '../../assets/coaches/coach2.png';
import coach3 from '../../assets/coaches/coach3.png';
import coach4 from '../../assets/coaches/coach4.png';
import ifpasa from '../../assets/coach details/ifpasa.png';
import nasm from '../../assets/coach details/nasm.png';
import ssa from '../../assets/coach details/ssa.png';
import img1 from '../../assets/inst/img1.png';
import img2 from '../../assets/inst/img2.png';
import img3 from '../../assets/inst/img3.png';
import img4 from '../../assets/inst/img4.png';
import img5 from '../../assets/inst/img5.png';
import img6 from '../../assets/inst/img6.png';
import img7 from '../../assets/inst/img7.png';
import img8 from '../../assets/inst/img8.png';


const coaches = [
  {
    id: 1,
    name: "John Snow",
    image: coach2,
    role: "Body Building Coach",
    age: 29,
    experience: "5 Years",
    phone: "+91 9876543210",
    email: "john@beast.com",
    skills: [
      { name: "BODY BUILDING", percentage: 92 },
      { name: "CARDIO", percentage: 74 },
      { name: "WEIGHT TRAINING", percentage: 83 },
    ],
    instagramImages: [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
    ],
    certifications: {
      ifbb: ifpasa,
      nasm: nasm,
      ssa: ssa,
    },
    description:
      "John specializes in bodybuilding and strength training. He has helped hundreds of clients achieve their fitness goals.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    image: coach1,
    role: "Cardio Coach",
    age: 27,
    experience: "4 Years",
    phone: "+91 9876543211",
    email: "sarah@beast.com",
    skills: [
      { name: "CARDIO", percentage: 95 },
      { name: "HIIT", percentage: 89 },
      { name: "ENDURANCE", percentage: 91 },
    ],
    instagramImages: [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
    ],
    certifications: {
      ifbb: ifpasa,
      nasm: nasm,
      ssa: ssa,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    name: "Michael Lee",
    image: coach3,
    role: "CrossFit Coach",
    age: 31,
    experience: "7 Years",
    phone: "+91 9876543212",
    email: "michael@beast.com",
    skills: [
      { name: "CROSSFIT", percentage: 94 },
      { name: "STRENGTH", percentage: 90 },
      { name: "MOBILITY", percentage: 86 },
    ],

    instagramImages: [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
    ],
    certifications: {
      ifbb: ifpasa,
      nasm: nasm,
      ssa: ssa,
    },
    description:
      "Michael is a certified CrossFit trainer with years of experience.",
  },
  {
    id: 4,
    name: "David Brown",
    image: coach4,
    role: "Fitness Coach",
    age: 35,
    experience: "10 Years",
    phone: "+91 9876543213",
    email: "david@beast.com",
    skills: [
      { name: "FITNESS", percentage: 93 },
      { name: "STRENGTH", percentage: 88 },
      { name: "NUTRITION", percentage: 84 },
    ],

    instagramImages: [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
    ],
    certifications: {
      ifbb: ifpasa,
      nasm: nasm,
      ssa: ssa,
    },
    description:
      "David helps clients improve overall fitness and athletic performance.",
  },
];


export default coaches;
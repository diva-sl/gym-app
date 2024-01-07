import {FiPenTool} from "react-icons/fi";
import {FaNutritionix} from "react-icon/fa";
import {BsBarCharLine} from "react-icons/bs";
import {BiRun} from "react-icons/bi";

import {MdOutineScience} from "react-icon/md";
import {GiBiceps} from "react-icon/gi";

import courses1 from "./assets/courses1.jpg";
import courses2 from "./assets/courses2.jpg";
import courses3 from "./assets/courses3.jpg";
import courses4 from "./assets/courses4.jpg";
import courses5 from "./assets/courses5.jpg";
import courses6 from "./assets/courses6.jpg";
import courses7 from "./assets/courses7.jpg";
import courses8 from "./assets/courses8.jpg";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";

export const navLinks = [
    {
        id:1,
        href:"/",
        link:"Home"
    },
    {
        id:2,
        href:"about",
        link:"About"
    },
    {
        id:3,
        href:"teacher",
        link:"Faq's"
    },
    {
        id:4,
        href:"contact",
        link:"Contact"
    },
]

export const categories = [
    {
        id:1,
        icon:<GiBiceps />,
        category:"Strenth Training",
    },
    {
        id:2,
        icon:<BiRun />,
        category:"Cardio Fitness",
    },
    {
        id:3,
        icon:<FaNutritionix />,
        category:"Nutrition Guidance",
    },
    {
        id:4,
        icon:<MdOutineScience />,
        category:"Personal Training",
    },
    
]
export const courses = [
    {
      id: 1,
      image: "/assets/img/avatar01.png",
      category: " Body Transformation",
      title: "Total Body Transformation",
      rating: 4.9,
      participants: 500,
      price: 105,
    },
    {
      id: 2,
      image: courses2,
      category: "Weight Loss ",
      title: "Weight Loss Warriors",
      rating: 4.8,
      participants: 700,
      price: 125,
    },
    {
      id: 3,
      image: courses3,
      category: "Muscle Building",
      title: "Muscle Mastery",
      rating: 4.9,
      participants: 300,
      price: 99,
    },
    {
      id: 4,
      image: "/assets/img/extended.png",
      category: "Yoga",
      title: "Yoga for Wellness",
      rating: 4.7,
      participants: 600,
      price: 85,
    },
    {
      id: 5,
      image: courses5,
      category: "Muscle Building",
      title: "Core Strength Challenge",
      rating: 4.9,
      participants: 500,
      price: 105,
    }
    
  ];

  export const logos = [logo1,logo2,logo3,logo4,logo5,logo6];

  export const accordions = [
    {
      id: 1,
      title: "What are the benefits of going to the gym?",
      des:'Going to the gym offers numerous benefits, including improved physical fitness, increased strength, weight management, stress reduction, enhanced cardiovascular health, and the opportunity to socialize and connect with like-minded individuals.'
    },
    {
      id: 2,
      title: "How often should I go to the gym?",
      des:'The frequency of gym visits depends on your fitness goals and schedule. For general fitness, 3-5 times a week is recommended. However, it is important to listen to your body and avoid overtraining.'
    },
    {
      id: 3,
      title: "Do I need a personal trainer at the gym?",
      des:' Personal trainers can provide valuable guidance and motivation, especially if you are new to fitness or have specific goals. While it is not mandatory, working with a trainer can help you maximize your gym experience.'
    },
    {
      id: 4,
      title: "What should I wear to the gym?",
      des:'Wear comfortable, moisture-wicking clothing and appropriate athletic shoes. Dont forget to bring a towel and a water bottle to stay hydrated.'
  
    },{
      id: 4,
      title: "Is it necessary to warm up before exercising at the gym?",
      des:'Yes, warming up is crucial to prepare your body for exercise and prevent injuries. Spend 5-10 minutes doing light cardio (e.g., jogging or jumping jacks) and include dynamic stretches.'
  
    },
  ];
  

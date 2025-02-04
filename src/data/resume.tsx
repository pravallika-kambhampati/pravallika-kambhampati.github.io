import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Pravallika Kambhampati",
  initials: "PK",
  url: "https://pravallika-kambhampati.github.io/",
  location: "Minneapolis, MN",
  locationLink: "https://www.google.com/maps/place/minneapolis",
  description: "24. Student. Love CS, Books & Food.",
  summary:
    "I am a second year MS student in Computer Science at the University of Minnesota, Twin Cities (UMN). I am currently working as a Graduate Research Assistant in the Hulleman Lab at the University of Minnesota, Medical School. My research focuses on analyzing retinal pigment epithelium (RPE) cell images from porcine and mice eyes. I am currently examining and quantifying deposits in these images, contributing to our understanding of retinal diseases, particularly age-related macular degeneration (AMD). I have also taken on the development and maintenance of the [lab’s site](https://hulleman-lab.umn.edu/).",
  avatarUrl: "./me2.jpg",
  skills: [
    "Python",
    "C",
    "Java",
    "C++",
    "JavaScript",
    "TypeScript",
    "R",
    "HTML",
    "CSS",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "OpenCV",
    "Flask",
    "ReactJS",
    "Django",
    "ImageJ/Fiji",
    "Drupal",
    "Git",
    "Bash Scripting",
    "CUDA",
    "Metal",
    "Latex",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://medium.com/@pravallika13kambhampati",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "kambh021@umn.edu",
    tel: "+1(952)-(245)-(9033)",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pravallika-kambhampati",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pravallika-kambhampati/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/pravz2505",
        icon: Icons.x,

        navbar: true,
      },
      // Medium: {
      //   name: "Medium",
      //   url: "https://medium.com/@pravallika13kambhampati",
      //   icon: Icons.medium,
      // },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "University of Minnesota Medical School",
      href: "https://med.umn.edu/",
      badges: [],
      location: "Minneapolis",
      title: "Graduate Research Assistant",
      logoUrl: "./uofmn.jpg",
      start: "June 2024",
      end: "Present",
      description:
        "Designed and optimized Java programs to analyze longitudinal data, quantifying hydroxyapatite (HAP) deposits in retinal pigment epithelium (RPE) cell images from mouse and porcine models, contributing to advancements in treatments for retinal diseases like AMD. Automated image analysis workflows by developing robust batch processing scripts, boosting efficiency, and ensuring data processing consistency and reliability. Developed and maintained the Hulleman Lab website, overseeing front-end and back-end functionalities.",
    },
    {
      company: "Cisco",
      badges: [],
      href: "http://cisco.com/",
      location: "Bengaluru, India",
      title: "Network Consulting Engineer",
      logoUrl: "./cisco.jpg",
      start: "Aug 2022",
      end: "Aug 2023",
      description:
        "Proactively managed and optimized the enterprise networks of Boeing Co and Expedia Group, encompassing Cisco routers, switches, firewalls, access points, and software. Regularly assessed security vulnerabilities and developed automation scripts to enhance these processes, ensuring top-tier network performance, reliability, and security. Managed and mentored a team of interns to efficiently identify and categorize customer tickets, resulting in a 35% decrease in support tickets escalations and improved overall ticket triaging process, using natural language processing and internal Cisco APIs.",
    },
    {
      company: "Cisco",
      href: "http://cisco.com/",
      badges: [],
      location: "Remote",
      title: "Technical Undergrad Intern",
      logoUrl: "./cisco.jpg",
      start: "Feb 2022",
      end: "July 2022",
      description:
        "Pioneered the development of a robust full-stack dashboard for the Case Escalation Tracker, resulting in a 30% reduction in case resolution time and a 20% increase in overall customer satisfaction. Orchestrated the integration of front-end and back-end components, using Django, and PostgreSQL. Attained Cisco Certified DevNet Associate and Cisco Certified Network Associate certifications.",
    },
    {
      company: "upCalibre",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "./upcalibre.png",
      start: "January 2019",
      end: "April 2019",
      description:
        "Spearheaded the development of multiple web screens on the official upCalibre company’s website using ReactJs and Material UI (PERN).",
    },
  ],
  education: [
    {
      school: "University of Minnesota",
      href: "https://twin-cities.umn.edu/",
      degree: "Master of Science in Computer Science",
      logoUrl: "./uofmn.jpg",
      start: "2023",
      end: "2025",
    },
    {
      school: "Gayatri Vidya Parishad College of Engineering",
      href: "https://gvpce.ac.in/",
      degree: "Bachelor of Technology in Computer Science (BTech)",
      logoUrl: "./gvpcea.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "CoEdit",
      href: "",
      dates: "May 2024 - Jun 2024",
      active: true,
      description:
        "A collaborative text editor application built with React, ReactQuill, Socket.IO, and Express. This application allows multiple users to edit documents in real-time.",
      technologies: [
        "React.js",
        "Javascript",
        "Socket.IO",
        "Quill-Editor",
        "WYSIWYG",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/pravallika-kambhampati/CoEdit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Automated System To Limit Covid-19 Using Facial Mask Detection ",
      href: "",
      dates: "June 2021 - July 2021",
      active: true,
      description:
        "Built and trained a real-time video-based deep learning model utilizing MobileNetV2 architecture to detect mask-wearing and identify individuals using a face-recognition model with approx. 95% accuracy.",
      technologies: [
        "Convolutional Neural Networks",
        "TensorFlow",
        "PostgreSQL",
        "Twilio API",
      ],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://magicui.design",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      //   {
      //     type: "Source",
      //     href: "https://github.com/magicuidesign/magicui",
      //     icon: <Icons.github className="size-3" />,
      //   },
      // ],
      // image: "",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Resume Building Tool",
      href: "",
      dates: "Jun 2022 - July 2022",
      active: true,
      description:
        "Developed an engaging ReactJs interface for effortless and visually appealing resume creation. Established a NodeJs backend for reliable data processing and swift resume generation which can be accessed in multiple formats.",
      technologies: ["ReactJS", "NodeJS", "Material UI"],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://llm.report",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      //   {
      //     type: "Source",
      //     href: "https://github.com/dillionverma/llm.report",
      //     icon: <Icons.github className="size-3" />,
      //   },
      // ],
      // image: "",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Micro Blog",
      href: "",
      dates: "Aug 2018 - Sept 2018",
      active: true,
      description:
        "A flask app with postgresql that lets you make an account and make a blog post once a day.",
      technologies: ["Flask", "NodeJS", "SQLAlchemy", "requests"],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://llm.report",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      //   {
      //     type: "Source",
      //     href: "https://github.com/dillionverma/llm.report",
      //     icon: <Icons.github className="size-3" />,
      //   },
      // ],
      // image: "",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
  hackathons: [],
} as const;

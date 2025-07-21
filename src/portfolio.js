/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yugant Soni",
  title: "Hi all, I'm Yugant",
  subTitle: emoji(
    "A passionate Full Stack ML Practitioner & Analyst 🚀 with 3.5+ years of experience in analytics, product development, and AI-driven solutions. Proven ability to design and deploy systems that combine data engineering, modeling, and interactive front ends to solve real-world problems."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yugant99",
  linkedin: "https://www.linkedin.com/in/yugant-soni-778084189/",
  gmail: "yugantsoni99@gmail.com",
  medium: "https://medium.com/@yugant_writes",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE ML PRACTITIONER & ANALYST WHO LOVES TO EXPLORE DATA AND AI TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop full-stack ML applications with data engineering, modeling, and interactive front ends"
    ),
    emoji("⚡ Build AI-powered platforms for stock analysis, conversational data analysis, and real-time analytics"),
    emoji(
      "⚡ Integration of cloud services like Microsoft Azure, AWS, and modern ML frameworks like PyTorch"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Trent University",
      logo: require("./assets/images/trent2.jpeg"), // We'll use existing logo for now
      subHeader: "M.Sc. Applied Modelling & Big Data Analytics",
      duration: "September 2024 - Present",
      desc: "Currently pursuing advanced studies in machine learning, data analytics, and statistical modeling.",
      descBullets: [
        "Research in conversational data analysis and NLP pipelines",
        "Advanced coursework in big data technologies and predictive modeling"
      ]
    },
    {
      schoolName: "Dayananda Sagar College of Engineering",
      logo: require("./assets/images/dsce1.jpeg"), // We'll use existing logo for now
      subHeader: "Bachelor of Engineering in Telecommunications",
      duration: "August 2017 - August 2021",
      desc: "Graduated with CGPA: 8.2. Strong foundation in engineering principles and technology.",
      descBullets: ["Solid technical foundation in engineering and telecommunications systems"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Artificial Intelligence Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "87%"
    },{
      Stack: "Data Engineering",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "85%"
    },
    {
      Stack: "Competitive Programming",
      progressPercentage: "79%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "CHATLAB - Trent University",
      companylogo: require("./assets/images/trent2.jpeg"), // We'll use existing logo for now
      date: "December 2024 – Present",
      desc: "Working with Dr. Raheleh S on conversational data analysis and NLP research.",
      descBullets: [
        "Developed a full ETL and NLP pipeline to analyze multi-format conversational data from 24 participants",
        "Trained a custom Transformer model to track sentiment progression over time",
        "Conducted deep exploratory analysis over an 8-week clinical study"
      ]
    },
    {
      role: "Business Analyst",
      company: "Bigbasket",
      companylogo: require("./assets/images/tata2.png"), // We'll use existing logo for now
      date: "March 2022 – July 2024",
      desc: "Youngest member to join core ops analytics team, scaling a new vertical from launch to ₹300 Cr/month (~$36M) in 1.5 years.",
      descBullets: [
        "Improved on-time delivery to 85% by optimizing delivery systems via SQL + dashboards",
        "Conducted P&L and store-level analysis, helping 44+ stores become profitable",
        "Created SOPs and mentored new analysts on data quality and reporting"
      ]
    },
    {
      role: "SDET (Software Development Engineer in Test)",
      company: "Cognizant",
      companylogo: require("./assets/images/cognizant.png"), // We'll use existing logo for now
      date: "March 2021 – March 2022",
      desc: "Developed comprehensive test automation solutions for a major U.S. pet retail application.",
      descBullets: [
        "Developed test automation for a major U.S. pet retail app using Java",
        "Built performance and security tests across mobile workflows",
        "Collaborated with dev and PM teams to deliver 20+ feature rollouts"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Open Source Projects",
  subtitle: "SOME INNOVATIVE AI AND ML PROJECTS THAT I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/Quantiem.jpeg"), // We'll use existing image for now
      projectName: "Quantem - Stock Market Platform",
      projectDesc: "AI-powered stock analysis platform offering technical indicators, forecasting, sentiment tracking, and risk modeling. Built with Streamlit and integrates APIs like Alpha Vantage and OpenRouter.",
      footerLink: [
        {
          name: "View Project",
          url: "https://quantem-j5slmvurhc99nwtzguyjoh.streamlit.app/" // Replace with actual project link
        }
      ]
    },
    {
      image: require("./assets/images/shopsync2.jpeg"), // We'll use existing image for now
      projectName: "ShopSync - AI Shopping Agent",
      projectDesc: "🏆 People's Choice Award winner at Loblaws x OpenSesame NoName Hackathon. AI-powered shopping agent with recommendations, social purchasing, and collaborative rewards.",
      footerLink: [
        {
          name: "View Project",
          url: "https://shopsync1.vercel.app/" // Replace with actual project link
        }
      ]
    },
    {
      image: require("./assets/images/gs.jpeg"), // We'll use existing image for now
      projectName: "GridSight - Real-Time Grid Intelligence",
      projectDesc: "Real-time data pipeline and analytics platform for Ontario's power grid data. Captures 5-minute and hourly reports with ML-ready processing and forecasting capabilities.",
      footerLink: [
        {
          name: "View Project",
          url: "https://gridsight-k9q2fbybgschbmrjfqpsb9.streamlit.app/" // Replace with actual project link
        }
      ]
    },
    {
      image: require("./assets/images/jf2.jpeg"), // We'll use existing image for now
      projectName: "Jam Flow - AI Music Generation",
      projectDesc: "Web app for AI-generated music using fine-tuned Gemini 2.5 Flash model. Built with Next.js and TypeScript front-end with Strudel.js-powered player for real-time melody creation.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/yugant99" // Replace with actual project link
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Hackathon Wins, Technical Achievements, and Some Cool Stuff that I have accomplished !",

  achievementsCards: [
    {
      title: "Loblaws x OpenSesame NoName Hackathon",
      subtitle:
        "🏆 People's Choice Award Winner with ShopSync - AI-powered shopping agent with social purchasing features and collaborative rewards.",
      image: require("./assets/images/loblaws.png"), // We'll use existing image for now
      imageAlt: "Hackathon Winner Logo",
      footerLink: [
        {
          name: "Project Details",
          url: "https://github.com/yugant99"
        }
      ]
    },
    {
      title: "Business Analytics Excellence",
      subtitle:
        "Youngest member to join core ops analytics at Bigbasket, scaling a new vertical from launch to ₹300 Cr/month (~$36M) in just 1.5 years.",
      image: require("./assets/images/tata2.png"), // We'll use existing image for now
      imageAlt: "Analytics Excellence Logo",
      footerLink: [
        {
          name: "View Achievement",
          url: "https://www.linkedin.com/in/yugant-soni-778084189/"
        }
      ]
    },
    {
      title: "AI/ML Research & Development",
      subtitle: "Developed cutting-edge NLP pipelines and Transformer models for conversational data analysis at Trent University's CHATLAB.",
      image: require("./assets/images/trent2.jpeg"), // We'll use existing image for now
      imageAlt: "AI/ML Research Logo",
      footerLink: [
        {name: "Research Details", url: "https://medium.com/@yugant_writes"},
        {
          name: "GitHub Projects",
          url: "https://github.com/yugant99"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@yugant_writes/how-i-finally-wrapped-my-head-around-the-mtrf-toolbox-ac161c8905f7",
      title: "How I Finally Wrapped My Head Around the mTRF Toolbox",
      description:  
        "A deep dive on a research paper which explains the MATLAB toolbox for relating neural signals to continous stimuli"
    },
    {
      url: "https://medium.com/@yugant_writes/how-t3-chat-made-me-cancel-my-claude-subscription-67a6b2da812d",
      title: "How T3.chat Made Me Cancel My Claude Subscription",
      description:
        ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY KNOWLEDGE IN DATA SCIENCE AND AI/ML 🚀"
  ),

  talks: [
    {
      title: "AI-Powered Analytics in Business",
      subtitle: "Sharing insights from scaling a vertical to ₹300 Cr at Bigbasket",
      slides_url: "https://medium.com/@yugant_writes",
      event_url: "https://www.linkedin.com/in/yugant-soni-778084189/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT DATA SCIENCE AND AI TECHNOLOGIES",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // Add your podcast links here if you have any
  ],
  display: false // Set false to hide this section since no podcasts yet
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-437-566-6408",
  email_address: "yugantsoni99@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "yugant_writes", //Replace with your twitter username without @
  display: false // Set false since no Twitter mentioned in resume
};

const isHireable = true; // Set true since currently pursuing studies and open to opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

const courses = [
  {
    title: "Web Development",
    description: "Step into the world of endless possibilities with our Web Development Course! Learn to craft stunning, responsive websites and powerful web applications from scratch. Master essential technologies like HTML, CSS, JavaScript, and frameworks that drive the modern web. Whether you're a beginner or an aspiring professional, this course will equip you with the skills to bring your ideas to life and make a real impact in the digital realm. Start your journey today and become a creator of the web's next big thing!",
    image: "../src/Asset/assets/C1webdev.avif", // Replace with the actual path to your image
    topSection: {
      mainHeading: "Dive into learning",
      subHeading: "WEB DEVELOPMENT",
    },
    sections: [
      {
        heading: "Build the Web, Shape the Future!",
        text: "Step into the world of endless possibilities with our Web Development Course! Learn to craft stunning, responsive websites and powerful web applications from scratch. Master essential technologies like HTML, CSS, JavaScript, and frameworks that drive the modern web. Whether you're a beginner or an aspiring professional, this course will equip you with the skills to bring your ideas to life and make a real impact in the digital realm. Start your journey today and become a creator of the web's next big thing!",
        buttons: [
          { text: "Join Our Mentorship Program", class: "mentorship-btn" },
          { text: "Sign Up Now", class: "signup-btn" }
        ]
      },
      {
        heading: "Why Enroll in Our Web Development Course?",
        text: "Our comprehensive web development course covers everything you need to become a skilled web developer. From basic HTML and CSS to advanced JavaScript and responsive web design, you'll learn it all. Join us to kickstart your career in web development!"
      }
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Web Designs", "React", "Node.js"],
    video: {
      url: "https://www.youtube.com/embed/your_video_id?autoplay=1&mute=1"
    }
  },
  {
    title: "Data Science",
    description: "Unlock the power of data with our Data Science Course! Learn to analyze, visualize, and model data using Python, R, and machine learning techniques. This course is perfect for beginners and professionals looking to upskill in data-driven decision-making.",
    image: "../src/Asset/assets/datascience.jpg",
    topSection: {
      mainHeading: "Discover the World of Data",
      subHeading: "DATA SCIENCE",
    },
    sections: [
      {
        heading: "Turn Data into Insights!",
        text: "Unlock the power of data with our Data Science Course! Learn to analyze, visualize, and model data using Python, R, and machine learning techniques. This course is perfect for beginners and professionals looking to upskill in data-driven decision-making.",
        buttons: [
          { text: "Join Our Mentorship Program", class: "mentorship-btn" },
          { text: "Sign Up Now", class: "signup-btn" }
        ]
      },
      {
        heading: "Why Choose Our Data Science Course?",
        text: "Our comprehensive course covers data analysis, visualization, machine learning, and practical applications. Get hands-on experience and build your expertise in the most in-demand field today!"
      }
    ],
    technologies: ["Python", "R", "Machine Learning", "Data Visualization", "SQL"],
    video: {
      url: "https://www.youtube.com/embed/your_video_id?autoplay=1&mute=1"
    }
  },
  {
    title: "Photography",
    description: "Capture moments like a pro with our Photography Course! Learn the art of photography, from camera basics to advanced techniques. Master editing tools to create stunning visual stories.",
    image: "../src/Asset/assets/photography.jpg",
    topSection: {
      mainHeading: "Frame the Perfect Shot",
      subHeading: "PHOTOGRAPHY",
    },
    sections: [
      {
        heading: "Create Memories that Last!",
        text: "Capture moments like a pro with our Photography Course! Learn the art of photography, from camera basics to advanced techniques. Master editing tools to create stunning visual stories.",
        buttons: [
          { text: "Join Our Mentorship Program", class: "mentorship-btn" },
          { text: "Sign Up Now", class: "signup-btn" }
        ]
      },
      {
        heading: "Why Join Our Photography Course?",
        text: "From beginner to advanced levels, our course covers photography essentials, lighting techniques, and post-processing skills. Turn your passion into art!"
      }
    ],
    technologies: ["DSLR Cameras", "Lighting", "Photo Editing", "Composition", "Storytelling"],
    video: {
      url: "https://www.youtube.com/embed/your_video_id?autoplay=1&mute=1"
    }
  },
  {
    title: "Nursing",
    description: "Step into the healthcare profession with our Nursing Course. Learn patient care, medical procedures, and gain the skills to make a difference in people's lives.",
    image: "../src/Asset/assets/C4nursing.avif",
    topSection: {
      mainHeading: "Care with Compassion",
      subHeading: "NURSING",
    },
    sections: [
      {
        heading: "Become a Lifesaver!",
        text: "Step into the healthcare profession with our Nursing Course. Learn patient care, medical procedures, and gain the skills to make a difference in people's lives.",
        buttons: [
          { text: "Join Our Mentorship Program", class: "mentorship-btn" },
          { text: "Sign Up Now", class: "signup-btn" }
        ]
      },
      {
        heading: "Why Choose Our Nursing Course?",
        text: "Our comprehensive course covers patient care, medical techniques, and real-world applications. Prepare for a rewarding career in healthcare!"
      }
    ],
    technologies: ["Patient Care", "Medical Procedures", "Compassion Training", "Healthcare Ethics"],
    video: {
      url: "https://www.youtube.com/embed/your_video_id?autoplay=1&mute=1"
    }
  },
  {
    title: "Programming",
    description: "Master the art of coding with our Programming Course! Learn various programming languages, algorithms, and software development techniques to build innovative solutions.",
    image: "../src/Asset/assets/C5programming.avif",
    topSection: {
      mainHeading: "Code Your Future",
      subHeading: "PROGRAMMING",
    },
    sections: [
      {
        heading: "Build Software That Matters!",
        text: "Master the art of coding with our Programming Course! Learn various programming languages, algorithms, and software development techniques to build innovative solutions.",
        buttons: [
          { text: "Join Our Mentorship Program", class: "mentorship-btn" },
          { text: "Sign Up Now", class: "signup-btn" }
        ]
      },
      {
        heading: "Why Join Our Programming Course?",
        text: "From foundational programming concepts to advanced software engineering, our course equips you with the skills to excel in the tech industry."
      }
    ],
    technologies: ["Python", "Java", "C++", "Data Structures", "Algorithms"],
    video: {
      url: "https://www.youtube.com/embed/your_video_id?autoplay=1&mute=1"
    }
  },
  {
    title: "Digital Marketing",
    description: "Navigate the digital landscape with our Digital Marketing Course. Learn SEO, content marketing, social media strategies, and analytics to grow any business online.",
    image: "../src/Asset/assets/C6digitalmarketing.avif",
    topSection: {
      mainHeading: "Market Like a Pro",
      subHeading: "DIGITAL MARKETING",
    },
    sections: [
      {
        heading: "Drive Growth Online!",
        text: "Navigate the digital landscape with our Digital Marketing Course. Learn SEO, content marketing, social media strategies, and analytics to grow any business online.",
        buttons: [
          { text: "Join Our Mentorship Program", class: "mentorship-btn" },
          { text: "Sign Up Now", class: "signup-btn" }
        ]
      },
      {
        heading: "Why Enroll in Our Digital Marketing Course?",
        text: "Master digital tools and strategies to enhance brand presence and drive online success. From social media to analytics, we cover it all!"
      }
    ],
    technologies: ["SEO", "Content Marketing", "Social Media", "Google Analytics", "Email Campaigns"],
    video: {
      url: "https://www.youtube.com/embed/your_video_id?autoplay=1&mute=1"
    }
  },
  {
    title: "Music Production",
    description: "Unleash your creativity with our Music Production Course! Learn audio recording, mixing, mastering, and creating stunning tracks using modern tools and techniques.",
    image: "../src/Asset/assets/C7musicproduction.avif",
    topSection: {
      mainHeading: "Compose the Future",
      subHeading: "MUSIC PRODUCTION",
    },
    sections: [
      {
        heading: "Produce Tracks Like a Pro!",
        text: "Unleash your creativity with our Music Production Course! Learn audio recording, mixing, mastering, and creating stunning tracks using modern tools and techniques.",
        buttons: [
          { text: "Join Our Mentorship Program", class: "mentorship-btn" },
          { text: "Sign Up Now", class: "signup-btn" }
        ]
      },
      {
        heading: "Why Choose Our Music Production Course?",
        text: "Gain hands-on experience with industry-standard software and tools. From concept to final mix, turn your musical ideas into reality!"
      }
    ],
    technologies: ["DAWs", "Mixing", "Mastering", "Sound Design", "Music Theory"],
    video: {
      url: "https://www.youtube.com/embed/your_video_id?autoplay=1&mute=1"
    }
  },
  {
    title: "Graphic Design",
    description: "Design visually stunning projects with our Graphic Design Course. Learn tools like Photoshop, Illustrator, and InDesign to bring your creativity to life.",
    image: "../src/Asset/assets/C8graphicdesign.avif",
    topSection: {
      mainHeading: "Design Your Dreams",
      subHeading: "GRAPHIC DESIGN",
    },
    sections: [
      {
        heading: "Visualize Your Ideas!",
        text: "Design visually stunning projects with our Graphic Design Course. Learn tools like Photoshop, Illustrator, and InDesign to bring your creativity to life.",
        buttons: [
          { text: "Join Our Mentorship Program", class: "mentorship-btn" },
          { text: "Sign Up Now", class: "signup-btn" }
        ]
      },
      {
        heading: "Why Enroll in Our Graphic Design Course?",
        text: "From logo creation to complex design projects, our course provides the skills to excel in the creative industry."
      }
    ],
    technologies: ["Photoshop", "Illustrator", "InDesign", "Typography", "Layout Design"],
    video: {
      url: "https://www.youtube.com/embed/your_video_id?autoplay=1&mute=1"
    }
  },
  {
    title: "Business Management",
    description: "Lead with confidence with our Business Management Course. Learn strategic planning, leadership skills, and business analytics to excel in the corporate world.",
    image: "../src/Asset/assets/C9businessmanagement.avif",
    topSection: {
      mainHeading: "Lead with Vision",
      subHeading: "BUSINESS MANAGEMENT",
    },
    sections: [
      {
        heading: "Manage Success!",
        text: "Lead with confidence with our Business Management Course. Learn strategic planning, leadership skills, and business analytics to excel in the corporate world.",
        buttons: [
          { text: "Join Our Mentorship Program", class: "mentorship-btn" },
          { text: "Sign Up Now", class: "signup-btn" }
        ]
      },
      {
        heading: "Why Choose Our Business Management Course?",
        text: "Develop leadership and analytical skills that are vital for managing businesses effectively in a competitive environment."
      }
    ],
    technologies: ["Strategic Planning", "Leadership", "Business Analytics", "Operations Management", "Finance"],
    video: {
      url: "https://www.youtube.com/embed/your_video_id?autoplay=1&mute=1"
    }
  },
  {
    title: "Personal Development",
    description: "Unlock your potential with our Personal Development Course. Learn self-improvement techniques, time management, and interpersonal skills to achieve your goals.",
    image: "../src/Asset/assets/C10personaldevelopment.avif",
    topSection: {
      mainHeading: "Grow Every Day",
      subHeading: "PERSONAL DEVELOPMENT",
    },
    sections: [
      {
        heading: "Become Your Best Self!",
        text: "Unlock your potential with our Personal Development Course. Learn self-improvement techniques, time management, and interpersonal skills to achieve your goals.",
        buttons: [
          { text: "Join Our Mentorship Program", class: "mentorship-btn" },
          { text: "Sign Up Now", class: "signup-btn" }
        ]
      },
      {
        heading: "Why Enroll in Our Personal Development Course?",
        text: "Enhance your personal and professional life with practical strategies and techniques that inspire growth and confidence."
      }
    ],
    technologies: ["Time Management", "Goal Setting", "Communication Skills", "Stress Management", "Mindfulness"],
    video: {
      url: "https://www.youtube.com/embed/your_video_id?autoplay=1&mute=1"
    }
  },
  {
    title: "Health and Fitness",
    description: "Achieve your wellness goals with our Health and Fitness Course. Learn effective exercise routines, nutrition plans, and mental health techniques for a balanced lifestyle.",
    image: "../src/Asset/assets/C11healthandfitness.avif",
    topSection: {
      mainHeading: "Wellness Redefined",
      subHeading: "HEALTH AND FITNESS",
    },
    sections: [
      {
        heading: "Transform Your Life!",
        text: "Achieve your wellness goals with our Health and Fitness Course. Learn effective exercise routines, nutrition plans, and mental health techniques for a balanced lifestyle.",
        buttons: [
          { text: "Join Our Mentorship Program", class: "mentorship-btn" },
          { text: "Sign Up Now", class: "signup-btn" }
        ]
      },
      {
        heading: "Why Choose Our Health and Fitness Course?",
        text: "From beginners to fitness enthusiasts, our course offers comprehensive guidance on achieving physical and mental well-being."
      }
    ],
    technologies: ["Exercise Plans", "Nutrition", "Mental Health", "Yoga", "Wellness Coaching"],
    video: {
      url: "https://www.youtube.com/embed/your_video_id?autoplay=1&mute=1"
    }
  },
  {
    title: "Languages",
    description: "Unlock the power of communication with our Languages Course. Learn global languages and connect with cultures around the world.",
    image: "../src/Asset/assets/C4languages.avif",
    topSection: {
      mainHeading: "Speak the World",
      subHeading: "LANGUAGES",
    },
    sections: [
      {
        heading: "Bridge Global Cultures!",
        text: "Master languages from across the globe. From Spanish to Mandarin, our courses are designed to enhance your communication skills and cultural understanding.",
        buttons: [
          { text: "Explore Courses", class: "explore-btn" },
          { text: "Enroll Now", class: "enroll-btn" },
        ],
      },
      {
        heading: "Why Learn Languages?",
        text: "Gain a competitive edge in the global job market and build meaningful connections through the art of language.",
      },
    ],
    technologies: ["Pronunciation", "Grammar", "Conversation Skills", "Cultural Context"],
    video: {
      url: "https://www.youtube.com/embed/your_video_id?autoplay=1&mute=1",
    },
  },

  // Cooking and Baking Course
  {
    title: "Cooking and Baking",
    description: "Unleash your inner chef with our Cooking and Baking Course. Learn techniques to create delicious meals and stunning desserts.",
    image: "../src/Asset/assets/Cookin_baking.jpg",
    topSection: {
      mainHeading: "Cook Like a Pro",
      subHeading: "COOKING & BAKING",
    },
    sections: [
      {
        heading: "Master the Culinary Arts!",
        text: "From basic recipes to gourmet techniques, our course covers it all. Perfect for food enthusiasts and aspiring chefs.",
        buttons: [
          { text: "Join Our Classes", class: "join-btn" },
          { text: "Get Started", class: "start-btn" },
        ],
      },
      {
        heading: "Why Choose This Course?",
        text: "Hands-on training, professional chefs, and a passion for food. Learn the art of cooking and baking with us!",
      },
    ],
    technologies: ["Baking", "Grilling", "Plating", "World Cuisines"],
    video: {
      url: "https://www.youtube.com/embed/your_video_id?autoplay=1&mute=1",
    },
  },

  // Art and Crafts Course
  {
    title: "Art and Crafts",
    description: "Discover your creative side with our Art and Crafts Course. Dive into painting, sculpture, and DIY projects.",
    image: "../src/Asset/assets/C4art.avif",
    topSection: {
      mainHeading: "Unleash Creativity",
      subHeading: "ART & CRAFTS",
    },
    sections: [
      {
        heading: "Create Masterpieces!",
        text: "Our course encourages self-expression through various mediums like painting, sculpture, and craftwork.",
        buttons: [
          { text: "Join the Workshop", class: "workshop-btn" },
          { text: "Sign Up Today", class: "signup-btn" },
        ],
      },
      {
        heading: "Why Join This Course?",
        text: "Find therapeutic value, express yourself artistically, and learn techniques to create stunning art pieces.",
      },
    ],
    technologies: ["Drawing", "Sculpting", "Crafting", "Creative Design"],
    video: {
      url: "https://www.youtube.com/embed/your_video_id?autoplay=1&mute=1",
    },
  },

  // Cybersecurity Course
  {
    title: "Cybersecurity",
    description: "Protect the digital world with our Cybersecurity Course. Learn ethical hacking, network security, and data protection.",
    image: "../src/Asset/assets/C4cybersecurity.avif",
    topSection: {
      mainHeading: "Secure the Future",
      subHeading: "CYBERSECURITY",
    },
    sections: [
      {
        heading: "Become a Digital Defender!",
        text: "Our course covers essential skills in cybersecurity, ethical hacking, and digital threat prevention.",
        buttons: [
          { text: "Learn Ethical Hacking", class: "ethical-btn" },
          { text: "Enroll Now", class: "enroll-btn" },
        ],
      },
      {
        heading: "Why Study Cybersecurity?",
        text: "With rising digital threats, cybersecurity professionals are in high demand. Equip yourself with the skills to protect online systems.",
      },
    ],
    technologies: ["Ethical Hacking", "Network Security", "Data Protection", "Penetration Testing"],
    video: {
      url: "https://www.youtube.com/embed/your_video_id?autoplay=1&mute=1",
    },
  },
];

  
  export default courses;
  
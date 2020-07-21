import React, { Component } from 'react'

const portContext = React.createContext({
  projects: [
    {
      id: 1,
      general: {
        title: "Aura",
        description: "Aura is a guided meditatation app which provides the user different methods of meditation to match their moods, take a guided meditation and note how it helped them.",
        audience: "The target audience is anyone wishing to recieve the benefits of a short, guided meditation on a daily basis.",
      },
      tech: {
        languages: {
          frontEnd: "React and ES6",
          server: "Node.js",
          database: "PostgreSQL"
        },
        libraries: [

        ],
        localTech: {
          editor: "VScode",
          CLI: "GitBash",
          packageManager: "Node Package Manager",
        }
      },
      urls: {
        frontEnd: "https://capstone-client-agungip1h.now.sh/",
        server: "",
        database: "",
        github: "https://github.com/lstribli/Capstone1Client",
      },
      screens: {
        urls: {
          one: "https://media.discordapp.net/attachments/701514992767205459/720511743423545384/Screenshot_94.png?width=1125&height=627",
          2: "",
          3: "",
          4: "",
          5: "",
        },
        alts: {
          one: "Screenshot of the Aura Splash Page",
          2: "",
          3: "",
          4: "",
          5: "",
        }
      }
    },

    {
      id: 2,
      general: {
        title: "RageQuit! 2x+",
        description: "RageQuit! 2x+ focuses on guiding new players to a high-performance customized game server for the popular Steam game 'Rust'",
        audience: "Created for Rust players, this site provides a convincing argument to play on RageQuit!",
      },
      tech: {
        languages: {
          frontEnd: "React and ES6",
          server: "Node.js",
          database: "PostgreSQL"
        },
        libraries: [],
        localTech: {
          editor: "VScode",
          CLI: "GitBash",
          packageManager: "Node Package Manager",
        }
      },
      urls: {
        frontEnd: "https://ragequit-client.now.sh/",
        server: "",
        database: "",
        github: "https://github.com/lstribli/RageQuit-",
      },
      screens: {
        urls: {
          one: "https://media.discordapp.net/attachments/701514992767205459/720536872106983514/Screenshot_98.png?width=1125&height=639",
          2: "",
          3: "",
          4: "",
          5: "",
        },
        alts: {
          one: "A screenshot of the RageQuit! web app",
          2: "",
          3: "",
          4: "",
          5: "",
        }
      }
    },

    {
      id: 3,
      general: {
        title: "Jquery Portfolio",
        description: "The Jquery portfolio is one of the first Front End projects that is completed in the Engineering Immersion at Thinkful. This project demonstrates proficiency with the Jquery library",
        audience: "",
      },
      tech: {
        languages: {
          frontEnd: "",
          server: "",
          database: ""
        },
        libraries: [],
        localTech: {
          editor: "",
          CLI: "",
          packageManager: "",
        }
      },
      urls: {
        frontEnd: "https://lstribli.github.io/Portfolio/index.html",
        server: "",
        database: "",
        github: "https://github.com/lstribli/Portfolio",
      },
      screens: {
        urls: {
          one: "https://media.discordapp.net/attachments/701514992767205459/720537844145455104/Screenshot_99.png?width=1125&height=634",
          2: "",
          3: "",
          4: "",
          5: "",
        },
        alts: {
          one: "A screenshot of my first portfolio",
          2: "",
          3: "",
          4: "",
          5: "",
        }
      }
    },


    {
      id: 4,
      general: {
        title: "QuizApp",
        description: "",
        audience: "",
      },
      tech: {
        languages: {
          frontEnd: "",
          server: "",
          database: ""
        },
        libraries: [],
        localTech: {
          editor: "",
          CLI: "",
          packageManager: "",
        }
      },
      urls: {
        frontEnd: "https://lstribli.github.io/QuizApp/",
        server: "",
        database: "",
        github: "https://github.com/lstribli/QuizApp",
      },
      screens: {
        urls: {
          one: "https://media.discordapp.net/attachments/701514992767205459/720539157377712189/Screenshot_100.png?width=1125&height=642",
          2: "",
          3: "",
          4: "",
          5: "",
        },
        alts: {
          one: "A screenshot of My Quiz App",
          2: "",
          3: "",
          4: "",
          5: "",
        }
      }
    }
  ],

  skills: [
    {
      id: 1,
      general: {
        title: "Coding",
        description: "In 2019 I began the next step in my career, Software Engineering.",
        audience: "My personal brand for coding is working on large applications with a small team of Developers",
      },
      tech: {
        languages: {
          frontEnd: ['HTML5', 'CSS3', 'ES6', 'JSX', 'Jquery', 'React'],
          server: ['node.js',],
          database: ['SQL', 'GraphQL', 'PostgreSQL', 'MongoDB']
        },
        libraries: [],
        localTech: {
          editor: "VScode",
          CLI: "GitBash",
          packageManager: "Node Package Manager",
        }
      },
      urls: {
        repo: "https://github.com/lstribli",
      },
      screens: {
        urls: {
          one: "https://media.discordapp.net/attachments/701514992767205459/732425913794297856/Screenshot_147.png?width=1328&height=677",
          2: "",
          3: "",
          4: "",
          5: "",
        },
        alts: {
          one: "Screenshot of one of my code bases",
          2: "",
          3: "",
          4: "",
          5: "",
        }
      }
    },


    {
      id: 2,
      general: {
        title: "3d Design and Modeling",
        description: "",
      },

      tech: {
        languages: {
          frontEnd: ['Solidworks', "Solidworks - Flow Express", "Solidworks - Photoview 360", "Solidworks - Simulation", "SolidCAM", 'SolidCAM 5-axis and Mill-turn with iMachining'],
          server: ['Part-cost analysis'],
          database: ['5S', 'Kanban', 'DC PCB Engineering', 'ElectroMechanical Engineering and Programming']
        },
        libraries: [],
        localTech: {
          editor: "VScode",
          CLI: "GitBash",
          packageManager: "Node Package Manager",
        }
      },
      urls: {
        frontEnd: "https://my.solidworks.com/try-solidworks?mktid=11000&lang=en&gclid=CjwKCAjwjLD4BRAiEiwAg5NBFs6MSCke_KSt05IfAR7g8SvwAtPZQ-M06DckZI6dohSKSfqzYvT6mRoCXt0QAvD_BwE&gclsrc=aw.ds",
      },
      screens: {
        urls: {
          one: "https://media.discordapp.net/attachments/701514992767205459/732410464708853821/turbine.JPG?width=740&height=677",
          two: "https://media.discordapp.net/attachments/701514992767205459/732410436120608808/5sided.JPG?width=627&height=677",
          three: "https://media.discordapp.net/attachments/701514992767205459/732410412414533702/3d_Printer_render.JPG?width=627&height=677",
          four: "",
        },
        alts: {
          one: "A rendering of an inconel compressor I designed and machined while working in the Aerospace industry",
          two: "A rendering of a mirror for a LIDAR system I prototyped and machined on contract to a startup",
          three: "A rendering of a 3d Printer I designed using Solidworks",
          four: "",
        }
      }
    },

    {
      id: 3,
      general: {
        title: "Machining",
        description: "While you won't find me on the shop production floor these days, I have an in-depth understanding of how an ISO-9001 Certified shop operates.",
        audience: "I bring value to the world of machining by working as a product and process engineering consultant.",
      },
      tech: {
        languages: {
          frontEnd: ['5-axis Milling', '7-axis Swiss Machining', 'Exotic metals', 'Copper-Beryllium alloys', 'Glass-reinforced composites', 'Polyester Elastomers'],
          server: ['Certified Tsugami Maintenance Tech'],
          database: ['Fully autonomous mass-machining', 'Proper use and care of all Metrology tools', 'CMM programming and measurement', 'Precision Machining of exotic materials (geometric tolerances of .0002")']
        },
        libraries: [],
        localTech: {
          editor: "",
          CLI: "",
          packageManager: "",
        }
      },
      urls: {
        frontEnd: "",
        server: "",
        database: "",
        github: "",
      },
      screens: {
        urls: {
          one: "https://media.discordapp.net/attachments/701514992767205459/732438082770698260/Screenshot_149.png?width=1312&height=677",
        },
        alts: {
          one: "A machined part made for the SR-20J from Star Micronics, Made by me on the same machine",
        }
      }
    },
  ],

  contact: [
    {
      id: 1,
      general: {
        title: "Aura",
        description: "",
        audience: "",
      },
      tech: {
        languages: {
          frontEnd: "",
          server: "",
          database: ""
        },
        libraries: [],
        localTech: {
          editor: "",
          CLI: "",
          packageManager: "",
        }
      },
      urls: {
        frontEnd: "",
        server: "",
        database: "",
        github: "",
      },
      screens: {
        urls: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        },
        alts: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        }
      }
    },


    {
      id: 2,
      general: {
        title: "RageQuit! 2x+",
        description: "",
        audience: "",
      },
      tech: {
        languages: {
          frontEnd: "",
          server: "",
          database: ""
        },
        libraries: [],
        localTech: {
          editor: "",
          CLI: "",
          packageManager: "",
        }
      },
      urls: {
        frontEnd: "",
        server: "",
        database: "",
        github: "",
      },
      screens: {
        urls: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        },
        alts: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        }
      }
    },


    {
      id: 3,
      general: {
        title: "Jquery Portfolio",
        description: "",
        audience: "",
      },
      tech: {
        languages: {
          frontEnd: "",
          server: "",
          database: ""
        },
        libraries: [],
        localTech: {
          editor: "",
          CLI: "",
          packageManager: "",
        }
      },
      urls: {
        frontEnd: "",
        server: "",
        database: "",
        github: "",
      },
      screens: {
        urls: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        },
        alts: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        }
      }
    },


    {
      id: 4,
      general: {
        title: "QuizApp",
        description: "",
        audience: "",
      },
      tech: {
        languages: {
          frontEnd: "",
          server: "",
          database: ""
        },
        libraries: [],
        localTech: {
          editor: "",
          CLI: "",
          packageManager: "",
        }
      },
      urls: {
        frontEnd: "",
        server: "",
        database: "",
        github: "",
      },
      screens: {
        urls: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        },
        alts: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        }
      }
    }
  ],
  resume: [
    {
      id: 1,
      general: {
        title: "Aura",
        description: "",
        audience: "",
      },
      tech: {
        languages: {
          frontEnd: "",
          server: "",
          database: ""
        },
        libraries: [],
        localTech: {
          editor: "",
          CLI: "",
          packageManager: "",
        }
      },
      urls: {
        frontEnd: "",
        server: "",
        database: "",
        github: "",
      },
      screens: {
        urls: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        },
        alts: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        }
      }
    },


    {
      id: 2,
      general: {
        title: "RageQuit! 2x+",
        description: "",
        audience: "",
      },
      tech: {
        languages: {
          frontEnd: "",
          server: "",
          database: ""
        },
        libraries: [],
        localTech: {
          editor: "",
          CLI: "",
          packageManager: "",
        }
      },
      urls: {
        frontEnd: "",
        server: "",
        database: "",
        github: "",
      },
      screens: {
        urls: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        },
        alts: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        }
      }
    },


    {
      id: 3,
      general: {
        title: "Jquery Portfolio",
        description: "",
        audience: "",
      },
      tech: {
        languages: {
          frontEnd: "",
          server: "",
          database: ""
        },
        libraries: [],
        localTech: {
          editor: "",
          CLI: "",
          packageManager: "",
        }
      },
      urls: {
        frontEnd: "",
        server: "",
        database: "",
        github: "",
      },
      screens: {
        urls: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        },
        alts: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        }
      }
    },


    {
      id: 4,
      general: {
        title: "QuizApp",
        description: "",
        audience: "",
      },
      tech: {
        languages: {
          frontEnd: "",
          server: "",
          database: ""
        },
        libraries: [],
        localTech: {
          editor: "",
          CLI: "",
          packageManager: "",
        }
      },
      urls: {
        frontEnd: "",
        server: "",
        database: "",
        github: "",
      },
      screens: {
        urls: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        },
        alts: {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        }
      }
    }
  ],
  bio: [
    {
      id: 1,
      title: "Where I'm from",
      desc: "I am originally from Makawao, HI. I grew up surfing the beaches and exploring the jungles of the island of Maui. In my high school years my family was relocated to Albuqeruque, NM where I found a passion for CAD and engineering systems. For the next ten years I studied and worked in high-tech manufacturing, opening more opportunities for myself and moving again to Colorado, eventually settling in downtown Louisville. Here I enjoy every mountain sport there is and living life with my friends and family that I've found here.",
      url: "https://media.discordapp.net/attachments/701514992767205459/735012793933234196/xcdfYF.jpg",
      alt: "Sunset in Wailea",
      hoping: "What I hope to do",
    },
    {
      id: 2,
      title: "What I'm Doing",
      desc: "I'm a software engineer, machinist and maker. Fueled by my beliefs that aesthetics and user experience are an essential integration to everything we make or use, I bring a unique approach to design in everything I do. Currently a student at Thinkful, I'm learning the skills to create powerful, user-friendly applications for machine and server interfaces with limitless applications. My extensive experience in manufacturing ensures I will understand the challenges your business faces and create a tailor- made solution that will maximize your efficiency. It is my personal mission to create tools that push businesses to be competitive at the next level, whether its a small shop looking to expand or a business of thirty years.",
      url: "",
      alt: "",
    },
    {
      id: 3,
      title: "What I'm Doing",
      desc: "Through everything I have and will do, I aspire to be the best designer and human being I can be. I hope to use all of my skills and experience to contribute to deepening our knowledge of the cosmos, working with a talented team of developers to create applications and software to support the aerospace industry and all applicable applied sciences. Increasing the level of our world's technology means increasing the opportunities and quality of life available to everyone and a great deal of these technologies have come from the continued development of space exploration programs.",
      url: "",
      alt: "",
    },
  ]
})
export default portContext;

export class portContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          id: 1,
          general: {
            title: "Aura",
            description: "Aura is a guided meditatation app which provides the user different methods of meditation to match their moods, take a guided meditation and note how it helped them.",
            audience: "The target audience is anyone wishing to recieve the benefits of a short, guided meditation on a daily basis.",
          },
          tech: {
            languages: {
              frontEnd: "React and ES6",
              server: "Node.js",
              database: "PostgreSQL"
            },
            libraries: [

            ],
            localTech: {
              editor: "VScode",
              CLI: "GitBash",
              packageManager: "Node Package Manager",
            }
          },
          urls: {
            frontEnd: "https://capstone-client-agungip1h.now.sh/",
            server: "",
            database: "",
            github: "https://github.com/lstribli/Capstone1Client",
          },
          screens: {
            urls: {
              one: "https://media.discordapp.net/attachments/701514992767205459/720511743423545384/Screenshot_94.png?width=1125&height=627",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              one: "Screenshot of the Aura Splash Page",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        },

        {
          id: 2,
          general: {
            title: "RageQuit! 2x+",
            description: "RageQuit! 2x+ focuses on guiding new players to a high-performance customized game server for the popular Steam game 'Rust'",
            audience: "Created for Rust players, this site provides a convincing argument to play on RageQuit!",
          },
          tech: {
            languages: {
              frontEnd: "React and ES6",
              server: "Node.js",
              database: "PostgreSQL"
            },
            libraries: [],
            localTech: {
              editor: "VScode",
              CLI: "GitBash",
              packageManager: "Node Package Manager",
            }
          },
          urls: {
            frontEnd: "https://ragequit-client.now.sh/",
            server: "",
            database: "",
            github: "https://github.com/lstribli/RageQuit-",
          },
          screens: {
            urls: {
              one: "https://media.discordapp.net/attachments/701514992767205459/720536872106983514/Screenshot_98.png?width=1125&height=639",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              one: "A screenshot of the RageQuit! web app",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        },

        {
          id: 3,
          general: {
            title: "Jquery Portfolio",
            description: "The Jquery portfolio is one of the first Front End projects that is completed in the Engineering Immersion at Thinkful. This project demonstrates proficiency with the Jquery library",
            audience: "",
          },
          tech: {
            languages: {
              frontEnd: "",
              server: "",
              database: ""
            },
            libraries: [],
            localTech: {
              editor: "",
              CLI: "",
              packageManager: "",
            }
          },
          urls: {
            frontEnd: "https://lstribli.github.io/Portfolio/index.html",
            server: "",
            database: "",
            github: "https://github.com/lstribli/Portfolio",
          },
          screens: {
            urls: {
              one: "https://media.discordapp.net/attachments/701514992767205459/720537844145455104/Screenshot_99.png?width=1125&height=634",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              one: "A screenshot of my first portfolio",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        },


        {
          id: 4,
          general: {
            title: "QuizApp",
            description: "",
            audience: "",
          },
          tech: {
            languages: {
              frontEnd: "",
              server: "",
              database: ""
            },
            libraries: [],
            localTech: {
              editor: "",
              CLI: "",
              packageManager: "",
            }
          },
          urls: {
            frontEnd: "https://lstribli.github.io/QuizApp/",
            server: "",
            database: "",
            github: "https://github.com/lstribli/QuizApp",
          },
          screens: {
            urls: {
              one: "https://media.discordapp.net/attachments/701514992767205459/720539157377712189/Screenshot_100.png?width=1125&height=642",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              one: "A screenshot of My Quiz App",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        }
      ],
      skills: [
        {
          id: 1,
          general: {
            title: "Coding",
            description: "In 2019 I began the next step in my career, Software Engineering.",
            audience: "My personal brand for coding is working on large applications with a small team of Developers",
          },
          tech: {
            languages: {
              frontEnd: ['HTML5', 'CSS3', 'ES6', 'JSX', 'Jquery', 'React'],
              server: ['node.js',],
              database: ['SQL', 'GraphQL', 'PostgreSQL', 'MongoDB']
            },
            libraries: [],
            localTech: {
              editor: "VScode",
              CLI: "GitBash",
              packageManager: "Node Package Manager",
            }
          },
          urls: {
            repo: "https://github.com/lstribli",
          },
          screens: {
            urls: {
              one: "https://media.discordapp.net/attachments/701514992767205459/732425913794297856/Screenshot_147.png?width=1328&height=677",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              one: "Screenshot of one of my code bases",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        },


        {
          id: 2,
          general: {
            title: "3d Design and Modeling",
            description: "",
          },

          tech: {
            languages: {
              frontEnd: ['Solidworks', "Solidworks - Flow Express", "Solidworks - Photoview 360", "Solidworks - Simulation", "SolidCAM", 'SolidCAM 5-axis and Mill-turn with iMachining'],
              server: ['Part-cost analysis'],
              database: ['5S', 'Kanban', 'DC PCB Engineering', 'ElectroMechanical Engineering and Programming']
            },
            libraries: [],
            localTech: {
              editor: "VScode",
              CLI: "GitBash",
              packageManager: "Node Package Manager",
            }
          },
          urls: {
            frontEnd: "https://my.solidworks.com/try-solidworks?mktid=11000&lang=en&gclid=CjwKCAjwjLD4BRAiEiwAg5NBFs6MSCke_KSt05IfAR7g8SvwAtPZQ-M06DckZI6dohSKSfqzYvT6mRoCXt0QAvD_BwE&gclsrc=aw.ds",
          },
          screens: {
            urls: {
              one: "https://media.discordapp.net/attachments/701514992767205459/732410464708853821/turbine.JPG?width=740&height=677",
              two: "https://media.discordapp.net/attachments/701514992767205459/732410436120608808/5sided.JPG?width=627&height=677",
              three: "https://media.discordapp.net/attachments/701514992767205459/732410412414533702/3d_Printer_render.JPG?width=627&height=677",
              four: "",
            },
            alts: {
              one: "A rendering of an inconel compressor I designed and machined while working in the Aerospace industry",
              two: "A rendering of a mirror for a LIDAR system I prototyped and machined on contract to a startup",
              three: "A rendering of a 3d Printer I designed using Solidworks",
              four: "",
            }
          }
        },

        {
          id: 3,
          general: {
            title: "Machining",
            description: "While you won't find me on the shop production floor these days, I have an in-depth understanding of how an ISO-9001 Certified shop operates.",
            audience: "I still bring value to the world of machining by working as a product and process engineering consultant.",
          },
          tech: {
            languages: {
              frontEnd: ['5-axis Milling', '7-axis Swiss Machining', 'Exotic metals: I.E. Monel 500', 'Copper-Beryllium alloys', 'Glass-reinforced composites: I.E. G-10', 'Polyester Elastomers: I.E. Hytrel'],
              server: ['Certified Machine Maintenance Tech by Tsugami'],
              database: ['Inititalization for fully autonomous mass-machining', 'Proper use, care and implementation of all Metrology tools', 'CMM programming and measurement', 'Precision Machining of exotic materials (geometric tolerances of .0002")']
            },
            libraries: [],
            localTech: {
              editor: "",
              CLI: "",
              packageManager: "",
            }
          },
          urls: {
            frontEnd: "",
            server: "",
            database: "",
            github: "",
          },
          screens: {
            urls: {
              one: "https://media.discordapp.net/attachments/701514992767205459/732438082770698260/Screenshot_149.png?width=1312&height=677",
            },
            alts: {
              one: "A machined part made for the SR-20J from Star Micronics, Made by me on the same machine",
            }
          }
        },
      ],
      contact: [
        {
          id: 1,
          general: {
            title: "Aura",
            description: "",
            audience: "",
          },
          tech: {
            languages: {
              frontEnd: "",
              server: "",
              database: ""
            },
            libraries: [],
            localTech: {
              editor: "",
              CLI: "",
              packageManager: "",
            }
          },
          urls: {
            frontEnd: "",
            server: "",
            database: "",
            github: "",
          },
          screens: {
            urls: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        },


        {
          id: 2,
          general: {
            title: "RageQuit! 2x+",
            description: "",
            audience: "",
          },
          tech: {
            languages: {
              frontEnd: "",
              server: "",
              database: ""
            },
            libraries: [],
            localTech: {
              editor: "",
              CLI: "",
              packageManager: "",
            }
          },
          urls: {
            frontEnd: "",
            server: "",
            database: "",
            github: "",
          },
          screens: {
            urls: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        },


        {
          id: 3,
          general: {
            title: "Jquery Portfolio",
            description: "",
            audience: "",
          },
          tech: {
            languages: {
              frontEnd: "",
              server: "",
              database: ""
            },
            libraries: [],
            localTech: {
              editor: "",
              CLI: "",
              packageManager: "",
            }
          },
          urls: {
            frontEnd: "",
            server: "",
            database: "",
            github: "",
          },
          screens: {
            urls: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        },


        {
          id: 4,
          general: {
            title: "QuizApp",
            description: "",
            audience: "",
          },
          tech: {
            languages: {
              frontEnd: "",
              server: "",
              database: ""
            },
            libraries: [],
            localTech: {
              editor: "",
              CLI: "",
              packageManager: "",
            }
          },
          urls: {
            frontEnd: "",
            server: "",
            database: "",
            github: "",
          },
          screens: {
            urls: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        }
      ],
      resume: [
        {
          id: 1,
          general: {
            title: "Aura",
            description: "",
            audience: "",
          },
          tech: {
            languages: {
              frontEnd: "",
              server: "",
              database: ""
            },
            libraries: [],
            localTech: {
              editor: "",
              CLI: "",
              packageManager: "",
            }
          },
          urls: {
            frontEnd: "",
            server: "",
            database: "",
            github: "",
          },
          screens: {
            urls: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        },


        {
          id: 2,
          general: {
            title: "RageQuit! 2x+",
            description: "",
            audience: "",
          },
          tech: {
            languages: {
              frontEnd: "",
              server: "",
              database: ""
            },
            libraries: [],
            localTech: {
              editor: "",
              CLI: "",
              packageManager: "",
            }
          },
          urls: {
            frontEnd: "",
            server: "",
            database: "",
            github: "",
          },
          screens: {
            urls: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        },


        {
          id: 3,
          general: {
            title: "Jquery Portfolio",
            description: "",
            audience: "",
          },
          tech: {
            languages: {
              frontEnd: "",
              server: "",
              database: ""
            },
            libraries: [],
            localTech: {
              editor: "",
              CLI: "",
              packageManager: "",
            }
          },
          urls: {
            frontEnd: "",
            server: "",
            database: "",
            github: "",
          },
          screens: {
            urls: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        },


        {
          id: 4,
          general: {
            title: "QuizApp",
            description: "",
            audience: "",
          },
          tech: {
            languages: {
              frontEnd: "",
              server: "",
              database: ""
            },
            libraries: [],
            localTech: {
              editor: "",
              CLI: "",
              packageManager: "",
            }
          },
          urls: {
            frontEnd: "",
            server: "",
            database: "",
            github: "",
          },
          screens: {
            urls: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        }
      ],
      bio: [
        {
          id: 1,
          general: {
            title: "Aura",
            description: "",
            audience: "",
          },
          tech: {
            languages: {
              frontEnd: "",
              server: "",
              database: ""
            },
            libraries: [],
            localTech: {
              editor: "",
              CLI: "",
              packageManager: "",
            }
          },
          urls: {
            frontEnd: "",
            server: "",
            database: "",
            github: "",
          },
          screens: {
            urls: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        },


        {
          id: 2,
          general: {
            title: "RageQuit! 2x+",
            description: "",
            audience: "",
          },
          tech: {
            languages: {
              frontEnd: "",
              server: "",
              database: ""
            },
            libraries: [],
            localTech: {
              editor: "",
              CLI: "",
              packageManager: "",
            }
          },
          urls: {
            frontEnd: "",
            server: "",
            database: "",
            github: "",
          },
          screens: {
            urls: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        },


        {
          id: 3,
          general: {
            title: "Jquery Portfolio",
            description: "",
            audience: "",
          },
          tech: {
            languages: {
              frontEnd: "",
              server: "",
              database: ""
            },
            libraries: [],
            localTech: {
              editor: "",
              CLI: "",
              packageManager: "",
            }
          },
          urls: {
            frontEnd: "",
            server: "",
            database: "",
            github: "",
          },
          screens: {
            urls: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        },


        {
          id: 4,
          general: {
            title: "QuizApp",
            description: "",
            audience: "",
          },
          tech: {
            languages: {
              frontEnd: "",
              server: "",
              database: ""
            },
            libraries: [],
            localTech: {
              editor: "",
              CLI: "",
              packageManager: "",
            }
          },
          urls: {
            frontEnd: "",
            server: "",
            database: "",
            github: "",
          },
          screens: {
            urls: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            },
            alts: {
              1: "",
              2: "",
              3: "",
              4: "",
              5: "",
            }
          }
        }
      ]
    }

  }

  render() {

    const value = {
      projects: this.state.projects,
      skills: this.state.skills,
      contact: this.state.contact,
      resume: this.state.resume,
      bio: this.state.bio
    }

    return (
      <portContext.Provider value={value}>
        {this.props.children}
      </portContext.Provider>
    )
  }
}
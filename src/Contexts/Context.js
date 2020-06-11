import React from 'react'

const Context = React.createContext({
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
        frontEnd: "https://vercel.com/lstribli/ragequit-client/khe099oub",
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
        title: "",
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
})
export default Context;
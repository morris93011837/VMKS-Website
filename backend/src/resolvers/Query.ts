import { json } from 'body-parser';
import { prisma } from '../../prisma/client.ts'

const Query = {

  AllAnnouncements: async (_parents, args, context) => {
    const announcements = await prisma.announcement.findMany({
      orderBy: {
        id: "desc"
      }
    });
    return announcements;
  },

  AllTools: async (_parents, args, context) => {
    const tools = await prisma.tool.findMany({
      orderBy: {
        usage: "desc"
      }
    });
    return tools;
  },

  SearchToolsByCategory: async (_parents, args: { category: string }, context) => {
    const category = args.category;
    const searchToolsByCategory = await prisma.tool.findMany({
      where: {
        category: {
          startsWith: category
        }
      },
      orderBy: {
        usage: "desc"
      }
    });

    return searchToolsByCategory;
  },

  SearchToolsByPosition: async (_parents, args: { position: string }, context) => {
    const position = args.position;
    const searchToolsByPosition = await prisma.tool.findMany({
      where: {
        position: position,
      },
      orderBy: {
        usage: "desc"
      }
    });

    return searchToolsByPosition;
  },

  AllDisposableMaterials: async (_parents, args, context) => {
    const materials = await prisma.disposableMaterial.findMany({
      orderBy: {
        usage: "desc"
      }
    });
    return materials;
  },

  SearchDisposableMaterialsByCategory: async ( parent, args: { category: string }, context ) => {
    const category = args.category;
    const searchDisposableMaterialsByCategory = await prisma.disposableMaterial.findMany({
      where: {
        category: {
          startsWith: category
        }
      },
      orderBy: {
        usage: "desc"
      }
    });
    return searchDisposableMaterialsByCategory;
  },

  SearchDisposableMaterialsByPosition: async ( parent, args: { position: string }, context ) => {
    const position = args.position;
    const searchDisposableMaterialsByPosition = await prisma.disposableMaterial.findMany({
      where: {
        position: {
          startsWith: position
        }
      },
      orderBy: {
        usage: "desc"
      }
    });
    return searchDisposableMaterialsByPosition;
  },

  AllMachines: async (_parents, args, context) => {
    const machines = await prisma.machine.findMany({
      orderBy: {
        usage: "desc"
      }
    });
    return machines;
  },

  SearchMachinesByCategory: async (_parents, args: { category: string }, context) => {
    const category = args.category;
    const searchMachinesByCategory = await prisma.machine.findMany({
      where: {
        category: {
          startsWith: category
        }
      },
      orderBy: {
        usage: "desc"
      }
    });
    return searchMachinesByCategory;
  },

  SearchMachinesByPosition: async (_parents, args: { position: string }, context) => {
    const position = args.position;
    const searchMachinesByPosition = await prisma.machine.findMany({
      where: {
        position: position
      },
      orderBy: {
        usage: "desc"
      }
    });
    return searchMachinesByPosition;
  },

  AllMaterials: async (_parents, args, context) => {
    const materials = await prisma.material.findMany({
      orderBy: {
        usage: "desc"
      }
    });
    return materials;
  },

  SearchMaterialsByCategory: async (_parents, args: { category: string }, context) => {
    const category = args.category;
    const searchMaterialsByCategory = await prisma.material.findMany({
      where: {
        category: {
          startsWith: category
        }
      },
      orderBy: {
        usage: "desc"
      }
    });

    return searchMaterialsByCategory;
  },

  SearchMaterialsByPosition: async (_parents, args: { position: string }, context) => {
    const position = args.position;
    const searchMaterialsByPosition = await prisma.material.findMany({
      where: {
        position: position,
      },
      orderBy: {
        usage: "desc"
      }
    });

    return searchMaterialsByPosition;
  },

  AllThreeDP: async () => {
    const threeDP = await prisma.threeDP.findMany({
      orderBy: {
        usage: "desc"
      }
    });
    return threeDP;
  },

  SearchThreeDPByCategory: async (_parents, args: { category: string }, context) => {
    const category = args.category;
    const FindThreeDPByCategory = await prisma.threeDP.findMany({
      where: {
        category: {
          startsWith: category
        },
      },
      orderBy: {
        usage: "desc"
      }
    });
    return FindThreeDPByCategory;
  },

  SearchThreeDPByPosition: async (_parents, args: { position: string }, context) => {
    const position = args.position;
    const searchThreeDPByPosition = await prisma.threeDP.findMany({
      where: {
        position: position,
      },
      orderBy: {
        usage: "desc"
      }
    });

    return searchThreeDPByPosition;
  },

  AllUser: async () => {
    const users = await prisma.user.findMany();
    return users;
  },

  AllUserMaterials: async () => {
    const UserMaterials = await prisma.userMaterial.findMany({
      orderBy: [
        {
          borrowerId: "asc"
        },
        {
          borrowNum: "desc"
        }
      ]
    });
    return UserMaterials;
  },

  AllArticles: async (_parents, args, context) => {
    const articles = await prisma.article.findMany({
      orderBy: {
        id: "desc"
      }
    });
    return articles;
  },
  
  SearchMachineByName: async (_parents, args: { input: string }, context) => {
    const input = args.input;
    const inputLength = args.input.length;
    
    const ordered = Array(20);
    for (let i = 0; i < ordered.length; i++) {
      ordered[i] = [];
    }

    const machine = await prisma.machine.findMany({
      where: {
        name: {
          contains: input
        }
      }
    });

    for (let obj of machine) {
      for (let i = 0; i < obj.name.length; i++){
        if(obj.name.substring(i, i + inputLength) === input) {
          ordered[i].push(obj);
        }
      }
    } 

    // console.log(ordered.filter((args) => {return args.length !== 0}).flat());
    return ordered.filter((args) => {return args.length !== 0}).flat();   //making the returning array an array of machines without any empty arrays
  }

}

export { Query }
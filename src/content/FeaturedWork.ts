
export interface FeaturedWork {
    id: number;
    name: string;
    image?: string;
    url: string;
    imageFile?: boolean;
    description?: string;
}

export const featuredWorkItems: FeaturedWork[] = [
    {
        id: 0o1,
        name: "Featured Work: Aka.TheStore",
        imageFile: true,
        url: "https://www.instagram.com/aka.thestore/?hl=en",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
        id: 0o2,
        name: "Featured Work: GABO on Queen",
        imageFile: true,
        url: "https://www.instagram.com/gaboonqueen/",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
        id: 0o3,
        name: "Featured Work: Happy Sundae",
        imageFile: true,
        url: "https://www.instagram.com/happysundae.ca/?hl=en",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
        id: 0o4,
        name: "Featured Work: Cameron Alastaire Vintage",
        imageFile: true,
        url: "https://www.instagram.com/cameronalastairevintage/?hl=en",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
]
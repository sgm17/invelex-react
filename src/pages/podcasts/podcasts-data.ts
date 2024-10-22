const podcastItems: PodcastItem[] = [
    {
        slug: "lost-civilization-ice-age-ancient-human-history",
        title: "Lost Civilization of the Ice Age & Ancient Human History",
        description: "Welcome to this new installment of Extra Spicy in which Euge brings together 3 ecommerce and digital marketing experts to talk about their companies and the best strategies to grow online businesses. Join this chat with Arnau Cuenca, founder of Northplanner, Roger Viladrosa, Founder Vilvic Media and Ion Draghita, Founder Fancy Haus.",
        participants: "Joan Cuesta, fundador de VisionIA | Sergi Garcia, fundador de Invelex | Robert Marquès, fundador de Prometeus",
        image: "https://img.youtube.com/vi/NMHiLvirCb0/maxresdefault.jpg",
        createdAt: Date.now()
    },
    {
        slug: "nietzsche-hitler-god-psychopathy-suffering-meaning",
        title: "Nietzsche, Hitler, God, Psychopathy, Suffering & Meaning",
        description: "Welcome to this new installment of Extra Spicy in which Euge brings together 3 ecommerce and digital marketing experts to talk about their companies and the best strategies to grow online businesses. Join this chat with Arnau Cuenca, founder of Northplanner, Roger Viladrosa, Founder Vilvic Media and Ion Draghita, Founder Fancy Haus.",
        participants: "Joan Cuesta, fundador de VisionIA | Sergi Garcia, fundador de Invelex | Robert Marquès, fundador de Prometeus",
        image: "https://img.youtube.com/vi/q8VePUwjB9Y/maxresdefault.jpg",
        createdAt: Date.now() - 86400
    },
    {
        slug: "future-programming-with-ai",
        title: "Future of Programming with AI",
        description: "Welcome to this new installment of Extra Spicy in which Euge brings together 3 ecommerce and digital marketing experts to talk about their companies and the best strategies to grow online businesses. Join this chat with Arnau Cuenca, founder of Northplanner, Roger Viladrosa, Founder Vilvic Media and Ion Draghita, Founder Fancy Haus.",
        participants: "Joan Cuesta, fundador de VisionIA | Sergi Garcia, fundador de Invelex | Robert Marquès, fundador de Prometeus",
        image: "https://img.youtube.com/vi/oFfVt3S51T4/maxresdefault.jpg",
        createdAt: Date.now() - 86400 * 2
    }
]

export interface PodcastItem {
    slug: string
    title: string
    description: string
    participants: string
    image: string
    createdAt: number
}

export { podcastItems }
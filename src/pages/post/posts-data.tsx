interface PostItem {
    slug: string,
    title: string,
    description: string,
    createdAt: number
    views: number
    image: string
    body: JSX.Element
}

const postsData: PostItem[] = [
    {
        slug: "start-new-flutter-project",
        title: "Start A New Flutter Project",
        description: "Introduction to the creaton of a multiplatform app using the Flutter framework and the dart programming language",
        createdAt: Date.now(),
        views: 133,
        image: "https://jessehanley.com/_next/image?url=%2Fblog%2Faoe.jpg&w=3840&q=75",
        body: <div>Hi</div>
    },
    {
        slug: "deploy-nextjs-api-to-vercel",
        title: "Deploy a NextJS Api to Vercel",
        description: "Introduction to Vercel functionalities creating a single Api and deploying it",
        createdAt: Date.now() - 86400,
        views: 164,
        image: "https://files.readme.io/643b6a0-new-int-2.png",
        body: <div>Hello world</div>
    }
]

export { postsData }
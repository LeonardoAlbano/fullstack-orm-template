import { prisma } from "@/prisma";

async function seed() {
    await prisma.user.createMany({
        data: [
            {
                name: "Karina Melo",
                email: "karinamelo@gmail.com"
            },

            {
                name: "Pablo Melo",
                email: "pablomelo@gmail.com"
            },

        ],
    })
}

seed().then(() => {
    console.log("Database seeded!")
    prisma.$disconnect()
})
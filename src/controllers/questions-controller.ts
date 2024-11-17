import { prisma } from "@/prisma"
import { Request, Response } from "express"

class QuestionsController {
  async index(request: Request, response: Response) {

    //Busca
    const questions = await prisma.question.findMany({
      where: {
        title: {
          contains: request.query.title?.toString().trim(),
          mode: "insensitive",
        }
      },
    })

    return response.json(questions)
  }

  async create(request: Request, response: Response) {
    const { title, content, user_id } = request.body

    await prisma.question.create({ 
      data: {
         title,
         content,
         userId: user_id,
        },
      })

    return response.status(201).json()
  }

  async update(request: Request, response: Response) {
    return response.json()
  }

  async remove(request: Request, response: Response) {
    return response.json()
  }
}

export { QuestionsController }

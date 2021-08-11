import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { id } = request.body;

      const users = this.listAllUsersUseCase.execute(id);

      return response.json(users);
    } catch {
      return response.status(400).json({ error: "mensagem do erro" });
    }
  }
}

export { ListAllUsersController };

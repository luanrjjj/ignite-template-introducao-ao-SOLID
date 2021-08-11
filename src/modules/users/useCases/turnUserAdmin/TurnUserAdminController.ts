import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    console.log(request.params);
    const { id } = request.body;
    const newUser = this.turnUserAdminUseCase.execute(id);

    return response.json(newUser);
  }
}

export { TurnUserAdminController };

import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

const usersRepository = UsersRepository.getInstance();

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const user = usersRepository.findById(user_id);

    if (!user) throw new Error("mensagem do erro");

    return usersRepository.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };

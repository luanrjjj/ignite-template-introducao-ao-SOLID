import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

const usersRepository = UsersRepository.getInstance();

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const checkEmail = usersRepository.findByEmail(email);

    if (checkEmail) throw new Error("mensagem do erro");
    const user = usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };

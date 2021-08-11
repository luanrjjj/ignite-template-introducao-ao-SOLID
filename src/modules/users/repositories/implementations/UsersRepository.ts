import { response } from "express";
import { v4 as uuidV4 } from "uuid";

import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = {
      id: uuidV4(),
      name,
      email,
      admin: false,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui

    const user = this.users.find((user) => user.id === id);

    return user;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  turnAdmin(receivedUser: User): User {
    const newUser = {
      id: receivedUser.id,
      name: receivedUser.name,
      email: receivedUser.email,
      created_at: receivedUser.created_at,
      updated_at: new Date(),
      admin: true,
    };
    const index = this.users.indexOf(receivedUser);
    this.users[index] = newUser;
    return newUser;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };

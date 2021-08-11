import { v4 as uuidV4 } from "uuid";

class User {
  // Complete aqui

  id: string;
  name: string;
  email: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;
}

export { User };

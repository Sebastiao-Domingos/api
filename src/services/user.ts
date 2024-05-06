import { PrismaClient } from "@prisma/client";
import UserRepository, { UserType } from "../repositories/user";

const prisma = new PrismaClient();

export class UserService implements UserRepository {
  async add(data: UserType): Promise<UserType> {
    return await prisma.user
      .create({ data: { email: data.email, name: data.name } })
      .then((response) => response)
      .catch((error) => error);
  }
  async update(data: Partial<UserType>): Promise<UserType> {
    const { name, email, id } = data;
    return prisma.user
      .update({
        data: { name, email },
        where: {
          id: id!,
        },
      })
      .then((res) => res)
      .catch((error) => error);
  }
  async get(): Promise<UserType[]> {
    return await prisma.user
      .findMany()
      .then((res) => res)
      .catch((error) => error);
  }
  async find(id: string): Promise<UserType> {
    return await prisma.user
      .findUnique({ where: { id } })
      .then((res) => res)
      .catch((error) => error);
  }
  async delete(id: string): Promise<UserType> {
    return await prisma.user
      .delete({ where: { id } })
      .then((res) => res)
      .catch((error) => error);
  }
}

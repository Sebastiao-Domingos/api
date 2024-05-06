import { PrismaClient } from "@prisma/client";
import { validate } from "uuid";
import { UserService } from "../services/user";
import { UserType } from "../repositories/user";
import { Request, Response } from "express";

const service = new UserService();
const prisma = new PrismaClient();

export class UserController {
  /**
   * create
   */
  public async create(request: Request, response: Response) {
    const data: UserType = request.body;

    await service
      .add(data)
      .then((res) => {
        return response.status(200).json(res);
      })
      .catch((error) => {
        response.status(401).json(error);
      });
  }
  /**
   * create
   */
  public async update(request: Request, response: Response) {
    const pais_id: string = request.params.id;
    const data: Partial<UserType> = request.body;

    data.id = pais_id;
    return await service
      .update(data)
      .then((res) => {
        return response.status(200).json(res);
      })
      .catch((error) => {
        response.status(401).json(error);
      });
  }

  /**
   * get
   */
  public async get(request: Request, response: Response) {
    return await service
      .get()
      .then((res) => {
        response.status(200).json(res);
      })
      .catch((error) => {
        response.status(400).json(error);
      });
  }

  /**
   * find
   */
  public async find(request: Request, response: Response) {
    const pais_id: string = request.params.id;

    if (!validate(pais_id)) {
      return response.status(404).json("id inválido !");
    }

    return await service
      .find(pais_id)
      .then((resp) => {
        return response.status(200).json(resp);
      })
      .catch((error) => {
        return response.status(404).json(error);
      });
  }

  /**
   * delete
   */
  public async delete(request: Request, response: Response) {
    const pais_id: string = request.params.id;

    if (!validate(pais_id)) {
      return response.status(400).json("id inválido !");
    }

    return await service
      .delete(pais_id)
      .then(() => {
        response.status(200).json({ sms: "Eliminado com susseco" });
      })
      .catch((error) => {
        response.status(400).json(error);
      });
  }
}

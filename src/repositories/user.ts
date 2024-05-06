export type UserType = {
  id: string;
  name: string;
  email: string;
};

export default interface UserRepository {
  add: (data: UserType) => Promise<UserType>;
  update: (data: Partial<UserType>) => Promise<UserType>;
  get: () => Promise<UserType[]>;
  find: (id: string) => Promise<UserType>;
  delete: (id: string) => Promise<UserType>;
}

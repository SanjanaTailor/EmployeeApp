export class UserModel {
  public username: string;
  public password: string;
  constructor(row: any) {
    this.username = row.username;
    this.password = row.password;
  }
}

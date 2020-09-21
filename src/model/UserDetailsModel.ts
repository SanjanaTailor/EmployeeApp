export class UserDetailsModel {
  public id: string;
  public name: string;
  public age: string;
  public gender: string;
  public email: string;
  public phoneNo: string;
  constructor(row: any) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.gender = row.gender;
    this.email = row.email;
    this.phoneNo = row.phoneNo;
  }
}

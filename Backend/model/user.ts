class User {
    id: number=0;
    user_name: string;
    email: string;
    password: string;

    constructor(user: User) {
      this.id = user.id;
      this.user_name = user.user_name;
      this.email = user.email;
      this.password = user.password;
    }
  }
  
  export default User;
export class User {
    public name: string;
    public email: string;
    public password: string;
    public checkPassword: string;
    public country: string;
    public city: string;
    public occupation: string;
    public age: number;

    constructor(name: string, email: string, password: string, checkPassword: string, country: string, city: string, occupation: string, age: number) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.checkPassword = checkPassword;
        this.country = country;
        this.city = city;
        this.occupation = occupation;
        this.age = age;
    }
}

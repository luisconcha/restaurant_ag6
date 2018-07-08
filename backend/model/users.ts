export class User {
    constructor(public email: string,
                public name: string,
                private password: string) {
    }

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password;
    }
}

export const users: { [key: string]: User } = {
    'luis@gmail.com': new User('luis@gmail.com', 'Luis Alberto', '123456'),
    'meg@gmail.com': new User('meg@gmail.com', 'Meguita', '123456'),
    'apolo@gmail.com': new User('apolo@gmail.com', 'Apolo', '123456'),
};

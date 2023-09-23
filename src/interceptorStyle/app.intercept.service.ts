import { Injectable } from "@nestjs/common";

@Injectable()
export class InterceptService {
    private readonly users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' },
    ];


    multiBy40(inr: number): number {
        return inr * 40;
    }

    getHelloName(name: string): string {
        return `Hello ${name}. Nice to see you!`;
    }

    getUserObject(): any {
        return {
            name: 'John Doe',
            email: 'john@docdao.org',
            phone: '0123456789',
            address: '123, Nguyen Van Linh, District 7, HCMC'
        }
    }
    getUsers(): any[] {
        return this.users;
    }
}
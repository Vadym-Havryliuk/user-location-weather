import { Injectable } from '@angular/core';

@Injectable()

export class UsersService {
    users: {
        name: string,
        sex: string,
        location: string,
        email: string,
        temperature: string
    }[] = [];  

    addUser() {
        this.users.push({
            name: 'name',
            sex: 'sex',
            location: 'location',
            email: 'email',
            temperature: 'temperature'
        });
    }

    removeUser(index: number) {
        this.users.splice(index, 1);
    }
}
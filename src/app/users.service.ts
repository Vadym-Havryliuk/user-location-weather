import { Inject } from '@angular/core';

@Inject()

export class UsersService {
    users = [];

    addUser() {
        this.users.push({
            name: 'name',
            sex: 'sex',
            location: 'location',
            email: 'email',
            temperature: 'temperature'
        });
    }
}
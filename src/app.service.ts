import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  users = [
    { 
      email : 'juanjo@gmail.com',
      id: '123456',
      address : 'calle 14G #34-45'
    },
    {
      email : 'sofiaLon@gmail.com',
      id: '122345',
      address : 'carrera 2 #45-12'
    },
    {
      email : 'mateo122@gmail.com',
      id: '123345',
      address: 'Transversal 2 #45-54'
    }
  ]

  userExistsByEmail(email: string):boolean {
    return this.users.some(user => user.email === email);
  }

  // deployAddreses(): string[] {
    
  // }
}

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

  deployAddreses(email: string, document:string): string[] {
     const random_address = ['Calle', 'Carrera', 'Transversal', 'Diagonal']

     const address_location1 = random_address.sort(() => Math.random() - 0.5)[0];

     const address_location2 = random_address.sort(()=> Math.random() - 0.5)[0];
     
     const random_before1 = Math.floor(Math.random() * 99) + 1;

     const random_before2 = Math.floor(Math.random() * 99) + 1;

     const random_medium1 = Math.floor(Math.random() * 99) + 1;

     const random_medium2 = Math.floor(Math.random() * 99) + 1;

     const random_after1 = Math.floor(Math.random() * 99) + 1;

     const random_after2 = Math.floor(Math.random() * 99) + 1;

     const address1 = address_location1 + ' ' + random_before1 + ' #' + random_medium1 + '-' + random_after1;

     const address2 = address_location2 + ' ' + random_before2 + ' #' + random_medium2 + '-' + random_after2;
     
     let address3 = '';
      if(this.users.some(user => user.email === email) && this.users.some(user => user.email === email)){
        address3 = this.users.find(user => user.email).address;
      }

      const addresses = [address1, address2, address3];

      return addresses.sort(() => Math.random() - 0.5);
   }


   //validateAddress(email:string, address)


}

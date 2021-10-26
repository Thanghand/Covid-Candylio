import { BadRequestException, Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      firstName: 'Thang',
      lastName: 'Cao',
      company: 'candylio',
      businessEmail: 'caohoangthang93@gmail.com'
    };
  }

  createCustomerInformation(request: any): string {
    try {
      // Validation
      const data = fs.readFileSync('customers.json', 'utf8');
      const customers = JSON.parse(data) as any[];

      const customer = {
        firstName: request.firstName,
        lastName: request.lastName,
        company: request.company,
        businessEmail: request.businessEmail
      };

      customers.push(customer);
      fs.writeFileSync('customers.json', JSON.stringify(customers, null, 2));

      return 'Create customer successfully';
    } catch (error) {
      console.error(error);
      throw new BadRequestException(error);
    }
  }
}

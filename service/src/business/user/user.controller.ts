import { Controller, Get } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { UserEntity, UserService } from './index';

@Crud({
  model: {
    type: UserEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    join: {
      employer: { }
    }
  }
})
@Controller('api/users')
export class UserController {
  constructor(public service: UserService) {}
}

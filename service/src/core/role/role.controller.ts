import { Controller, Get } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { RoleEntity, RoleService } from './index';

@Crud({
  model: {
    type: RoleEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    limit: 6,
  },
})
@Controller('api/roles')
export class RoleController {
  constructor(public service: RoleService) {}
}

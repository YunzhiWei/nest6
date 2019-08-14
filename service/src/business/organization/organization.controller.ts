import { Controller, Get } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { OrganizationEntity, OrganizationService } from './index';

@Crud({
  model: {
    type: OrganizationEntity,
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
      employees: { }
    }
  }
})
@Controller('api/organizations')
export class OrganizationController {
  constructor(public service: OrganizationService) {}
}

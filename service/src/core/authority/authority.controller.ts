import { Controller, Get } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { AuthorityEntity, AuthorityService } from './index';

@Crud({
  model: {
    type: AuthorityEntity,
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
@Controller('api/authorities')
export class AuthorityController {
  constructor(public service: AuthorityService) {}
}

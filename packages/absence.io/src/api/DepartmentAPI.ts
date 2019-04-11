import {ClientOptions} from '@ffflorian/api-client';

import {Endpoint} from '../Endpoints';
import {Authorization, Department, Paginated, PaginationOptions, RequestOptions} from '../interfaces/';
import {APIBase} from './APIBase';

export class DepartmentAPI extends APIBase<RequestOptions> {
  constructor(config: ClientOptions<RequestOptions>, auth: Authorization) {
    super(config, auth);
  }

  /**
   * Retrieve a single department
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#a9c45164-59e5-3daf-93f2-4c64f6cc52f0
   */
  public retrieveDepartment(id: string): Promise<Department> {
    this.checkApiKey('Department');
    const endpoint = Endpoint.Department.departments(id);
    return this.get(endpoint);
  }

  /**
   * Retrieve departments
   * @see https://documenter.getpostman.com/view/799228/absenceio-api-documentation/2Fwbis#d596a243-9bc4-cb5f-dbc5-456c46437d09
   */
  public retrieveDepartments(options?: PaginationOptions): Promise<Paginated<Department[]>> {
    this.checkApiKey('Department');
    const endpoint = Endpoint.Department.departments();
    return this.post(endpoint, {data: options});
  }
}

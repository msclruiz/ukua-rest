import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {ReqPago, ReqPagoRelations} from '../models';

export class ReqPagoRepository extends DefaultCrudRepository<
  ReqPago,
  typeof ReqPago.prototype.idReqPago,
  ReqPagoRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(ReqPago, dataSource);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {CompPago, CompPagoRelations} from '../models';

export class CompPagoRepository extends DefaultCrudRepository<
  CompPago,
  typeof CompPago.prototype.idComprobante,
  CompPagoRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(CompPago, dataSource);
  }
}

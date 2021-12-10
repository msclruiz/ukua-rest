import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {EmpresaTransp, EmpresaTranspRelations} from '../models';

export class EmpresaTranspRepository extends DefaultCrudRepository<
  EmpresaTransp,
  typeof EmpresaTransp.prototype.idEmpTransp,
  EmpresaTranspRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(EmpresaTransp, dataSource);
  }
}

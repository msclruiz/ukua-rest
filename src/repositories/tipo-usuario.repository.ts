import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {TipoUsuario, TipoUsuarioRelations} from '../models';

export class TipoUsuarioRepository extends DefaultCrudRepository<
  TipoUsuario,
  typeof TipoUsuario.prototype.idTipo,
  TipoUsuarioRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(TipoUsuario, dataSource);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {UsuarioOperador, UsuarioOperadorRelations} from '../models';

export class UsuarioOperadorRepository extends DefaultCrudRepository<
  UsuarioOperador,
  typeof UsuarioOperador.prototype.idUsuario,
  UsuarioOperadorRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(UsuarioOperador, dataSource);
  }
}

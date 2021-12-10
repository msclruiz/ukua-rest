import {Entity, model, property} from '@loopback/repository';

@model()
export class TipoUsuario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idTipo: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcionTipo: string;

  @property({
    type: 'number',
    required: true,
  })
  tipoT: number;

  @property({
    type: 'string',
    required: true,
  })
  estadoTipo: string;


  constructor(data?: Partial<TipoUsuario>) {
    super(data);
  }
}

export interface TipoUsuarioRelations {
  // describe navigational properties here
}

export type TipoUsuarioWithRelations = TipoUsuario & TipoUsuarioRelations;

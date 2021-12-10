import {Entity, model, property} from '@loopback/repository';

@model()
export class UsuarioOperador extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idUsuario?: number;

  @property({
    type: 'string',
    required: true,
  })
  razonSocial: string;

  @property({
    type: 'number',
    required: true,
  })
  tipoUsr: number;

  @property({
    type: 'string',
    required: true,
  })
  telefonoUsr: string;


  constructor(data?: Partial<UsuarioOperador>) {
    super(data);
  }
}

export interface UsuarioOperadorRelations {
  // describe navigational properties here
}

export type UsuarioOperadorWithRelations = UsuarioOperador & UsuarioOperadorRelations;

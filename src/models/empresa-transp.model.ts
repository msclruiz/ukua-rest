import {Entity, model, property} from '@loopback/repository';

@model()
export class EmpresaTransp extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idEmpTransp: number;

  @property({
    type: 'string',
    required: true,
  })
  razonSocialEmpresa: string;

  @property({
    type: 'string',
    required: true,
  })
  rfcEmpresa: string;

  @property({
    type: 'string',
    required: true,
  })
  domicilioEmpresa: string;

  @property({
    type: 'string',
    required: true,
  })
  telEmpresa: string;

  @property({
    type: 'string',
    required: true,
  })
  ctaBancaria: string;


  constructor(data?: Partial<EmpresaTransp>) {
    super(data);
  }
}

export interface EmpresaTranspRelations {
  // describe navigational properties here
}

export type EmpresaTranspWithRelations = EmpresaTransp & EmpresaTranspRelations;

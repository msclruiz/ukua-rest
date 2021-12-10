import {Entity, model, property} from '@loopback/repository';

@model()
export class ReqPago extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idReqPago?: number;

  @property({
    type: 'number',
    required: true,
  })
  folioFactura: number;

  @property({
    type: 'number',
    required: true,
  })
  importePago: number;

  @property({
    type: 'date',
    required: true,
  })
  fechaFactura: string;

  @property({
    type: 'string',
    required: true,
  })
  estReqPago: string;


  constructor(data?: Partial<ReqPago>) {
    super(data);
  }
}

export interface ReqPagoRelations {
  // describe navigational properties here
}

export type ReqPagoWithRelations = ReqPago & ReqPagoRelations;

import {Entity, model, property} from '@loopback/repository';

@model()
export class CompPago extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  idComprobante: string;

  @property({
    type: 'number',
    required: true,
  })
  folioFactura: number;

  @property({
    type: 'number',
    required: true,
  })
  ordenCompra: number;

  @property({
    type: 'object',
    required: true,
  })
  compArchivoPDF: object;


  constructor(data?: Partial<CompPago>) {
    super(data);
  }
}

export interface CompPagoRelations {
  // describe navigational properties here
}

export type CompPagoWithRelations = CompPago & CompPagoRelations;

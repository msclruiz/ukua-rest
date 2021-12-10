import {Entity, model, property} from '@loopback/repository';

@model()
export class Factura extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  folioFactura: number;

  @property({
    type: 'number',
    required: true,
  })
  idProveedor: number;

  @property({
    type: 'string',
    required: true,
  })
  razonSocial: string;

  @property({
    type: 'number',
    required: true,
  })
  importeFactura: number;

  @property({
    type: 'date',
    required: true,
  })
  fechaPagofactura: string;

  @property({
    type: 'string',
    required: true,
  })
  estadoFactura: string;

  @property({
    type: 'number',
    required: true,
  })
  ordenCompra: number;

  @property({
    type: 'object',
    required: true,
  })
  archivoPDF: object;

  @property({
    type: 'object',
    required: true,
  })
  archivoXML: object;


  constructor(data?: Partial<Factura>) {
    super(data);
  }
}

export interface FacturaRelations {
  // describe navigational properties here
}

export type FacturaWithRelations = Factura & FacturaRelations;

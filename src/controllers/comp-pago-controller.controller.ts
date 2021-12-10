import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {CompPago} from '../models';
import {CompPagoRepository} from '../repositories';

export class CompPagoControllerController {
  constructor(
    @repository(CompPagoRepository)
    public compPagoRepository : CompPagoRepository,
  ) {}

  @post('/comp-pagos')
  @response(200, {
    description: 'CompPago model instance',
    content: {'application/json': {schema: getModelSchemaRef(CompPago)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompPago, {
            title: 'NewCompPago',
            exclude: ['idComprobante'],
          }),
        },
      },
    })
    compPago: Omit<CompPago, 'idComprobante'>,
  ): Promise<CompPago> {
    return this.compPagoRepository.create(compPago);
  }

  @get('/comp-pagos/count')
  @response(200, {
    description: 'CompPago model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CompPago) where?: Where<CompPago>,
  ): Promise<Count> {
    return this.compPagoRepository.count(where);
  }

  @get('/comp-pagos')
  @response(200, {
    description: 'Array of CompPago model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CompPago, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CompPago) filter?: Filter<CompPago>,
  ): Promise<CompPago[]> {
    return this.compPagoRepository.find(filter);
  }

  @patch('/comp-pagos')
  @response(200, {
    description: 'CompPago PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompPago, {partial: true}),
        },
      },
    })
    compPago: CompPago,
    @param.where(CompPago) where?: Where<CompPago>,
  ): Promise<Count> {
    return this.compPagoRepository.updateAll(compPago, where);
  }

  @get('/comp-pagos/{id}')
  @response(200, {
    description: 'CompPago model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CompPago, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CompPago, {exclude: 'where'}) filter?: FilterExcludingWhere<CompPago>
  ): Promise<CompPago> {
    return this.compPagoRepository.findById(id, filter);
  }

  @patch('/comp-pagos/{id}')
  @response(204, {
    description: 'CompPago PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompPago, {partial: true}),
        },
      },
    })
    compPago: CompPago,
  ): Promise<void> {
    await this.compPagoRepository.updateById(id, compPago);
  }

  @put('/comp-pagos/{id}')
  @response(204, {
    description: 'CompPago PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() compPago: CompPago,
  ): Promise<void> {
    await this.compPagoRepository.replaceById(id, compPago);
  }

  @del('/comp-pagos/{id}')
  @response(204, {
    description: 'CompPago DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.compPagoRepository.deleteById(id);
  }
}

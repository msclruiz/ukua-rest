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
import {ReqPago} from '../models';
import {ReqPagoRepository} from '../repositories';

export class ReqPagoControllerController {
  constructor(
    @repository(ReqPagoRepository)
    public reqPagoRepository : ReqPagoRepository,
  ) {}

  @post('/req-pagos')
  @response(200, {
    description: 'ReqPago model instance',
    content: {'application/json': {schema: getModelSchemaRef(ReqPago)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReqPago, {
            title: 'NewReqPago',
            exclude: ['idReqPago'],
          }),
        },
      },
    })
    reqPago: Omit<ReqPago, 'idReqPago'>,
  ): Promise<ReqPago> {
    return this.reqPagoRepository.create(reqPago);
  }

  @get('/req-pagos/count')
  @response(200, {
    description: 'ReqPago model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ReqPago) where?: Where<ReqPago>,
  ): Promise<Count> {
    return this.reqPagoRepository.count(where);
  }

  @get('/req-pagos')
  @response(200, {
    description: 'Array of ReqPago model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ReqPago, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ReqPago) filter?: Filter<ReqPago>,
  ): Promise<ReqPago[]> {
    return this.reqPagoRepository.find(filter);
  }

  @patch('/req-pagos')
  @response(200, {
    description: 'ReqPago PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReqPago, {partial: true}),
        },
      },
    })
    reqPago: ReqPago,
    @param.where(ReqPago) where?: Where<ReqPago>,
  ): Promise<Count> {
    return this.reqPagoRepository.updateAll(reqPago, where);
  }

  @get('/req-pagos/{id}')
  @response(200, {
    description: 'ReqPago model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ReqPago, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ReqPago, {exclude: 'where'}) filter?: FilterExcludingWhere<ReqPago>
  ): Promise<ReqPago> {
    return this.reqPagoRepository.findById(id, filter);
  }

  @patch('/req-pagos/{id}')
  @response(204, {
    description: 'ReqPago PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReqPago, {partial: true}),
        },
      },
    })
    reqPago: ReqPago,
  ): Promise<void> {
    await this.reqPagoRepository.updateById(id, reqPago);
  }

  @put('/req-pagos/{id}')
  @response(204, {
    description: 'ReqPago PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() reqPago: ReqPago,
  ): Promise<void> {
    await this.reqPagoRepository.replaceById(id, reqPago);
  }

  @del('/req-pagos/{id}')
  @response(204, {
    description: 'ReqPago DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reqPagoRepository.deleteById(id);
  }
}

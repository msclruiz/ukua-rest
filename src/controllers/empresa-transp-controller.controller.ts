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
import {EmpresaTransp} from '../models';
import {EmpresaTranspRepository} from '../repositories';

export class EmpresaTranspControllerController {
  constructor(
    @repository(EmpresaTranspRepository)
    public empresaTranspRepository : EmpresaTranspRepository,
  ) {}

  @post('/empresa-transps')
  @response(200, {
    description: 'EmpresaTransp model instance',
    content: {'application/json': {schema: getModelSchemaRef(EmpresaTransp)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmpresaTransp, {
            title: 'NewEmpresaTransp',
            exclude: ['idEmpTransp'],
          }),
        },
      },
    })
    empresaTransp: Omit<EmpresaTransp, 'idEmpTransp'>,
  ): Promise<EmpresaTransp> {
    return this.empresaTranspRepository.create(empresaTransp);
  }

  @get('/empresa-transps/count')
  @response(200, {
    description: 'EmpresaTransp model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(EmpresaTransp) where?: Where<EmpresaTransp>,
  ): Promise<Count> {
    return this.empresaTranspRepository.count(where);
  }

  @get('/empresa-transps')
  @response(200, {
    description: 'Array of EmpresaTransp model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(EmpresaTransp, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(EmpresaTransp) filter?: Filter<EmpresaTransp>,
  ): Promise<EmpresaTransp[]> {
    return this.empresaTranspRepository.find(filter);
  }

  @patch('/empresa-transps')
  @response(200, {
    description: 'EmpresaTransp PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmpresaTransp, {partial: true}),
        },
      },
    })
    empresaTransp: EmpresaTransp,
    @param.where(EmpresaTransp) where?: Where<EmpresaTransp>,
  ): Promise<Count> {
    return this.empresaTranspRepository.updateAll(empresaTransp, where);
  }

  @get('/empresa-transps/{id}')
  @response(200, {
    description: 'EmpresaTransp model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(EmpresaTransp, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(EmpresaTransp, {exclude: 'where'}) filter?: FilterExcludingWhere<EmpresaTransp>
  ): Promise<EmpresaTransp> {
    return this.empresaTranspRepository.findById(id, filter);
  }

  @patch('/empresa-transps/{id}')
  @response(204, {
    description: 'EmpresaTransp PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmpresaTransp, {partial: true}),
        },
      },
    })
    empresaTransp: EmpresaTransp,
  ): Promise<void> {
    await this.empresaTranspRepository.updateById(id, empresaTransp);
  }

  @put('/empresa-transps/{id}')
  @response(204, {
    description: 'EmpresaTransp PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() empresaTransp: EmpresaTransp,
  ): Promise<void> {
    await this.empresaTranspRepository.replaceById(id, empresaTransp);
  }

  @del('/empresa-transps/{id}')
  @response(204, {
    description: 'EmpresaTransp DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.empresaTranspRepository.deleteById(id);
  }
}

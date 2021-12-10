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
import {UsuarioOperador} from '../models';
import {UsuarioOperadorRepository} from '../repositories';

export class UsuarioOperadorControllerController {
  constructor(
    @repository(UsuarioOperadorRepository)
    public usuarioOperadorRepository : UsuarioOperadorRepository,
  ) {}

  @post('/usuario-operadors')
  @response(200, {
    description: 'UsuarioOperador model instance',
    content: {'application/json': {schema: getModelSchemaRef(UsuarioOperador)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioOperador, {
            title: 'NewUsuarioOperador',
            exclude: ['idUsuario'],
          }),
        },
      },
    })
    usuarioOperador: Omit<UsuarioOperador, 'idUsuario'>,
  ): Promise<UsuarioOperador> {
    return this.usuarioOperadorRepository.create(usuarioOperador);
  }

  @get('/usuario-operadors/count')
  @response(200, {
    description: 'UsuarioOperador model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UsuarioOperador) where?: Where<UsuarioOperador>,
  ): Promise<Count> {
    return this.usuarioOperadorRepository.count(where);
  }

  @get('/usuario-operadors')
  @response(200, {
    description: 'Array of UsuarioOperador model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UsuarioOperador, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UsuarioOperador) filter?: Filter<UsuarioOperador>,
  ): Promise<UsuarioOperador[]> {
    return this.usuarioOperadorRepository.find(filter);
  }

  @patch('/usuario-operadors')
  @response(200, {
    description: 'UsuarioOperador PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioOperador, {partial: true}),
        },
      },
    })
    usuarioOperador: UsuarioOperador,
    @param.where(UsuarioOperador) where?: Where<UsuarioOperador>,
  ): Promise<Count> {
    return this.usuarioOperadorRepository.updateAll(usuarioOperador, where);
  }

  @get('/usuario-operadors/{id}')
  @response(200, {
    description: 'UsuarioOperador model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UsuarioOperador, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UsuarioOperador, {exclude: 'where'}) filter?: FilterExcludingWhere<UsuarioOperador>
  ): Promise<UsuarioOperador> {
    return this.usuarioOperadorRepository.findById(id, filter);
  }

  @patch('/usuario-operadors/{id}')
  @response(204, {
    description: 'UsuarioOperador PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioOperador, {partial: true}),
        },
      },
    })
    usuarioOperador: UsuarioOperador,
  ): Promise<void> {
    await this.usuarioOperadorRepository.updateById(id, usuarioOperador);
  }

  @put('/usuario-operadors/{id}')
  @response(204, {
    description: 'UsuarioOperador PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() usuarioOperador: UsuarioOperador,
  ): Promise<void> {
    await this.usuarioOperadorRepository.replaceById(id, usuarioOperador);
  }

  @del('/usuario-operadors/{id}')
  @response(204, {
    description: 'UsuarioOperador DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.usuarioOperadorRepository.deleteById(id);
  }
}

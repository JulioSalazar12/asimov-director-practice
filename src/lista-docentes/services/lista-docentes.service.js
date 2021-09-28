import http from '@/core/http-common'
class ListaDocentesService {
    endpoint = '/lista-docentes';

    getAll(){
        return http.get(this.endpoint);
    }
}

export default new ListaDocentesService();
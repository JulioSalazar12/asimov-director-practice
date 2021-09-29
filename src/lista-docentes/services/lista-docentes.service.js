import http from '@/core/http-common'
class ListaDocentesService {
    endpoint = '/listadocentes';

    getAll(){
        return http.get(this.endpoint);
    }
}

export default new ListaDocentesService();
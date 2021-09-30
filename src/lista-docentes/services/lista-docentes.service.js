import http from '@/core/http-common'
class ListaDocentesService {
    endpoint = '/listadocentes';

    getAll(){
        return http.get(this.endpoint);
    }

    getById(id){
        return http.get(`${this.endpoint}/${id}`)
    }
}

export default new ListaDocentesService();
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/employees');
  }

  insertData(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/addEmployees', data);
  }

  deleteData(id){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteEmployees/'+id);
  }

  getEmployeeById(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/employees/'+id);
  }

  updateData(id, data) {
    return this.httpClient.put('http://127.0.0.1:8000/api/updateEmployees/'+id,data);
  }

}


import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  
  providedIn: 'root'
})
export class PessoaService {
   private url = 'http://localhost:4200/api/'
 

  constructor(private http:HttpClient) {}

   //getAll(){
   //  return this.http.get<Pessoa>(this.url);
    //}

    public getAll():Observable<Pessoa[]>{
      return this.http.get<Pessoa[]>(this.url);
  
    }  

   getById(_id: string){
     const urlapi = `${this.url}/${_id}`;
     return this.http.get<Pessoa>(urlapi);
   }

   

   public insert(pessoa: Pessoa):Observable<Pessoa>{
     return this.http.post<Pessoa>(this.url, pessoa);    

   }


  public update(pessoa: Pessoa){
     return this.http.put(this.url, pessoa);

   }

   public remove(id: number):Observable<any> {
    return this.http.delete(this.url)
  }
}

import { Component, OnInit } from '@angular/core';
import {Pessoa} from '../shared/pessoa';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { PessoaService } from '../shared/pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {
  pessoa: Pessoa
  title: string = '';
  

  constructor(private route: ActivatedRoute, private router: Router, private pessoaService: PessoaService) { }

  ngOnInit() {
    this.title = 'Nova pessoa';
    this.pessoa = new Pessoa();

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    if (id) {
      this.pessoaService.getById(id).subscribe(resp => {
        this.pessoa = resp;
        this.title = `Alterando Cadastro:${this.pessoa.nome}`;
      });
    }
  }

  onSubmit(){
    let observable: Observable<any>;
 
if (!this.pessoa._id){
  observable = this.pessoaService.insert(this.pessoa);
  
} else {
      console.log("put")
      observable = this.pessoaService.update(this.pessoa);
      
      
    }

    observable.subscribe(() => {
      this.router.navigate(['/pessoas']);
  });
}

}

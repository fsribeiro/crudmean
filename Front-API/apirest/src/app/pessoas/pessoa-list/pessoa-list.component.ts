import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../shared/pessoa';
import { PessoaService } from '../shared/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {
  title: string = 'Pessoas';
  pessoas: Pessoa[];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.getAll();
  }

 getAll(){
    this.pessoaService.getAll().subscribe(resp => {
      this.pessoas = resp;
    })
  }

  public remove(id: number){
    this.pessoaService.remove(id).subscribe(
      r => {
        this.getAll()
      }
    )
  }
}





import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CredenciaisDTO } from '../models/credenciais.dto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  headers = { 'Content-type': 'application/json'} ;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) {
    }

  ngOnInit(): void {
  }

  login() {
    console.log(this.creds);
    this.http.post("http://localhost:8080/login", this.creds, {headers: this.headers, observe: "response"}).subscribe(res => {
      if(res) {
        this.router.navigateByUrl('/itens');
      } else{
        alert("Authentication failed");
      }
    })
  }

  insertUser() {
    this.http.post("http://localhost:8080/usuarios", this.creds, {observe: "response"}).subscribe(res => {
      console.log(res);
      if(res) {
        alert("Usuário inserido. Email: admin@admin.com e Senha: 123");
        this.router.navigateByUrl('/');
      } else{
        alert("Authentication failed");
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CargarscriptsService } from 'src/app/cargarscripts.service';

@Component({
  selector: 'app-canjea',
  templateUrl: './canjea.component.html',
  styleUrls: ['./canjea.component.css']
})
export class CanjeaComponent implements OnInit {
  usuario_admin!:boolean
usuario_activo!:boolean
  constructor(private cargarscripts: CargarscriptsService, private auth:AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.auth.authState.subscribe(user =>{
      if(user) {
       
        if(user.email=="lokapsos23@gmail.com"){
          this.usuario_admin = true
        }
        else{
          this.usuario_admin = false
        }
      }
      else{
        this.usuario_admin = false
      }

    })
      }
      canjeo(){
        this.auth.authState.subscribe(user=>{
          if(user){
            this.auth.signOut().then(()=>{
              localStorage.removeItem('user');
              alert("Cupón canjeado")
              window.location.reload()
            })
          }
          else
          this.router.navigate(['inicio'])
        })
      }
    
    }
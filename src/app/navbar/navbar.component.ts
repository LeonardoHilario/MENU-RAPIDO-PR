import { Component, OnInit } from '@angular/core';
import { CargarscriptsService } from '../cargarscripts.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario_activo!: boolean;
  
  constructor(private cargarscripts: CargarscriptsService, private auth:AngularFireAuth, private router: Router)
  {cargarscripts.carga([
 "assets/vendor/purecounter/purecounter_vanilla.js",
 "assets/vendor/aos/aos.js",
 "assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
 "assets/vendor/glightbox/js/glightbox.min.js",
 "assets/vendor/isotope-layout/isotope.pkgd.min.js",
 "assets/vendor/swiper/swiper-bundle.min.js",
 "assets/vendor/php-email-form/validate.js"
 ])
}

  ngOnInit(): void {
this.auth.authState.subscribe(user =>{
  if(user) {
    console.log(user.email)
    this.usuario_activo = true
  }
  else{
    this.usuario_activo = false
  }
})
  }
  cerrarsesion(){
    this.auth.authState.subscribe(user=>{
      if(user){
        this.auth.signOut().then(()=>{
          localStorage.removeItem('user');
          alert("¡Sesion Finalizada!")
          window.location.reload()
        })
      }
      else
      this.router.navigate(['inicio'])
    })
  }

}

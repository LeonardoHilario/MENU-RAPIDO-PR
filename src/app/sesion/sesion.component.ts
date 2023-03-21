import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from '@angular/router';
import { CargarscriptsService } from '../cargarscripts.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
form={
  correo:"",
  contrasena:""
}
  constructor(private auth: AngularFireAuth, private router: Router, private cargarscripts:CargarscriptsService) { cargarscripts.carga([
    "assets/vendor/purecounter/purecounter_vanilla.js",
    "assets/vendor/aos/aos.js",
    "assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
    "assets/vendor/glightbox/js/glightbox.min.js",
    "assets/vendor/isotope-layout/isotope.pkgd.min.js",
    "assets/vendor/swiper/swiper-bundle.min.js",
    "assets/vendor/php-email-form/validate.js"
    ])}

  ngOnInit(): void {
    this.auth.authState.subscribe(user =>{
      if (user){
        this.router.navigate(['/inicio'])
      }
    })
  }
iniciarsesion(){
  this.auth.signInWithEmailAndPassword(this.form.correo, this.form.contrasena).then((userCredential) => {
    const user = userCredential.user;
    console.log (user)
    alert("¡Bienvenido/a!")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
}

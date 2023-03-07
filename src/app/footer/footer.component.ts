import { Component, OnInit } from '@angular/core';
import { CargarscriptsService } from '../cargarscripts.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private cargarscripts: CargarscriptsService)
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
  ngOnInit(): void {}}

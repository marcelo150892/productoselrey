import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProveedoresService } from '../../servicios/proveedores.service';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {

  proveedor: any;
  proveedorForm: FormGroup;

  provincias: string [] = ['Selecciona', 'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche',
  'Chiapas', 'Chihuahua', 'Coahuila de Zaragoza', 'Colima', 'Ciudad de México', 'Durango', 'Guanajuato', 'Guerrero',
  'Hidalgo', 'Jalisco', 'Mexico', 'Michoacan de Ocampo', 'Morelos', 'Nayarit', 'Nuevo Leon', 'Oaxaca', 'Puebla',
  'Queretaro de Arteaga', 'Quintana Roo', 'San Luis Potosi', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas',
  'Tlaxcala', 'Veracruz-Llave', 'Yucatan', 'Zacatecas', ];

  constructor(private pf: FormBuilder,
    private proveedorService: ProveedoresService) {  }

ngOnInit() {
this.proveedorForm = this.pf.group({
nombre: ['', Validators.required ],
cif: ['', Validators.required ],
direccion: ['', Validators.required ],
cp: ['', Validators.required ],
localidad: ['', Validators.required ],
provincia: ['', Validators.required ],
telefono: ['', Validators.required ],
email: ['', Validators.required ],
contacto: ['', Validators.required ]
})
}

onSubmit() {
this.proveedor = this.saveProveedor();
this.proveedorService.postProveedor(this.proveedor)
 .subscribe(newpres => {

 })
this.proveedorForm.reset();

}

saveProveedor() {
const saveProveedor = {
nombre: this.proveedorForm.get('nombre').value,
cif: this.proveedorForm.get('cif').value,
direccion: this.proveedorForm.get('direccion').value,
cp: this.proveedorForm.get('cp').value,
localidad: this.proveedorForm.get('localidad').value,
provincia: this.proveedorForm.get('provincia').value,
telefono: this.proveedorForm.get('telefono').value,
email: this.proveedorForm.get('email').value,
contacto: this.proveedorForm.get('contacto').value
}
return saveProveedor;
}
}

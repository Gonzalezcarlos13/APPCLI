import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  constructor(
    private alertCtrl:AlertController
  ) { }

  ngOnInit() {
  }
  rut:string='';
  nombre:string='';
  apellido:string='';
  edad:number=18;
  
  valores=[{
    "rut":"",
    "nombre":"",
    "apellido":"",
    "edad":0
  }]; 

  async grabar(){
    this.valores.push({
      rut:this.rut,
      nombre:this.nombre,
      apellido:this.apellido,
      edad:this.edad
    });    
    localStorage.setItem("datos",JSON.stringify(this.valores));    
    let alerta= await this.alertCtrl.create({
      header:"Alerta",
      message:"Grabo los datos",
      buttons:[
        {
          text:"Cancelar",
          role:"cancel",
          handler:()=>{
          }
        },{
          text:"Ok"          
        }
      ]
    });
    alerta.present();
  }

}

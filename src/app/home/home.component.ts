import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  currentOrientation:string='';
  orientations:string[]= [];
  alarmaEstado:boolean;
  meEstanRobando:boolean;
  constructor(private orientation:ScreenOrientation) { 
     this.alarmaEstado= false; 
  }

  ngOnInit() {
    this.getCurrentOrientation();
    this.observeScreenOrientation();
  }
  

  getCurrentOrientation(){
    console.log(this.orientation.type);
    this.currentOrientation= this.orientation.type;
  }
  
  observeScreenOrientation(){
    this.orientation.onChange()
    .subscribe(()=>  {
      this.currentOrientation= this.orientation.type 
      this.dispararAlarma(this.currentOrientation)
    }
  );
  }


  pulsado(){ 
    this.actualizarEstadoAlarma(); 
    if(this.alarmaEstado==true && this.currentOrientation ==this.orientation.ORIENTATIONS.LANDSCAPE_PRIMARY){
      this.meEstanRobando=true;
     this.dispararAlarmaInicio();
    }else{
      //modal para que ingrese la clave
    }
  }


  actualizarEstadoAlarma(){
    this.alarmaEstado= this.alarmaEstado== false? true : false;
  }
  
  dispararAlarmaInicio(){
    this.dispararAlarma(this.currentOrientation)
  }


  dispararAlarma(orientacion:any){

    if(this.meEstanRobando){
      if(orientacion == this.orientation.ORIENTATIONS.LANDSCAPE_PRIMARY || orientacion == this.orientation.ORIENTATIONS.LANDSCAPE_SECONDARY)
      {//horizontal
        //vibrar 5 seg
        //emitir sonido 5seg
        alert('horizontal')

      }else if(orientacion == this.orientation.ORIENTATIONS.PORTRAIT_PRIMARY || orientacion == this.orientation.ORIENTATIONS.PORTRAIT_SECONDARY ){
        //vertical
        //encender luz 5seg
        //emitir sonido 5seg
        alert('vertical');
      }else{
        alert('izq dere');
      }
    }else{
      console.log('tranqui');
    }

  }
 

}

import { Component, OnInit, NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { SlicePipe } from '@angular/common';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { leaveView } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {
j : any;
kj :any;
lkj :any;
lj :any;
ljk :any;
exe : any;
eeeA  : any;
con : any;
v : any;


constructor(private router: Router,private http: Http) { 
  var t = localStorage.getItem('loginSessId');
  console.log(t);
  
  
  }

 
  ngOnInit(t) {
  var i =t;
  this.http
      .get('http://mms.pphlinz.at/mms_flash_get_v15.php?flag=a&'+i+'&gnr=ch52ne&api=1')
      .map(res =>res.json())
	    .subscribe((data : any) =>
      {
         console.dir(data);
         console.log(data);
         let lesson=data[1];
         
         let lshow = lesson.split("=");
         let lwhen = lshow[1].split("|");
         this.lkj = lwhen;
         console.log(this.lkj);
         this.j = data[2];
         let stringToSplit = this.j;
         let show = stringToSplit.split("=");
         let when = show[1].split("|");
         this.kj = when;
         console.log(when[0]);
		     localStorage.setItem('loginSessId', i);
        
      },
      (error : any) =>
      {
         console.dir(error);
      });
  
  
  }

  


  saverange(){
    var val =((document.getElementById("books") as HTMLInputElement).value);
    
    console.log(val);
var h = this.lkj[val];
console.log(h);
this.http
.get('http://mms.pphlinz.at/mms_flash_get_v15.php?flag=lekt&autor='+h+'&lekt_nr=14&st_lfdnr=68812&api=1')
.map(res =>res.json())
.subscribe((data : any) =>
{
   console.dir(data);
   console.log(data);
let eee = data[3];
let eee1= eee.split("=");
console.log(eee1);
let eee2 = eee1[1].split("|");
console.log(eee2);
this.eeeA = eee2;
console.log(this.eeeA);
console.log("hello");
let ex = data[4];
let ex1 = ex.split("=");
console.log(ex1);
let ex2 = ex1[1].split("|");
this.exe = ex2;
console.log(this.exe);
  
  },
  (error : any) =>
  {
     console.dir(error);
  });

}

exercise(exe){
  
  
    let index =this.exe.indexOf(exe);
  console.log(index);
var g = this.eeeA[index];
this.v = this.eeeA[index];
console.log(this.v);
  console.log(g);
  this.http
  .get('http://mms.pphlinz.at/mms_flash_get_v15.php?flag=uebg_t&lekt_nr='+g+'&st_lfdnr=68812&api=1')
  .map(res =>res.json())
  .subscribe((data : any) =>
  {

    console.dir(data);
    console.log(data);
    let exer = data[1];
    let exer1 = exer.split("=");
    console.log(exer1);
    let exer2 = exer1[1].split("|");
   this.con =exer2;
   console.log(this.con);

     
  },
  (error : any) =>
  {
     console.dir(error);
  });

}


ff(con){
  let index = this.con.indexOf(con);
  console.log(index);
  var id = this.v;
  console.log(id);
  
  localStorage.setItem('lesindex', index);
  localStorage.setItem('lesid', id);
  if(index<4)
  {
  this.router.navigate(['./exercise']);
  }
  else
  {
  this.router.navigate(['./keyboard']);    
  }



}


}
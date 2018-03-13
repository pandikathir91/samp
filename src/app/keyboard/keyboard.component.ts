import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { leaveView } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {
  ttitle:any;
  exname:any;
id:any;
index:any;
constructor(private router: Router,private http: Http)
{

  var id = localStorage.getItem('lesid');
  console.log(id);
  this.id = id;
  var index = localStorage.getItem('lesindex');
  this.index = index;
 }

  ngOnInit() {
    var t = this.id;
    console.log(t);
    var i = this.index;
    this.http
  .get('http://mms.pphlinz.at/mms_flash_get_v15.php?flag=uebg&lekt_nr='+t+'&api=1')
  .map(res =>res.json())
  .subscribe((data : any) =>
  {

    console.dir(data);
    console.log(data);
    let title = data[4];
    let title1 = title.split("=");
    console.log(title1);
    let title2 = title1[1].split("|");
    this.ttitle = title2;
    var en = this.ttitle[i];
    this.exname = en;
    console.log(this.exname);
     
  },
  (error : any) =>
  {
     console.dir(error);
  });
  }

  

}

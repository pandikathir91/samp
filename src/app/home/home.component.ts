import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public data;
public items : Array<any> = [];

 constructor(private router: Router,private http: Http)
 {
 this.data=[];
 
 }
 public log(){
 var val =((document.getElementById("dd") as HTMLInputElement).value);
 console.log(val);
 this.http
      .get('http://mms.pphlinz.at/mms_flash_get_v15.php?flag=1&gnr='+val+'&myVersion=8.0&api=1')
      .map(res => res.json())
      .subscribe((data : any) =>
      {
         console.dir(data);
         this.items = data;
         console.log(this.items);
         this.router.navigate(['./login']);
      },
      (error : any) =>
      {
         console.dir(error);
      });
    }        

	
	public forgot(){
      var mail =((document.getElementById("fm") as HTMLInputElement).value);
      console.log(mail);
    var link = "http://mms.pphlinz.at/mms_flash_get_v15.php?flag=2&suchname="+mail+"&api=1";
    var body = JSON.stringify({ email: mail});


    this.http.post(link,body)
    .subscribe(data => {
         console.log("DATA:", data);
         
         
    },
         err => {
         console.log("ERROR!: ", err);
         
    });
    }

	
	
  ngOnInit() {
  }

  
  
  
}

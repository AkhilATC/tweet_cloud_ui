import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {  FormBuilder } from  '@angular/forms';
import { ApiService } from './api.service';
import { DispalyerComponent } from './dispalyer/dispalyer.component';
import { HttpParams, HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tweety-app';
  public openform = true;
  public image = false;
  contactForm: FormGroup;
  nextData: FormGroup;
  articles = [];
  open = false;
  public mySrc:any;

  favoriteSeason: string;
  seasons: string[] = ['Grab timeline tweets','Get Complete strem','Search'];
 
  constructor(private sanitizer : DomSanitizer,private formBuilder: FormBuilder,private httpClient: HttpClient,private apiService:ApiService,private DispalyerComponent: DispalyerComponent) {
    this.createContactForm();
    this.nextDataForm();
  };
  createContactForm(){
    this.contactForm = this.formBuilder.group({
      consumer_key: [''],  
      consumer_secret: [''],
      access_token_key: [''],
      access_token_secret: [''],
      user_name: ['']
    });
  }
  nextDataForm(){
    this.nextData = this.formBuilder.group({
      tweet_type: [''],  
      count: [''],
      render: [''],
      track: ['']
     
    });

  }
  onSubmit() {
        console.log('Your form data : ', this.contactForm.value );
        this.openform = false;
        var payloads = JSON.stringify(this.contactForm.value);
        console.log(payloads)
        this.apiService.setConfig(payloads)
          .subscribe((data)=>{
            console.log(data);
            
          });
        
    };
    
    onDisplay(){
      console.log('Your form data : ', this.nextData.value);
      var data = this.nextData.value;
      var tweet_type = data.tweet_type;
      var render = data.render;
      // console.log('Am');
      // console.log(download);
      var values = JSON.stringify(this.nextData.value);
      
      if(tweet_type === 'Grab timeline tweets'&& render){
        this.image = true;
        let result = this.apiService.getDataFromTweets(data)
          .subscribe((binaryData)=>{
            // console.log(data);
            this.open=true;
          //  / console.log(JSON.stringify(binaryData));
            console.log(binaryData);
            console.log(typeof binaryData)
            
                this.mySrc = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,'+binaryData);
              
              
            
          });
        
      }else{
        this.apiService.downloadFile(data).subscribe((binaryData) => {

          console.log(binaryData);
          let file = new Blob([binaryData], { type: 'application/vnd.ms-excel;charset=utf-8;' });
          let downloandUrl = window.URL.createObjectURL(file)
          var link = document.createElement("a")
          if(link.download !== undefined) {
            link.setAttribute('href', downloandUrl);
            link.setAttribute('download', 'Report.xlsx');
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link)
          }
        })

      }    
      
      if(tweet_type == "Get Complete strem" && render){
        console.log("Get Complete strem");
        console.log(data);
        let result = this.apiService.getSteamdata(data)
          .subscribe((binaryData)=>{
            // console.log(data);
            this.open=true;
            console.log(binaryData);
            console.log(typeof binaryData)
            
                this.mySrc = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,'+binaryData);
              
              
            
          });
      }else{
        console.log('download')
      }
      
      
    };


     
 
  onClickOpenForm(){
     
     console.log();
     
    }
}

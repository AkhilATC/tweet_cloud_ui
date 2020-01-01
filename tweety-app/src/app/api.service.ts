import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { map, catchError } from "rxjs/operators";




@Injectable({
  providedIn: 'root'
})
export class ApiService {
   

  constructor(private httpClient: HttpClient) { };
    public apiURL = 'http://localhost:9009/';
    public setConfig(configdata:any){
      return this.httpClient.post(`${this.apiURL}set_configuration`,configdata,{headers: {'Content-Type': 'application/json'}});
    };
    public getDataFromTweets(configdata:any){
      let params = new HttpParams();
      // Begin assigning parameters
      console.log('cool')
       params = params.append('count', configdata.count);
      //  params = params.append('download', configdata.download);
      return this.httpClient.get(`${this.apiURL}get_home_timeline_tweets`,{ params: params,'responseType':'text'});
    };
    public downloadFile(configdata:any) {
      let params = new HttpParams();
      // // Begin assigning parameters
      // console.log("calling")
      params = params.append('count', configdata.count);
      params = params.append('download', configdata.download);
    //   // var HTTPOptions = {
    //     headers: new HttpHeaders({
    //        'Accept':'application/vnd.ms-excel;'
    //     }),
    //     'responseType': 'blob'
    //  }
   
       let response = this.httpClient.get(`${this.apiURL}get_home_timeline_tweets`,{params:params,'responseType': 'blob'})
       return response;
    }
    

}

  
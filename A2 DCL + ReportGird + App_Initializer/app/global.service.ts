import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private httpService: HttpService) { }

  load() {

    //check for browsersupport using regex
    //if browser is supported then observable.forkJoin("LoadApplicationConfig","LoadMessageMaster")
    //after receiveing that data store it in Global Object which is nothing but the Dictionary.
    //set browserVersionns
    //load client specific data like carosal images links  + browser support and their messages and all 

    this.httpService.get("assets/appconfig.json", "")
      .subscribe(arg => console.log(arg));


    console.log("this is loading at app initiialise ");
  }

}

export function ConfigLoader(configService: GlobalService) {
  return () => configService.load();
}
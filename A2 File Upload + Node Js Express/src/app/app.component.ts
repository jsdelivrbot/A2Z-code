import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response } from '@angular/http';

import { do, map } from 'rxjs/operators';


const URL = 'http://localhost:3000/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  title = 'app works!';

  ngOnInit() {

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
    };
  }

  constructor(private http: Http, private el: ElementRef) { }

  upload() {

    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    
    let fileCount: number = inputEl.files.length;
    
    let formData = new FormData();
    
    if (fileCount > 0) {
      
      formData.append('photo', inputEl.files.item(0));

      this.http.post(URL, formData).subscribe((res: Response) => {
        console.log(res);
      })

    }
  }
}

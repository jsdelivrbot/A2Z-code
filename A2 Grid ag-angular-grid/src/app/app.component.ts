import { Component, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { TemplateRendererComponent } from './template-renderer/template-renderer.component';

const countries = [
  {country: 'Ireland', continent: 'Europe', language: 'English', greeting: 'Hello' },
  {country: 'Spain', continent: 'Europe', language: 'Spanish', greeting: 'Hola' },
  {country: 'United Kingdom', continent: 'Europe', language: 'English', greeting: 'Hello' },
  {country: 'France', continent: 'Europe', language: 'French', greeting: 'Bonjour' },
  {country: 'Germany', continent: 'Europe', language: '(other)', greeting: 'Hallo' },
  {country: 'Sweden', continent: 'Europe', language: '(other)', greeting: 'Hallå' },
  {country: 'Norway', continent: 'Europe', language: '(other)', greeting: 'Hallo' },
  {country: 'Italy', continent: 'Europe', language: '(other)', greeting: 'Ciao' },
  {country: 'Greece', continent: 'Europe', language: '(other)', greeting: 'Χαίρετε' },
  {country: 'Iceland', continent: 'Europe', language: '(other)', greeting: 'Halló' },
  {country: 'Portugal', continent: 'Europe', language: 'Portuguese', greeting: 'Olá' },
  {country: 'Malta', continent: 'Europe', language: '(other)', greeting: 'Bongu' },
  {country: 'Brazil', continent: 'South America', language: 'Portuguese', greeting: 'Olá' },
  {country: 'Argentina', continent: 'South America', language: 'Spanish', greeting: 'Hola' },
  {country: 'Colombia', continent: 'South America', language: 'Spanish', greeting: 'Hola' },
  {country: 'Peru', continent: 'South America', language: 'Spanish', greeting: 'Hola' },
  {country: 'Venezuela', continent: 'South America', language: 'Spanish', greeting: 'Hola' },
  {country: 'Uruguay', continent: 'South America', language: 'Spanish', greeting: 'Hola' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('likeCell') likeCell: TemplateRef<any>;
  @ViewChild('greetCell') greetCell: TemplateRef<any>;

  liked = [];

  gridOptions: GridOptions = {
    rowData: countries
  }

  ngAfterViewInit(): void {
    this.gridOptions.api.setColumnDefs([
      {
        headerName: 'Country',
        field: 'country'
      }, {
        headerName: 'Continent',
        field: 'continent'
      }, {
        headerName: 'Language',
        field: 'language'
      }, {
        headerName: 'Greet',
        colId: 'greet',
        cellRendererFramework: TemplateRendererComponent,
        cellRendererParams: {
          ngTemplate: this.greetCell
        }
      }, {
        headerName: 'Like',
        colId: 'like',
        cellRendererFramework: TemplateRendererComponent,
        cellRendererParams: {
          ngTemplate: this.likeCell
        }
      }
    ]);
  }

  like(row: any) {
    this.liked.push(row.country);
  }

  greet(row: any) {
    alert(`${ row.country } says "${ row.greeting }!`);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) { }

  contactProfile = {
    profile: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/gaurav.talele.9',
        iconUrl: './assets/icons/facebook.svg'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/gauravtalele',
        iconUrl: './assets/icons/twitter.svg'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/gauravtalele1102/',
        iconUrl: './assets/icons/instagram.svg'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/gaurav-talele-68958170/',
        iconUrl: './assets/icons/linkedin.svg'
      }
    ],
    work: [
      {
        name: 'GitHub',
        url: 'https://github.com/Gaurav9969351313',
        iconUrl: './assets/icons/github.svg'
      },
     
      {
        name: 'Stackoverflow',
        url: 'https://stackoverflow.com/users/8069812/gaurav-talele',
        iconUrl: './assets/icons/stackoverflow.svg'
      }
     
    ]
  };


  //     {
  //       name: 'Pluralsight',
  //       url: '',
  //       iconUrl: './assets/icons/pluralsight.svg'
  //     }

//    {
//   name: 'Hackerrank',
//     url: '',
//       iconUrl: './assets/icons/hackerrank.svg'
// },

  email = {
    name: 'Email',
    url: 'mailto: career.gyt@gmail.com',
    iconUrl: './assets/icons/email.svg'
  };

  vscodeMarketplace = {
    name: 'VSCode Extension Publisher',
    url: '',
    iconUrl: './assets/icons/vscode.svg'
  };

  ngOnInit() { }

  onBackClick() {
    this.router.navigateByUrl('/');
  }
}

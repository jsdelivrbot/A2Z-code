import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UIEntity } from "./uiEntity.model";


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public title: string;
  public okText: string;
  public type: string;
  public htmlContent: string;
  public htmlFileData: string;

  public uiEntity: UIEntity;

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DialogComponent>) { }

  @HostListener('window:keyup.esc',['$event']) 
  onkeyup(event)
  { 
    console.log("Esc to close dialog");
    if (this.dialogRef.componentInstance.uiEntity) {
      this.dialog.openDialogs[this.dialog.openDialogs.length - 1].close();
    }
    else { 
      this.dialogRef.close();
    }
  }

  ngOnInit() {
    if (this.type == "comp") {
      this.title = this.uiEntity.name;

    } else if (this.type == "alert") {

    } else if (this.type == "file") {
      this.htmlContent = this.htmlFileData.toString();
    } else if (this.type == "confirm") {

    }
  }

  activate(instance) {
    this.uiEntity.compRef = instance;
  }

  closeDialog(index) {
    this.dialogRef.close(index);
  }

}

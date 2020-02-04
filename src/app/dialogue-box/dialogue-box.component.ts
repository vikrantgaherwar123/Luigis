import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue-box',
  templateUrl: './dialogue-box.component.html',
  styleUrls: ['./dialogue-box.component.css']
})
export class DialogueBoxComponent implements OnInit {

  style: number;
  title: string;
  message: string;
  messagea: string;
  information: string;
  button: number;
  allow_outside_click: boolean;

  constructor(public dialogRef: MatDialogRef<DialogueBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private renderer2: Renderer2, ) {
    this.style = data.style || 0;
    this.title = data.title;
    this.message = data.message;
    this.messagea = data.messagea;
    this.information = data.information;
    this.button = data.button || 0;
    this.dialogRef.disableClose = !data.allow_outside_click || false;
  }



  ngOnInit() {
  }

  onOk(event) {
    if (event.keyCode === 13 || event.keyCode === 32 || event.button === 0)
      this.dialogRef.close({ result: "ok" });
  }
  
  onCancel() {
    this.dialogRef.close({ result: "cancel" });
  }
  onYes() {
    this.dialogRef.close({ result: "yes" });
  }
  onNo() {
    this.dialogRef.close({ result: "no" });
  }
  onAccept() {
    this.dialogRef.close({ result: "accept" });
  }
  onReject() {
    this.dialogRef.close({ result: "reject" });
  }

  goProcess(event) {
    if (event.keyCode === 13) {
      // if (this.mobileNo.trim().length == 0) {
      //   this.message = "Please Enter Mobile No.";
      //   MessageBox.show(this.dialog, this.message, "");
      //   return false;
      // }
      // if (this.mobileNo.trim().length !== 10) {
      //   this.message = "Enter a valid 10 digit mobile no.";
      //   MessageBox.show(this.dialog, this.message, "");
      //   return false;
      // }
      // this.process();
    }
  }
}

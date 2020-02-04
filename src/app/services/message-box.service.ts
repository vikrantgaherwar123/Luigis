import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogueBoxComponent } from '../dialogue-box/dialogue-box.component';

@Injectable({
  providedIn: 'root'
})
export class MessageBox {

  static show(dialog: MatDialog, message, messagea, button = "", title = "Vicky",
    information = "", allow_outside_click = false,
    style = 1, width = "300px") {
    const dialogRef = dialog.open(DialogueBoxComponent, {
      data: {
        title: title || "Vicky",
        message: message,
        messagea: messagea,
        information: information,
        button: button || '0',
        style: style || 0,
        allow_outside_click: allow_outside_click || false
      },
      width: width
    });
    return dialogRef.afterClosed();
  }
}

export enum MessageBoxButton {
  Ok = '0',
  OkCancel = '1',
  YesNo = '2',
  AcceptReject = '3'
}

export enum MessageBoxStyle {
  Simple = 0,
  Full = 1
};
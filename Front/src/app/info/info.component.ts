import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnChanges{

  @Input() isNumber: boolean = false;
  isString: boolean = false;
  isDate: boolean = false;
  @Input() k:boolean;
  @Input() z:boolean;
  fieldName: string;
  fieldValue: string;
  fieldTypeName: string;
  newInfo: Info;
  addedInfo: Info[] = [];

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  setTypeNum(){
    this.isNumber = true;
  }

  addInfo(name: string, index: number) {
    this.newInfo = new class implements Info {
      fieldName: string = name;
      fieldType: string = "G";
      id: number = index;
      showTools: boolean = false;
      value: string;
    }
    this.newInfo.fieldName = name;
    this.fieldTypeName = "NoN"
    if(this.isString)
      this.fieldTypeName = "STR"
    if(this.isDate)
      this.fieldTypeName = "DATE"
    if(this.isNumber)
      this.fieldTypeName = "NUM"

    this.newInfo.fieldType = this.fieldTypeName
    console.log(this.newInfo)
    this.addedInfo.push(this.newInfo)
    console.log(this.addedInfo)
  }


  numChecked() {
    const elNum = document.getElementById("numCheckbox") as HTMLInputElement | null
    const elStr = document.getElementById("strCheckbox") as HTMLInputElement | null
    const elDate = document.getElementById("dateCheckbox") as HTMLInputElement | null
    if(this.isNumber) {
      this.isNumber = false;
    } else {
      this.isNumber = true;
      if (elDate != null) {
        if (elDate.checked) {
          elDate.checked = false;
          this.isDate = false;
        }
      }
      if (elStr != null) {
        if(elStr.checked) {
          elStr.checked = false;
          this.isString = false;
        }
      }
    }
  }
  strChecked() {
    console.log(this.k)
    const elNum = document.getElementById("numCheckbox") as HTMLInputElement | null
    const elStr = document.getElementById("strCheckbox") as HTMLInputElement | null
    const elDate = document.getElementById("dateCheckbox") as HTMLInputElement | null
    if(this.isString) {
      this.isString = false;
    } else {
      this.isString = true;
      if (elDate != null) {
        if(elDate.checked) {
          elDate.checked = false;
          this.isDate = false;
        }
      }
      if (elNum != null) {
        if(elNum.checked!) {
          elNum.checked = false;
          this.isNumber = false
        }
      }
    }
  }
  dateChecked() {
    const elNum = document.getElementById("numCheckbox") as HTMLInputElement | null
    const elStr = document.getElementById("strCheckbox") as HTMLInputElement | null
    const elDate = document.getElementById("dateCheckbox") as HTMLInputElement | null
    if(this.isDate) {
      this.isDate = false;
    } else {
      this.isDate = true;
      if (elNum != null) {
        if(elNum.checked) {
          elNum.checked = false;
          this.isNumber = false;
        }
      }
      if (elStr != null) {
        if(elStr.checked) {
          elStr.checked = false;
          this.isString = false;
        }
      }
    }
  }
  log() {
    console.log("ej")
  }


}

class InfoComponentImpl extends InfoComponent {
}
export interface Item {
  isNumber: boolean;
  isString: boolean;
}
export interface Info {
  id: number
  fieldType: string
  fieldName: string
  value: string
  showTools: boolean
}

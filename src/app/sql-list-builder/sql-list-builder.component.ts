import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sql-list-builder',
  templateUrl: './sql-list-builder.component.html',
  styleUrls: ['./sql-list-builder.component.scss']
})
export class SqlListBuilderComponent implements OnInit {

  sqlListBuilder: FormGroup;
  submitted = false;
  success = false;
  results = '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.sqlListBuilder = this.formBuilder.group({
      items: ['', Validators.required],
    });
  }

  onSubmit(buttonType) {
    console.log(buttonType)
    var braceOne = '';
    var braceTwo = '';
    if(buttonType==="SQL") {
      braceOne = '(';
      braceTwo = ')';
    }
    if(buttonType==="PYTHON"){
      braceOne = '[';
      braceTwo = ']';    
    }
    this.submitted = true;

    if (this.sqlListBuilder.invalid) {
        return;
    }

    this.success = true;
    this.results = braceOne+'\n';
    var lines = this.sqlListBuilder.get('items').value.split('\n');
    for(var i = 0;i < lines.length;i++){
        //code here using lines[i] which will give you each line
        this.results += '\''+ lines[i] +'\'';
        if (i == lines.length-1) {
          this.results += '\n'+braceTwo;
          //  block of code to be executed if the condition is true
        } else { 
          this.results += ',\n';
          //  block of code to be executed if the condition is false
        }
    }
    
    

  }

}

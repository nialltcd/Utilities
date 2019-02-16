import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-diff',
  templateUrl: './list-diff.component.html',
  styleUrls: ['./list-diff.component.scss']
})
export class ListDiffComponent implements OnInit {

  listDiffer: FormGroup;
  submitted = false;
  aOnly = '';
  bOnly = '';
  aUnionB = '';
  aIntersectionB = '';
  aUnionBLessAIntersectionB = '';
  aOnlyCount = '';
  bOnlyCount = '';
  aUnionBCount = '';
  aIntersectionBCount = '';
  aUnionBLessAIntersectionBCount = '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.listDiffer = this.formBuilder.group({
      listOne: ['', Validators.required],
      listTwo: ['', Validators.required],
    });
  }

  onSubmit() {
    var a = this.listDiffer.get('listOne').value.split('\n');
    if(a[0] === '')
      a = []
    var b = this.listDiffer.get('listTwo').value.split('\n');
    if(b[0] === '')
      b = []
    // Filter duplicates out of the lists
    var unique = function(xs) {
      return xs.filter(function(x, i) {
        return xs.indexOf(x) === i
      })
    }

    var format = function(xs) {
      return xs.filter(function(x, i) {
        return xs.indexOf(x) === i
      })
    }

    var aUnique = unique(a);
    var bUnique = unique(b);
    
    // Get unique elements in the lists
    var aOnly = aUnique.filter( function( el ) {
      return !bUnique.includes( el );
    } );
    var bOnly = bUnique.filter( function( el ) {
      return !aUnique.includes( el );
    } );

    // Union of the two lists
    var aUnionB = aOnly.concat(bUnique);

    // Intersection of the two lists
    var aIntersectionB = aUnionB.filter( function( el ) {
      return aUnique.includes( el ) &&  bUnique.includes( el );
    } );

    // (A U B) - (A n B)
    var aUnionBLessAIntersectionB = aUnionB.filter( function( el ) {
      return !aIntersectionB.includes( el ) ;
    } );

    this.submitted = true;
    this.aOnly = aOnly.join('\n')
    this.bOnly = bOnly.join('\n')
    this.aUnionB = aUnionB.join('\n')
    this.aIntersectionB = aIntersectionB.join('\n')
    this.aUnionBLessAIntersectionB = aUnionBLessAIntersectionB.join('\n')
    this.aOnlyCount = aOnly.length;
    this.bOnlyCount = bOnly.length;
    this.aUnionBCount = aUnionB.length;
    this.aIntersectionBCount = aIntersectionB.length;
    this.aUnionBLessAIntersectionBCount = aUnionBLessAIntersectionB.length;

    console.log("A Only");
    console.log(this.aOnly);
    console.log("B Only");
    console.log(this.bOnly); 
    console.log("A U B");
    console.log(aUnionB);    
    console.log("A n B");
    console.log(aIntersectionB);   
    console.log("(A U B) - (A n B)");
    console.log(aUnionBLessAIntersectionB);   
  }
}

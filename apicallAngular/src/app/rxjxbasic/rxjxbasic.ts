import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';
import { filter, from, interval, map, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjxbasic',
  standalone:true,
   imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './rxjxbasic.html',
  styleUrl: './rxjxbasic.css',
})
export class Rxjxbasic implements OnInit{
  studentName$ = new Subject();
  rollNo$ = new Subject<number>();

  constructor(){
    setTimeout(() =>{
      this.studentName$.next("Vimal chaudhary 23");
      this.rollNo$.next(20021);
    },4000);
  }
  ngOnInit(): void {
    this.studentName$.subscribe((res:any)=>{
      debugger;
    })
    this.rollNo$.subscribe((res:any)=>{
      debugger;
    })
  }
}



























 /* noList$ = from([11,2,2,3,4,5,5,66,44,3,221,11,222]);

  rollNoList = of([11,12,13,14,15,16,17,18]);

  searchControl = new FormControl();
  constructor(){

    this.searchControl.valueChanges.subscribe((res:any)=>{
      console.log(res);
    })
    /*this.noList$.pipe(
      filter(num => num % 2 == 0)
    ).subscribe((res:number) =>{
      console.log(res)
    })*/


      /*this.rollNoList.pipe(
        map((result) => result.filter(m => m %2 == 0))
      ).subscribe((result) => {
        console.log(result);
      })
  }

}


























/*
  cityList:string[] = ["Noida","Meerut","Basti","Kanpur"];

  cityList$ = of(["Noida","Meerut","Basti","Kanpur"]); // all list
  cityList2$ = from(["Noida","Meerut","Basti","Kanpur"]); // one by one

  myInterval$ = interval(2000);

  constructor(){
    this.myInterval$.subscribe((res:number)=>{
      console.log('Timer' + res);
    })


    this.cityList$.subscribe((cityData:string[]) =>{
      debugger;
      console.log(cityData)
    }
    );

    this.cityList2$.subscribe((res:string)=>{
      debugger;
    })
    const myObs$ = new Observable(value =>{
      value.next("this is demo text")
    });

    myObs$.subscribe(message => {
      //debugger;
      console.log(message)
    }
    )
  }
}*/

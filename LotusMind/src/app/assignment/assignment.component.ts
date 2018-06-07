import { Component, OnInit } from '@angular/core';

import { AssignmentService } from './shared/assignment.service';

@Component({
    selector: 'assignment-section',
    templateUrl: './assignment.component.html',
    styles:[
        ` 
           button { margin:5px; }
           span { display: block; }
           
        `
    ]
})

export class AssignmentComponent implements OnInit{

    assignment: any[]
    constructor(private assignmentService: AssignmentService){
        
    }
    
    ngOnInit(){
        this.assignment = this.assignmentService.getAssignments()
    }
    

}
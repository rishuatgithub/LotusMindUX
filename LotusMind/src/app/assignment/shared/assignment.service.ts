import { Injectable } from '@angular/core';

@Injectable()
export class AssignmentService{
    
    getAssignments(){
        return ASSIGNMENT
    }
}

const ASSIGNMENT = [
    {
        assignment_id: 1,
        assignment: 'Tables',
        subject: 'Mathematics',
        due_date: '06.09.2017',
        hours_required: 40,
        is_graded: 'Yes',
        mark_as_complete: 'Yes'
    },
    {
        assignment_id: 2,
        assignment: 'Inorganic Bond',
        subject: 'Physics',
        due_date: '06.10.2017',
        hours_required: 20,
        is_graded: 'Yes',
        mark_as_complete: 'No'
    },
    {
        assignment_id: 3,
        assignment: 'Unit 1 - Introduction',
        subject: 'Physics',
        due_date: '06.09.2017',
        hours_required: 10,
        is_graded: 'No',
        mark_as_complete: 'No'
    }
]
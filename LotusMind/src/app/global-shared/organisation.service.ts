import { Injectable } from '@angular/core';

@Injectable()
export class OrganisationService{

    getAllOrgs(){
        return ORGANISATION
    }

}


const ORGANISATION = [
    {
        org_id:1,
        org_name:'Kendriya Vidyalaya',
        org_display_name:'Kendriya Vidyalaya - Berhampore',
        address_l1:'',
        address_l2:'',
        city:'Berhampore',
        county:'Murshidabad',
        state:'West Bengal',
        country:'India',
        postal_code:'742101',
        mobile:1,
        social_id:0
    },
    {
        org_id:2,
        org_name:'Kendriya Vidyalaya',
        org_display_name:'Kendriya Vidyalaya - Ordinance Factory',
        address_l1:'',
        address_l2:'',
        city:'Dum Dum, Kolkata',
        county:'North 24 Parganas',
        state:'West Bengal',
        country:'India',
        postal_code:'700074',
        mobile:2,
        social_id:0
    }
]
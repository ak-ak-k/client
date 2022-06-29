import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenucomponentComponent } from 'src/app/online-offlinestores/online-offline/menucomponent/menucomponent.component';

@Component({
  selector: 'app-foodproduct',
  templateUrl: './foodproduct.component.html',
  styleUrls: ['./foodproduct.component.scss'],
})
export class FoodproductComponent implements OnInit {
  
  
  cat$food_and_beverages = {
        id:"food_and_beverages", title:"Food & Beverages", icon:"", anim:"", img:"", rank:0, count:0,
        items:[// food & beverages
            {id:"sc-food_and_beverages-bakery", icon:"", anim:"", img:"assets/cat/food_and_beverages/bakery.webp", name:"Bakery", type:"food_and_beverages", rank:0, count:0 },
            {id:"sc-food_and_beverages-cafe", icon:"", anim:"", img:"", name:"Cafe", type:"food_and_beverages", rank:0, count:0},
            {id:"sc-food_and_beverages-restaurants", icon:"", anim:"", img:"", name:"Restaurants", type:"food_and_beverages", rank:0, count:0},
            {id:"sc-food_and_beverages-clubs_and_bars", icon:"", anim:"", img:"", name:"Clubs & Bars", type:"food_and_beverages", rank:0, count:0},
        ]
    };
  
  
  
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(mode: any) {
    const dialogRef = this.dialog.open(MenucomponentComponent, {
      data: mode,
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '70%',
      width: '100%',
      panelClass: 'full-screen-modal',
    });
  }
  
  
  
  
  
  
  const x = [

    {
        id:"healthcare", title:"Healthcare", icon:"", anim:"", img:"", rank:0, count:0,
        items:[// Healthcare
            {id:"sc-healthcare-dermat", icon:"", anim:"", img:"", name:"Dermat", type:"healthcare", rank:0, count:0},
            {id:"sc-healthcare-dentist", icon:"", anim:"", img:"", name:"Dentist", type:"healthcare", rank:0, count:0},
            {id:"sc-healthcare-general-physician", icon:"", anim:"", img:"", name:"General Physician", type:"healthcare", rank:0, count:0},
            {id:"sc-healthcare-ent", icon:"", anim:"", img:"", name:"Ent", type:"healthcare", rank:0, count:0},
            {id:"sc-healthcare-ophthal", icon:"", anim:"", img:"", name:"Ophthal", type:"healthcare", rank:0, count:0},
            {id:"sc-healthcare-child-specialist", icon:"", anim:"", img:"", name:"Child Specialist", type:"healthcare", rank:0, count:0},
            {id:"sc-healthcare-diagnostic-centre", icon:"", anim:"", img:"", name:"Diagnostic centre", type:"healthcare", rank:0, count:0},
            {id:"sc-healthcare-mental-health", icon:"", anim:"", img:"", name:"Mental Health", type:"healthcare", rank:0, count:0},
            {id:"sc-healthcare-general-surgery", icon:"", anim:"", img:"", name:"General Surgery", type:"healthcare", rank:0, count:0},
            {id:"sc-healthcare-homeopathy", icon:"", anim:"", img:"", name:"Homeopathy", type:"healthcare", rank:0, count:0},
            {id:"sc-healthcare-physiotherapy", icon:"", anim:"", img:"", name:"Physiotherapy", type:"healthcare", rank:0, count:0},
            {id:"sc-healthcare-ayurveda", icon:"", anim:"", img:"", name:"Ayurveda", type:"healthcare", rank:0, count:0},
        ]
    },

    {
        id:"food_and_beverages", title:"Food & Beverages", icon:"", anim:"", img:"", rank:0, count:0,
        items:[// food & beverages
            {id:"sc-food_and_beverages-bakery", icon:"", anim:"", img:"", name:"Bakery", type:"food_and_beverages", rank:0, count:0 },
            {id:"sc-food_and_beverages-cafe", icon:"", anim:"", img:"", name:"Cafe", type:"food_and_beverages", rank:0, count:0},
            {id:"sc-food_and_beverages-restaurants", icon:"", anim:"", img:"", name:"Restaurants", type:"food_and_beverages", rank:0, count:0},
            {id:"sc-food_and_beverages-clubs_and_bars", icon:"", anim:"", img:"", name:"Clubs & Bars", type:"food_and_beverages", rank:0, count:0},
        ]
    },

    {
        id:"electronics", title:"Electronics", icon:"", anim:"", img:"", rank:0, count:0,
        items:[// Electronics
            {id:"sc-electronics-televisions_and_large_appliances", icon:"", anim:"", img:"", name:"Televisions & large appliances", type:"electronics", rank:0, count:0},
            {id:"sc-electronics-accessories", icon:"", anim:"", img:"", name:"Accessories", type:"electronics", rank:0, count:0},
            {id:"sc-electronics-mobile_phones", icon:"", anim:"", img:"", name:"Mobile Phones", type:"electronics", rank:0, count:0},
        ]
    },

    {
        id:"fitness", title:"Fitness", icon:"", anim:"", img:"", rank:0, count:0,
        items:[// fitness
            {id:"sc-fitness-pre_natal_classes", icon:"", anim:"", img:"", name:"Pre-natal classes", type:"fitness", rank:0, count:0},
            {id:"sc-fitness-dance_studios", icon:"", anim:"", img:"", name:"Dance Studios", type:"fitness", rank:0, count:0},
            {id:"sc-fitness-yoga", icon:"", anim:"", img:"", name:"Yoga", type:"fitness", rank:0, count:0},
            {id:"sc-fitness-fitness_studios", icon:"", anim:"", img:"", name:"Fitness Studios", type:"fitness", rank:0, count:0},
            {id:"sc-fitness-gym", icon:"", anim:"", img:"", name:"Gym", type:"fitness", rank:0, count:0},
        ]
    },

    {
        id:"fashion_brand", title:"Fashion brand", icon:"", anim:"", img:"", rank:0, count:0,
        items:[// Fashion brand
            {id:"sc-fashion_brand-kids_fashion", icon:"", anim:"", img:"", name:"Kids Fashion", type:"fashion_brand", rank:0, count:0},
            {id:"sc-fashion_brand-mens_fashion", icon:"", anim:"", img:"", name:"Mens Fashion", type:"fashion_brand", rank:0, count:0},
            {id:"sc-fashion_brand-womens_fashion", icon:"", anim:"", img:"", name:"Womens Fashion", type:"fashion_brand", rank:0, count:0},
        ]
    },

    {
        id:"salons_and_spa", title:"Salons & Spa", icon:"", anim:"", img:"", rank:0, count:0,
        items:[// Salons & Spa
            {id:"sc-salons_and_spa-unisex_salon", icon:"", anim:"", img:"", name:"Unisex Salon", type:"salons_and_spa", rank:0, count:0},
            {id:"sc-salons_and_spa-women_salon", icon:"", anim:"", img:"", name:"Women Salon", type:"salons_and_spa", rank:0, count:0},
            {id:"sc-salons_and_spa-men_salon", icon:"", anim:"", img:"", name:"Men Salon", type:"salons_and_spa", rank:0, count:0},
            {id:"sc-salons_and_spa-children_salon", icon:"", anim:"", img:"", name:"Children Salon", type:"salons_and_spa", rank:0, count:0},
            {id:"sc-salons_and_spa-nail_spa", icon:"", anim:"", img:"", name:"Nail Spa", type:"salons_and_spa", rank:0, count:0},
            {id:"sc-salons_and_spa-unisex_spa", icon:"", anim:"", img:"", name:"Unisex Spa", type:"salons_and_spa", rank:0, count:0},
        ]
    },

    {
        id:"professionals", title:"Professionals", icon:"", anim:"", img:"", rank:0, count:0,
        items:[// Professionals
            {id:"sc-professionals-chemists", icon:"", anim:"", img:"", name:"Chemists", type:"professionals"},
            {id:"sc-professionals-architects", icon:"", anim:"", img:"", name:"Architects", type:"professionals"},
            {id:"sc-professionals-lawyers", icon:"", anim:"", img:"", name:"Lawyers", type:"professionals"},
            {id:"sc-professionals-designers", icon:"", anim:"", img:"", name:"Designers", type:"professionals"},
            {id:"sc-professionals-teachers", icon:"", anim:"", img:"", name:"Teachers", type:"professionals"},
        ]
    },

    {
        id:"supermarket", title:"Supermarket", icon:"", anim:"", img:"", rank:0, count:0,
        items:[// Supermarket
        ]
    },

];
  
  }
  
  
  
  
}

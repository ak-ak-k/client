import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerhowitworks',
  templateUrl: './customerhowitworks.component.html',
  styleUrls: ['./customerhowitworks.component.scss'],
})
export class CustomerhowitworksComponent implements OnInit {
  open = false;
  custhowitworks: Array<any> = [];
  shownGroup: any = null;

  constructor() {
    this.custhowitworks.push(
      {
        ques: 'What is Refr cash ?',
        ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremquesapiente nostrum soluta pariatur, consequatur dolorum magnamvoluptatibuseius perferendis hic non praesentium veritatis quod animi quo explicaboautrecusandae.',
      },
      {
        ques: 'Value of Refr cash ?',
        ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremquesapiente nostrum soluta pariatur, consequatur dolorum magnamvoluptatibuseius perferendis hic non praesentium veritatis quod animi quo explicaboautrecusandae.',
      },
      {
        ques: 'How to earn Refr Cash?',
        ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremquesapiente nostrum soluta pariatur, consequatur dolorum magnamvoluptatibuseius perferendis hic non praesentium veritatis quod animi quo explicaboautrecusandae.',
      },
      {
        ques: 'Where can you spend Refr cash ?',
        ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremquesapiente nostrum soluta pariatur, consequatur dolorum magnamvoluptatibuseius perferendis hic non praesentium veritatis quod animi quo explicaboautrecusandae.',
      },
      {
        ques: 'How to withdraw Refr cash ?',
        ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremquesapiente nostrum soluta pariatur, consequatur dolorum magnamvoluptatibuseius perferendis hic non praesentium veritatis quod animi quo explicaboautrecusandae.',
      },
      {
        ques: 'Validity of Refr cash ?',
        ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremquesapiente nostrum soluta pariatur, consequatur dolorum magnamvoluptatibuseius perferendis hic non praesentium veritatis quod animi quo explicaboautrecusandae.',
      },
      {
        ques: 'How to redeem Refr cash on offline purchases ?',
        ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremquesapiente nostrum soluta pariatur, consequatur dolorum magnamvoluptatibuseius perferendis hic non praesentium veritatis quod animi quo explicaboautrecusandae.',
      },
      {
        ques: 'How is Refr cash credited for online stores?',
        ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremquesapiente nostrum soluta pariatur, consequatur dolorum magnamvoluptatibuseius perferendis hic non praesentium veritatis quod animi quo explicaboautrecusandae.',
      },
      {
        ques: 'What happens to my cashback if I return an online order ?',
        ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremquesapiente nostrum soluta pariatur, consequatur dolorum magnamvoluptatibuseius perferendis hic non praesentium veritatis quod animi quo explicaboautrecusandae.',
      }
    );
  }

  toggleGroup(group: number) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  }

  isGroupShown(group: any) {
    return this.shownGroup === group;
  }

  ngOnInit(): void {}
}

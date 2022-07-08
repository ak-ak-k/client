import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
declare let window: any;

export interface UserData {
  name: string;
  email: string;
  phone: string;
  exist: boolean;
  selected: boolean;
}

export interface Contact {
  contactId: string;
  displayName?: string;
  // phoneNumbers: PhoneNumber[];
  // emails: EmailAddress[];
  photoThumbnail?: string;
  organizationName?: string;
  organizationRole?: string;
  birthday?: string;
}

@Component({
  selector: 'app-customercode',
  templateUrl: './customercode.component.html',
  styleUrls: ['./customercode.component.scss'],
})
export class CustomercodeComponent implements OnInit {
  listofscontact: string = '';
  displayedColumns: string[] = ['check', 'name', 'action'];
  dataSource!: MatTableDataSource<UserData>;

  showData = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.syncContact();
    }, 3000);
  }
  async syncContact() {
    // await Contacts.getContacts().then(result => {
    let result: any;
    if (result != undefined) {
      for (let i = 0; i < result.contacts.length; i++) {
        const element = result.contacts[i];
        if (
          element.displayName &&
          element.contactId &&
          element.phoneNumbers.length
        ) {
          const newCon: any[] = [
            {
              displayName: element.displayName,
              contactId: element.contactId,
              phoneNumber: element.phoneNumbers[0].number,
            },
          ];
          // contacts.push(element)
          this.dataSource = new MatTableDataSource(newCon);
        }
      }
    }
    const users: any[] = [
      {
        name: 'Name1',
        email: 'email1@example.com',
        phone: '9167452128',
        exist: true,
        selected: false,
      },
      {
        name: 'Name2',
        email: 'email2@example.com',
        phone: '8879751140',
        exist: false,
        selected: false,
      },
      {
        name: 'Name1',
        email: 'email1@example.com',
        phone: '1234567000',
        exist: true,
        selected: false,
      },
      {
        name: 'Name2',
        email: 'email2@example.com',
        phone: '1236547001',
        exist: false,
        selected: false,
      },
      {
        name: 'Name1',
        email: 'email1@example.com',
        phone: '1234567002',
        exist: true,
        selected: false,
      },
      {
        name: 'Name2',
        email: 'email2@example.com',
        phone: '1234567003',
        exist: false,
        selected: false,
      },
      {
        name: 'Name1',
        email: 'email1@example.com',
        phone: '1234567004',
        exist: true,
        selected: false,
      },
      {
        name: 'Name2',
        email: 'email2@example.com',
        phone: '1234567005',
        exist: false,
        selected: false,
      },
      {
        name: 'Name1',
        email: 'email1@example.com',
        phone: '1234567006',
        exist: true,
        selected: false,
      },
      {
        name: 'Name2',
        email: 'email2@example.com',
        phone: '1234567007',
        exist: false,
        selected: false,
      },
      {
        name: 'Name1',
        email: 'email1@example.com',
        phone: '1234567008',
        exist: true,
        selected: false,
      },
      {
        name: 'Name2',
        email: 'email2@example.com',
        phone: '1234567009',
        exist: false,
        selected: false,
      },
      {
        name: 'Name1',
        email: 'email1@example.com',
        phone: '1234567010',
        exist: true,
        selected: false,
      },
      {
        name: 'Name2',
        email: 'email2@example.com',
        phone: '1234567011',
        exist: false,
        selected: false,
      },
      {
        name: 'Name1',
        email: 'email1@example.com',
        phone: '1234567012',
        exist: true,
        selected: false,
      },
      {
        name: 'Name2',
        email: 'email2@example.com',
        phone: '1234567013',
        exist: false,
        selected: false,
      },
      {
        name: 'Name1',
        email: 'email1@example.com',
        phone: '1234567014',
        exist: true,
        selected: false,
      },
      {
        name: 'Name2',
        email: 'email2@example.com',
        phone: '1234567015',
        exist: false,
        selected: false,
      },
      {
        name: 'Name1',
        email: 'email1@example.com',
        phone: '1234567016',
        exist: true,
        selected: false,
      },
      {
        name: 'Name2',
        email: 'email2@example.com',
        phone: '1234567017',
        exist: false,
        selected: false,
      },
      {
        name: 'Name1',
        email: 'email1@example.com',
        phone: '1234567018',
        exist: true,
        selected: false,
      },
      {
        name: 'Name2',
        email: 'email2@example.com',
        phone: '9167452019',
        exist: false,
        selected: false,
      },

      {
        name: 'Name2',
        email: 'email2@example.com',
        phone: '1234567020',
        exist: false,
        selected: false,
      },
      {
        name: 'Name1',
        email: 'email1@example.com',
        phone: '1234567021',
        exist: true,
        selected: false,
      },
      {
        name: 'Name2',
        email: 'email2@example.com',
        phone: '1234567022',
        exist: false,
        selected: false,
      },
      {
        name: 'Name1',
        email: 'email1@example.com',
        phone: '1234567023',
        exist: true,
        selected: false,
      },
      {
        name: 'Name2',
        email: 'email2@example.com',
        phone: '1234567024',
        exist: false,
        selected: false,
      },
      {
        name: 'Name1',
        email: 'email1@example.com',
        phone: '1234567025',
        exist: true,
        selected: false,
      },
      {
        name: 'Name2',
        email: 'email2@example.com',
        phone: '1234567026',
        exist: false,
        selected: false,
      },
      {
        name: 'Name1',
        email: 'email1@example.com',
        phone: '1234567027',
        exist: true,
        selected: false,
      },
      {
        name: 'Name2',
        email: 'email2@example.com',
        phone: '9167974119',
        exist: false,
        selected: false,
      },
    ];
    this.dataSource = new MatTableDataSource(users);
    // }).catch(err => {
    // });
  }

  // ngAfterViewInit() {
  // setTimeout(() => {
  // this.execute();
  // }, 3000);
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // execute(){
  // Create 100 users
  // const users: any[] = [
  //    {name:"Name1", email:"email1@example.com", phone:"+919876543210", exist: true},
  //    {name:"Name2", email:"email2@example.com", phone:"+919876543211", exist: false}
  // ];
  // this.dataSource = new MatTableDataSource(users);
  // this.dataSource.paginator = this.paginator;
  // this.dataSource.sort = this.sort;
  // this.showData = true;
  // }
  invitesmsuser() {
    window.SMS.sendSMS(
      [
        '9167452128',
        '1234567801',
        '1234567802',
        '1234567803',
        '1234567804',
        '1234567805',
        '1234567806',
        '1234567807',
        '1234567808',
        '1234567809',
        '1234567810',
        '1234567811',
        '1234567812',
        '1234567813',
        '1234567814',
        '1234567815',
        '1234567816',
        '1234567817',
        '1234567818',
        '1234567819',
        '1234567820',
        '1234567821',
        '1234567822',
        '1234567823',
      ],
      'Text message for multiple recipients',
      (result: any) => {
        alert('send'); // should be 'OK' string
      },
      (error: any) => {
        alert(error);
      }
    );
    // var userAgent = window.navigator.userAgent;
    // let message = 'hi i rec https://refr.club/ to visit';
    // if(!this.auth.resource.appMode){
    // const url =
    //   'sms:' + (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i))
    //     ? ''
    //     : ';' + 'body=' + message;
    // window.open(url, '_blank');
    // }
    // else{
    // this.socialSharing.shareViaSMS(message, "")
    // }
  }

  invitewhatappuser() {}

  check(row: any) {
    row.selected = !row.selected;
    console.log(this.dataSource.data.length);
    console.log(this.dataSource.data[1].selected);
  }

  selectall() {
    this.listofscontact = '';
    for (let i = 0; i < this.dataSource.data.length; i++) {
      // if (i < 20) {
      // console.log(this.dataSource.data[i].phone)
      var comma = this.listofscontact == '' ? '' : ',';
      this.listofscontact =
        this.listofscontact + comma + this.dataSource.data[i].phone;
      this.dataSource.data[i].selected = true;
      // }
      // else {
      // console.log("full = " + this.dataSource.data[i].phone);
      // }
    }
    console.log('listofphones' + this.listofscontact);
  }

  sendall() {
    var userAgent = window.navigator.userAgent;
    let message = 'hi i rec https://refr.club/ to visit';
    let comma = '';
    // if(!this.auth.resource.appMode){
    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
      comma = '';
    } else {
      comma = ';';
    }
    const url = 'sms:' + comma + this.listofscontact + '?' + 'body=' + message;
    alert('URl = ' + url);
    window.open(url, '_blank');
    // }
    // else{
    // this.socialSharing.shareViaSMS(message, "")
    // }
  }
}

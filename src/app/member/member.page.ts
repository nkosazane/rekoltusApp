import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {

  users = [];
  policy;
  policyPrice;
  policyMembers;
  policyName;

  constructor(private db:AngularFirestore,
    private angularFireAuth:AngularFireAuth,) { 

    }

  ngOnInit() {
    var user = this.angularFireAuth.auth.currentUser;  
    this.db.collection('users').snapshotChanges().subscribe(data => {
      this.users = data.map(e => {
        return{
          key: e.payload.doc.id,
          data: e.payload.doc.data()
        } 
      }); 
      this.users.forEach(element => {
        if(user.uid == element.key){
          this.policy = element.data.plan;
          this.policyMembers = element.data.members;
          this.policyName = element.data.memberName;
        }
      });
      if (this.policy == "Standard Plan") {
        this.policyPrice = 150;
      }else if (this.policy == "Premium Plan") {
        this.policyPrice = 200;
      }
      console.log(this.policy +' - '+this.policyPrice +' - '+this.policyMembers +' - '+this.policyName);
    })
  }

  
  // ionViewWillEnter(){
  //   var user = this.angularFireAuth.auth.currentUser;  
  //   this.db.collection('users').snapshotChanges().subscribe(data => {
  //     this.users = data.map(e => {
  //       return{
  //         key: e.payload.doc.id,
  //         data: e.payload.doc.data()
  //       } 
  //     }); 
  //     this.users.forEach(element => {
  //       if(user.uid == element.key){
  //         this.policy = element.data.plan;
  //         this.policyMembers = element.data.members;
  //       }
  //     });
  //     if (this.policy == "Standard Plan") {
  //       this.policyPrice = 150;
  //     }else if (this.policy == "Premium Plan") {
  //       this.policyPrice = 200;
  //     }
  //     console.log(this.policy +' - '+this.policyPrice +' - '+this.policyMembers);
  //   })
  // }

}


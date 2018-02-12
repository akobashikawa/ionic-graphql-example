import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  data = {};
  query = gql`
    query {
      helloworld
    }
  `;

  constructor(public navCtrl: NavController, apollo: Apollo) {
    apollo.query({ query: this.query }).subscribe(res => {
      this.data = res.data;
      console.log(this.data);
    });
  }
}

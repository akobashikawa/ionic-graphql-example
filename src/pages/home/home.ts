import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

const query = gql`
  query {
    helloworld
  }
`;

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  loading: boolean;
  data: {};

  constructor(public navCtrl: NavController, private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery<any>({
        query: query
      })
      .valueChanges.subscribe(({ data }) => {
        this.loading = data.loading;
        console.log(data);
        this.data = data;
      });
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

const query = gql`
  query Hello($name: String) {
    hello(name: $name)
  }
`;

@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage implements OnInit {
  loading: boolean;
  data: {};

  constructor(public navCtrl: NavController, private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery<any>({
        query: query,
        variables: {
          name: "Rulo"
        }
      })
      .valueChanges.subscribe(({ data }) => {
        this.loading = data.loading;
        console.log(data);
        this.data = data;
      });
  }
}

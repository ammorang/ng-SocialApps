"use strict";

const post = {
  bindings: {
    post: "<"
  },
  template: `
  <section>
    <h5>{{ $ctrl.post.title}}</h5> 
    <h6="bodyText">{{ $ctrl.post.body}}</h6>
  </section>
  `,
};


angular
  .module("app")
  .component("post", post);
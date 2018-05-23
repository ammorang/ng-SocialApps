"use strict";

const post = {
  bindings: {
    totalPosts: "<"
  },
  template: `
  <section>
    <div ng-repeat="post in $ctrl.totalPosts"> 
    <p>{{ post.title}}</p> {{ post.thoughts}}</div>
  </section>
  `,
};


angular
  .module("app")
  .component("post", post);


// The post component displays a single post in the list.
// It has one inbound binding called post.


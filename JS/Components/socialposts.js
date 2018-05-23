"use strict";

const socialPosts = {
  template: `
    <div>
      <h1 style='color: blue'>Twatter</h1>
      <post-form on-submit="$ctrl.onSubmit(newPost);"></post-form>
      <post total-posts="$ctrl.totalPosts"></post>
    </div>
  `,
  controller: function($element) {
    const vm = this;
    vm.totalPosts = [];
    vm.onSubmit = (newPost) => {
      vm.totalPosts.push({
        title: newPost.title,
        thoughts: newPost.thoughts
      });
    };
  }
};


angular
  .module("app")
  .component("socialPosts", socialPosts);


// The socialPosts component is the parent component.
// It owns the list of posts.
// Its template contains the ng-repeat for posts and the “New Post” button.
// The other two components are created inside of its template.

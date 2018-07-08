"use strict";

const socialPosts = {
  template: `
    <div>
      <h1 class="appTitle">Social Posts</h1>
      <post-form add-post="$ctrl.addPost(newPost);"></post-form>
      <section class="allposts">
        <post class="posted" ng-repeat="post in $ctrl.allPosts" post="post"></post> 
      </section>
    </div>
  `,
  controller: function() {
    const vm = this;
    vm.allPosts = [];
    vm.addPost = (newPost) => {
      vm.allPosts.push({
        title: newPost.title,
        body: newPost.body
      });      
    };
  }
};


angular
  .module("app")
  .component("socialPosts", socialPosts);


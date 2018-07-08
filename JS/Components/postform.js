"use strict";

const postForm = {
  bindings: {
    addPost: "&"
  },
  template: `
  <button class="button new" ng-click="$ctrl.showForm();">New Post</button>
  <form class="newform" ng-submit="$ctrl.addPost({ newPost: $ctrl.newPost}); $ctrl.closeForm();" ng-show="$ctrl.visible">
    <p class="close" ng-click="$ctrl.closeForm();">Close</p>
    <h4>New Post</h4>
    <input class="title" type="text" placeholder="Post Title" ng-model="$ctrl.newPost.title">
    <textarea class="post" placeholder="Type Here" expand-on-focus ng-model="$ctrl.newPost.body"></textarea>
    <button class="button">Add Post</button>
    </form>  
  `,
  controller: function() {
    const vm = this;
    vm.showForm = () => {
      vm.visible = true;
    };
    vm.closeForm = () => {
      vm.visible = false;
      vm.newPost = {};
    };
  }
};

angular
  .module("app")
  .component("postForm", postForm);

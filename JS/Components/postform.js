"use strict";

const postForm = {
  bindings: {
    onSubmit: "&"
  },
  template: `
  <form ng-submit="$ctrl.onSubmit({ newPost: $ctrl.newPost});">
    <input style='border-radius: 5px' type="text" placeholder="Title" ng-model="$ctrl.newPost.title"><br>
    <textarea style='border-radius: 5px;' rows="8" cols="40" placeholder="Make noise here..." ng-model="$ctrl.newPost.thoughts"></textarea><br>
    <button>New Post</button>
  </form>  
  `
};



angular
  .module("app")
  .component("postForm", postForm);


// The postForm component displays the new post form.
// It has one outbound binding called onSubmit.
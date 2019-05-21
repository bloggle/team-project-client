const store = require('./../store')
const showBlogsTemplate = require('../templates/blog-listing.handlebars')
const showBlogOpenTemplate = require('../templates/blog-open.handlebars')

const getBlogSuccess = function (data, comments) {
  store.blogs = data.blogs
}

const showBlogs = function () {
  const showBlogsHtml = showBlogsTemplate({ blogs: store.blogs, comments: store.comments })
  $('.content').html(showBlogsHtml)
  $('#create-blog-form').fadeIn(500)
  $('.content').show()
}

const blogsBack = function () {
  $('.content').fadeOut(500)
}

const getBlogFailure = function () {
  $('#user-div').fadeIn(50)
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(2000)
}

const onCreateBlogSuccess = function (data) {
  $('form').trigger('reset')
  $('#user-div').fadeIn(50)
  $('#user-div').html('Your blog has been created!')
  $('#user-div').fadeOut(2000)
}

const onCreateBlogFailure = function (data) {
  $('#user-div').fadeIn(50)
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(2000)
}

const onUpdateBlogSuccess = function (data) {
  $('form').trigger('reset')
  $('#user-div').fadeIn(50)
  $('#user-div').html('Your blog has been updated!')
  $('#user-div').fadeOut(2000)
}

const onUpdateBlogFailure = function (data) {
  $('#user-div').fadeIn(50)
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(2000)
}

const blogUpdateButtonClick = function () {
  event.preventDefault()
}

const onDestroyBlogSuccess = function (data) {
  $('#user-div').fadeIn(50)
  $('#user-div').html('Your blog has been destroyed!')
  $('#user-div').fadeOut(2000)
}

const onDestroyBlogFailure = function (data) {
  $('#user-div').fadeIn(50)
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(2000)
}

const onOpen = function () {
  const showBlogOpenHtml = showBlogOpenTemplate({ blogs: store.blogs, comments: store.comments })
  $('.content').html(showBlogOpenHtml)
}

module.exports = {
  getBlogSuccess,
  getBlogFailure,
  onCreateBlogSuccess,
  onCreateBlogFailure,
  onUpdateBlogSuccess,
  onUpdateBlogFailure,
  onDestroyBlogSuccess,
  onDestroyBlogFailure,
  showBlogs,
  blogsBack,
  blogUpdateButtonClick,
  onOpen
}

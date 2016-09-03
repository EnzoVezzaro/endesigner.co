(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

jQuery(document).ready(function ($) {
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
	   
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	offset_opacity = 1200,
	   
	//duration of the top scrolling animation (in ms)
	scroll_top_duration = 700,
	   
	//grab the "back to top" link
	$back_to_top = $(".cd-top");

	//hide or show the "back to top" link
	$("#vapecloudshop_content").on("scroll", function () {
		$(this).scrollTop() > offset ? $back_to_top.addClass("cd-is-visible") : $back_to_top.removeClass("cd-is-visible cd-fade-out");
		if ($(this).scrollTop() > offset_opacity) {
			$back_to_top.addClass("cd-fade-out");
		}
	});

	//smooth scroll to top
	$back_to_top.on("click", function (event) {
		event.preventDefault();
		$("body,html").animate({
			scrollTop: 0 }, scroll_top_duration);
	});
});

},{}]},{},[1]);

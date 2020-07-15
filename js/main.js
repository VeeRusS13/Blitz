$(function () {
	$(".slider").slick({
		arrows: false,
		dots: true,
	});
	$(".blog-slider").slick({
		arrows: false,
		dots: true,
	});
	$(".menu__btn").click(function () {
		$(".menu__list").toggleClass("active");
		$(".slider").toggleClass("filter");
		$(".blog").toggleClass("filter");
		$(".example").toggleClass("filter");
		$(".footer").toggleClass("filter");
		$("aside").toggleClass("filter");
		$("section").toggleClass("filter");
		$("main").toggleClass("filter");
	});
	$(".work__category-li").click(function () {
		$(this).addClass("exception").removeClass("other");
		$(".work__category-li").addClass("other");
	});
	$(".category--1").click(function () {});
	$(".category--2").click(function () {});
	$(".category--3").click(function () {
		alert("d");
	});
	$(".category--4").click(function () {
		alert("d");
	});
});

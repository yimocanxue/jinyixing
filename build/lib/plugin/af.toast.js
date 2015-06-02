(function($){"use strict";$.fn.toast=function(opts){return new Toast(this[0],opts)};var Toast=function(){var Toast=function(containerEl,opts){typeof containerEl=="string"||containerEl instanceof String?this.container=document.getElementById(containerEl):this.container=containerEl;if(!this.container){window.alert("Error finding container for toast "+containerEl);return}if(typeof opts=="string"||typeof opts=="number")opts={message:opts};this.addCssClass=opts.addCssClass?opts.addCssClass:"",this.message=opts.message||"",this.delay=opts.delay||this.delay,this.position=opts.position||"",this.addCssClass+=" "+this.position,this.type=opts.type||"",this.container=$(this.container),this.container.find(".afToastContainer").length===0&&this.container.append("<div class='afToastContainer'></div>"),this.container=this.container.find(".afToastContainer"),this.container.removeClass("tr br tl bl tc bc").addClass(this.addCssClass),opts.autoClose===!1&&(this.autoClose=!1),this.show()};return Toast.prototype=
{addCssClass:null,message:null,delay:5e3,el:null,container:null,timer:null,autoClose:!0,show:function(){var self=this,markup="<div  class='afToast "+this.type+"'>"+"<div>"+this.message+"</div>"+"</div>";this.el=$(markup).get(0),this.container.append(this.el);var $el=$(this.el),height=this.el.clientHeight;$el.addClass("hidden"),setTimeout(function(){$el.css("height",height),$el.removeClass("hidden")},20),this.autoClose&&(this.timer=setTimeout(function(){self.hide()},this.delay)),$el.bind("click",function(){self.hide()})},hide:function(){var self=this;clearTimeout(this.timer),$(this.el).unbind("click").addClass("hidden"),$(this.el).css("height","0px"),!$.os.ie&&!$.os.android?setTimeout(function(){self.remove()},300):self.remove()},remove:function(){var $el=$(this.el);$el.remove()}},Toast}();$.afui.toast=function(opts){$(document.body).toast(opts)},$.afui.registerDataDirective("[data-toast]",function(item){var $item=$(item),message=$item.attr("data-message")||"";if(message.length===0)return;
var position=$item.attr("data-position")||"tr",type=$item.attr("data-type"),autoClose=$item.attr("data-auto-close")==="false"?!1:!0,delay=$item.attr("data-delay")||0,opts={message:message,position:position,delay:delay,autoClose:autoClose,type:type};$(document.body).toast(opts)})})(jQuery);
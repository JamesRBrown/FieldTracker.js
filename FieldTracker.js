/*
  Title: FieldTracker
	Author: James R Brown
	Version: 1.0	
	Requires: jQuery v1.2.3+, CompositeStateMachine.js
  License:
    The MIT License (MIT)
    Copyright (c) 2013 James R. Brown
  	
  	Permission is hereby granted, free of charge, to any person obtaining 
  	a copy of this software and associated documentation files (the "Software"), 
  	to deal in the Software without restriction, including without limitation 
  	the rights to use, copy, modify, merge, publish, distribute, sublicense, 
  	and/or sell copies of the Software, and to permit persons to whom the Software 
  	is furnished to do so, subject to the following conditions:
  	
  	The above copyright notice and this permission notice shall be included in 
  	all copies or substantial portions of the Software.
  	
  	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
  	INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
  	PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
  	HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
  	CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
  	OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

function FieldTracker (cssClass) {
  this.cssClass = cssClass;
	this.CSM = new CompositeStateMachine(cssClass);
}

FieldTracker.prototype.add = function(operateOver, state){
	return $(this.CSM.add(operateOver, state)).addClass(this.cssClass);
}

FieldTracker.prototype.remove = function(operateOver, state){
	if(typeof state != "undefined"){
		return $(this.CSM.absent(this.CSM.remove(operateOver, state))).removeClass(this.cssClass);
	}else{
		return $(this.CSM.remove($('.'+this.cssClass))).removeClass(this.cssClass);
	}
	
}

FieldTracker.prototype.absent = function(operateOver, state){
	return this.CSM.absent(operateOver, state);
}

FieldTracker.prototype.present = function(operateOver, state){
	return this.CSM.present(operateOver, state);
}

FieldTracker.prototype.tracking = function(){
	return $('.'+this.cssClass);
}

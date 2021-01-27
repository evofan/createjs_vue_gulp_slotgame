(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.autoplay_off = function() {
	this.initialize(img.autoplay_off);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,50);


(lib.autoplay_on = function() {
	this.initialize(img.autoplay_on);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,50);


(lib.gamebackground_760x420 = function() {
	this.initialize(img.gamebackground_760x420);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,760,420);


(lib.gamelogo = function() {
	this.initialize(img.gamelogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,461,104);


(lib.pic_black_fade = function() {
	this.initialize(img.pic_black_fade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.sound_normal = function() {
	this.initialize(img.sound_normal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,76);


(lib.sound_off = function() {
	this.initialize(img.sound_off);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,76);


(lib.spin_normal = function() {
	this.initialize(img.spin_normal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,130);


(lib.spin_off = function() {
	this.initialize(img.spin_off);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,130);


(lib.spin_over = function() {
	this.initialize(img.spin_over);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,130);


(lib.symbol1 = function() {
	this.initialize(img.symbol1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.symbol10 = function() {
	this.initialize(img.symbol10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.symbol2 = function() {
	this.initialize(img.symbol2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.symbol3 = function() {
	this.initialize(img.symbol3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.symbol4 = function() {
	this.initialize(img.symbol4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.symbol5 = function() {
	this.initialize(img.symbol5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.symbol6 = function() {
	this.initialize(img.symbol6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.symbol7 = function() {
	this.initialize(img.symbol7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.symbol8 = function() {
	this.initialize(img.symbol8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.symbol9 = function() {
	this.initialize(img.symbol9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.pic_word_plate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzGuIAAtbIPnAAIAANbg");
	this.shape.setTransform(50,43);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,86);


(lib.pic_spin_over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.spin_over();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,130);


(lib.pic_spin_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.spin_off();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,130);


(lib.pic_spin_normal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.spin_normal();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,130);


(lib.pic_sound_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.sound_off();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,76);


(lib.pic_sound_normal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.sound_normal();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,76);


(lib.pic_reel_pic_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.symbol10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.pic_reel_pic_09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.symbol9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.pic_reel_pic_08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.symbol8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.pic_reel_pic_07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.symbol7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.pic_reel_pic_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.symbol6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.pic_reel_pic_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.symbol5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.pic_reel_pic_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.symbol4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.pic_reel_pic_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.symbol3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.pic_reel_pic_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.symbol2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.pic_reel_pic_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.symbol1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.pic_paper_r_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shaoe
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF33").s().p("AhCgCIBUhBIAxBDIg/BEg");
	this.shape.setTransform(-6.675,-6.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-13.5,13.3,13.5);


(lib.pic_paper_r_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgZA0QgfgRgYgJQANgNAVgmIAZgsIBmANIhKB+IgggSg");
	this.shape.setTransform(-8.125,-7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-14,16.2,14);


(lib.pic_paper_r_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Ag7ApIgIg5IgDgeIAzgJQAugKAsgMQgCADgJAnQgJAmgCAsQAAgBhlAgQgCgIgFgdgAAxAvIAAAAIAAAAg");
	this.shape.setTransform(-7.1,-7.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-15.5,14.2,15.5);


(lib.pic_paper_r_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATAtIhNgZIAigvIAbglIA4AUIgBAhQAAAfABAtQgFgKgjgKg");
	this.shape.setTransform(-5.9,-6.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-13,11.8,13);


(lib.pic_paper_r_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6BE0F").s().p("Agag0IArANIAKA3IgrAlg");
	this.shape.setTransform(-2.7,-5.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-10.6,5.4,10.6);


(lib.pic_paper_r_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF33CC").s().p("AALBEQgPgIgtgRQAOgZgGgqQgGgrgCgFIBiAAQABACgCApQgBApgUA5QAAABAAABQAAABgBAAQAAABgBAAQAAAAgBAAQgEAAgJgFg");
	this.shape.setTransform(-4.9429,-7.2992);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-14.6,9.9,14.6);


(lib.pic_paper_l_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF33").s().p("AgnA4QgDgCgCgiQgDgiAYgpIBEATQgNAhAAAVQgBAWABABQhAAPgHAAIAAAAg");
	this.shape.setTransform(4.5132,-5.597);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11.2,9.1,11.2);


(lib.pic_paper_l_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AACAjIgbg7IAzgKIAABFg");
	this.shape.setTransform(2.55,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7,5.1,7);


(lib.pic_paper_l_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Agzg7IAWgEQATgDAKAHQAfAuAKAfQALAhgBABIhLANg");
	this.shape.setTransform(5.1542,-6.5057);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13,10.3,13);


(lib.pic_paper_l_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgoAhIAAhIQAkAJAWgDIAXgFQgEAEgIBDIgbAFIgNACQgRAAgMgHgAApgmIAAAAIAAAAg");
	this.shape.setTransform(4.125,-3.9407);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.9,8.3,7.9);


(lib.pic_paper_l_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2AvQAJgcgDgjQgEgkgCgDIBpAAQAFAZgCAkIgDApQgfACghAFQgKACgIAAQgRAAgGgJg");
	this.shape.setTransform(5.4641,-5.6327);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11.2,11,11.2);


(lib.pic_paper_l_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgGAsQgXgMgfgDIAihUQACgBAcgBQAdAAAcANQgKAMgPAcQgPAbgEAjQgBgCgWgMg");
	this.shape.setTransform(6.125,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11.6,12.3,11.6);


(lib.pic_auto_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.autoplay_on();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,50);


(lib.pic_auto_off = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.autoplay_off();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,50);


(lib.mc_triangle = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzH0IHzvnIH0Png");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_triangle, new cjs.Rectangle(0,0,100,100), null);


(lib.mc_square_gray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_square_gray, new cjs.Rectangle(0,0,10,10), null);


(lib.mc_square_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_square_black, new cjs.Rectangle(0,0,10,10), null);


(lib.mc_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.gamelogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_logo, new cjs.Rectangle(0,0,461,104), null);


(lib.mc_hit_area = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AoUEOQhnAAhKhPQhIhPgBhwQABhuBIhQQBKhPBnAAIQoAAQBoAABJBPQBKBQgBBuQABBwhKBPQhJBPhoAAg");
	this.shape.setTransform(75.5,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_hit_area, new cjs.Rectangle(-2.7,-2,156.5,54), null);


(lib.mc_fade = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.pic_black_fade();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_fade, new cjs.Rectangle(0,0,20,20), null);


(lib.mc_bg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// bitmap
	this.instance = new lib.gamebackground_760x420();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_bg, new cjs.Rectangle(0,0,760,420), null);


(lib.mc_word_o = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0033").s().p("AisDUQg+hMAAiHQAAiIA+hLQA+hMBuAAQBvAAA+BMQA+BLAACIQAACHg+BLQg+BMhvAAQhvAAg9hLgAhJiOQgaAzAABcQAABcAaAyQAaAyAvAAQAwAAAagyQAagyAAhcQAAhcgagzQgagygwAAQgvAAgaAyg");
	this.shape.setTransform(354.375,-22.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// pic_word_plate
	this.instance = new lib.pic_word_plate("single",0);
	this.instance.parent = this;
	this.instance.setTransform(354.35,-22.65,1,1,0,0,0,50,43);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_word_o, new cjs.Rectangle(304.4,-65.6,100,86), null);


(lib.mc_word_n = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0033").s().p("ABBEWIinmVIAAGVIhsAAIAAorICSAAICnGUIAAmUIBsAAIAAIrg");
	this.shape.setTransform(354.375,-22.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// pic_word_plate
	this.instance = new lib.pic_word_plate("single",0);
	this.instance.parent = this;
	this.instance.setTransform(354.35,-22.65,1,1,0,0,0,50,43);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_word_n, new cjs.Rectangle(304.4,-65.6,100,86), null);


(lib.mc_word_i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0033").s().p("Ag/EWIAAorIB/AAIAAIrg");
	this.shape.setTransform(354.375,-22.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// pic_word_plate
	this.instance = new lib.pic_word_plate("single",0);
	this.instance.parent = this;
	this.instance.setTransform(354.35,-22.65,1,1,0,0,0,50,43);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_word_i, new cjs.Rectangle(304.4,-65.6,100,86), null);


(lib.mc_word_g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0033").s().p("AiVDWQhHhJAAiEQAAiMBLhNQBLhOCGAAQAmAAAjAGQAjAFAgAKIgHBmQgbgQgegGQgdgHgkAAQhMAAgqAyQgrAzAABcQAABdAlAzQAkAxBDAAQALAAAMgCQALgDAMgEIAAiDIhHAAIAAhdIDAAAIAAEoQghAPgsAIQgsAHgzAAQh/AAhHhJg");
	this.shape.setTransform(354.375,-22.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// pic_word_plate
	this.instance = new lib.pic_word_plate("single",0);
	this.instance.parent = this;
	this.instance.setTransform(354.35,-22.65,1,1,0,0,0,50,43);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_word_g, new cjs.Rectangle(304.4,-65.6,100,86), null);


(lib.mc_word_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0033").s().p("Ai2EWIAAorICrAAQBcABAtAiQAsAiABBIQAAAzgaAhQgaAggyAKQA6AKAcAhQAbAiABA8QAABNgxAlQgxAlhlAAgAg8C4IAfAAQAuAAAVgSQAWgQgBgnQABgogWgRQgVgSguAAIgfAAgAg8gxIAdAAQApAAATgPQATgQAAgjQAAgkgTgRQgTgQgrAAIgbAAg");
	this.shape.setTransform(354.35,-22.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// pic_word_plate
	this.instance = new lib.pic_word_plate("single",0);
	this.instance.parent = this;
	this.instance.setTransform(354.35,-22.65,1,1,0,0,0,50,43);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_word_b, new cjs.Rectangle(304.4,-76.7,125.60000000000002,101.7), null);


(lib.mc_reel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1));

	// pic_reel_pic
	this.instance = new lib.pic_reel_pic_01("single",0);
	this.instance.parent = this;

	this.instance_1 = new lib.pic_reel_pic_02("single",0);
	this.instance_1.parent = this;

	this.instance_2 = new lib.pic_reel_pic_03("single",0);
	this.instance_2.parent = this;

	this.instance_3 = new lib.pic_reel_pic_04("single",0);
	this.instance_3.parent = this;

	this.instance_4 = new lib.pic_reel_pic_05("single",0);
	this.instance_4.parent = this;

	this.instance_5 = new lib.pic_reel_pic_06("single",0);
	this.instance_5.parent = this;

	this.instance_6 = new lib.pic_reel_pic_07("single",0);
	this.instance_6.parent = this;

	this.instance_7 = new lib.pic_reel_pic_08("single",0);
	this.instance_7.parent = this;

	this.instance_8 = new lib.pic_reel_pic_09("single",0);
	this.instance_8.parent = this;

	this.instance_9 = new lib.pic_reel_pic_10("single",0);
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,336);


(lib.mc_paper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

	// pic_paper
	this.instance = new lib.pic_paper_l_01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-64.8,203.95,0.5172,0.5172,0,0,0,6.1,-5.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:6,scaleX:0.9426,scaleY:1,skewX:60.0001,skewY:-119.9998,x:-2.5,y:155.95},8).to({scaleX:0.8134,rotation:119.9999,skewX:0,skewY:0,x:67.45,y:121.75},9).to({regX:6.1,scaleX:1,rotation:0,x:93.7,y:71.95},12).to({alpha:0.0117,mode:"single"},3).to({_off:true},1).wait(11));

	// pic_paper
	this.instance_1 = new lib.pic_paper_l_02("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45.85,205.8,0.3273,0.3273,0,0,0,5.5,-5.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.7182,scaleY:1,skewY:180,x:-2.8,y:129.3},16).to({scaleY:1.0446,rotation:180,skewY:0,x:-9.2,y:143.7},8).to({scaleY:0.8783,rotation:0,skewY:180,x:-5.6,y:99.7},6).to({scaleX:1,scaleY:1,skewY:0,x:22.15,y:50.45},3).to({alpha:0.0117,mode:"single"},3).to({_off:true},1).wait(7));

	// pic_paper
	this.instance_2 = new lib.pic_paper_l_03("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-42.8,160.55,1,1,0,0,0,4.1,-4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({scaleX:0.5488,scaleY:0.5316,skewX:180,x:7.25,y:109.65},7).to({regX:4.2,scaleX:0.6162,scaleY:0.6863,rotation:-149.9998,skewX:0,x:51.05,y:64.3},3).to({scaleX:0.8066,scaleY:0.887,rotation:0,skewX:89.999,skewY:-90,x:46.2,y:34},17).to({regX:4.1,scaleX:1,scaleY:1,skewX:0,skewY:0,x:65.4,y:6.3},8).to({alpha:0.0117,mode:"single"},3).to({_off:true},1).wait(5));

	// pic_paper
	this.instance_3 = new lib.pic_paper_l_04("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50.45,173.9,1,1,0,0,0,5.2,-6.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({scaleX:1.4078,skewY:180,x:-28.35,y:162.6},25).to({regX:5.1,scaleX:1.0797,scaleY:0.8538,skewX:-135,skewY:45,x:12.55,y:139.25},4).to({regX:5.2,scaleX:1,scaleY:1,skewX:0,skewY:0,x:50.9,y:120.35},7).to({alpha:0.0117,mode:"single"},3).to({_off:true},1).wait(4));

	// pic_paper
	this.instance_4 = new lib.pic_paper_l_05("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-47.1,192.95,1,1,0,0,0,2.6,-3.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({scaleX:1.0588,scaleY:0.8857,rotation:180,x:-26.7,y:170.95},16).to({scaleX:1.2249,scaleY:0.658,rotation:60,x:-15.35,y:155.35},11).to({scaleX:1,scaleY:1,rotation:0,x:2.6,y:130.25},7).to({alpha:0.0117,mode:"single"},3).to({_off:true},1).wait(6));

	// pic_paper
	this.instance_5 = new lib.pic_paper_l_06("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-63.2,190.55,1,1,0,0,0,4.5,-5.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({scaleX:1.0371,skewX:-15,skewY:-30.3617,x:-27.75,y:182.95},8).to({regY:-5.7,scaleX:1.0148,scaleY:0.9266,skewX:-194.9999,skewY:-210.3615,x:3.6,y:179.4},9).to({regY:-5.6,scaleX:1,scaleY:1,skewX:-360,skewY:-360,x:38.35,y:188.2},14).to({alpha:0.0117,mode:"single"},3).to({_off:true},1).wait(9));

	// pic_paper
	this.instance_6 = new lib.pic_paper_r_01("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(590.4,173.85,0.4329,0.4409,-30.0004,0,0,-5,-7.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({regX:-4.9,regY:-7.3,scaleX:1.0121,scaleY:0.6061,rotation:0,skewX:-45,skewY:135,x:571.95,y:150.75},10).to({regX:-5,regY:-7.5,scaleX:0.6902,scaleY:0.6688,skewX:-127.2318,skewY:69.1356,x:560.9,y:106.7},14).to({regY:-6.7,scaleX:1,scaleY:1,skewX:0,skewY:0,x:576.8,y:70.6},7).to({alpha:0.0117,mode:"single"},9).to({_off:true},1).wait(3));

	// pic_paper
	this.instance_7 = new lib.pic_paper_r_02("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(558.2,167.75,1,1,0,0,0,-2.7,-5.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({regX:-2.8,scaleY:0.7736,skewX:-105.0003,skewY:75,x:541.35,y:135.3},7).to({scaleX:1.2433,scaleY:0.6767,skewX:-232.8531,skewY:-52.8532,x:526.7,y:126.15},10).to({scaleX:1.2885,rotation:127.1469,skewX:-360,skewY:0,x:534,y:117.1},8).to({regX:-2.7,scaleX:1,scaleY:1,rotation:0,x:518.65,y:77.25},8).to({alpha:0.0117,mode:"single"},3).to({_off:true},1).wait(7));

	// pic_paper
	this.instance_8 = new lib.pic_paper_r_03("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(574.3,186.5,0.7542,1,0,0,180,-5.9,-6.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({scaleX:1,scaleY:0.8332,skewY:0,x:535.5,y:169.1},8).to({scaleX:1.1186,scaleY:1.1804,skewX:180,x:498.45,y:150.5},18).to({scaleX:1,scaleY:1,skewX:0,x:462.65,y:128.3},8).to({alpha:0.0117,mode:"single"},4).to({_off:true},1).wait(5));

	// pic_paper
	this.instance_9 = new lib.pic_paper_r_04("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(578.75,180.3,0.7254,0.7254,0,0,0,-7.1,-7.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({scaleX:1,scaleY:0.8516,skewX:180,x:505.45,y:129},7).to({regX:-7.2,scaleX:0.7079,scaleY:0.6605,skewX:0,x:488.9,y:80.15},10).to({scaleY:0.6394,skewX:180,x:471.05,y:100.2},8).to({regX:-7.1,scaleX:1,scaleY:1,skewX:0,x:433.6,y:55.75},10).to({alpha:0.0117,mode:"single"},5).to({_off:true},1).wait(3));

	// pic_paper
	this.instance_10 = new lib.pic_paper_r_05("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(576.35,174.85,1,1,0,0,0,-8.2,-7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({scaleX:0.8857,scaleY:0.8857,rotation:90,x:512,y:96.8},18).to({regX:-8.3,scaleX:0.6233,scaleY:0.8604,rotation:-14.9996,x:494.2,y:62.95},10).to({regX:-8.2,scaleX:0.998,scaleY:1.1062,rotation:120.0003,x:507.55,y:58.9},1).to({scaleX:1,scaleY:1,rotation:0,x:493.75,y:21.65},10).to({alpha:0.0117,mode:"single"},3).to({_off:true},1).wait(1));

	// pic_paper
	this.instance_11 = new lib.pic_paper_r_06("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(559.45,188.55,0.7164,0.7556,0,0,0,-6.7,-6.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({scaleX:0.9393,scaleY:0.9906,rotation:180,x:540.6,y:158.4},7).to({scaleX:1.2687,scaleY:1.0886,rotation:0,skewY:180,x:523,y:88.55},10).to({regX:-6.8,regY:-7,scaleX:1.3304,scaleY:1.1281,skewX:118.4945,skewY:300.0002,x:457.7,y:39.9},8).to({regX:-6.7,regY:-6.8,scaleX:1,scaleY:1,skewX:0,skewY:360,x:435.6,y:6.75},6).to({alpha:0.0117,mode:"single"},3).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.9,0,660.9,207.7);


(lib.mc_bt_start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{normal:0,over:5,on:10,off:15});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(1));

	// pic_spin
	this.instance = new lib.pic_spin_normal("single",0);
	this.instance.parent = this;
	this.instance.setTransform(32.5,32.5,0.5,0.5,0,0,0,65,65);

	this.instance_1 = new lib.pic_spin_over("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(32.5,32.5,0.5,0.5,0,0,0,65,65);

	this.instance_2 = new lib.pic_spin_off("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(32.5,32.5,0.5,0.5,0,0,0,65,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{y:32.5}}]},5).to({state:[{t:this.instance_1,p:{y:34.5}}]},5).to({state:[{t:this.instance_1,p:{y:32.5}}]},3).to({state:[{t:this.instance_2}]},2).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,67);


(lib.mc_bt_sound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"off":5});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// pic_sound
	this.instance = new lib.pic_sound_normal("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(9.5,9.5,0.25,0.25,0,0,0,38,38);

	this.instance_1 = new lib.pic_sound_off("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.5,9.5,0.25,0.25,0,0,0,38,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19,19);


(lib.mc_bt_auto = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"on":0,"off":5});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// pic_auto
	this.instance = new lib.pic_auto_on("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(37.5,12.5,0.5,0.5,0,0,0,75,25);

	this.instance_1 = new lib.pic_auto_off("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.5,12.5,0.5,0.5,0,0,0,75,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,25);


(lib.mc_bingo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mc_word_b
	this.instance = new lib.mc_word_b();
	this.instance.parent = this;
	this.instance.setTransform(50.05,42.95,1,1,0,0,0,354.4,-22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mc_word_g
	this.instance_1 = new lib.mc_word_g();
	this.instance_1.parent = this;
	this.instance_1.setTransform(380.05,42.95,1,1,0,0,0,354.4,-22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// mc_word_i
	this.instance_2 = new lib.mc_word_i();
	this.instance_2.parent = this;
	this.instance_2.setTransform(160.05,42.95,1,1,0,0,0,354.4,-22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// mc_word_n
	this.instance_3 = new lib.mc_word_n();
	this.instance_3.parent = this;
	this.instance_3.setTransform(270.05,42.95,1,1,0,0,0,354.4,-22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// mc_word_o
	this.instance_4 = new lib.mc_word_o();
	this.instance_4.parent = this;
	this.instance_4.setTransform(490.05,42.95,1,1,0,0,0,354.4,-22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_bingo, new cjs.Rectangle(0,0,540,86), null);


(lib.mc_reel_all = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mc_reel
	this.reel_4 = new lib.mc_reel();
	this.reel_4.name = "reel_4";
	this.reel_4.parent = this;
	this.reel_4.setTransform(50,42,0.25,0.25,0,0,0,200,168);

	this.timeline.addTween(cjs.Tween.get(this.reel_4).wait(1));

	// mc_reel
	this.reel_3 = new lib.mc_reel();
	this.reel_3.name = "reel_3";
	this.reel_3.parent = this;
	this.reel_3.setTransform(50,126,0.25,0.25,0,0,0,200,168);

	this.timeline.addTween(cjs.Tween.get(this.reel_3).wait(1));

	// mc_reel
	this.reel_2 = new lib.mc_reel();
	this.reel_2.name = "reel_2";
	this.reel_2.parent = this;
	this.reel_2.setTransform(50,210,0.25,0.25,0,0,0,200,168);

	this.timeline.addTween(cjs.Tween.get(this.reel_2).wait(1));

	// mc_reel
	this.reel_1 = new lib.mc_reel();
	this.reel_1.name = "reel_1";
	this.reel_1.parent = this;
	this.reel_1.setTransform(50,294,0.25,0.25,0,0,0,200,168);

	this.timeline.addTween(cjs.Tween.get(this.reel_1).wait(1));

	// mc_reel
	this.reel_0 = new lib.mc_reel();
	this.reel_0.name = "reel_0";
	this.reel_0.parent = this;
	this.reel_0.setTransform(50,378,0.25,0.25,0,0,0,200,168);

	this.timeline.addTween(cjs.Tween.get(this.reel_0).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_reel_all, new cjs.Rectangle(0,0,100,420), null);


// stage content:
(lib.slot_10 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		console.log("***** Main Timeline");
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '99A42755F528A84A849CDFE1956DCDBB',
	width: 760,
	height: 420,
	fps: 30,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/autoplay_off.png", id:"autoplay_off"},
		{src:"images/autoplay_on.png", id:"autoplay_on"},
		{src:"images/gamebackground_760x420.jpg", id:"gamebackground_760x420"},
		{src:"images/gamelogo.png", id:"gamelogo"},
		{src:"images/pic_black_fade.png", id:"pic_black_fade"},
		{src:"images/sound_normal.png", id:"sound_normal"},
		{src:"images/sound_off.png", id:"sound_off"},
		{src:"images/spin_normal.png", id:"spin_normal"},
		{src:"images/spin_off.png", id:"spin_off"},
		{src:"images/spin_over.png", id:"spin_over"},
		{src:"images/symbol1.png", id:"symbol1"},
		{src:"images/symbol10.png", id:"symbol10"},
		{src:"images/symbol2.png", id:"symbol2"},
		{src:"images/symbol3.png", id:"symbol3"},
		{src:"images/symbol4.png", id:"symbol4"},
		{src:"images/symbol5.png", id:"symbol5"},
		{src:"images/symbol6.png", id:"symbol6"},
		{src:"images/symbol7.png", id:"symbol7"},
		{src:"images/symbol8.png", id:"symbol8"},
		{src:"images/symbol9.png", id:"symbol9"},
		{src:"sounds/sound_push.mp3", id:"sound_push"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['99A42755F528A84A849CDFE1956DCDBB'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
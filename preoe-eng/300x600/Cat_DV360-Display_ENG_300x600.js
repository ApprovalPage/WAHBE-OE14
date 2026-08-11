(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Cat_DV360_Display_ENG_300x600_atlas_P_1", frames: [[0,0,600,1200],[602,0,600,1200]]},
		{name:"Cat_DV360_Display_ENG_300x600_atlas_NP_1", frames: [[0,0,600,1200],[602,0,600,1200]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._300x600AFRAME = function() {
	this.initialize(ss["Cat_DV360_Display_ENG_300x600_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x600A = function() {
	this.initialize(ss["Cat_DV360_Display_ENG_300x600_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x600BGirl = function() {
	this.initialize(ss["Cat_DV360_Display_ENG_300x600_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._300x600BLOGO = function() {
	this.initialize(ss["Cat_DV360_Display_ENG_300x600_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.BKGD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._300x600A();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGD1, new cjs.Rectangle(0,0,300,600), null);


(lib.BKGDwhite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(0,175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDwhite, new cjs.Rectangle(-150,-125,300,600), null);


(lib.BKGDLOGOs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib._300x600BLOGO();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDLOGOs, new cjs.Rectangle(-150,-125,300,600), null);


(lib.BKGDGirl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib._300x600BGirl();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDGirl, new cjs.Rectangle(-150,-125,300,600), null);


(lib._300x600HEAD2ai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 300x600-HEAD2.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18335D").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape.setTransform(3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18335D").s().p("AgRASQgIgFAAgNQAAgMAIgGQAIgFAJAAQAMAAAGAFQAIAGAAAMQAAANgIAFQgGAGgMAAQgKAAgHgGg");
	this.shape_1.setTransform(215.6,214.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18335D").s().p("AgfBCQgRgHgJgRQgKgQAAgZQAAgYAJgRQAJgRAPgHQAQgIATAAQAfAAATAQQARAQABAgIAAAVIhXAAQABAMAIAGQAHAIAOAAQAMAAAMgDQAPgEAIgEIAAAjQgJAFgNADQgKACgVAAQgUAAgRgHgAgKgiQgGAGgBALIApAAQAAgJgGgHQgFgGgJAAQgIAAgGAFg");
	this.shape_2.setTransform(204,209.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18335D").s().p("AgpA4QgSgSgBglQABgYAJgRQAJgQASgJQAQgHAVAAQANAAAMADQANADAJAEIgPAlQgHgEgKgDQgGgCgJAAQgMAAgFAJQgHAJAAAQQAAASAHAJQAGAIAMAAQAIAAANgEQAKgEAJgFIAAAnQgIAFgLAEQgLADgPAAQgfAAgUgRg");
	this.shape_3.setTransform(189.4,209.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18335D").s().p("AAUBIIAAhMQAAgNgEgJQgEgGgJgBQgNAAgFAMQgEALAAAUIAAA+IgxAAIAAiNIAlAAIAGATIACAAQAHgKALgFQAKgGAOAAQAXAAANAMQAOAMAAAcIAABbg");
	this.shape_4.setTransform(173.725,209.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18335D").s().p("Ag2A+QgMgLAAgXQAAgXAQgKQAPgLAfgCIAWAAIAAgCQAAgKgFgEQgFgEgHAAQgHAAgLADIgVAIIgOghQAPgHANgCQAPgDATAAQAaAAAQANQAPANAAAZIAABcIgiAAIgJgTIgBAAQgFAHgIAFQgFAFgIACQgHACgNAAQgSAAgNgLgAAHAIQgLAAgHAFQgFAEAAAIQAAAIAEACQADAEAHAAQAHAAAHgGQAGgGAAgIIAAgLg");
	this.shape_5.setTransform(156.775,209.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18335D").s().p("AgxBIIAAiNIAkAAIAIAXIACAAQAFgKALgIQALgHALAAIAJAAIAGABIgEAuIgHgBIgKAAQgHAAgGACQgIACgEAFQgEAGAAAMIAABGg");
	this.shape_6.setTransform(144.375,209.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18335D").s().p("AgsBDQgLgGgHgLQgGgMAAgSIAAhbIAxAAIAABMQAAANAEAJQAEAGAJABQANAAAEgMQAFgKAAgVIAAg+IAxAAIAACNIglAAIgGgSIgCAAQgIAMgLADQgKAFgOAAQgOAAgLgFg");
	this.shape_7.setTransform(129.05,209.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18335D").s().p("AgeBIQgMgCgMgEIAAgoQANAGAOADQAPADAHAAQAPAAAAgHQAAgDgDgDIgIgFIgSgIQgTgHgIgIQgJgKAAgSQAAgUAQgLQARgKAZAAQAOAAAMADQAMADAOAGIgNAfQgKgFgMgCQgKgDgHAAQgLAAAAAGQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAQADADAFACIASAHQAOAGAGAFQAIAGAEAHQAEAHAAANQAAAOgGAKQgGALgNAGQgOAFgUAAQgPAAgMgBg");
	this.shape_8.setTransform(113.875,209.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18335D").s().p("AAUBIIAAhMQAAgPgEgHQgDgGgKgBQgNAAgEAMQgFALAAAUIAAA+IgxAAIAAiNIAlAAIAHATIABAAQAHgJALgGQALgGAOAAQAWAAANAMQAOAMAAAcIAABbg");
	this.shape_9.setTransform(98.675,209.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18335D").s().p("AgYBjIAAiMIAwAAIAACMgAgSg8QgHgEAAgNQAAgNAHgEQAIgEAKAAQAKAAAIAEQAIAEAAANQAAANgIAEQgIAFgKAAQgKAAgIgFg");
	this.shape_10.setTransform(85.95,206.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18335D").s().p("AAUBhIAAhNQAAgcgRAAQgMAAgFALQgFAKAAAWIAAA+IgxAAIAAjBIAxAAIgCBGIACAAQAIgMAIgEQAJgEANAAQANAAAMAFQALAFAHAMQAHAMAAARIAABcg");
	this.shape_11.setTransform(185.075,178.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18335D").s().p("AgLBSQgMgEgEgLQgHgLAAgTIAAg5IgRAAIAAgUIAWgQIANgdIAfAAIAAAcIAiAAIAAAlIgiAAIAAA2QAAAOANAAQAHAAAFgCIAMgDIAAAjIgRAGQgHACgQAAQgNAAgKgEg");
	this.shape_12.setTransform(170.5,179.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18335D").s().p("AgXBhIAAjBIAvAAIAADBg");
	this.shape_13.setTransform(160.55,178.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18335D").s().p("Ag2A+QgMgLAAgYQAAgWAQgKQAPgLAfgCIAWAAIAAgCQAAgKgEgDQgEgFgJAAQgIAAgJADQgLADgLAFIgNggQANgHAPgDQARgDAQgBQAbAAAPAOQAPAOAAAYIAABcIgiAAIgJgTIgBAAIgMANQgHAEgHACQgIACgMABQgTAAgMgMgAAHAIQgNABgFAEQgFAFAAAHQAAAHADADQAEAEAHAAQAHAAAHgGQAHgFAAgKIAAgLg");
	this.shape_14.setTransform(148.05,180.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18335D").s().p("AgfBCQgRgHgKgRQgJgPAAgaQAAgYAIgRQAJgQAQgJQARgHATgBQAfAAARARQASAQAAAgIAAAWIhWAAQAAAJAIAJQAIAGAOABQAQAAAIgDQAJgCAOgGIAAAjQgMAGgKACQgOADgRAAQgUAAgRgIgAgKghQgGAGgBAKIApAAQgBgJgEgGQgFgHgLAAQgHAAgGAGg");
	this.shape_15.setTransform(132.525,180.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18335D").s().p("AAUBhIAAhNQAAgcgRAAQgNAAgEALQgFAKAAAWIAAA+IgxAAIAAjBIAxAAIgCBGIACAAQAHgLAKgFQAIgEANAAQANAAANAFQAKAFAIAMQAGALAAASIAABcg");
	this.shape_16.setTransform(116.05,178.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18335D").s().p("AglBlQgLgCgOgEIAAgpQAMAFANADQANADAPAAQAdAAAAgWIAAgCIABgRIgBAAQgGAJgIAFQgJAGgOAAQgWAAgPgTQgOgTABgjQgBgkAOgSQAPgTAXAAQAOAAAIAGQAJAEAHAKIABAAIADgSIArAAIAACOQAAAdgTAQQgTAQglAAQgMAAgTgCgAgSgcQAAATAFAIQAGAHAJAAQAMAAAEgHQAGgIAAgOIAAgGQgBgRgEgJQgEgJgOAAQgTAAAAAkg");
	this.shape_17.setTransform(210.05,155.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18335D").s().p("AAUBIIAAhMQAAgPgEgHQgEgHgJAAQgNAAgFAMQgEAMAAATIAAA+IgxAAIAAiNIAkAAIAHATIACAAQAGgJALgHQALgFAOAAQAXAAANAMQAOANAAAbIAABbg");
	this.shape_18.setTransform(193.55,152.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18335D").s().p("AgXBkIAAiOIAvAAIAACOgAgSg8QgHgEAAgNQAAgNAHgEQAIgEAKAAQAKAAAIAEQAIAEAAANQAAANgIAEQgIAFgKAAQgKAAgIgFg");
	this.shape_19.setTransform(180.8,149.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18335D").s().p("AgMBSQgKgEgGgLQgFgLAAgTIAAg5IgRAAIAAgUIAVgPIANgeIAfAAIAAAcIAiAAIAAAlIgiAAIAAA2QAAANANAAIAMgBIALgDIAAAkIgQAFQgKACgNABQgNgBgLgEg");
	this.shape_20.setTransform(170.65,150.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18335D").s().p("AgLBSQgLgFgGgKQgFgKAAgUIAAg5IgSAAIAAgUIAWgPIANgeIAfAAIAAAcIAjAAIAAAlIgjAAIAAA2QAAANANAAIAMgBIAMgDIAAAkIgRAFQgKACgNABQgNgBgKgEg");
	this.shape_21.setTransform(158.875,150.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18335D").s().p("AgfBCQgRgHgKgRQgJgPAAgaQAAgZAJgQQAIgQAQgJQAQgHAUgBQAeAAATAQQARARAAAhIAAAUIhWAAQAAALAIAHQAJAIANAAQANgBALgCQANgDAKgFIAAAjQgJAFgNADQgOACgRABQgUAAgRgIgAgKgiQgGAHgBALIApAAQAAgLgFgFQgFgHgLAAQgIAAgFAFg");
	this.shape_22.setTransform(145.125,152.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#18335D").s().p("AgkBlQgLgCgOgEIAAgpQALAFANADQANADAPAAQAdAAAAgWIAAgCIABgRIgBAAQgGAJgIAFQgIAGgPAAQgXAAgNgTQgPgTAAgjQAAgjAPgTQAOgTAXAAQAPAAAIAGQAIAFAHAJIABAAIADgSIArAAIAACOQAAAdgTAQQgTAQglAAQgNAAgRgCgAgSgcQAAATAFAIQAGAHAJAAQAMAAAFgHQAEgHAAgPIAAgGQAAgRgEgJQgFgJgNAAQgTAAAAAkg");
	this.shape_23.setTransform(128.675,155.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18335D").s().p("AhABjIAAgmIAPACQAMAAAGgHQAGgKADgHIAAgBIg3iLIAzAAIAaBYIAAAJIAAAAIACgJIAahYIAyAAIg4CWQgHASgIALQgIAMgMAGQgNAGgSAAg");
	this.shape_24.setTransform(106.275,155.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#18335D").s().p("AgFBdQgJgGgEgFIgDAAIgIAOIgmAAIAAjCIAxAAIgCBIIACAAQAFgKAJgFQAIgGAOAAQAWAAAOATQAOARAAAkQAAAkgOATQgOATgXAAQgPAAgHgGgAgOgCQgEAHAAAPIAAAHQAAAQAEAIQAFAIAKAAQASAAAAgjQAAghgTAAQgJAAgFAHg");
	this.shape_25.setTransform(91.025,149.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,218.2,216.8);


(lib._300x600HEAD1ai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 300x600-HEAD1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18335D").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape.setTransform(3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18335D").s().p("AAUBhIAAhNQAAgbgRAAQgNAAgEAKQgFAKAAAWIAAA+IgxAAIAAjBIAxAAIgCBGIACAAQAGgLAKgEQAJgFANAAQAOAAALAGQAMAFAGALQAHAMAAARIAABcg");
	this.shape_1.setTransform(218.975,120.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18335D").s().p("AgMBSQgLgEgFgLQgFgLAAgTIAAg5IgRAAIAAgUIAVgQIANgdIAeAAIAAAcIAjAAIAAAlIgjAAIAAA2QAAAOAOAAQAHAAAFgCIALgDIAAAjQgGAEgLACQgHACgPAAQgNAAgLgEg");
	this.shape_2.setTransform(204.4,122.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18335D").s().p("AgYBhIAAjBIAxAAIAADBg");
	this.shape_3.setTransform(194.45,120.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18335D").s().p("Ag2A+QgMgLAAgXQAAgXAQgKQAPgLAfgCIAWAAIAAgCQAAgKgEgEQgGgEgHAAQgIAAgKADIgUAIIgPghQAOgGAOgDQAQgDASAAQAbAAAPANQAPANAAAZIAABcIgiAAIgJgTIgBAAQgGAIgHAEQgGAFgHACQgHACgNAAQgTAAgMgLgAAHAIQgLAAgHAFQgFAEAAAIQAAAHAEADQADAEAHAAQAIAAAGgGQAGgGAAgIIAAgLg");
	this.shape_4.setTransform(181.95,123.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18335D").s().p("AgfBCQgRgIgKgQQgJgPAAgaQAAgYAIgRQAKgRAPgHQAPgIAUAAQAfAAASAQQASAQAAAgIAAAVIhWAAQAAALAIAHQAJAIANAAQAMAAAMgDQANgDAKgFIAAAjQgKAFgMADQgKACgVAAQgVAAgQgHgAgKgiQgGAFgBAMIApAAQgBgKgEgGQgGgGgKAAQgHAAgGAFg");
	this.shape_5.setTransform(166.425,123.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18335D").s().p("AAUBhIAAhNQAAgbgRAAQgNAAgEAKQgFAMgBAUIAAA+IgwAAIAAjBIAwAAIgCBGIADAAQAGgLAKgEQAJgFANAAQAOAAALAGQALAFAIALQAGALAAASIAABcg");
	this.shape_6.setTransform(149.95,120.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18335D").s().p("AgxBIIAAiNIAkAAIAIAXIACAAQAFgKALgIQALgHALAAIAJAAIAGABIgEAuIgGgBIgLAAQgHAAgGACQgHACgFAFQgEAGAAAMIAABGg");
	this.shape_7.setTransform(129.375,123.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18335D").s().p("AgsBDQgLgGgHgLQgGgNAAgRIAAhbIAxAAIAABNQAAANAEAIQAEAGAJABQANAAAEgMQAFgMAAgTIAAg+IAxAAIAACNIglAAIgGgSIgDAAQgHAMgLADQgKAFgOAAQgOAAgLgFg");
	this.shape_8.setTransform(114.075,123.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18335D").s().p("AgkBBQgPgIgKgRQgJgRAAgXQAAgiATgTQATgTAhAAQAVAAAPAIQAQAJAJAQQAJAQAAAXQAAAjgTATQgTATghAAQgUAAgQgIgAgPgbQgFAKAAARQAAASAFAJQAFAKAKAAQAMAAAEgKQAFgKAAgRQAAgQgFgLQgEgJgMAAQgKAAgFAJg");
	this.shape_9.setTransform(97.325,123.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18335D").s().p("Ag4BlIgIgBIAAgnIAGABIAJABQAMgBAGgGQAGgIADgJIAAgBIg3iLIAzAAIAYBRIACAHIAAAJIAAAAIACgJIAahYIAyAAIg4CWQgGAQgJANQgIANgMAEQgNAHgSAAIgMgBg");
	this.shape_10.setTransform(81.375,126.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18335D").s().p("AgiBiIAAhoIgSAAIAAgYIATgMIAAgDQAAgaALgNQALgNAZAAIAUACIATAEIgKAhIgIgCIgKgBQgLAAAAAOIAAAFIAeAAIAAAkIgeAAIAABog");
	this.shape_11.setTransform(210.225,92.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18335D").s().p("AgjBBQgRgJgJgQQgJgRAAgXQAAgiATgUQAUgTAgAAQATAAARAJQAPAJAKAQQAIAQABAXQgBAjgSAUQgUATggAAQgUAAgPgJgAgPgbQgFAJAAASQAAASAFAKQAFAJAKAAQALAAAGgJQAEgKAAgSQAAgRgEgKQgGgJgLAAQgKAAgFAJg");
	this.shape_12.setTransform(196.15,94.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18335D").s().p("AgXBhIAAjBIAvAAIAADBg");
	this.shape_13.setTransform(177.2,92.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18335D").s().p("AgjBBQgRgJgIgQQgKgRABgXQAAgiASgUQAUgTAgAAQAUAAAQAJQAQAJAJAQQAIAQABAXQAAAjgUAUQgTATggAAQgUAAgPgJgAgPgbQgFAJAAASQAAASAFAKQAFAJAKAAQAMAAAEgJQAFgKAAgSQAAgSgFgJQgEgJgMAAQgKAAgFAJg");
	this.shape_14.setTransform(164.9,94.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18335D").s().p("AgxBIIAAiMIAkAAIAIAWIACAAQAFgKALgIQAKgHAMAAIAPACIgEAuIgHgBIgKgBIgNACQgIACgEAGQgEAFAAANIAABFg");
	this.shape_15.setTransform(151.975,94.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18335D").s().p("AgLBSQgLgFgGgKQgGgLAAgTIAAg5IgQAAIAAgUIAVgQIAMgdIAgAAIAAAcIAjAAIAAAlIgjAAIAAA2QAAAOANAAQAHAAAFgCIALgDIAAAjQgFADgMADQgKACgMAAQgNAAgKgEg");
	this.shape_16.setTransform(139.3,93.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18335D").s().p("AAUBIIAAhMQAAgOgEgHQgEgIgJAAQgNAAgFAMQgEALAAAUIAAA+IgxAAIAAiMIAlAAIAGASIACAAQAHgKALgFQAJgGAPAAQAVAAAPAMQAOANAAAbIAABbg");
	this.shape_17.setTransform(124.925,94.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18335D").s().p("AgkBBQgQgJgJgQQgJgRAAgXQAAghATgVQATgTAhAAQAUAAAQAJQAQAJAJAQQAJAQAAAXQAAAjgTAUQgTATghAAQgUAAgQgJgAgPgbQgFAKAAARQAAASAFAKQAFAJAKAAQAMAAAEgJQAFgLAAgRQAAgRgFgKQgEgJgMAAQgKAAgFAJg");
	this.shape_18.setTransform(108.125,94.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18335D").s().p("AgoA4QgUgSAAglQAAgYAKgRQALgRAQgIQASgHATgBQANAAAMAEQANADAJAFIgPAkIgRgGQgIgDgHAAQgLAAgGAJQgHAIAAASQAAARAHAJQAGAIAMgBQALABAJgEQALgDAJgGIAAAnQgIAGgMADQgKAEgPAAQgfAAgTgSg");
	this.shape_19.setTransform(93.3,94.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18335D").s().p("AgfBCQgSgJgJgPQgJgPAAgaQAAgYAIgRQAJgQAQgJQAQgHAUAAQAeAAATAPQARASAAAgIAAAUIhWAAQAAAKAIAIQAJAIANAAQANgBALgCQANgEAKgEIAAAjQgJAFgNADQgOACgRABQgUgBgRgHgAgKgiQgGAHgBALIApAAQgBgLgEgFQgFgHgLAAQgIAAgFAFg");
	this.shape_20.setTransform(227.575,66.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18335D").s().p("AAVBhIgfgzIgPANIAAAmIgyAAIAAjCIAyAAIgBBgIgDASIABAAIAvg9IA2AAIgxA8IA0BRg");
	this.shape_21.setTransform(212.05,63.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18335D").s().p("Ag1A+QgNgLAAgXQAAgXAPgKQASgMAcAAIAXgBIAAgDQAAgJgEgEQgGgEgHAAQgIAAgKADIgUAIIgPggQAKgGASgEQAQgDASAAQAbAAAPANQAPANAAAZIAABcIgiAAIgJgTIgBAAQgGAIgHAEQgFAFgIACQgJACgLABQgSAAgMgMgAAHAIQgNABgFADQgFAFgBAHQAAAHAFAFQADADAHAAQAIgBAGgFQAGgGAAgIIAAgLg");
	this.shape_22.setTransform(194.45,66.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#18335D").s().p("AgMBSQgKgEgGgLQgGgLAAgTIAAg5IgRAAIAAgUIAWgPIANgeIAfAAIAAAcIAiAAIAAAlIgiAAIAAA2QAAAOANAAQAGAAAGgCIAMgDIAAAkIgRAFQgKACgNABQgMgBgMgEg");
	this.shape_23.setTransform(180.875,65.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18335D").s().p("AAUBIIAAhMQAAgOgEgIQgEgHgJAAQgMAAgGAMQgEALAAAUIAAA+IgxAAIAAiNIAlAAIAGATIACAAQAHgKALgGQAKgFAOAAQAXAAANAMQAOANAAAbIAABbg");
	this.shape_24.setTransform(159.825,66.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#18335D").s().p("Ag2A+QgMgLAAgXQAAgXAQgKQARgMAdAAIAWgBIAAgDQAAgJgFgEQgFgEgIAAQgGAAgLADIgVAIIgOggQAMgGAQgEQAQgDARAAQAbAAAQANQAPANAAAZIAABcIgiAAIgJgTIgBAAQgHAIgGAEQgGAFgHACQgJACgLABQgSAAgNgMgAAHAIQgNABgFADQgGAFAAAHQAAAHAFAFQADADAHAAQAIgBAGgFQAGgFAAgJIAAgLg");
	this.shape_25.setTransform(142.9,66.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#18335D").s().p("AgoA4QgTgRAAgmQAAgaAJgQQAKgQARgIQAQgHAVAAQANAAAMADQAMACAJAGIgOAkIgQgHQgGgCgKAAQgLAAgGAJQgHAJAAARQAAARAHAJQAGAHALABQALAAAKgEQALgDAKgGIAAAnQgLAGgJADQgNADgNABQgeAAgUgSg");
	this.shape_26.setTransform(128.575,66.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#18335D").s().p("AgrBDQgLgFgHgMQgHgLAAgTIAAhbIAxAAIAABMQAAAPAEAGQADAHAKAAQANAAAEgLQAFgLAAgUIAAg+IAxAAIAACNIglAAIgGgSIgDAAQgHALgLAEQgLAFgNAAQgNAAgLgFg");
	this.shape_27.setTransform(106.2,66.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#18335D").s().p("AgkBBQgQgJgIgRQgJgQAAgXQgBgjAUgSQASgUAgABQAVgBAQAJQAPAIAJAQQAKARgBAXQAAAjgSATQgUAUggAAQgTAAgRgJgAgPgaQgFAIAAASQAAASAFAKQAFAJAKAAQAMAAAEgJQAFgKAAgSQAAgSgFgIQgEgKgMAAQgLAAgEAKg");
	this.shape_28.setTransform(89.45,66.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#18335D").s().p("AgYBbIAAhGIg8hvIA1AAIAfBDIAfhDIA2AAIg8BuIAABHg");
	this.shape_29.setTransform(74.1,64.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234.4,136.8);


(lib._300x600CTAai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 300x600-CTA.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8ED").s().p("AgIAqIAAggIgcgzIATAAIARAjIARgjIAUAAIgcAzIAAAgg");
	this.shape.setTransform(107.925,13.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8E8ED").s().p("AgiAqIAAhTIAaAAQALAAAMAFQAKAEAEAKQAGAJAAANQAAAUgMALQgMALgVAAgAgQAcIAHAAQAaAAAAgcQgBgNgGgHQgGgGgLAAIgJAAg");
	this.shape_1.setTransform(100.05,13.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E8E8ED").s().p("AAVAqIgFgUIgfAAIgFAUIgUAAIAehTIAVAAIAdBTgAgCgPIgIAWIAVAAIgLgjg");
	this.shape_2.setTransform(91.3,13.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8E8ED").s().p("AgXAqIAAhTIAvAAIAAAPIgdAAIAAATIAbAAIAAANIgbAAIAAAWIAdAAIAAAOg");
	this.shape_3.setTransform(83.975,13.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8E8ED").s().p("AAOAqIgTggIgKAAIAAAgIgSAAIAAhTIAZAAQAPAAAKAHQAHAGABANQAAADgCAHIgGAGIgIAEIAZAlgAgPgEIAGAAQAJAAACgCQAFgDAAgGQAAgGgFgCQgCgDgJAAIgGAAg");
	this.shape_4.setTransform(77,13.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E8E8ED").s().p("AgIAqIAAhEIgXAAIAAgPIA/AAIAAAPIgXAAIAABEg");
	this.shape_5.setTransform(65.825,13.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8E8ED").s().p("AgXAqIAAhTIAvAAIAAAPIgeAAIAAATIAcAAIAAANIgcAAIAAAWIAeAAIAAAOg");
	this.shape_6.setTransform(59.175,13.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E8E8ED").s().p("AgYAgQgKgLABgVQgBgNAGgJQAFgJAJgGQALgFANAAIAMABIANAEIgHAOQgDgCgFgBIgKgBQgJAAgEADQgGADgDAHQgDAGAAAIQAAAJACAGQACAGAFAEQAFADAGAAIAMgBIAAgRIgQAAIAAgOIAiAAIAAAqIgPAEQgGABgKAAQgQAAgMgLg");
	this.shape_7.setTransform(51.15,13.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E8E8ED").s().p("AgaAmIAAgRIAMAFQAGACAHAAQAGAAACgCQADgCAAgFIgCgFIgGgEIgNgIIgHgDIgGgHQgCgGAAgEQAAgMAJgGQAGgGANAAQAGAAAHABIAMAFIgGAOIgKgEIgKgBQgEAAgCACQgDADAAADQAAAEAEADIAWAMQAFAEACAEQACAFABAGQAAALgJAGQgIAHgNAAQgNAAgLgFg");
	this.shape_8.setTransform(40.45,13.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E8E8ED").s().p("AgLAPIAGgdIAQAAIABACIgLAbg");
	this.shape_9.setTransform(35.75,10.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E8E8ED").s().p("AgIAqIAAhEIgXAAIAAgPIA/AAIAAAPIgXAAIAABEg");
	this.shape_10.setTransform(30.925,13.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8E8ED").s().p("AgXAqIAAhTIAvAAIAAAPIgeAAIAAATIAcAAIAAANIgcAAIAAAWIAeAAIAAAOg");
	this.shape_11.setTransform(24.25,13.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E8E8ED").s().p("AgZAqIAAhTIASAAIAABFIAhAAIAAAOg");
	this.shape_12.setTransform(17.65,13.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#621F7B").s().p("AnzCIQg1AAglgmQgmglAAg1IAAgPQAAg1AmglQAlgmA1AAIPnAAQA1AAAlAmQAmAlAAA1IAAAPQAAA1gmAlQglAmg1AAg");
	this.shape_13.setTransform(62.775,13.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.6,27.2);


(lib.HEAD2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._300x600HEAD2ai();
	this.instance.setTransform(1034.2,469.4,1,1,0,0,0,1034.2,469.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(0,0,218.2,216.8), null);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._300x600HEAD1ai();
	this.instance.setTransform(1034.2,469.4,1,1,0,0,0,1034.2,469.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,234.4,136.8), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._300x600CTAai("synched",0);
	this.instance.setTransform(-23.75,-5.15,1,1,0,0,0,39,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-62.7,-13.5,125.5,27.1), null);


// stage content:
(lib.Cat_DV360Display_ENG_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [179];
	// timeline functions:
	this.frame_179 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// FRAME
	this.instance = new lib._300x600AFRAME();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	// CTA
	this.instance_1 = new lib.CTA();
	this.instance_1.setTransform(425,255.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55).to({_off:false},0).to({x:150},14,cjs.Ease.quadInOut).wait(73).to({scaleX:1.3,scaleY:1.3,x:149.95},3).to({scaleX:1,scaleY:1,x:150},5).wait(9).to({x:-150},14,cjs.Ease.quadInOut).wait(7));

	// HEAD1
	this.instance_2 = new lib.HEAD1();
	this.instance_2.setTransform(1334.2,469.4,1,1,0,0,0,1034.2,469.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({x:1034.2},14,cjs.Ease.quadInOut).wait(90).to({x:734.2},14,cjs.Ease.quadInOut).wait(3));

	// HEAD2
	this.instance_3 = new lib.HEAD2();
	this.instance_3.setTransform(1334.2,469.4,1,1,0,0,0,1034.2,469.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(57).to({_off:false},0).to({x:1034.2},14,cjs.Ease.quadInOut).wait(90).to({x:734.2},14,cjs.Ease.quadInOut).wait(5));

	// LOGOs
	this.instance_4 = new lib.BKGDLOGOs("synched",0);
	this.instance_4.setTransform(450,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51).to({_off:false},0).to({x:150},12,cjs.Ease.quadInOut).wait(92).to({startPosition:0},0).to({x:-150},12,cjs.Ease.quadInOut).wait(13));

	// Girl
	this.instance_5 = new lib.BKGDGirl("synched",0);
	this.instance_5.setTransform(450,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(53).to({_off:false},0).to({x:150},12,cjs.Ease.quadInOut).wait(92).to({startPosition:0},0).to({x:-150},12,cjs.Ease.quadInOut).wait(11));

	// BKGD2
	this.instance_6 = new lib.BKGDwhite("synched",0);
	this.instance_6.setTransform(450,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({x:150},12,cjs.Ease.quadInOut).wait(104).to({startPosition:0},0).to({x:-150},12,cjs.Ease.quadInOut).wait(3));

	// BKGD1
	this.instance_7 = new lib.BKGD1();
	this.instance_7.setTransform(250,300,1,1,0,0,0,250,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({x:-50},12,cjs.Ease.quadInOut).wait(104).to({x:250},0).wait(15));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-150,300,750,300);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 600,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/Cat_DV360_Display_ENG_300x600_atlas_P_1.png", id:"Cat_DV360_Display_ENG_300x600_atlas_P_1"},
		{src:"images/Cat_DV360_Display_ENG_300x600_atlas_NP_1.jpg", id:"Cat_DV360_Display_ENG_300x600_atlas_NP_1"}
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
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
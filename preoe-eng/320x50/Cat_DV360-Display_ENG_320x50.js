(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Cat_DV360_Display_ENG_320x50_atlas_P_1", frames: [[0,0,640,100],[0,102,640,100]]},
		{name:"Cat_DV360_Display_ENG_320x50_atlas_NP_1", frames: [[0,0,640,100]]}
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



(lib._320x50AFRAME = function() {
	this.initialize(ss["Cat_DV360_Display_ENG_320x50_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._320x50A = function() {
	this.initialize(ss["Cat_DV360_Display_ENG_320x50_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._320x50CLOGO = function() {
	this.initialize(ss["Cat_DV360_Display_ENG_320x50_atlas_P_1"]);
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
	this.instance = new lib._320x50A();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGD1, new cjs.Rectangle(0,0,320,50), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(10.0158,-24.9778,0.4396,0.5556);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDwhite, new cjs.Rectangle(-150,-50,320,50), null);


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
	this.instance = new lib._320x50CLOGO();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDLOGOs, new cjs.Rectangle(-150,-125,320,50), null);


(lib._320x50HEAD2ai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 320x50-HEAD2.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18335D").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape.setTransform(2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18335D").s().p("AgKALQgFgDAAgIQAAgHAFgDQAEgEAGAAQAHAAAEAEQAFADAAAHQAAAIgFADQgEAEgHAAQgGAAgEgEg");
	this.shape_1.setTransform(272.925,38.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18335D").s().p("AgTAoQgLgEgFgKQgGgJAAgQQAAgQAFgJQAFgKAKgGQALgEALAAQATgBALALQALAKAAAUIAAAMIg1AAQAAAHAFAEQAGAFAHAAQAJAAAGgCQAHgBAHgEIAAAWQgHAEgGABIgTACQgNAAgKgGgAgGgUQgEAEAAAGIAZAAQAAgFgEgEQgCgFgHAAQgEAAgEAEg");
	this.shape_2.setTransform(265.775,35.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18335D").s().p("AgZAjQgLgLgBgXQAAgPAHgLQAFgJALgGQALgEALAAIAQABIANAGIgJAVIgKgDIgKgBQgGgBgEAGQgDAEAAAMQAAALADAFQAEAEAHAAIANgCIAMgGIAAAYQgFAEgHADQgJACgHAAQgTAAgMgLg");
	this.shape_3.setTransform(256.75,35.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18335D").s().p("AAMAtIAAgvQAAgIgCgFQgCgFgGAAQgIAAgDAHQgDAHAAAMIAAAnIgeAAIAAhXIAXAAIAEAMIABAAQAEgHAHgDQAHgEAIAAQANAAAJAIQAJAIAAARIAAA4g");
	this.shape_4.setTransform(247.075,34.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18335D").s().p("AghAmQgHgGAAgPQAAgPAJgFQAKgGATgBIANgBIAAgBQAAgGgDgCQgCgDgGAAQgFAAgFACIgNAEIgIgTQAHgFAKgCQANgBAHAAQAQAAAKAIQAKAIAAAPIAAA5IgVAAIgGgLIgBAAIgIAHIgIAEQgEABgIABQgLAAgIgIgAAEAFQgIABgCACQgEADAAAFQAAAEACACQADACAEAAQAEAAAEgEQAEgDAAgGIAAgHg");
	this.shape_5.setTransform(236.6,35.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18335D").s().p("AgeAtIAAhXIAXAAIAEAOIACAAQADgHAGgEQAHgFAHAAIAJABIgDAdIgJgBIgJABQgFABgDAEQgCAEAAAHIAAArg");
	this.shape_6.setTransform(228.9,34.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18335D").s().p("AgbApQgHgDgEgIQgEgGAAgMIAAg4IAeAAIAAAvQAAAIADAFQADAFAFgBQAHAAADgGQADgHAAgNIAAgmIAfAAIAABXIgXAAIgEgLIgCAAQgEAGgHAEQgGADgIAAQgJgBgHgDg");
	this.shape_7.setTransform(219.475,35.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18335D").s().p("AgSAtIgQgFIAAgXIASAFIANACQAJAAAAgFQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAIgQgIQgLgFgFgEQgFgHgBgKQAAgNAKgHQALgGAOAAQAHAAAKABIAQAGIgIAUIgOgFQgFgCgFAAQgHAAAAAEIABADIAFACIALAFIANAGQAFAEACAEQACAGABAHQAAAIgFAGQgDAHgIAEQgJADgLABIgRgBg");
	this.shape_8.setTransform(210.1,35.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18335D").s().p("AAMAtIAAgvQAAgIgCgFQgCgFgGAAQgIAAgDAHQgDAHAAAMIAAAnIgeAAIAAhXIAXAAIAEAMIABAAQAEgHAHgDQAHgEAIAAQANAAAJAIQAJAIAAARIAAA4g");
	this.shape_9.setTransform(200.725,34.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18335D").s().p("AgOA9IAAhWIAdAAIAABWgAgKglQgFgDAAgHQAAgIAFgDQAEgCAGAAQAGAAAFACQAFADAAAIQAAAHgFADQgEAEgHAAQgGAAgEgEg");
	this.shape_10.setTransform(192.85,33.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18335D").s().p("AANA8IAAgwQAAgQgLAAQgHAAgDAGQgDAHAAANIAAAmIgfAAIAAh3IAfAAIgBAhIgBAKIACAAQAEgGAGgDQAFgDAIAAQAHAAAJADQAHAEAEAHQAEAGAAALIAAA5g");
	this.shape_11.setTransform(180.825,33.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18335D").s().p("AgHAyQgGgCgDgHQgEgHAAgLIAAgjIgLAAIAAgNIAOgJIAIgSIASAAIAAARIAVAAIAAAXIgVAAIAAAhQAAAIAJAAIAHgBIAHgCIAAAWIgLAEQgGABgHAAQgIAAgHgDg");
	this.shape_12.setTransform(171.85,34.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18335D").s().p("AgOA8IAAh3IAdAAIAAB3g");
	this.shape_13.setTransform(165.7,33.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18335D").s().p("AghAmQgIgGAAgPQAAgPAKgFQAKgGATgBIANgBIAAgBQAAgGgDgCQgDgDgFAAQgEAAgGACIgNAEIgJgTQAIgFAJgCQAOgBAHAAQAQAAAKAIQAKAIAAAPIAAA5IgWAAIgFgLIgBAAIgHAHIgIAEQgGABgHABQgLAAgIgIgAAEAFQgJABgCACQgDADAAAFQAAAEACACQACACAFAAQAFAAAEgEQADgDAAgGIAAgHg");
	this.shape_14.setTransform(158,35.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18335D").s().p("AgTAoQgLgEgFgKQgGgJAAgQQAAgPAFgKQAFgKALgGQALgEAKAAQATgBALALQALAKAAAUIAAAMIg1AAQABAIAFADQAEAFAJAAQAIAAAHgCQAFAAAJgFIAAAWIgOAFQgIABgLABQgNAAgKgGgAgGgUQgEAEAAAGIAZAAQgBgGgCgDQgEgFgGAAQgEAAgEAEg");
	this.shape_15.setTransform(148.375,35.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18335D").s().p("AAMA8IAAgwQAAgQgKAAQgHAAgEAGQgDAHAAANIAAAmIgeAAIAAh3IAeAAIgBArIACAAQADgGAHgDQAFgDAIAAQAHAAAIADQAIAFADAGQAFAHAAAKIAAA5g");
	this.shape_16.setTransform(138.225,33.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18335D").s().p("AgWA+QgHAAgJgEIAAgZQAIAEAHABQAIACAKAAQARAAAAgNIAAgCIABgKIgBAAQgDAEgGAEQgEAEgJAAQgOAAgIgLQgKgMAAgVQAAgWAKgMQAJgMAOAAQAIAAAFAEQAGADADAGIABAAIADgLIAZAAIAABXQABASgMAKQgLAKgYAAgAgLgRQABAMADAFQACAEAHAAQAGAAAEgEQACgFAAgJIAAgEQAAgJgCgGQgDgGgIAAQgMAAAAAWg");
	this.shape_17.setTransform(123.5,36.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18335D").s().p("AAMAtIAAgvQAAgJgCgEQgCgFgGAAQgIAAgDAHQgDAHAAAMIAAAnIgeAAIAAhXIAXAAIAEAMIABAAQAFgHAGgDQAHgEAIAAQANAAAJAIQAJAIAAARIAAA4g");
	this.shape_18.setTransform(113.325,34.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18335D").s().p("AgPA9IAAhWIAeAAIAABWgAgKglQgFgDAAgHQAAgIAFgDQAEgCAGAAQAGAAAFACQAFADAAAIQAAAHgFADQgEAEgHAAQgGAAgEgEg");
	this.shape_19.setTransform(105.45,33.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18335D").s().p("AgHAyQgGgCgEgHQgDgIAAgKIAAgjIgLAAIAAgNIAOgJIAHgSIATAAIAAARIAWAAIAAAXIgWAAIAAAhQAAAIAIAAIAIgBIAHgCIAAAWIgKAEQgGABgJAAQgHAAgHgDg");
	this.shape_20.setTransform(99.175,34.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18335D").s().p("AgGAyQgIgCgCgHQgEgGAAgMIAAgjIgLAAIAAgNIAOgJIAHgSIATAAIAAARIAWAAIAAAXIgWAAIAAAhQAAAIAJAAIAHgBIAHgCIAAAWIgKAEQgFABgKAAQgHAAgGgDg");
	this.shape_21.setTransform(91.9,34.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18335D").s().p("AgTAoQgLgEgFgKQgGgJAAgQQAAgQAFgJQAFgKAKgGQALgEALAAQATgBALALQALAKAAAUIAAAMIg1AAQAAAHAFAEQAGAFAHAAQAJAAAGgCQAHgBAHgEIAAAWQgHAEgGABQgIABgLABQgNAAgKgGgAgGgUQgDAEgBAGIAZAAQAAgGgEgDQgCgFgHAAQgFAAgDAEg");
	this.shape_22.setTransform(83.425,35.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#18335D").s().p("AgWA+QgHAAgJgEIAAgZQAHAEAJABQAGACALAAQARAAAAgNIAAgCIABgKIgBAAQgDAEgFAEQgFAEgJAAQgOAAgIgLQgJgMAAgVQAAgWAJgMQAIgMAOAAQAJAAAGAEQAFADAEAGIAAAAIACgLIAaAAIAABXQAAASgLAKQgMAKgWAAQgLAAgIgCgAgLgRQAAAMADAFQAEAEAGAAQAGAAAEgEQADgFAAgJIAAgEQAAgKgDgFQgCgGgJAAQgMAAAAAWg");
	this.shape_23.setTransform(73.25,36.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18335D").s().p("AgiA+IgFgBIAAgXIAJABQAIAAADgFQADgEADgGIAAgBIgjhVIAhAAIAOAyIABAKIABAAIABgGIAPg2IAgAAIgjBcQgFALgEAHQgFAHgHAEQgJAEgLAAg");
	this.shape_24.setTransform(59.4,36.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#18335D").s().p("AgDA5IgIgGIgCAAIgEAIIgYAAIAAh3IAeAAIgBAsIABAAQADgFAGgEQAFgEAIAAQAOAAAJAMQAIALAAAVQAAAXgIALQgJAMgPAAQgJAAgEgEgAgIAAQgDADAAAJIAAAFQAAAJADAFQADAGAGAAQALgBAAgVQAAgUgMAAQgFAAgDAFg");
	this.shape_25.setTransform(49.975,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,274.6,43.3);


(lib._320x50HEAD1ai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 320x50-HEAD1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18335D").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape.setTransform(2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18335D").s().p("AANA8IAAgvQAAgRgLAAQgHgBgDAHQgDAHAAANIAAAmIgfAAIAAh3IAfAAIgBAiIgBAKIACAAQAFgIAFgCQAGgDAHAAQAJAAAHAEQAGACAFAIQAEAGAAALIAAA5g");
	this.shape_1.setTransform(298.575,15.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18335D").s().p("AgHAzQgGgDgEgHQgDgGAAgMIAAgjIgLAAIAAgMIANgKIAIgSIATAAIAAARIAWAAIAAAXIgWAAIAAAhQAAAIAIAAIAIAAIAHgDIAAAWIgKAEQgGABgJAAQgHAAgHgCg");
	this.shape_2.setTransform(289.6,16.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18335D").s().p("AgOA8IAAh3IAdAAIAAB3g");
	this.shape_3.setTransform(283.45,15.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18335D").s().p("AghAmQgHgGAAgPQAAgOAJgGQAKgGASgBIAOgBIAAgBQAAgGgDgCQgCgDgGAAIgKACIgNAFIgIgUQAFgEAMgCQAIgCAMAAQARAAAJAIQAKAIgBAPIAAA5IgUAAIgGgMIgBAAIgIAIQgDADgFABIgMABQgMAAgHgHgAAEAFQgHAAgDADQgEADAAAEQAAAEACADQADACAEAAQAEAAAEgDQAEgEAAgFIAAgHg");
	this.shape_4.setTransform(275.75,17.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18335D").s().p("AgTApQgKgFgGgKQgGgJAAgQQAAgOAFgLQAGgLAKgEQAJgFAMAAQATAAALAKQALAJAAAVIAAAMIg1AAQABAHAFAEQAEAFAJAAQAIAAAHgCQAHgBAHgEIAAAWQgGADgIACQgIABgLAAQgMAAgLgEgAgGgUQgDACgBAIIAZAAQAAgGgDgEQgEgEgGAAQgEAAgEAEg");
	this.shape_5.setTransform(266.125,17.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18335D").s().p("AAMA8IAAgvQAAgRgKAAQgHgBgEAHQgDAHAAANIAAAmIgeAAIAAh3IAeAAIgBAsIACAAQAEgIAGgCQAFgDAIAAQAJAAAGAEQAHACAEAIQAFAHAAAKIAAA5g");
	this.shape_6.setTransform(255.975,15.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18335D").s().p("AgeAtIAAhXIAWAAIAGAOIAAAAQADgGAHgFQAHgFAHABIAJABIgDAcIgKgBIgIABQgFACgCADQgDAEAAAHIAAArg");
	this.shape_7.setTransform(243.25,17.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18335D").s().p("AgbAqQgHgEgDgHQgEgGAAgMIAAg5IAeAAIAAAwQgBAHADAFQACAFAGAAQAHAAADgHQAEgGAAgNIAAgnIAeAAIAABXIgXAAIgEgLIgBAAQgFAIgHACQgFACgJAAQgIAAgIgCg");
	this.shape_8.setTransform(233.8,17.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18335D").s().p("AgWAoQgJgFgGgKQgGgLAAgOQAAgUAMgNQAMgLATAAQANAAAKAFQAJAFAGAKQAGAKAAAOQAAAWgMAMQgMALgUAAQgMAAgKgFgAgJgQQgDAGAAAKQAAAMADAFQADAGAGAAQAHAAADgGQADgFAAgMQAAgKgDgGQgDgGgHAAQgGAAgDAGg");
	this.shape_9.setTransform(223.475,17.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18335D").s().p("AgoA+IAAgYIAKABQAHAAAEgFQAEgFACgFIAAAAIgjhWIAhAAIAPAyIAAAKIABAAIAAgGIABgDIAQgzIAeAAIgjBcQgDALgGAHQgEAHgHAEQgIAEgMAAg");
	this.shape_10.setTransform(213.6,19.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18335D").s().p("AgUA9IAAhBIgMAAIAAgOIAMgHIAAgCQAAgSAHgHQAHgIAPAAIAMABIAMAEIgHATIgLgBQgGAAAAAJIAAACIASAAIAAAWIgSAAIAABBg");
	this.shape_11.setTransform(201.775,15.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18335D").s().p("AgWAoQgJgFgGgKQgGgLAAgOQAAgVAMgMQAMgLATAAQANAAAKAFQAJAFAGAKQAGAKAAAOQAAAVgMANQgMALgUAAQgMAAgKgFgAgJgQQgDAGAAAKQAAAMADAFQADAGAGAAQAHAAADgGQADgFAAgMQAAgKgDgGQgDgGgHAAQgGAAgDAGg");
	this.shape_12.setTransform(193.075,17.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18335D").s().p("AgOA8IAAh3IAdAAIAAB3g");
	this.shape_13.setTransform(181.375,15.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18335D").s().p("AgWAoQgJgFgGgKQgGgLAAgOQAAgVAMgMQAMgLATAAQANAAAKAFQAJAFAGAKQAGAKAAAOQAAAWgMAMQgMALgUAAQgMAAgKgFgAgJgQQgDAGAAAKQAAAMADAFQADAGAGAAQAHAAADgGQADgFAAgMQAAgLgDgFQgDgGgHAAQgGAAgDAGg");
	this.shape_14.setTransform(173.775,17.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18335D").s().p("AgeAtIAAhXIAXAAIAEAOIABAAQADgGAHgFQAHgFAGABIAKABIgDAcIgKgBIgIABQgFACgDADQgCAEAAAHIAAArg");
	this.shape_15.setTransform(165.8,17.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18335D").s().p("AgGAzQgIgDgCgHQgEgFAAgNIAAgjIgLAAIAAgMIANgKIAIgSIATAAIAAARIAWAAIAAAXIgWAAIAAAhQAAAIAIAAIAIAAIAHgDIAAAWIgKAEQgFABgKAAQgHAAgGgCg");
	this.shape_16.setTransform(157.95,16.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18335D").s().p("AAMAtIAAgvQAAgKgCgDQgCgFgGAAQgIAAgDAHQgDAHAAAMIAAAnIgeAAIAAhXIAXAAIAEALIABAAQAEgEAHgFQAGgEAJABQANAAAJAHQAJAJAAAPIAAA5g");
	this.shape_17.setTransform(149.075,17.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18335D").s().p("AgWAoQgJgFgGgKQgGgLABgOQAAgUALgNQAMgLAUAAQANAAAJAFQAJAFAGAKQAGAJgBAPQABAWgMAMQgMALgUAAQgMAAgKgFgAgJgQQgDAGAAAKQAAAMADAFQADAGAGAAQAHAAADgGQADgFAAgMQAAgKgDgGQgDgGgHAAQgGAAgDAGg");
	this.shape_18.setTransform(138.7,17.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18335D").s().p("AgZAjQgMgLABgYQAAgOAFgLQAHgKAKgEQAKgFANAAQAJAAAGACQAHABAGADIgJAXIgJgEIgKgCQgHAAgDAGQgFAEAAALQAAAMAFAFQADAEAHAAQAHAAAGgCIANgFIAAAYQgFADgIACQgGACgJAAQgUAAgMgKg");
	this.shape_19.setTransform(129.55,17.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18335D").s().p("AgTApQgKgFgGgKQgGgJAAgQQAAgOAFgLQAGgLAKgEQAJgFAMAAQATAAALAKQALAJAAAVIAAAMIg1AAQABAHAFAEQAEAFAJAAQAIAAAHgCQAHgBAHgEIAAAWQgFADgJACQgIABgLAAQgMAAgLgEgAgGgUQgDACgBAIIAZAAQAAgGgDgEQgEgEgGAAQgEAAgEAEg");
	this.shape_20.setTransform(116.125,17.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18335D").s().p("AANA8IgSgfIgKAHIAAAYIgfAAIAAh3IAfAAIgCBGIAAAAIAGgIIAXgeIAhAAIgeAlIAgAyg");
	this.shape_21.setTransform(106.55,15.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18335D").s().p("AghAmQgHgGAAgPQAAgOAJgGQAKgGATgBIANgBIAAgBQAAgGgDgCQgCgDgFAAIgLACIgNAFIgJgUQAGgEAMgCQAIgCAMAAQARAAAJAIQAJAIAAAPIAAA5IgVAAIgFgMIgBAAIgIAIQgDADgEABIgNABQgMAAgHgHgAAEAFQgHAAgDADQgEADAAAEQAAAEADADQACACAEAAQAEAAAEgDQAEgEAAgFIAAgHg");
	this.shape_22.setTransform(95.675,17.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#18335D").s().p("AgHAzQgGgEgEgGQgDgHgBgLIAAgjIgKAAIAAgMIANgKIAIgSIATAAIAAARIAWAAIAAAXIgWAAIAAAhQAAAIAIAAIAHAAIAIgDIAAAWIgKAEQgHABgIAAQgHAAgHgCg");
	this.shape_23.setTransform(87.3,16.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18335D").s().p("AANAtIAAgvQAAgJgDgEQgDgFgFAAQgIAAgCAHQgDAHAAAMIAAAnIgfAAIAAhXIAXAAIAEALIABAAQAFgFAGgEQAGgEAJABQAOAAAIAHQAJAJAAAPIAAA5g");
	this.shape_24.setTransform(74.275,17.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#18335D").s().p("AghAmQgHgGAAgPQAAgOAJgGQAKgGATgBIANgBIAAgBQAAgGgDgCQgCgDgGAAIgKACIgNAFIgJgUQAGgDAMgDQAIgCAMAAQARAAAJAIQAJAIAAAPIAAA5IgVAAIgFgMIgBAAIgIAIQgDADgFABIgMABQgMAAgHgHgAAEAFQgHAAgDADQgEADAAAEQAAAEADADQACACAEAAQAEAAAEgDQAEgEAAgFIAAgHg");
	this.shape_25.setTransform(63.825,17.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#18335D").s().p("AgYAjQgMgLAAgYQAAgOAGgLQAGgKAKgEQAKgFANAAQAJAAAGACQAHABAGADIgIAXIgLgEQgEgCgFAAQgHAAgDAGQgFAFAAAKQAAAMAFAFQADAEAHAAQAHAAAGgCQAIgCAEgDIAAAYQgEADgIACQgGACgKAAQgTAAgLgKg");
	this.shape_26.setTransform(54.975,17.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#18335D").s().p("AgaAqQgIgEgEgHQgEgIABgKIAAg5IAdAAIAAAwQAAAHADAFQACAFAGAAQAIAAADgHQACgGAAgNIAAgnIAeAAIAABXIgWAAIgEgLIgCAAQgFAIgGACQgFACgJAAQgJAAgGgCg");
	this.shape_27.setTransform(41.15,17.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#18335D").s().p("AgWAoQgJgFgGgKQgGgLAAgOQAAgUAMgNQAMgLATAAQANAAAKAFQAJAFAGAKQAGAKAAAOQAAAWgMAMQgMALgUAAQgMAAgKgFgAgJgQQgDAGAAAKQAAAMADAFQADAGAGAAQAIAAACgGQADgFAAgMQAAgKgDgGQgDgGgHAAQgGAAgDAGg");
	this.shape_28.setTransform(30.825,17.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#18335D").s().p("AgOA5IAAgrIgmhGIAiAAIASArIATgrIAiAAIgmBFIAAAsg");
	this.shape_29.setTransform(21.325,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302.9,25.6);


(lib._320x50CTAai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 320x50-CTA.ai
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
	this.instance = new lib._320x50HEAD2ai();
	this.instance.setTransform(1034.2,469.4,1,1,0,0,0,1034.2,469.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(0,0,274.6,43.3), null);


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
	this.instance = new lib._320x50HEAD1ai();
	this.instance.setTransform(1034.2,469.4,1,1,0,0,0,1034.2,469.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,302.9,25.6), null);


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
	this.instance = new lib._320x50CTAai("synched",0);
	this.instance.setTransform(-23.75,-5.15,1,1,0,0,0,39,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-62.7,-13.5,125.5,27.1), null);


// stage content:
(lib.Cat_DV360Display_ENG_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [204];
	// timeline functions:
	this.frame_204 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(204).call(this.frame_204).wait(1));

	// FRAME
	this.instance = new lib._320x50AFRAME();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(205));

	// HEAD1
	this.instance_1 = new lib.HEAD1();
	this.instance_1.setTransform(1334.2,469.4,1,1,0,0,0,1034.2,469.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({_off:false},0).to({x:1034.2},14,cjs.Ease.quadOut).wait(84).to({x:714.2},14,cjs.Ease.quadIn).wait(37));

	// HEAD2
	this.instance_2 = new lib.HEAD2();
	this.instance_2.setTransform(1334.2,469.4,1,1,0,0,0,1034.2,469.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({_off:false},0).to({x:1034.2},14,cjs.Ease.quadOut).wait(84).to({x:714.2},14,cjs.Ease.quadIn).wait(35));

	// CTA
	this.instance_3 = new lib.CTA();
	this.instance_3.setTransform(348,25);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(163).to({_off:false},0).to({x:77},14,cjs.Ease.quadOut).wait(15).to({scaleX:1.3,scaleY:1.3,x:76.95},3).to({scaleX:1,scaleY:1,x:77},5).wait(5));

	// LOGOs
	this.instance_4 = new lib.BKGDLOGOs("synched",0);
	this.instance_4.setTransform(450,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(167).to({_off:false},0).to({x:150},12,cjs.Ease.quadOut).wait(26));

	// BKGD2
	this.instance_5 = new lib.BKGDwhite("synched",0);
	this.instance_5.setTransform(470,50.1,1,1,0,0,0,0,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({_off:false},0).to({x:150},12,cjs.Ease.quadInOut).wait(144));

	// BKGD1
	this.instance_6 = new lib.BKGD1();
	this.instance_6.setTransform(250,300,1,1,0,0,0,250,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({x:-70},12,cjs.Ease.quadInOut).to({_off:true},1).wait(143));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-160,25,800,25.1);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 320,
	height: 50,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/Cat_DV360_Display_ENG_320x50_atlas_P_1.png", id:"Cat_DV360_Display_ENG_320x50_atlas_P_1"},
		{src:"images/Cat_DV360_Display_ENG_320x50_atlas_NP_1.jpg", id:"Cat_DV360_Display_ENG_320x50_atlas_NP_1"}
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
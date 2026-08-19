(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Cat_DV360_Display_SPN_300x600_atlas_P_1", frames: [[0,0,600,1200],[602,0,600,1200]]},
		{name:"Cat_DV360_Display_SPN_300x600_atlas_NP_1", frames: [[0,0,600,1200],[602,0,600,1200]]}
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
	this.initialize(ss["Cat_DV360_Display_SPN_300x600_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x600A = function() {
	this.initialize(ss["Cat_DV360_Display_SPN_300x600_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x600BGirl = function() {
	this.initialize(ss["Cat_DV360_Display_SPN_300x600_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._300x600BLOGO = function() {
	this.initialize(ss["Cat_DV360_Display_SPN_300x600_atlas_P_1"]);
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
	this.shape_1.graphics.f("#18335D").s().p("AgRASQgIgFAAgNQAAgMAIgFQAIgGAKAAQAJAAAJAGQAHAFAAAMQAAANgHAFQgIAGgKAAQgLAAgHgGg");
	this.shape_1.setTransform(197.75,214.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18335D").s().p("AgkBAQgOgIgKgQQgJgRAAgXQAAgiASgTQAUgTAfAAQAVAAAPAJQAQAIAJAQQAJARAAAWQAAAjgTATQgSATghAAQgUAAgQgJgAgPgaQgFAIAAASQAAATAFAIQAEAKALAAQAMAAAEgKQAFgJgBgSQABgRgFgJQgEgKgMAAQgKAAgFAKg");
	this.shape_2.setTransform(186,209.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18335D").s().p("AgoA4QgTgRAAgmQAAgZAKgQQAKgRAQgHQAQgIAVAAQANAAAMADQAMAEAJAEIgOAkIgQgGQgJgDgHAAQgLAAgGAJQgHAJAAARQAAARAHAJQAGAHALAAQALAAAKgDQALgEAJgFIAAAnQgJAFgLAEQgKADgPAAQgfAAgTgRg");
	this.shape_3.setTransform(171.275,209.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18335D").s().p("AgYBjIAAiMIAwAAIAACMgAgRg7QgIgEAAgNQAAgNAIgEQAHgEAKgBQAKABAIAEQAIADAAAOQAAANgIAEQgIAEgKABQgKgBgHgEg");
	this.shape_4.setTransform(160.125,206.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18335D").s().p("Ag1BPQgOgRAAglQAAgjAOgSQAPgTAXAAQAOAAAHAGQAHAFAIAKIABAAIgCgPIgBg4IAxAAIAADAIglAAIgKgRIgCAAQgGAJgIAFQgIAGgPAAQgVAAgOgTgAgMAAQgGAIAAASQAAARAGAJQAGAIAIAAQALAAAFgIQAFgIAAgOIAAgEQAAgRgFgJQgDgHgOAAQgIAAgFAHg");
	this.shape_5.setTransform(147.5,206.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18335D").s().p("AgfBbQgRgHgJgQQgKgPAAgaQAAgaAJgPQAJgQAPgIQARgIATAAQAeAAASAQQASARAAAfIAAAVIhWAAQABAMAHAGQAIAHAOAAQAPAAAJgCQAJgCAOgGIAAAjQgLAFgMACQgKACgUABQgUAAgRgIgAgKgHQgGAFgBALIApAAQAAgJgGgGQgFgHgKAAQgHAAgGAGgAgYg5IAAgDIAfglIA1AAIAAACIg1Amg");
	this.shape_6.setTransform(131.775,206.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18335D").s().p("AA+BIIAAhMQAAgQgEgGQgFgHgIAAQgMAAgEALQgFALAAARIAABCIgvAAIAAhMQAAgOgFgIQgDgGgJgBQgMAAgFAMQgEALAAAUIAAA+IgxAAIAAiMIAlAAIAHARIABAAQAFgHALgHQAMgFAPgBQAPABAJAFQALAGAGAIIABAAQAHgKAKgEQAMgGAMAAQAZAAAMANQANAMAAAbIAABbg");
	this.shape_7.setTransform(111.25,209.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18335D").s().p("AgjBAQgRgJgIgQQgJgQAAgXQAAgiATgTQASgTAgAAQAVAAAPAIQAQAJAJAQQAJARAAAWQAAAjgTATQgTATggAAQgTAAgQgJgAgPgbQgFAKAAARQAAASAFAJQAFAKAKAAQALAAAFgKQAFgJAAgSQAAgRgFgKQgFgJgLAAQgKAAgFAJg");
	this.shape_8.setTransform(186.775,181.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18335D").s().p("AgxBIIAAiMIAkAAIAIAWIACAAQAGgKAKgHQAKgIAMAAIAJABIAGABIgEAtIgHgBIgKAAQgHAAgGACQgHACgFAFQgEAGAAAMIAABGg");
	this.shape_9.setTransform(173.925,180.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18335D").s().p("AgsBCQgKgFgHgMQgGgLAAgSIAAhaIAwAAIAABLQAAANAEAIQAEAHAJAAQANAAAEgLQAFgLAAgUIAAg9IAxAAIAACLIglAAIgGgRIgDAAQgGAKgMAEQgJAGgPAAQgNgBgMgFg");
	this.shape_10.setTransform(158.75,181.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18335D").s().p("AgkBkQgLgBgOgGIAAgnQALAEANAEQAMACAQAAQAdAAgBgVIAAgDIACgRIgCAAQgFAJgIAFQgIAHgPAAQgWAAgOgTQgOgTAAgiQAAgkAOgSQAOgTAXAAQAPAAAIAFQAJAHAFAIIACAAIADgRIAqAAIAACLQAAAdgSARQgUAPgkAAQgNAAgRgCgAgSgbQAAARAFAJQAFAHAKAAQAMAAAEgGQAFgIAAgPIAAgGQAAgRgFgIQgEgKgNABQgTgBAAAlg");
	this.shape_11.setTransform(141.8,184);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18335D").s().p("AgfBBQgQgHgKgQQgKgQAAgZQAAgYAJgRQAJgQAPgIQAQgIATAAQAgAAARAQQASAQAAAgIAAAVIhWAAQAAALAIAHQAJAHANAAQAMAAAMgCQANgEAKgFIAAAjQgKAFgNADQgNADgRAAQgUAAgRgIgAgKgiQgGAGgBALIApAAQAAgJgGgGQgFgHgKAAQgIAAgFAFg");
	this.shape_12.setTransform(126.075,181.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18335D").s().p("AgeBHQgMgCgMgEIAAgnQAMAFAPAEQAPACAHAAQAPAAAAgHQAAgDgDgCQgCgCgGgDIgSgIQgSgHgJgJQgIgKAAgRQAAgUAQgLQAQgKAZAAQAOAAAMADQAMADANAGIgNAfQgOgGgHgBQgLgDgGAAQgLAAAAAGQAAADACABQADADAEACIASAHQAOAGAGAFQAJAGADAHQAEAJAAALQAAANgGALQgGAKgNAGQgMAGgVAAQgRAAgKgCg");
	this.shape_13.setTransform(111.675,181.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18335D").s().p("AAUBHIAAhLQAAgPgEgGQgEgIgJABQgMAAgFALQgFALAAAUIAAA9IgxAAIAAiLIAlAAIAGATIACAAQAIgLAKgFQAKgGAOABQAXAAANAMQANAMAAAbIAABag");
	this.shape_14.setTransform(185.25,152.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18335D").s().p("AgsBCQgKgFgHgLQgGgMAAgSIAAhbIAwAAIAABNQAAANAEAHQADAHAKAAQANAAAEgLQAFgLAAgUIAAg+IAxAAIAACMIglAAIgGgSIgDAAQgGALgMAFQgKAFgOgBQgOABgLgGg");
	this.shape_15.setTransform(168.2,152.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18335D").s().p("AAUBHIAAhLQAAgPgEgGQgEgIgJABQgNAAgEALQgFALAAAUIAAA9IgwAAIAAiLIAkAAIAGATIADAAQAGgLALgFQAKgGAOABQAXAAANAMQAOAMAAAbIAABag");
	this.shape_16.setTransform(144.6,152.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18335D").s().p("AgjBAQgQgIgJgRQgJgQAAgXQAAgiATgTQATgTAfAAQAVAAAPAJQARAIAIAQQAJAQAAAXQAAAjgTATQgSATghAAQgTAAgQgJgAgPgaQgFAJAAARQAAASAFAJQAFAKAKAAQALAAAFgKQAFgJAAgSQAAgRgFgJQgFgKgLAAQgKAAgFAKg");
	this.shape_17.setTransform(127.975,152.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18335D").s().p("AgoA4QgTgSAAglQAAgZAKgQQAJgQARgIQAQgIAVAAQANAAALADQAMADAKAFIgOAkIgRgGQgIgDgHAAQgKAAgHAJQgGAJAAAQQAAASAGAIQAGAIALAAQALAAALgDQAKgDAKgGIAAAmQgJAGgLAEQgLADgOAAQggAAgTgRg");
	this.shape_18.setTransform(113.25,152.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200.4,216.8);


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
	this.shape_1.graphics.f("#18335D").s().p("Ag1BPQgOgRAAglQAAgjAPgSQAOgTAXAAQAOAAAHAGQAIAGAGAJIABAAIgBgPIgBg4IAxAAIAADAIglAAIgKgSIgCAAQgEAIgKAHQgHAGgPAAQgVAAgPgTgAgMAAQgGAIAAASQAAASAGAIQAFAHAJAAQAMABAEgIQAFgHAAgQIAAgDQAAgRgEgJQgFgHgNAAQgIgBgFAIg");
	this.shape_1.setTransform(195.15,121.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18335D").s().p("AgrBCQgLgFgHgMQgGgMAAgRIAAhbIAwAAIAABMQAAANAEAIQAEAHAJAAQAMAAAFgLQAFgLAAgUIAAg+IAwAAIAACMIgkAAIgGgSIgDAAQgGALgMAFQgMAFgMAAQgNAAgLgGg");
	this.shape_2.setTransform(178.75,124.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18335D").s().p("AgXBhIAAjBIAvAAIAADBg");
	this.shape_3.setTransform(166.175,121.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18335D").s().p("Ag2A9QgMgKABgXQAAgXAPgKQAQgLAegBIAWgBIAAgCQAAgKgFgDQgFgFgHAAQgIAAgKAEIgVAHIgNggQALgGAQgDQAPgEASAAQAbAAAPAOQAPANABAYIAABbIgiAAIgJgTIgBAAQgFAHgIAGQgFAEgIACQgJADgLAAQgSAAgNgMgAAHAIQgNABgFAEQgGAEAAAHQABAHAEAEQADADAGABQAIgBAHgFQAGgGAAgIIAAgMg");
	this.shape_4.setTransform(153.8,124.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18335D").s().p("AgeBHQgMgBgMgFIAAgnQAOAGANADQAPACAHABQAPAAAAgHQAAgDgDgDIgIgFIgSgHQgSgIgJgJQgIgKAAgRQAAgUAQgKQAQgLAZAAQAOAAAMADQARAFAIAEIgNAfQgJgEgMgEIgRgCQgLAAAAAGQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQADADAFACIARAIQALAEAJAGQAIAFAEAHQAEAIAAANQAAANgGAKQgGALgNAGQgMAGgVAAQgMAAgPgCg");
	this.shape_5.setTransform(139.675,124.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18335D").s().p("AgrBCQgMgFgGgMQgHgMAAgRIAAhbIAxAAIAABMQAAANAEAIQAFAHAIAAQAMAAAGgLQAEgLAAgUIAAg+IAxAAIAACMIglAAIgGgSIgDAAQgGALgMAFQgLAFgMAAQgNAAgMgGg");
	this.shape_6.setTransform(117.95,124.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18335D").s().p("AgeBHQgLgBgNgFIAAgnQANAGAOADQAPACAHABQAPAAAAgHQAAgDgDgDQgCgCgGgDIgSgHQgSgIgJgJQgIgKAAgRQAAgUAQgKQAQgLAZAAQAOAAAMADIAZAJIgNAfQgJgEgMgEQgMgCgFAAQgLAAAAAGQAAACACACQADADAEACIASAIQALAEAJAGQAIAFAEAHQAEAJAAAMQAAANgGAKQgGALgNAGQgNAGgUAAQgLAAgQgCg");
	this.shape_7.setTransform(102.925,124.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18335D").s().p("AgxBIIAAiMIAkAAIAIAXIACAAQAFgLALgHQALgIALABIAIAAIAHABIgEAtIgHgBIgKAAQgHAAgGACQgHACgFAFQgEAGAAAMIAABGg");
	this.shape_8.setTransform(205.775,95.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18335D").s().p("Ag1A+QgMgLAAgYQAAgWAPgKQAPgLAegCIAXAAIAAgCQAAgKgEgEQgGgEgHAAQgHAAgLADQgLADgJAFIgOggQAOgHANgDQAPgDATAAQAaAAAQANQAOAOAAAYIAABbIghAAIgJgSIgBAAQgGAHgHAFQgGAFgHACQgLACgJAAQgSAAgMgLgAAHAIQgMABgGAEQgFADAAAIQAAAIAEADQADADAHAAQAIAAAGgFQAGgFAAgKIAAgLg");
	this.shape_9.setTransform(190.85,95.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18335D").s().p("AgXBhIAAjBIAvAAIAADBg");
	this.shape_10.setTransform(179.175,93.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18335D").s().p("AgjBAQgPgHgKgSQgJgQAAgXQAAgiATgTQASgTAhAAQAUAAAQAIQAQAKAIAPQAJAQAAAXQAAAjgTATQgTATggAAQgTAAgQgJgAgPgbQgFAKAAARQAAASAFAJQAFAKAKAAQAMAAAEgKQAFgJAAgSQAAgRgFgKQgEgJgMAAQgKAAgFAJg");
	this.shape_11.setTransform(166.975,95.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18335D").s().p("AgxBIIAAiMIAkAAIAIAXIACAAQAFgLAKgHQALgIAMABIAIAAIAHABIgFAtIgGgBIgKAAQgHAAgGACQgHACgGAFQgDAHAAALIAABGg");
	this.shape_12.setTransform(154.175,95.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18335D").s().p("AgLBRQgKgEgGgKQgGgLAAgTIAAg5IgRAAIAAgUIAWgPIAMgeIAfAAIAAAdIAiAAIAAAkIgiAAIAAA2QAAANANAAQAHAAAFgBIALgEIAAAkQgFADgLACQgKADgNAAQgNAAgKgFg");
	this.shape_13.setTransform(141.575,94.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18335D").s().p("AAUBIIAAhNQAAgMgEgIQgEgIgJAAQgNAAgEAMQgFAMAAATIAAA+IgxAAIAAiMIAlAAIAHASIABAAQAHgKALgFQAIgFAQAAQAWgBAOAMQAOANAAAbIAABbg");
	this.shape_14.setTransform(127.325,95.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18335D").s().p("AgjBAQgPgHgKgSQgJgQAAgXQAAgiATgTQASgTAhAAQAUAAAQAIQAQAKAIAPQAJAQAAAXQAAAjgTATQgTATggAAQgTAAgQgJgAgPgbQgFAKAAARQAAASAFAJQAFAKAKAAQAMAAAEgKQAFgJAAgSQAAgRgFgKQgEgJgMAAQgKAAgFAJg");
	this.shape_15.setTransform(110.675,95.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18335D").s().p("AgoA3QgTgRAAglQAAgZAKgQQAKgQAQgIQARgIAUAAQANAAALADQAJACANAGIgOAkIgRgGQgGgDgJAAQgLAAgGAJQgHAJAAAQQAAASAHAIQAGAIALAAQAJAAAMgDQAKgDAKgGIAAAmQgJAGgLADQgKAEgPAAQgfAAgTgSg");
	this.shape_16.setTransform(95.975,95.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18335D").s().p("AgfBBQgRgIgJgPQgKgQAAgZQAAgYAJgRQAJgQAPgIQAQgIAUAAQAeAAASAQQASAQAAAhIAAAUIhWAAQABALAIAHQAIAHANAAQAMAAAMgCQAJgCAOgGIAAAiQgJAGgNACQgLADgUAAQgUAAgRgIgAgKghQgGAFgBAMIApAAQAAgJgFgHQgFgHgLAAQgHAAgGAGg");
	this.shape_17.setTransform(182.525,67.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18335D").s().p("Ag1BPQgOgTAAgjQAAgjAOgSQAPgTAWAAQAOAAAJAGQAJAHAEAIIACAAIgCgPIgBg4IAxAAIAADAIgkAAIgLgRIgCAAQgEAHgJAHQgJAGgOAAQgWAAgOgTgAgMAAQgGAIAAASQAAASAGAIQAGAIAIAAQAMAAAEgIQAFgHABgPIAAgEQAAgRgGgJQgEgIgNAAQgHAAgGAIg");
	this.shape_18.setTransform(166.2,65.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18335D").s().p("AgfBBQgSgIgIgPQgKgQAAgZQAAgYAJgRQAIgQARgIQAOgIAVAAQAdAAATAQQASAQAAAhIAAAUIhWAAQAAAKAJAIQAHAHAOAAQAMAAAMgCQAJgCANgGIAAAiQgIAGgNACQgLADgUAAQgVAAgQgIgAgKghQgFAFgCAMIApAAQgBgKgEgGQgGgHgKAAQgIAAgFAGg");
	this.shape_19.setTransform(150.5,67.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18335D").s().p("AgrBDQgLgHgHgKQgGgNAAgRIAAhbIAwAAIAABNQAAANAEAHQAFAHAIABQANAAAEgMQAFgLAAgUIAAg+IAwAAIAACMIgkAAIgGgRIgDAAQgHALgLAEQgKAEgNAAQgOAAgLgEg");
	this.shape_20.setTransform(134.1,67.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18335D").s().p("AhBBbIAAi1IA/AAQAiAAAQAPQASAPAAAcQAAALgDANQgFAKgIAJQgGAJgOAFQgPAGgRAAIgNAAIAAA8gAgPgIIAJAAQAJAAAHgFQAHgFAAgNQAAgIgFgGQgFgFgKAAIgMAAg");
	this.shape_21.setTransform(118.1,65.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210.8,131.6);


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
	this.shape.graphics.f("#E8E8ED").s().p("AgaAmIAAgRIAMAFQAGACAHAAQAGAAACgCQADgCAAgFQAAgDgCgCIgGgEIgOgIIgGgDQgEgEgBgDQgCgEAAgGQAAgMAHgGQAHgGANAAQAHAAAGABIAMAFIgGAOIgKgEIgKgBQgEAAgCACQgDACAAAEQAAAFAEACIAWAMQAFAEACAEQACAEAAAHQAAALgIAGQgIAHgOAAQgMAAgLgFg");
	this.shape.setTransform(108.825,13.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8E8ED").s().p("AgVAmQgJgGgFgJQgEgKAAgNQAAgNAEgJQAFgJAJgGQAIgFANAAQAPAAAIAFQAJAGAEAJQAEAJAAANQAAAOgEAJQgEAKgJAFQgJAFgOAAQgMAAgJgFgAgPgUQgFAHAAANQAAAOAFAHQAGAHAJAAQAMAAAEgHQAGgHAAgOQAAgNgGgHQgEgIgMAAQgJAAgGAIg");
	this.shape_1.setTransform(100.7,13.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E8E8ED").s().p("AAOAqIgjg/IgBAAIACA/IgQAAIAAhTIAWAAIAkA+IgBg+IAQAAIAABTg");
	this.shape_2.setTransform(91.125,13.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8E8ED").s().p("AgVAmQgKgGgEgJQgEgKAAgNQAAgNAEgJQAEgJAKgGQAIgFANAAQAPAAAIAFQAJAGAEAJQAEAKAAAMQAAANgEAKQgEAJgJAGQgKAFgNAAQgMAAgJgFgAgQgUQgEAJAAALQAAAMAEAJQAGAHAKAAQALAAAGgHQAEgJAAgMQAAgLgEgJQgGgIgLAAQgKAAgGAIg");
	this.shape_3.setTransform(81.5,13.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8E8ED").s().p("AAcAqIABhAIAAAAIgWBAIgPAAIgVhAIAAAAIABBAIgQAAIAAhTIAYAAIAUA/IAAAAIAVg/IAYAAIAABTg");
	this.shape_4.setTransform(71.125,13.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E8E8ED").s().p("AgXA3IAAhTIAvAAIAAAPIgdAAIAAARIAbAAIAAAPIgbAAIAAAVIAdAAIAAAPgAgJgjIAAgCIAMgRIAUAAIAAABIgQAOIgFAEg");
	this.shape_5.setTransform(62.325,11.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8E8ED").s().p("AAOAqIgTggIgKAAIAAAgIgRAAIAAhTIAYAAQAPAAAJAHQAIAFAAAOQABAFgDAFQgCAEgEACIgIAEIAZAlgAgPgEIAGAAQAJAAADgCQADgDAAgGQABgGgFgCQgCgDgKAAIgFAAg");
	this.shape_6.setTransform(55.35,13.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E8E8ED").s().p("AAVAqIgGgUIgdAAIgGAUIgUAAIAehTIAVAAIAeBTgAgKAHIAVAAIgLgjg");
	this.shape_7.setTransform(46.725,13.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E8E8ED").s().p("AgcAqIAAhTIAbAAQAQAAAGAHQAIAIAAAMQAAAHgDAGQgDAFgHAFQgIAEgKAAIgIAAIAAAdgAgKgCIAGAAQAHAAAEgCQAEgDAAgHQAAgMgNAAIgIAAg");
	this.shape_8.setTransform(39.65,13.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E8E8ED").s().p("AgXAqIAAhTIAvAAIAAAPIgeAAIAAATIAcAAIAAANIgcAAIAAAWIAeAAIAAAOg");
	this.shape_9.setTransform(32.45,13.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E8E8ED").s().p("AAOAqIgTggIgKAAIAAAgIgSAAIAAhTIAZAAQAPAAAJAHQAIAFAAAOQAAAGgCAEIgFAGIgIAEIAZAlgAgPgEIAGAAQAJAAADgCQADgDAAgGQAAgGgEgCQgCgDgJAAIgGAAg");
	this.shape_10.setTransform(25.475,13.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8E8ED").s().p("AgcAqIAAhTIAbAAQAPAAAHAHQAIAIAAAMQAAAHgDAGQgEAGgGAEQgIAEgKAAIgIAAIAAAdgAgKgCIAFAAQAHAAAFgCQAEgDAAgHQAAgMgNAAIgIAAg");
	this.shape_11.setTransform(17.5,13.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#621F7B").s().p("AnzCIQg1AAglgmQgmglAAg1IAAgPQAAg1AmglQAlgmA1AAIPnAAQA1AAAlAmQAmAlAAA1IAAAPQAAA1gmAlQglAmg1AAg");
	this.shape_12.setTransform(62.775,13.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(0,0,200.4,216.8), null);


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

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,210.8,131.6), null);


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
(lib.Cat_DV360Display_SPN_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [154];
	// timeline functions:
	this.frame_154 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==2){
		this.stop();
		}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(154).call(this.frame_154).wait(26));

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
		{src:"images/Cat_DV360_Display_SPN_300x600_atlas_P_1.png", id:"Cat_DV360_Display_SPN_300x600_atlas_P_1"},
		{src:"images/Cat_DV360_Display_SPN_300x600_atlas_NP_1.jpg", id:"Cat_DV360_Display_SPN_300x600_atlas_NP_1"}
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
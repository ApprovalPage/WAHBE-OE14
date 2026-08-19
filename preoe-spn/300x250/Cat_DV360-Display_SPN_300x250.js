(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Cat_DV360_Display_SPN_300x250_atlas_P_1", frames: [[0,0,600,500],[0,502,600,500]]},
		{name:"Cat_DV360_Display_SPN_300x250_atlas_NP_1", frames: [[0,0,600,500],[0,502,600,500]]}
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



(lib._300x250AFRAME = function() {
	this.initialize(ss["Cat_DV360_Display_SPN_300x250_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x250A = function() {
	this.initialize(ss["Cat_DV360_Display_SPN_300x250_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x250BGirl = function() {
	this.initialize(ss["Cat_DV360_Display_SPN_300x250_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._300x250BLOGO = function() {
	this.initialize(ss["Cat_DV360_Display_SPN_300x250_atlas_P_1"]);
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
	this.instance = new lib._300x250A();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGD1, new cjs.Rectangle(0,0,300,250), null);


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
	this.instance = new lib._300x250BLOGO();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDLOGOs, new cjs.Rectangle(-150,-125,300,250), null);


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
	this.instance = new lib._300x250BGirl();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDGirl, new cjs.Rectangle(-150,-125,300,250), null);


(lib._300x250HEAD2ai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 300x250-HEAD2.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18335D").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape.setTransform(3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18335D").s().p("AgNAOQgGgEABgKQgBgJAGgEQAGgEAIAAQAHAAAGAEQAFAEAAAJQAAAKgFAEQgFAEgIAAQgJAAgFgEg");
	this.shape_1.setTransform(240.25,147.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18335D").s().p("AgaAxQgNgHgGgMQgHgNAAgRQAAgZAOgPQAPgOAXAAQAQAAAMAGQALAGAHANQAHAMAAARQAAAagOAPQgPAOgYAAQgOAAgMgGgAgLgUQgEAHAAANQAAAOAEAGQAEAIAHAAQAJAAADgIQAEgGAAgOQAAgNgEgHQgDgHgJAAQgIAAgDAHg");
	this.shape_2.setTransform(231.325,144.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18335D").s().p("AgeAqQgPgNAAgdQABgRAHgNQAHgMAMgGQANgGAPAAIATACIAQAGIgKAbIgNgFQgFgBgHAAQgIAAgEAGQgFAHAAAMQAAAPAFAFQAFAGAHAAQAHAAAJgDQAIgCAIgFIAAAeQgGADgKAEQgIACgKAAQgYAAgOgNg");
	this.shape_3.setTransform(220.2,144.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18335D").s().p("AgSBLIAAhqIAkAAIAABqgAgNgtQgFgCgBgKQABgKAFgDQAFgEAIAAQAIAAAGAEQAFADAAAKQAAAJgFADQgGAEgIAAQgIAAgFgEg");
	this.shape_4.setTransform(211.75,141.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18335D").s().p("AgoA8QgKgOAAgbQgBgZALgPQAMgOAQAAQALAAAGAEQAHAGADAFIABAAIgCg1IAlAAIAACRIgbAAIgIgNIgCAAQgEAHgGAEQgGAEgLAAQgQAAgLgOgAgJAAQgEAFAAAPQAAANAEAGQAEAGAHAAQAIAAAEgGQAEgFAAgMIAAgDQAAgMgEgHQgDgGgKAAQgFAAgFAGg");
	this.shape_5.setTransform(202.15,142.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18335D").s().p("AgXBFQgMgFgIgNQgIgMABgTQAAgTAGgLQAHgNAMgGQALgGAQAAQAWAAAOAMQANAMAAAYIAAAQIhAAAQAAAJAGAFQAFAFALAAQALAAAHgCQAJgBAIgFIAAAbQgHAEgKACQgLACgLAAQgPAAgNgGgAgIgGQgEAFAAAHIAeAAQAAgGgEgFQgEgFgHAAQgFAAgGAEgAgSgrIAAgDIAYgcIAoAAIAAACIgoAdg");
	this.shape_6.setTransform(190.25,142.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18335D").s().p("AAvA2IAAg5QAAgMgDgFQgEgEgGAAQgJAAgDAHQgEAIAAANIAAAyIgkAAIAAg5QAAgMgDgEQgDgFgGAAQgKAAgDAIQgDAKAAAOIAAAuIglAAIAAhpIAcAAIAFANIABAAQAEgHAIgEQAJgEALAAQALAAAHAEQAIADAFAIIABAAQAEgHAJgEQAIgEAKAAQATAAAJAJQAKAJAAAVIAABEg");
	this.shape_7.setTransform(174.725,143.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18335D").s().p("AgbAxQgMgHgGgMQgHgNAAgRQAAgZAOgPQAPgOAXAAQAQAAAMAGQALAGAHANQAHAMAAARQAAAagOAPQgPAOgYAAQgOAAgNgGgAgLgUQgEAHAAANQAAAOAEAGQAEAIAHAAQAJAAADgIQAEgGAAgOQAAgNgEgHQgDgHgJAAQgIAAgDAHg");
	this.shape_8.setTransform(231.925,122.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18335D").s().p("AglA2IAAhpIAbAAIAHARIABAAQAEgJAHgFQAJgFAIAAIAMABIgEAjIgEgBIgIgBIgKACQgFABgEAFQgDAFAAAIIAAA0g");
	this.shape_9.setTransform(222.2,122.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18335D").s().p("AggAyQgJgEgFgJQgFgJAAgNIAAhEIAlAAIAAA5QAAALADAFQADAFAGAAQAKAAAEgIQADgIAAgQIAAguIAlAAIAABpIgcAAIgEgNIgCAAQgGAIgIADQgIAEgJAAQgKAAgJgEg");
	this.shape_10.setTransform(210.7,122.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18335D").s().p("AgbBMQgHgBgMgEIAAgeIATAGQAKACALAAQAVAAgBgQIAAgCIACgNIgCAAQgEAHgGAEQgGAEgLAAQgQAAgLgOQgLgOAAgaQAAgbALgOQALgOARAAQALAAAGAEQAHAEAEAHIABAAIADgNIAgAAIAABpQAAAXgOAMQgPALgcAAgAgNgUQAAAOAEAFQADAGAIAAQAJAAADgFQADgFABgMIAAgFQgBgMgDgHQgDgHgKAAQgOAAAAAcg");
	this.shape_11.setTransform(197.85,124.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18335D").s().p("AgXAxQgNgFgHgMQgHgMAAgTQAAgTAGgMQAHgMAMgGQAMgGAOAAQAXAAAOAMQANAMAAAYIAAAQIhAAAQABAIAFAFQAGAGAKAAQALAAAHgCQAJgCAJgEIAAAaQgJAEgIACQgMACgMAAQgOAAgNgGgAgHgZQgFAEgBAJIAfAAQAAgHgEgFQgFgFgGAAQgGAAgEAEg");
	this.shape_12.setTransform(185.95,122.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18335D").s().p("AgWA2IgTgFIAAgdQAKAEALACQAJACAHAAQALAAAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQgCgCgDgCIgOgGQgNgFgHgGQgHgHAAgOQAAgQAMgHQAMgIATAAQAKAAAKACQALADAIAEIgKAXIgQgFQgHgCgGAAQgIAAAAAEQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABIAFADIAOAGQAKAEAFAEQAGAEADAFQADAGAAAJQAAALgFAHQgEAIgKAFQgKAEgPAAg");
	this.shape_13.setTransform(175.025,122.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18335D").s().p("AAPA2IAAg5QAAgKgDgGQgCgFgIAAQgKAAgDAIQgDAKgBAOIAAAuIgkAAIAAhpIAbAAIAGAOIABAAQAFgIAIgEQAIgEALAAQARAAAKAJQAKAJAAAVIAABEg");
	this.shape_14.setTransform(230.8,100.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18335D").s().p("AghAyQgIgEgFgJQgFgJAAgNIAAhEIAlAAIAAA5QAAALADAFQADAFAHAAQAKAAACgIQAEgIAAgQIAAguIAlAAIAABpIgcAAIgFgNIgBAAQgGAIgIADQgJAEgJAAQgJAAgKgEg");
	this.shape_15.setTransform(217.85,101.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18335D").s().p("AAPA2IAAg5QAAgKgDgGQgDgFgHAAQgJAAgEAIQgDAKAAAOIAAAuIglAAIAAhpIAcAAIAFAOIABAAQAGgIAHgEQAIgEAKAAQASAAAJAJQALAJAAAVIAABEg");
	this.shape_16.setTransform(200,100.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18335D").s().p("AgaAxQgNgHgGgMQgHgNAAgRQAAgZAOgPQAPgOAXAAQAQAAAMAGQALAGAHANQAHAMAAARQAAAagOAPQgPAOgYAAQgNAAgNgGgAgLgUQgEAIAAAMQAAAMAEAIQAEAIAHAAQAJAAADgIQAEgGAAgOQAAgNgEgHQgDgHgJAAQgIAAgDAHg");
	this.shape_17.setTransform(187.375,101.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18335D").s().p("AgeAqQgOgNAAgdQAAgRAHgNQAHgMANgGQANgGAPAAIASACIARAGIgLAbIgNgFQgFgBgGAAQgJAAgEAGQgFAHAAAMQAAAPAFAFQAEAGAJAAQAHAAAJgDQAHgCAHgFIAAAeQgEADgKAEQgJACgKAAQgYAAgOgNg");
	this.shape_18.setTransform(176.25,101.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242.2,149.6);


(lib._300x250HEAD1ai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 300x250-HEAD1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18335D").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape.setTransform(3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18335D").s().p("AgoA8QgLgNABgcQgBgZALgPQAMgOARAAQAKAAAGAEQAHAFADAGIACAAIgCgLIgBgqIAlAAIAACRIgbAAIgIgNIgCAAQgEAHgGAEQgGAEgLAAQgQAAgLgOgAgJAAQgEAGAAAOQAAAMAEAHQAEAGAHAAQAJAAADgGQADgEABgNIAAgDQAAgMgEgHQgDgGgKAAQgFAAgFAGg");
	this.shape_1.setTransform(238.25,77.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18335D").s().p("AghAyQgIgEgFgJQgFgJAAgNIAAhEIAlAAIAAA5QAAALADAFQADAFAHAAQAJAAADgIQAEgIAAgQIAAguIAlAAIAABpIgcAAIgFgNIgBAAQgGAIgIADQgJAEgJAAQgJAAgKgEg");
	this.shape_2.setTransform(225.85,79.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18335D").s().p("AgRBJIAAiRIAkAAIAACRg");
	this.shape_3.setTransform(216.3,77.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18335D").s().p("AgoAvQgJgJAAgRQAAgRAMgIQALgIAXgBIARgBIAAgBQAAgHgEgDQgDgDgGAAQgHAAgGACIgQAGIgKgZQAJgFALgCQAOgCAMAAQAUAAALAKQALAJAAATIAABFIgZAAIgHgOIgBAAQgDAEgGAFQgEAEgGABQgIACgHAAQgNAAgKgIgAgIAKQgEACAAAGQAAAGADACQADADAFAAQAGAAAEgEQAFgEAAgHIAAgIIgJAAQgKABgDADg");
	this.shape_4.setTransform(206.925,79.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18335D").s().p("AgXA2IgSgFIAAgdQAJAEAMACQAJACAIAAQAKAAABgFIgCgEIgGgEIgPgGQgMgFgIgGQgGgIAAgNQAAgQAMgHQALgIAUAAQAJAAALACQAKADAJAEIgKAXIgQgFQgGgCgHAAQgIAAAAAEIACAEIAFADIAOAGQAKAEAFAEQAGAEADAFQADAGAAAJQAAALgFAHQgDAIgLAFQgKAEgPAAg");
	this.shape_5.setTransform(196.25,79.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18335D").s().p("AggAyQgJgEgFgJQgFgJAAgNIAAhEIAlAAIAAA5QAAALADAFQADAFAHAAQAJAAAEgIQADgIAAgQIAAguIAlAAIAABpIgcAAIgFgNIgCAAQgFAIgIADQgJAEgIAAQgLAAgIgEg");
	this.shape_6.setTransform(179.8,79.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18335D").s().p("AgWA2IgSgFIAAgdQAIAEAMACQAJACAHAAQALAAAAgFIgCgEIgGgEIgNgGQgNgFgHgGQgHgIAAgNQAAgQAMgHQAMgIATAAQAJAAALACQAKADAJAEIgKAXIgQgFQgHgCgFAAQgJAAAAAEQAAABAAAAQAAAAAAABQABAAAAABQABAAAAABIAFADIANAGQALAEAFAEQAGAEADAFQADAGAAAJQAAALgEAHQgFAIgKAFQgKAEgPAAg");
	this.shape_7.setTransform(168.4,79.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18335D").s().p("AglA2IAAhpIAcAAIAFARIACAAQAEgJAIgFQAIgFAJAAIALABIgEAjIgEgBIgIgBIgKACQgFABgEAFQgDAEAAAJIAAA0g");
	this.shape_8.setTransform(246.325,57.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18335D").s().p("AgoAvQgJgJAAgRQAAgRALgIQAMgIAXgBIAQgBIAAgBQAAgHgDgDQgDgDgGAAQgHAAgGACIgQAGIgLgZQALgFAKgCQAOgCALAAQAUAAAMAKQALAKAAASIAABFIgZAAIgHgOIgBAAIgJAJQgEAEgGABQgIACgHAAQgOAAgJgIgAgIAKQgEADAAAFQAAAGADACQADADAFAAQAFAAAFgEQAFgEAAgHIAAgIIgJAAQgJABgEADg");
	this.shape_9.setTransform(235.025,58.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18335D").s().p("AgRBJIAAiRIAjAAIAACRg");
	this.shape_10.setTransform(226.175,56.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18335D").s().p("AgaAxQgNgHgGgMQgHgNAAgRQAAgZAOgPQAPgOAXAAQAQAAAMAGQALAGAHANQAHAMAAARQAAAagOAPQgPAOgYAAQgNAAgNgGgAgLgUQgEAIAAAMQAAAMAEAIQAEAIAHAAQAJAAADgIQAEgGAAgOQAAgNgEgHQgDgHgJAAQgIAAgDAHg");
	this.shape_11.setTransform(216.925,58.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18335D").s().p("AglA2IAAhpIAcAAIAFARIACAAQADgIAIgGQAJgFAIAAIAMABIgEAjIgEgBIgIgBIgKACQgFABgEAFQgDAFAAAIIAAA0g");
	this.shape_12.setTransform(207.225,57.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18335D").s().p("AgJA9QgGgCgFgIQgFgJAAgOIAAgrIgNAAIAAgPIARgLIAJgXIAXAAIAAAWIAaAAIAAAbIgaAAIAAAoQAAAKAKAAIAJgBIAJgCIAAAbIgNAEQgJACgIAAQgJAAgJgEg");
	this.shape_13.setTransform(197.7,57.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18335D").s().p("AAPA2IAAg5QAAgKgDgGQgDgFgHAAQgKAAgCAIQgEAJgBAPIAAAuIgkAAIAAhpIAbAAIAFAOIACAAQAFgHAIgFQAIgEALAAQAQAAALAJQAKAJAAAVIAABEg");
	this.shape_14.setTransform(186.9,57.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18335D").s().p("AgaAxQgNgHgGgMQgHgNAAgRQAAgZAOgPQAPgOAXAAQAQAAAMAGQALAGAHANQAHAMAAARQAAAagOAPQgPAOgYAAQgNAAgNgGgAgLgUQgEAIAAAMQAAAMAEAIQAEAIAHAAQAJAAADgIQAEgGAAgOQAAgNgEgHQgDgHgJAAQgIAAgDAHg");
	this.shape_15.setTransform(174.275,58.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18335D").s().p("AgeAqQgPgNAAgdQAAgRAIgNQAGgMANgGQANgGAPAAIATACIAQAGIgLAbIgLgFIgNgBQgIAAgEAGQgFAHAAAMQAAAPAFAFQAFAGAHAAQAIAAAIgDQAIgCAIgFIAAAeIgPAHQgJACgLAAQgXAAgOgNg");
	this.shape_16.setTransform(163.15,58.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18335D").s().p("AgXAxQgMgFgIgMQgHgMAAgTQgBgSAIgNQAGgMAMgGQAMgGAPAAQAWAAAOAMQANAMAAAYIAAAQIhAAAQAAAIAGAFQAGAGAKAAQALAAAIgCQAHgCAKgEIAAAaQgIAEgJACQgMACgMAAQgOAAgNgGgAgHgZQgFAFgBAIIAfAAQAAgHgEgFQgEgFgHAAQgGAAgEAEg");
	this.shape_17.setTransform(228.7,36.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18335D").s().p("AgoA8QgKgOAAgbQAAgaALgOQAKgOASAAQAKAAAGAEQAGAFAEAGIABAAIgBgLIAAgqIAkAAIAACRIgbAAIgIgNIgBAAQgFAHgGAEQgFAEgMAAQgRAAgKgOgAgJAAQgFAGABAOQgBANAFAGQAFAGAFAAQAKAAADgGQADgFAAgMIAAgDQABgMgEgHQgEgGgJAAQgFAAgFAGg");
	this.shape_18.setTransform(216.35,34.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18335D").s().p("AgXAxQgNgFgHgMQgIgMAAgTQAAgSAHgNQAGgMAMgGQANgGAOAAQAYAAANAMQAOAMAAAYIAAAQIhBAAQAAAIAGAFQAFAGALAAQAKAAAIgCQAIgCAJgEIAAAaQgGAEgLACQgMACgKAAQgQAAgMgGgAgIgZQgEAEAAAJIAeAAQAAgHgEgFQgDgFgJAAQgEAAgGAEg");
	this.shape_19.setTransform(204.45,36.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18335D").s().p("AggAyQgKgEgEgJQgFgIAAgOIAAhEIAlAAIAAA5QAAALADAFQADAFAGAAQAKAAAEgIQADgIAAgQIAAguIAlAAIAABpIgcAAIgEgNIgDAAQgFAIgIADQgJAEgJAAQgJAAgJgEg");
	this.shape_20.setTransform(192.05,36.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18335D").s().p("AgxBFIAAiJIAvAAQAaAAANAMQANALAAAVQAAAKgDAIQgCAHgGAHQgGAGgKAFQgMAEgNAAIgJAAIAAAugAgLgGIAHAAQAGAAAFgEQAGgEAAgJQAAgHgEgEQgEgEgHAAIgJAAg");
	this.shape_21.setTransform(179.9,34.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250.1,85.1);


(lib._300x250CTAai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 300x250-CTA.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E8ED").s().p("AgQAYIAAgLIAIADIAHACQADAAACgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIgCgDIgDgDIgIgFIgEgCIgDgEIgBgGQgBgHAFgEQAFgEAHAAIAIABIAHADIgDAIIgHgCIgFgBQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAQABAAAAABIAOAHIAEAFQACACAAAEQAAAHgFAFQgFAEgJAAQgIAAgGgDg");
	this.shape.setTransform(67.6,8.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8E8ED").s().p("AgNAYQgFgEgDgGQgDgGAAgIQAAgHADgGQACgFAGgFQAGgDAHAAQAIAAAGADQAGAFACAFQADAGAAAHQAAAIgDAGQgDAGgFAEQgFADgJAAQgIAAgFgDgAgJgMQgDAGAAAGQAAAIADAFQADAEAGABQAHgBADgEQADgEAAgJQAAgGgDgGQgDgEgHgBQgGABgDAEg");
	this.shape_1.setTransform(62.55,8.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E8E8ED").s().p("AAJAaIgWgmIABAmIgKAAIAAgzIAOAAIAVAmIABAAIgBgmIAKAAIAAAzg");
	this.shape_2.setTransform(56.575,8.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8E8ED").s().p("AgNAYQgGgEgCgGQgDgGAAgIQAAgHADgGQACgFAGgFQAHgDAGAAQAIAAAGADQAGAFACAFQADAGAAAHQAAAIgDAGQgDAGgFAEQgFADgJAAQgHAAgGgDgAgJgMQgDAGAAAGQAAAJADAEQADAEAGABQAHgBADgEQAEgEgBgJQABgHgEgFQgDgEgHgBQgGABgDAEg");
	this.shape_3.setTransform(50.6,8.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8E8ED").s().p("AARAaIABgoIgOAoIgJAAIgMgoIgBAAIABALIAAAdIgKAAIAAgzIAPAAIAMAnIAAAAIANgnIAPAAIAAAzg");
	this.shape_4.setTransform(44.175,8.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E8E8ED").s().p("AgOAiIAAgzIAdAAIAAAJIgSAAIAAAKIAQAAIAAAJIgQAAIAAAOIASAAIAAAJgAgFgVIAAgBIAHgLIAMAAIAAAAIgKAJIgDADg");
	this.shape_5.setTransform(38.7,7.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8E8ED").s().p("AAIAaIgLgUIgGAAIAAAUIgLAAIAAgzIAPAAQAKAAAFAEQAFAEAAAIQAAADgBADIgEADIgFADIAQAXgAgJgCIAEAAQAFAAABgBQADgDAAgDQAAgEgDgCQgBgBgGAAIgDAAg");
	this.shape_6.setTransform(34.375,8.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E8E8ED").s().p("AANAaIgEgMIgSAAIgDAMIgMAAIASgzIANAAIASAzgAgGAFIANAAIgHgWg");
	this.shape_7.setTransform(29.025,8.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E8E8ED").s().p("AgRAaIAAgzIAQAAQAKAAAEAFQAFAEAAAIIgCAIQgDADgEACQgDACgIABIgEAAIAAASgAgGAAIAEAAQADAAADgCQADgCgBgEQAAgIgHAAIgFAAg");
	this.shape_8.setTransform(24.65,8.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E8E8ED").s().p("AgOAaIAAgzIAdAAIAAAJIgSAAIAAALIARAAIAAAIIgRAAIAAAOIASAAIAAAJg");
	this.shape_9.setTransform(20.15,8.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E8E8ED").s().p("AAIAaIgLgUIgGAAIAAAUIgLAAIAAgzIAPAAQAKAAAFAEQAFAEAAAIQAAADgBADIgEADIgFADIAQAXgAgJgCIAEAAQAFAAACgBQACgDAAgDQAAgEgDgCQgBgBgGAAIgDAAg");
	this.shape_10.setTransform(15.825,8.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8E8ED").s().p("AgRAaIAAgzIARAAQAJAAAFAFQAEAEAAAIQAAAEgCAEQgBACgFADQgEACgHABIgFAAIAAASgAgGAAIAEAAQAEAAACgCQADgCAAgEQAAgIgIAAIgFAAg");
	this.shape_11.setTransform(10.85,8.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#621F7B").s().p("Ak2BUQggAAgYgXQgXgXAAghIAAgJQAAghAXgXQAYgXAgAAIJtAAQAgAAAYAXQAXAXAAAhIAAAJQAAAhgXAXQgYAXggAAg");
	this.shape_12.setTransform(38.975,8.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,16.9);


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
	this.instance = new lib._300x250HEAD2ai();
	this.instance.setTransform(1034.2,469.4,1,1,0,0,0,1034.2,469.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(0,0,242.2,149.6), null);


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
	this.instance = new lib._300x250HEAD1ai();
	this.instance.setTransform(1034.2,469.4,1,1,0,0,0,1034.2,469.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,250.1,85.1), null);


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
	this.instance = new lib._300x250CTAai("synched",0);
	this.instance.setTransform(0,-0.05,1,1,0,0,0,39,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-39,-8.4,78,16.8), null);


// stage content:
(lib.Cat_DV360Display_SPN_300x250 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._300x250AFRAME();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	// CTA
	this.instance_1 = new lib.CTA();
	this.instance_1.setTransform(478,169);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55).to({_off:false},0).to({x:203},14,cjs.Ease.quadInOut).wait(73).to({scaleX:1.3,scaleY:1.3,x:202.95},3).to({scaleX:1,scaleY:1,x:203},5).wait(9).to({x:-97},14,cjs.Ease.quadInOut).wait(7));

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
	this.instance_6.setTransform(450,52.15,1,0.4167,0,0,0,0,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({x:150},12,cjs.Ease.quadInOut).wait(104).to({regY:0,scaleY:1,y:125},0).to({x:-150},12,cjs.Ease.quadInOut).wait(3));

	// BKGD1
	this.instance_7 = new lib.BKGD1();
	this.instance_7.setTransform(250,300,1,1,0,0,0,250,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({x:-50},12,cjs.Ease.quadInOut).wait(104).to({x:250},0).wait(15));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-150,125,750,475);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 250,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/Cat_DV360_Display_SPN_300x250_atlas_P_1.png", id:"Cat_DV360_Display_SPN_300x250_atlas_P_1"},
		{src:"images/Cat_DV360_Display_SPN_300x250_atlas_NP_1.jpg", id:"Cat_DV360_Display_SPN_300x250_atlas_NP_1"}
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
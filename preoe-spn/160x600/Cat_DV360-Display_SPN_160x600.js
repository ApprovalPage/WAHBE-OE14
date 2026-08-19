(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Cat_DV360_Display_SPN_160x600_atlas_P_1", frames: [[0,0,320,1200],[322,0,320,1200]]},
		{name:"Cat_DV360_Display_SPN_160x600_atlas_NP_1", frames: [[0,0,320,1200],[322,0,320,1200]]}
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



(lib._160x600AFRAME = function() {
	this.initialize(ss["Cat_DV360_Display_SPN_160x600_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._160x600A = function() {
	this.initialize(ss["Cat_DV360_Display_SPN_160x600_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._160x600BGirl = function() {
	this.initialize(ss["Cat_DV360_Display_SPN_160x600_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._160x600BLOGO = function() {
	this.initialize(ss["Cat_DV360_Display_SPN_160x600_atlas_P_1"]);
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
	this.instance = new lib._160x600A();
	this.instance.setTransform(70,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGD1, new cjs.Rectangle(70,0,160,600), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(0,175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDwhite, new cjs.Rectangle(-80,-125,160,600), null);


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
	this.instance = new lib._160x600BLOGO();
	this.instance.setTransform(-80,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDLOGOs, new cjs.Rectangle(-80,-125,160,600), null);


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
	this.instance = new lib._160x600BGirl();
	this.instance.setTransform(-80,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDGirl, new cjs.Rectangle(-80,-125,160,600), null);


(lib._160x600HEAD2ai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 160x600-HEAD2.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18335D").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape.setTransform(3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18335D").s().p("AgNAOQgGgEAAgKQAAgIAGgFQAHgEAGAAQAHAAAHAEQAGAFAAAIQAAAKgGAEQgGAEgIAAQgHAAgGgEg");
	this.shape_1.setTransform(116.175,184.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18335D").s().p("AgbAxQgMgHgGgMQgHgMAAgSQAAgaAOgOQAOgOAYAAQAQAAALAGQANAGAGANQAHALAAASQAAAbgOAOQgPAOgYAAQgNAAgOgGgAgLgUQgEAHAAANQAAAOAEAGQAEAIAHAAQAJAAAEgIQADgIAAgMQAAgMgDgIQgEgHgJAAQgHAAgEAHg");
	this.shape_2.setTransform(107.25,181.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18335D").s().p("AgeAqQgPgNAAgdQAAgRAIgNQAHgMANgGQANgGAOAAIAUACQAIACAHAEIgKAbIgMgFIgNgBQgIAAgEAGQgFAIAAALQAAAOAFAGQAEAGAJAAQAHAAAJgDQAHgCAIgFIAAAeQgFADgKAEQgJACgKAAQgXAAgPgNg");
	this.shape_3.setTransform(96.1,181.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18335D").s().p("AgSBLIAAhqIAkAAIAABqgAgNgtQgFgDgBgJQABgKAFgDQAGgEAHAAQAJAAAFAEQAFADABAKQgBAJgFADQgFAEgJAAQgHAAgGgEg");
	this.shape_4.setTransform(87.65,178.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18335D").s().p("AgoA8QgLgOABgbQAAgaALgOQAKgOASAAQAKAAAGAEQAGAFAFAGIAAAAIgBgLIAAgqIAlAAIAACRIgcAAIgIgNIgBAAQgFAHgGAEQgFAEgMAAQgQAAgLgOgAgJAAQgFAGABAOQgBANAFAGQAEAGAGAAQAJAAAEgGQADgFAAgMIAAgDQABgMgEgHQgEgGgJAAQgFAAgFAGg");
	this.shape_5.setTransform(78.1,179.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18335D").s().p("AgXBFQgNgGgHgMQgHgMAAgTQAAgUAGgKQAHgNAMgGQAMgGAOAAQAYAAANAMQANAMAAAYIAAAQIhAAAQABAJAFAFQAGAFAKAAQALAAAHgCQAJgBAJgFIAAAbQgJAEgIACQgMACgLAAQgPAAgNgGgAgHgGQgFAFAAAHIAeAAQAAgGgEgFQgEgFgHAAQgFAAgFAEgAgSgrIAAgDIAYgcIAoAAIAAACIgpAdg");
	this.shape_6.setTransform(66.175,179.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18335D").s().p("AAvA2IAAg5QAAgLgDgGQgDgEgHAAQgIAAgEAHQgEAKAAALIAAAyIgjAAIAAg5QAAgMgDgEQgEgFgGAAQgJAAgDAIQgEAIAAAQIAAAuIglAAIAAhpIAcAAIAFANIABAAQAFgHAIgEQAIgEALAAQAMAAAHAEQAHADAFAIIABAAQAFgIAIgDQAJgEAJAAQATAAAJAJQAKAJAAAVIAABEg");
	this.shape_7.setTransform(50.625,180.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18335D").s().p("AgaAxQgNgHgGgMQgHgNAAgRQAAgaAOgOQAOgOAZAAQAPAAAMAGQALAGAHANQAHALAAASQAAAbgOAOQgOAOgZAAQgNAAgNgGgAgLgUQgEAHAAANQAAANAEAHQADAIAIAAQAJAAADgIQAEgGAAgOQAAgNgEgHQgDgHgJAAQgIAAgDAHg");
	this.shape_8.setTransform(107.85,159.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18335D").s().p("AglA2IAAhpIAcAAIAFARIACAAQAEgJAIgFQAIgFAJAAIALABIgEAjIgEgBIgIgBIgKACQgFABgEAFQgDAEAAAJIAAA0g");
	this.shape_9.setTransform(98.125,159.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18335D").s().p("AghAyQgJgFgEgIQgFgIAAgOIAAhEIAlAAIAAA5QAAALADAFQADAFAHAAQAJAAAEgIQADgKAAgOIAAguIAlAAIAABpIgcAAIgEgNIgDAAQgEAIgJADQgJAEgJAAQgJAAgKgEg");
	this.shape_10.setTransform(86.625,159.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18335D").s().p("AgbBMQgGgBgMgEIAAgeIASAGQAMACAJAAQAVAAAAgQIAAgCIABgNIgBAAQgEAHgHAEQgFAEgLAAQgRAAgLgOQgKgNgBgbQABgaAKgPQALgOASAAQALAAAGAEQAFADAGAIIAAAAIADgNIAgAAIAABpQAAAXgPAMQgOALgbAAQgNAAgKgBgAgNgUQAAANAEAGQAEAGAHAAQAJAAADgFQAEgGAAgLIAAgFQAAgLgDgIQgFgHgJAAQgOAAAAAcg");
	this.shape_11.setTransform(73.75,161.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18335D").s().p("AgXAxQgMgFgIgMQgHgLAAgUQAAgTAGgMQAHgMAMgGQAMgGAOAAQAXAAAOAMQANAMAAAYIAAAQIhAAAQAAAIAGAFQAFAGALAAQALAAAHgCQAIgCAJgEIAAAaQgHAEgJACQgNACgKAAQgPAAgNgGgAgHgZQgFAFgBAIIAfAAQAAgHgEgFQgEgFgIAAQgFAAgEAEg");
	this.shape_12.setTransform(61.875,159.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18335D").s().p("AgXA2IgSgFIAAgdQAKAEALACQAJACAHAAQALAAAAgFIgCgEIgGgEIgOgGQgNgFgGgGQgHgHAAgOQAAgQAMgHQAMgIATAAQAKAAAKACQAKADAJAEIgKAXIgQgFQgHgCgGAAQgIAAAAAEQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABIAFADIANAGQAKAEAGAEQAGAEADAFQADAGAAAJQAAALgFAHQgEAIgKAFQgKAEgPAAg");
	this.shape_13.setTransform(50.975,159.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18335D").s().p("AAQA2IAAg5QgBgLgDgFQgCgFgIAAQgJAAgDAIQgEAIAAAQIAAAuIglAAIAAhpIAcAAIAFAOIABAAQAFgIAJgEQAHgEALAAQAQAAALAJQAKAJAAAVIAABEg");
	this.shape_14.setTransform(106.7,137.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18335D").s().p("AggAyQgKgEgEgJQgFgIAAgOIAAhEIAlAAIAAA5QAAALADAFQADAFAHAAQAJAAAEgIQADgIAAgQIAAguIAlAAIAABpIgcAAIgEgNIgCAAQgGAIgIADQgIAEgKAAQgJAAgJgEg");
	this.shape_15.setTransform(93.775,138.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18335D").s().p("AAQA2IAAg5QgBgKgDgGQgDgFgHAAQgJAAgDAIQgEAIAAAQIAAAuIglAAIAAhpIAcAAIAFAOIABAAQAGgIAHgEQAIgEALAAQARAAAJAJQALAJAAAVIAABEg");
	this.shape_16.setTransform(75.9,137.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18335D").s().p("AgaAxQgMgHgHgMQgHgMAAgSQAAgaAOgOQAOgOAZAAQAPAAAMAGQALAGAIANQAGALAAASQAAAbgOAOQgOAOgZAAQgNAAgNgGgAgLgUQgDAHgBANQABAOADAGQAEAIAIAAQAIAAADgIQAEgIAAgMQAAgMgEgIQgDgHgJAAQgHAAgEAHg");
	this.shape_17.setTransform(63.3,138.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18335D").s().p("AgeAqQgOgNAAgdQAAgRAHgNQAIgMAMgGQANgGAOAAIATACQAJACAIAEIgLAbIgNgFIgMgBQgIAAgDAGQgGAHAAAMQAAAOAGAGQADAGAJAAQAHAAAJgDQAGgCAJgFIAAAeQgFADgKAEQgJACgKAAQgXAAgPgNg");
	this.shape_18.setTransform(52.15,138.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.2,186.6);


(lib._160x600HEAD1ai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 160x600-HEAD1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18335D").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape.setTransform(3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18335D").s().p("AgoA8QgKgOAAgbQAAgaALgOQAKgOASAAQAKAAAGAEQAGAFAEAGIABAAIgBgLIAAgqIAkAAIAACRIgbAAIgIgNIgBAAQgFAHgGAEQgFAEgMAAQgQAAgLgOgAgJAAQgFAGABAOQgBANAFAGQAFAGAFAAQAKAAADgGQADgFAAgMIAAgDQABgMgEgHQgEgGgJAAQgFAAgFAGg");
	this.shape_1.setTransform(114.2,114.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18335D").s().p("AghAyQgJgFgEgIQgFgIAAgOIAAhEIAlAAIAAA5QAAALADAFQADAFAHAAQAJAAAEgIQADgKAAgOIAAguIAlAAIAABpIgcAAIgEgNIgDAAQgEAIgJADQgIAEgKAAQgJAAgKgEg");
	this.shape_2.setTransform(101.775,116.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18335D").s().p("AgRBJIAAiRIAjAAIAACRg");
	this.shape_3.setTransform(92.225,114.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18335D").s().p("AgoAvQgJgJAAgRQAAgSALgHQAMgIAXgBIAQgBIAAgBQAAgHgDgDQgDgDgGAAQgGAAgIACIgPAGIgLgZQAKgFALgCQANgCAMAAQAUAAAMAKQALAKAAASIAABFIgZAAIgHgOIgBAAIgJAJQgEADgGACQgIACgHAAQgOAAgJgIgAgIAKQgEADAAAFQAAAGADACQADADAEAAQAGAAAFgEQAFgEAAgHIAAgIIgJAAQgJABgEADg");
	this.shape_4.setTransform(82.875,116.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18335D").s().p("AgWA2IgTgFIAAgdQAJAEAMACQAJACAHAAQALAAAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQgCgCgDgCIgOgGQgNgFgHgGQgHgHAAgOQAAgQAMgHQAMgIATAAQAKAAAKACQAJACAKAFIgKAXIgQgFQgHgCgGAAQgIAAAAAEQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABIAFADIAOAGQAKAEAFAEQAGAEADAFQADAGAAAJQAAALgFAHQgEAIgKAFQgKAEgPAAg");
	this.shape_5.setTransform(72.175,116.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18335D").s().p("AghAyQgJgFgEgIQgFgIAAgOIAAhEIAlAAIAAA5QAAALADAFQADAFAHAAQAJAAAEgIQADgKAAgOIAAguIAlAAIAABpIgcAAIgEgNIgDAAQgEAIgJADQgJAEgJAAQgJAAgKgEg");
	this.shape_6.setTransform(55.725,116.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18335D").s().p("AgWA2IgTgFIAAgdQAJAEAMACQAJACAHAAQALAAAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgDgCIgOgGQgNgFgHgGQgHgHAAgOQAAgQAMgHQAMgIATAAQAKAAAKACQAJACAKAFIgKAXIgQgFQgHgCgGAAQgIAAAAAEQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABIAFADIAOAGQAKAEAFAEQAGAEADAFQADAGAAAJQAAALgFAHQgEAIgKAFQgKAEgPAAg");
	this.shape_7.setTransform(44.325,116.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18335D").s().p("AgkA2IAAhpIAbAAIAFARIACAAQADgJAJgFQAIgFAJAAIALABIgDAjIgGgBIgHgBIgKACQgFABgEAFQgDAFAAAIIAAA0g");
	this.shape_8.setTransform(122.25,94.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18335D").s().p("AgoAvQgJgJAAgRQAAgRAMgIQALgIAXgBIARgBIAAgBQgBgHgDgDQgDgDgHAAQgGAAgGACIgQAGIgKgZQAKgFAKgCQANgCAMAAQAVAAALAKQAMAKAAASIAABFIgaAAIgIgOIAAAAIgKAJQgDAEgGABQgIACgHAAQgNAAgKgIgAgIAKQgEADAAAFQAAAGADACQADADAFAAQAFAAAFgEQAEgEABgHIAAgIIgJAAQgKABgDADg");
	this.shape_9.setTransform(110.95,95.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18335D").s().p("AgRBJIAAiRIAkAAIAACRg");
	this.shape_10.setTransform(102.1,93.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18335D").s().p("AgbAxQgMgHgGgMQgHgNAAgRQAAgaAOgOQAOgOAYAAQAQAAALAGQANAGAGANQAHALAAASQAAAbgOAOQgPAOgYAAQgNAAgOgGgAgLgUQgEAHAAANQAAAOAEAGQAEAIAHAAQAJAAAEgIQADgIAAgMQAAgMgDgIQgEgHgJAAQgHAAgEAHg");
	this.shape_11.setTransform(92.85,95.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18335D").s().p("AglA2IAAhpIAcAAIAGARIABAAQAEgJAIgFQAIgFAJAAIALABIgDAjIgFgBIgIgBIgKACQgGABgDAFQgDAEAAAJIAAA0g");
	this.shape_12.setTransform(83.125,94.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18335D").s().p("AgIA9QgIgCgFgJQgEgJAAgNIAAgrIgNAAIAAgPIARgLIAJgXIAXAAIAAAWIAaAAIAAAbIgaAAIAAAoQAAAKAKAAIAJgBIAJgCIAAAbIgNAEQgJACgIAAQgJAAgIgEg");
	this.shape_13.setTransform(73.625,94.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18335D").s().p("AAPA2IAAg5QAAgKgCgGQgEgFgGAAQgKAAgDAIQgEAIAAAQIAAAuIglAAIAAhpIAcAAIAFAOIABAAQAFgIAJgEQAHgEALAAQARAAAKAJQAKAJAAAVIAABEg");
	this.shape_14.setTransform(62.8,94.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18335D").s().p("AgbAxQgMgHgGgMQgHgNAAgRQAAgaAOgOQAPgOAXAAQARAAAKAGQANAGAGANQAHALAAASQAAAbgOAOQgOAOgZAAQgNAAgOgGgAgLgUQgDAHAAANQAAAOADAGQAEAIAHAAQAJAAAEgIQADgIAAgMQAAgMgDgIQgEgHgJAAQgHAAgEAHg");
	this.shape_15.setTransform(50.2,95.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18335D").s().p("AgeAqQgOgNAAgdQAAgSAHgMQAHgMANgGQANgGAPAAIASACQAJACAHAEIgKAbIgNgFIgLgBQgJAAgEAGQgFAHAAAMQAAAOAFAGQAFAGAIAAQAHAAAJgDQAGgCAJgFIAAAeQgFADgKAEQgJACgKAAQgXAAgPgNg");
	this.shape_16.setTransform(39.075,95.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18335D").s().p("AgXAxQgOgFgGgMQgIgMABgTQgBgTAHgMQAGgMAMgGQANgGAOAAQAYAAANAMQAOAMAAAYIAAAQIhBAAQAAAIAGAFQAFAGALAAQALAAAHgCQAJgCAIgEIAAAaQgIAEgJACQgLACgLAAQgPAAgNgGgAgIgZQgEAEAAAJIAeAAQAAgHgEgFQgFgFgGAAQgFAAgGAEg");
	this.shape_17.setTransform(104.65,73.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18335D").s().p("AgnA8QgMgOABgbQgBgZAMgPQAKgOASAAQAKAAAGAEQAHAFADAGIABAAIgBgLIAAgqIAkAAIAACRIgbAAIgIgNIgBAAQgGAHgFAEQgFAEgLAAQgRAAgKgOgAgJAAQgEAGAAAOQAAAMAEAHQAEAGAHAAQAIAAAEgGQADgEABgNIAAgDQAAgLgEgIQgDgGgKAAQgFAAgFAGg");
	this.shape_18.setTransform(92.25,71.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18335D").s().p("AgXAxQgMgFgIgMQgHgLAAgUQAAgTAGgMQAHgMAMgGQAMgGAOAAQAXAAAOAMQANAMAAAYIAAAQIhAAAQAAAHAGAGQAFAGALAAQALAAAHgCQAJgCAIgEIAAAaQgHAEgJACQgNACgKAAQgPAAgNgGgAgHgZQgFAFgBAIIAfAAQgBgJgDgDQgEgFgIAAQgFAAgEAEg");
	this.shape_19.setTransform(80.375,73.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18335D").s().p("AghAyQgIgEgFgJQgFgIAAgOIAAhEIAlAAIAAA5QAAALADAFQADAFAHAAQAJAAADgIQAEgJAAgPIAAguIAlAAIAABpIgcAAIgFgNIgCAAQgFAIgIADQgJAEgJAAQgKAAgJgEg");
	this.shape_20.setTransform(67.975,73.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18335D").s().p("AgxBFIAAiJIAwAAQAaAAAMAMQANALAAAVQAAALgDAHQgDAHgGAHQgGAHgKAEQgKAEgNAAIgLAAIAAAugAgMgGIAIAAQAGAAAFgEQAGgEAAgJQAAgHgEgEQgEgEgHAAIgKAAg");
	this.shape_21.setTransform(55.825,71.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,122.1);


(lib._160x600CTAai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 160x600-CTA.ai
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
	this.instance = new lib._160x600HEAD2ai();
	this.instance.setTransform(1104.2,469.4,1,1,0,0,0,1034.2,469.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(70,0,118.19999999999999,186.6), null);


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
	this.instance = new lib._160x600HEAD1ai();
	this.instance.setTransform(1104.2,469.4,1,1,0,0,0,1034.2,469.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(70,0,126,122.1), null);


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
	this.instance = new lib._160x600CTAai("synched",0);
	this.instance.setTransform(0.05,-0.05,1,1,0,0,0,39,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-38.9,-8.4,77.9,16.8), null);


// stage content:
(lib.Cat_DV360Display_SPN_160x600 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._160x600AFRAME();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	// CTA
	this.instance_1 = new lib.CTA();
	this.instance_1.setTransform(225,225.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55).to({_off:false},0).to({x:80},14,cjs.Ease.quadInOut).wait(73).to({scaleX:1.3,scaleY:1.3,x:79.95},3).to({scaleX:1,scaleY:1,x:80},5).wait(9).to({x:-80},14,cjs.Ease.quadInOut).wait(7));

	// HEAD1
	this.instance_2 = new lib.HEAD1();
	this.instance_2.setTransform(1124.2,469.4,1,1,0,0,0,1034.2,469.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({x:964.2},14,cjs.Ease.quadInOut).wait(90).to({x:804.2},14,cjs.Ease.quadInOut).wait(3));

	// HEAD2
	this.instance_3 = new lib.HEAD2();
	this.instance_3.setTransform(1124.2,469.4,1,1,0,0,0,1034.2,469.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(57).to({_off:false},0).to({x:964.2},14,cjs.Ease.quadInOut).wait(90).to({x:804.2},14,cjs.Ease.quadInOut).wait(5));

	// LOGOs
	this.instance_4 = new lib.BKGDLOGOs("synched",0);
	this.instance_4.setTransform(240,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51).to({_off:false},0).to({x:80},12,cjs.Ease.quadInOut).wait(92).to({startPosition:0},0).to({x:-80},12,cjs.Ease.quadInOut).wait(13));

	// Girl
	this.instance_5 = new lib.BKGDGirl("synched",0);
	this.instance_5.setTransform(240,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(53).to({_off:false},0).to({x:80},12,cjs.Ease.quadInOut).wait(92).to({startPosition:0},0).to({x:-80},12,cjs.Ease.quadInOut).wait(11));

	// BKGD2
	this.instance_6 = new lib.BKGDwhite("synched",0);
	this.instance_6.setTransform(240,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({x:80},12,cjs.Ease.quadInOut).wait(104).to({startPosition:0},0).to({x:-80},12,cjs.Ease.quadInOut).wait(3));

	// BKGD1
	this.instance_7 = new lib.BKGD1();
	this.instance_7.setTransform(180,300,1,1,0,0,0,250,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({x:20},12,cjs.Ease.quadInOut).wait(104).to({x:180},0).wait(15));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-80,300,400,300);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 160,
	height: 600,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/Cat_DV360_Display_SPN_160x600_atlas_P_1.png", id:"Cat_DV360_Display_SPN_160x600_atlas_P_1"},
		{src:"images/Cat_DV360_Display_SPN_160x600_atlas_NP_1.jpg", id:"Cat_DV360_Display_SPN_160x600_atlas_NP_1"}
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
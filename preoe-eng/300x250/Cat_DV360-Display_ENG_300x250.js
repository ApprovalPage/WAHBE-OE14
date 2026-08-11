(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Cat_DV360_Display_ENG_300x250_atlas_P_1", frames: [[0,0,600,500]]},
		{name:"Cat_DV360_Display_ENG_300x250_atlas_NP_1", frames: [[0,0,600,500],[0,502,600,500]]}
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
	this.initialize(ss["Cat_DV360_Display_ENG_300x250_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x250A = function() {
	this.initialize(ss["Cat_DV360_Display_ENG_300x250_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x250B = function() {
	this.initialize(ss["Cat_DV360_Display_ENG_300x250_atlas_NP_1"]);
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


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._300x250B();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


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
	this.shape_1.graphics.f("#18335D").s().p("AgNAOQgGgEAAgKQAAgJAGgEQAHgEAHAAQAHAAAGAEQAGAEAAAJQAAAKgGAEQgFAEgIAAQgIAAgGgEg");
	this.shape_1.setTransform(253.325,147.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18335D").s().p("AgXAxQgMgFgIgMQgHgLAAgUQAAgTAGgMQAHgMAMgGQAMgGAOAAQAXAAAOAMQANAMAAAYIAAAQIhAAAQAAAHAGAGQAFAGALAAQALAAAHgCQAJgCAIgEIAAAaQgHAEgJACQgNACgKAAQgPAAgNgGgAgHgZQgFAFgBAIIAfAAQgBgJgDgDQgEgFgIAAQgFAAgEAEg");
	this.shape_2.setTransform(244.625,144.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18335D").s().p("AgeAqQgOgNAAgdQgBgRAIgNQAHgMANgGQAMgGAQAAQAHAAALACIARAGIgMAbIgMgFIgLgBQgJAAgEAGQgFAHAAAMQAAAPAFAFQAFAGAIAAQAHAAAJgDQAGgCAJgFIAAAeQgFADgKAEQgJACgLAAQgWAAgPgNg");
	this.shape_3.setTransform(233.65,144.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18335D").s().p("AAPA2IAAg5QAAgKgCgGQgDgFgHAAQgKAAgEAIQgDAIAAAQIAAAuIglAAIAAhpIAcAAIAFAOIACAAQAEgIAJgEQAIgEAKAAQARAAAKAJQAKAJAAAVIAABEg");
	this.shape_4.setTransform(221.85,143.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18335D").s().p("AgoAvQgJgJAAgRQAAgRAMgIQALgIAXgBIARgBIAAgBQAAgHgEgDQgDgDgGAAQgHAAgGACIgQAGIgKgZQAJgFALgCQAOgCAMAAQAUAAALAKQALAJAAATIAABFIgZAAIgHgOIgBAAIgJAJQgEAEgGABQgIACgHAAQgNAAgKgIgAgIAKQgEADAAAFQAAAGADACQADADAFAAQAGAAAEgEQAFgEAAgHIAAgIIgJAAQgKABgDADg");
	this.shape_5.setTransform(209.125,144.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18335D").s().p("AglA2IAAhpIAcAAIAFARIACAAQADgIAIgGQAJgFAIAAIAMABIgEAjIgEgBIgIgBIgKACQgFABgEAFQgDAFAAAIIAAA0g");
	this.shape_6.setTransform(199.825,143.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18335D").s().p("AghAyQgIgEgFgJQgFgIAAgOIAAhEIAlAAIAAA5QAAALADAFQADAFAHAAQAJAAADgIQAEgJAAgPIAAguIAlAAIAABpIgcAAIgFgNIgCAAQgFAIgIADQgJAEgJAAQgKAAgJgEg");
	this.shape_7.setTransform(188.325,144.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18335D").s().p("AgXA2IgSgFIAAgdQAKAEALACQAJACAHAAQALAAAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgGgEIgOgGQgMgFgHgGQgHgHAAgOQAAgQAMgHQAMgIATAAQAKAAAKACQAKADAJAEIgKAXIgQgFQgHgCgGAAQgIAAAAAEQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABIAFADIAOAGQAKAEAFAEQAGAEADAFQADAGAAAJQAAALgFAHQgEAIgKAFQgKAEgPAAg");
	this.shape_8.setTransform(176.925,144.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18335D").s().p("AAPA2IAAg5QAAgKgDgGQgDgFgGAAQgLAAgDAIQgDAIAAAQIAAAuIglAAIAAhpIAcAAIAFAOIABAAQAFgIAJgEQAGgEALAAQARAAALAJQAKAJAAAVIAABEg");
	this.shape_9.setTransform(165.5,143.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18335D").s().p("AgSBLIAAhqIAkAAIAABqgAgNgtQgGgDAAgJQAAgKAGgDQAFgEAIAAQAIAAAGAEQAGADAAAKQAAAJgGADQgGAEgIAAQgIAAgFgEg");
	this.shape_10.setTransform(155.925,141.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18335D").s().p("AAPBJIAAg6QAAgUgMAAQgKAAgEAHQgDAIAAAQIAAAvIglAAIAAiRIAlAAIgCA1IACAAQAGgJAGgDQAGgDAKAAQAKAAAJAEQAJAEAFAIQAFAKAAAMIAABFg");
	this.shape_11.setTransform(230.4,120.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18335D").s().p("AgJA+QgHgEgFgHQgEgJAAgOIAAgrIgNAAIAAgPIAQgMIAKgWIAXAAIAAAVIAaAAIAAAcIgaAAIAAApQAAAKAKAAIAJgBIAJgDIAAAbIgNAEQgJACgIAAQgJAAgJgDg");
	this.shape_12.setTransform(219.475,121.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18335D").s().p("AgRBJIAAiRIAjAAIAACRg");
	this.shape_13.setTransform(211.975,120.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18335D").s().p("AgoAvQgJgJAAgRQgBgRAMgIQAMgIAXgBIAQgBIAAgBQAAgHgDgDQgDgDgGAAQgHAAgHACIgPAGIgLgZQALgFALgCQAMgCAMAAQAVAAALAKQALAKAAASIAABFIgZAAIgHgOIgBAAIgJAJQgFAEgFABQgIACgHAAQgOAAgJgIgAgIAKQgEADAAAFQAAAGADACQADADAEAAQAHAAAEgEQAEgEAAgHIAAgIIgIAAQgKABgDADg");
	this.shape_14.setTransform(202.6,122.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18335D").s().p("AgXAxQgMgFgIgMQgHgNAAgSQAAgTAGgMQAHgMAMgGQAMgGAOAAQAXAAAOAMQANAMAAAYIAAAQIhAAAQAAAIAGAFQAFAGALAAQALAAAHgCQAJgCAIgEIAAAaQgHAEgJACQgMACgLAAQgPAAgNgGgAgHgZQgFAEAAAJIAeAAQgBgJgDgDQgEgFgIAAQgEAAgFAEg");
	this.shape_15.setTransform(190.925,122.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18335D").s().p("AAPBJIAAg6QAAgUgMAAQgKAAgEAHQgDAIAAAQIAAAvIglAAIAAiRIAlAAIgCA1IACAAQAGgJAGgDQAGgDAKAAQAKAAAJAEQAJAEAFAIQAFAKAAAMIAABFg");
	this.shape_16.setTransform(178.55,120.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18335D").s().p("AgbBMQgHgBgMgEIAAgeIATAGQAKACALAAQAVAAgBgQIAAgCIACgNIgCAAQgDAGgHAFQgFAEgMAAQgQAAgLgOQgLgOAAgaQABgbAKgOQALgOARAAQALAAAGAEQAGADAGAIIAAAAIADgNIAgAAIAABpQAAAXgOAMQgPALgcAAgAgNgUQAAAOAEAFQAEAGAHAAQAJAAADgFQADgFABgMIAAgFQAAgMgEgHQgDgHgKAAQgOAAAAAcg");
	this.shape_17.setTransform(249.15,103.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18335D").s().p("AAQA2IAAg5QAAgKgEgGQgDgFgHAAQgJAAgDAIQgEAIAAAQIAAAuIglAAIAAhpIAcAAIAFAOIABAAQAFgIAJgEQAHgEALAAQARAAAKAJQAKAJAAAVIAABEg");
	this.shape_18.setTransform(236.75,100.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18335D").s().p("AgRBLIAAhqIAjAAIAABqgAgNgtQgGgDABgJQgBgKAGgDQAGgEAHAAQAIAAAFAEQAHADgBAKQABAJgHADQgFAEgIAAQgHAAgGgEg");
	this.shape_19.setTransform(227.2,98.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18335D").s().p("AgIA+QgIgDgFgIQgEgKAAgNIAAgrIgNAAIAAgPIARgMIAJgWIAXAAIAAAVIAaAAIAAAcIgaAAIAAApQAAAKAKgBIAJAAIAJgDIAAAbIgNAEQgJACgIAAQgJAAgIgDg");
	this.shape_20.setTransform(219.575,100.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18335D").s().p("AgIA+QgIgDgFgIQgEgIAAgPIAAgrIgNAAIAAgPIARgMIAJgWIAXAAIAAAVIAaAAIAAAcIgaAAIAAApQAAAKAKgBIAJAAIAJgDIAAAbIgNAEQgJACgIAAQgJAAgIgDg");
	this.shape_21.setTransform(210.725,100.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18335D").s().p("AgXAxQgNgFgHgMQgIgMAAgTQAAgSAHgNQAGgMAMgGQANgGAOAAQAYAAANAMQAOAMAAAYIAAAQIhBAAQAAAIAGAFQAFAGALAAQAKAAAIgCQAIgCAJgEIAAAaQgGAEgLACQgMACgKAAQgQAAgMgGgAgIgZQgEAEAAAJIAeAAQAAgHgEgFQgEgFgIAAQgEAAgGAEg");
	this.shape_22.setTransform(200.4,101.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#18335D").s().p("AgbBMQgHgBgMgEIAAgeIASAGQAMACAJAAQAWAAAAgQIAAgCIABgNIgBAAQgFAHgGAEQgGAEgLAAQgQAAgLgOQgLgOAAgaQAAgbALgOQALgOARAAQAMAAAFAEQAFADAGAIIABAAIACgNIAhAAIAABpQAAAWgPANQgOALgcAAgAgOgUQAAANAFAGQADAGAHAAQAKAAADgFQADgGABgLIAAgFQgBgMgDgHQgDgHgKAAQgPAAAAAcg");
	this.shape_23.setTransform(188.05,103.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18335D").s().p("AgqBMIgGgBIAAgdIALABQAJAAAFgFQAFgGACgGIAAgBIgqhoIAnAAIASA9IABAFIAAAGIABAAIACgLIASg9IAmAAIgqBwQgEALgHALQgGAIgJAFQgKAEgOAAIgJAAg");
	this.shape_24.setTransform(171.175,103.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#18335D").s().p("AgDBGIgKgIIgDAAIgGAKIgcAAIAAiRIAlAAIgCA1IACAAQADgGAHgFQAGgEALAAQAQAAALAOQAKAOAAAaQABAbgLAOQgLAOgRAAQgLAAgFgEgAgKgBQgDAEAAAMIAAAFQAAAMACAGQAFAGAHAAQANAAAAgaQAAgYgOAAQgHAAgDAFg");
	this.shape_25.setTransform(159.75,99.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,255.3,149.6);


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
	this.shape_1.graphics.f("#18335D").s().p("AAPBJIAAg6QAAgUgMAAQgKAAgDAHQgEAIAAAQIAAAvIglAAIAAiRIAlAAIgCA1IACAAQAGgJAHgDQAGgDAKAAQAJAAAKAEQAIAEAFAIQAFAJAAANIAABFg");
	this.shape_1.setTransform(255.85,77.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18335D").s().p("AgIA9QgIgCgFgIQgEgIAAgPIAAgrIgNAAIAAgPIARgLIAJgXIAXAAIAAAVIAaAAIAAAcIgaAAIAAAoQAAALAKgBIAJgBIAJgCIAAAbIgNAEQgJACgIAAQgJAAgIgEg");
	this.shape_2.setTransform(244.925,78.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18335D").s().p("AgRBJIAAiRIAjAAIAACRg");
	this.shape_3.setTransform(237.425,77.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18335D").s().p("AgoAvQgJgJAAgRQAAgSALgHQAMgIAXgBIAQgBIAAgBQAAgHgDgDQgDgDgGAAQgGAAgIACIgPAGIgLgZQAKgFALgCQANgCAMAAQAUAAAMAKQALAKAAASIAABFIgZAAIgHgOIgBAAIgJAJQgEADgGACQgIACgHAAQgOAAgJgIgAgIAKQgEADAAAFQAAAGADACQADADAEAAQAGAAAFgEQAFgEAAgHIAAgIIgJAAQgJABgEADg");
	this.shape_4.setTransform(228.075,79.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18335D").s().p("AgXAxQgNgFgHgMQgHgMAAgTQAAgTAGgMQAHgMAMgGQAMgGAOAAQAYAAANAMQANALAAAZIAAAQIhAAAQABAIAFAFQAGAGAKAAQALAAAHgCQAJgCAJgEIAAAaQgJAEgIACQgMACgLAAQgPAAgNgGgAgHgZQgFAEAAAJIAeAAQAAgHgEgFQgEgFgHAAQgFAAgFAEg");
	this.shape_5.setTransform(216.375,79.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18335D").s().p("AAPBJIAAg6QAAgUgNAAQgJAAgDAHQgEAIAAAQIAAAvIglAAIAAiRIAlAAIgCA1IACAAQAFgJAIgDQAFgDALAAQAJAAAKAEQAIAEAFAIQAFAJAAANIAABFg");
	this.shape_6.setTransform(204,77.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18335D").s().p("AglA2IAAhpIAbAAIAGARIACAAQADgIAIgGQAJgFAIAAIAMABIgEAjIgEgBIgIgBIgKACQgFABgEAFQgDAFAAAIIAAA0g");
	this.shape_7.setTransform(188.575,79.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18335D").s().p("AghAyQgIgEgFgJQgFgJAAgNIAAhEIAlAAIAAA5QAAALADAFQADAFAGAAQAKAAADgIQAEgIAAgQIAAguIAlAAIAABpIgcAAIgEgNIgCAAQgGAIgIADQgIAEgKAAQgJAAgKgEg");
	this.shape_8.setTransform(177.05,79.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18335D").s().p("AgaAxQgNgHgGgMQgHgNAAgRQAAgZAOgPQAPgOAXAAQAQAAAMAGQALAGAHANQAHAMAAARQAAAagOAPQgPAOgYAAQgOAAgMgGgAgLgUQgEAHAAANQAAAOAEAGQAEAIAHAAQAJAAADgIQAEgGAAgOQAAgNgEgHQgDgHgJAAQgIAAgDAHg");
	this.shape_9.setTransform(164.475,79.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18335D").s().p("AgqBMIgGgBIAAgdIAFABIAGAAQAJAAAFgFQAFgGACgGIAAgBIgqhoIAnAAIASA9IABAFIAAAGIABAAIACgLIASg9IAmAAIgqBwQgGAPgGAHQgFAIgKAFQgJAEgOAAIgJAAg");
	this.shape_10.setTransform(152.475,81.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18335D").s().p("AgZBKIAAhOIgOAAIAAgSIAPgJIAAgCQgBgUAJgKQAJgKASAAQAIAAAHACIAOADIgIAYIgGgBIgHgBQgIAAAAALIAAADIAWAAIAAAcIgWAAIAABOg");
	this.shape_11.setTransform(249.3,55.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18335D").s().p("AgbAxQgMgHgGgMQgHgNAAgRQAAgZAOgPQAPgOAXAAQAQAAAMAGQALAGAHANQAHAMAAARQAAAagOAPQgPAOgYAAQgOAAgNgGgAgLgUQgEAHAAANQAAAOAEAGQAEAIAHAAQAJAAADgIQAEgGAAgOQAAgNgEgHQgDgHgJAAQgIAAgDAHg");
	this.shape_12.setTransform(238.725,58.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18335D").s().p("AgRBJIAAiRIAkAAIAACRg");
	this.shape_13.setTransform(224.5,56.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18335D").s().p("AgbAxQgMgHgGgMQgHgNAAgRQAAgaAOgOQAOgOAYAAQAQAAALAGQAMAGAHANQAHALAAASQAAAbgOAOQgOAOgZAAQgOAAgNgGgAgLgUQgEAHAAANQAAANAEAHQADAIAIAAQAJAAADgIQADgGABgOQgBgNgDgHQgDgHgJAAQgIAAgDAHg");
	this.shape_14.setTransform(215.25,58.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18335D").s().p("AglA2IAAhpIAcAAIAFARIACAAQAEgIAHgGQAJgFAJAAIALABIgEAjIgEgBIgIgBIgKACQgFABgEAFQgDAEAAAJIAAA0g");
	this.shape_15.setTransform(205.525,57.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18335D").s().p("AgJA9QgHgCgFgIQgEgJAAgOIAAgrIgNAAIAAgPIAQgLIAKgXIAXAAIAAAWIAaAAIAAAbIgaAAIAAAoQAAAKAKAAIAJgBIAJgCIAAAbIgNAEQgJACgIAAQgJAAgJgEg");
	this.shape_16.setTransform(196.025,57.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18335D").s().p("AAPA2IAAg5QAAgKgDgGQgDgFgGAAQgLAAgCAIQgEAIAAAQIAAAuIglAAIAAhpIAcAAIAEAOIACAAQAFgIAJgEQAGgEAMAAQAQAAALAJQAKAJAAAVIAABEg");
	this.shape_17.setTransform(185.2,57.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18335D").s().p("AgbAxQgMgHgHgMQgGgNAAgRQAAgaAOgOQAPgOAXAAQAQAAALAGQAMAGAHANQAHALAAASQAAAbgOAOQgOAOgZAAQgOAAgNgGgAgLgUQgEAHAAANQAAANAEAHQADAIAIAAQAJAAADgIQADgGABgOQgBgNgDgHQgDgHgJAAQgIAAgDAHg");
	this.shape_18.setTransform(172.6,58.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18335D").s().p("AgeAqQgPgNAAgdQAAgRAIgNQAHgMANgGQAMgGAQAAQAHAAALACIAQAGIgLAbIgLgFIgMgBQgJAAgEAGQgFAHAAAMQAAAPAFAFQAEAGAJAAQAHAAAIgDQAIgCAIgFIAAAeQgFADgKAEQgJACgLAAQgWAAgPgNg");
	this.shape_19.setTransform(161.45,58.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18335D").s().p("AgXAxQgNgFgHgMQgHgMAAgTQAAgTAGgMQAHgMAMgGQAMgGAOAAQAYAAANAMQANAMAAAYIAAAQIhAAAQABAIAFAFQAGAGAKAAQALAAAHgCQAJgCAJgEIAAAaQgJAEgIACQgMACgLAAQgPAAgNgGgAgHgZQgFAEAAAJIAeAAQAAgHgEgFQgEgFgHAAQgFAAgFAEg");
	this.shape_20.setTransform(262.325,36.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18335D").s().p("AAPBJIgWgmIgMAJIAAAdIglAAIAAiRIAlAAIgBBIIgBANIABAAIAigtIApAAIglAsIAnA9g");
	this.shape_21.setTransform(250.675,34.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18335D").s().p("AgoAvQgJgJAAgRQAAgRAMgIQALgIAXgBIARgBIAAgBQAAgHgEgDQgDgDgGAAQgHAAgGACIgQAGIgKgZQAJgFALgCQAOgCAMAAQAUAAALAKQALAJAAATIAABFIgZAAIgHgOIgBAAIgJAJQgEAEgGABQgIACgHAAQgNAAgKgIgAgIAKQgEADAAAFQAAAGADACQADADAFAAQAGAAAEgEQAFgEAAgHIAAgIIgJAAQgKABgDADg");
	this.shape_22.setTransform(237.425,36.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#18335D").s().p("AgIA9QgIgCgEgJQgFgHAAgPIAAgrIgNAAIAAgPIARgLIAJgXIAXAAIAAAWIAaAAIAAAbIgaAAIAAAoQAAAKAKAAIAJgBIAJgCIAAAbIgNAEQgJACgIAAQgJAAgIgEg");
	this.shape_23.setTransform(227.225,35.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18335D").s().p("AAPA2IAAg5QAAgKgDgGQgCgFgIAAQgKAAgDAIQgDAKgBAOIAAAuIgkAAIAAhpIAbAAIAGAOIABAAQAFgIAIgEQAIgEALAAQARAAAKAJQAKAJAAAVIAABEg");
	this.shape_24.setTransform(211.45,36.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#18335D").s().p("AgoAvQgJgJAAgRQAAgRAMgIQALgIAXgBIARgBIAAgBQgBgHgDgDQgDgDgHAAQgGAAgGACIgQAGIgKgZQAKgFAKgCQANgCAMAAQAVAAALAKQAMAKAAASIAABFIgaAAIgHgOIgBAAIgJAJQgFAEgFABQgIACgHAAQgNAAgKgIgAgIAKQgEADAAAFQAAAGADACQADADAFAAQAFAAAFgEQAFgEAAgHIAAgIIgIAAQgLABgDADg");
	this.shape_25.setTransform(198.7,36.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#18335D").s().p("AgeAqQgOgNAAgdQAAgRAHgNQAIgMAMgGQAMgGAQAAQAHAAALACIARAGIgLAbIgNgFIgLgBQgJAAgEAGQgFAHAAAMQAAAPAFAFQAEAGAJAAQAHAAAJgDQAGgCAJgFIAAAeQgFADgKAEQgJACgKAAQgXAAgPgNg");
	this.shape_26.setTransform(187.95,36.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#18335D").s().p("AghAyQgJgEgEgJQgFgIAAgOIAAhEIAlAAIAAA5QAAALADAFQADAFAHAAQAJAAADgIQAEgIAAgQIAAguIAlAAIAABpIgcAAIgFgNIgCAAQgFAIgIADQgIAEgKAAQgKAAgJgEg");
	this.shape_27.setTransform(171.15,36.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#18335D").s().p("AgbAxQgMgHgGgMQgHgNAAgRQAAgaAOgOQAOgOAYAAQAQAAALAGQANAGAGANQAHALAAASQAAAbgOAOQgPAOgYAAQgNAAgOgGgAgLgUQgEAHAAANQAAAOAEAGQAEAIAHAAQAJAAAEgIQADgIAAgMQAAgMgDgIQgEgHgJAAQgHAAgEAHg");
	this.shape_28.setTransform(158.55,36.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#18335D").s().p("AgSBFIAAg1IgthUIAoAAIAXAzIAYgzIAoAAIgtBTIAAA2g");
	this.shape_29.setTransform(147.025,34.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267.5,89.5);


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
	this.shape.graphics.f("#E8E8ED").s().p("AgFAaIAAgUIgRgfIAMAAIAKAWIALgWIAMAAIgSAfIAAAUg");
	this.shape.setTransform(67.025,8.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8E8ED").s().p("AgVAaIAAgzIARAAQAHAAAGADQAGADADAFQAEAGAAAIQAAANgIAGQgHAHgNAAgAgKARIAFAAQAPAAAAgRQAAgHgEgFQgEgEgGAAIgGAAg");
	this.shape_1.setTransform(62.125,8.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E8E8ED").s().p("AANAaIgDgMIgSAAIgEAMIgMAAIASgzIANAAIASAzgAgGAFIANAAIgHgWg");
	this.shape_2.setTransform(56.675,8.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8E8ED").s().p("AgOAaIAAgzIAdAAIAAAJIgSAAIAAALIAQAAIAAAIIgQAAIAAAOIASAAIAAAJg");
	this.shape_3.setTransform(52.15,8.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8E8ED").s().p("AAIAaIgLgUIgGAAIAAAUIgLAAIAAgzIAPAAQAKAAAFAEQAFAEAAAIQAAADgBADIgEADIgFADIAQAXgAgJgCIAEAAQAFAAACgBQACgDAAgDQAAgEgDgCQgBgBgGAAIgDAAg");
	this.shape_4.setTransform(47.825,8.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E8E8ED").s().p("AgFAaIAAgqIgOAAIAAgJIAnAAIAAAJIgPAAIAAAqg");
	this.shape_5.setTransform(40.875,8.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8E8ED").s().p("AgOAaIAAgzIAdAAIAAAJIgSAAIAAALIAQAAIAAAIIgQAAIAAAOIASAAIAAAJg");
	this.shape_6.setTransform(36.75,8.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E8E8ED").s().p("AgOAUQgGgIAAgMQAAgIADgFQADgGAGgEQAGgDAIAAIAIABIAIACIgFAJIgEgCIgHgBQgFAAgDACQgCACgDAFQgCADAAAFQAAAFABAEQACAEADACQADACAEAAIADAAIADAAIAAgLIgJAAIAAgIIAVAAIAAAaIgJACIgKABQgLAAgGgHg");
	this.shape_7.setTransform(31.75,8.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E8E8ED").s().p("AgQAYIAAgLIAIADIAIACQADAAACgCQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIgBgDIgDgDIgJgFIgEgCIgDgEIgBgGQAAgHAEgEQAEgEAJAAIAHABIAIADIgDAIIgHgCIgGgBQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABABAAQAAAAABABIAOAHIADAFQACACAAAEQAAAHgFAFQgFAEgIAAQgIAAgHgDg");
	this.shape_8.setTransform(25.1,8.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E8E8ED").s().p("AgGAJIAEgRIAJAAIAAABIgCAHIgFAJg");
	this.shape_9.setTransform(22.2,6.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E8E8ED").s().p("AgFAaIAAgqIgNAAIAAgJIAlAAIAAAJIgOAAIAAAqg");
	this.shape_10.setTransform(19.2,8.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8E8ED").s().p("AgOAaIAAgzIAdAAIAAAJIgSAAIAAALIAQAAIAAAIIgQAAIAAAOIASAAIAAAJg");
	this.shape_11.setTransform(15.05,8.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E8E8ED").s().p("AgPAaIAAgzIALAAIAAAqIAUAAIAAAJg");
	this.shape_12.setTransform(10.95,8.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#621F7B").s().p("Ak2BUQggAAgYgXQgXgXAAghIAAgJQAAghAXgXQAYgXAgAAIJtAAQAgAAAYAXQAXAXAAAhIAAAJQAAAhgXAXQgYAXggAAg");
	this.shape_13.setTransform(38.975,8.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(0,0,255.3,149.6), null);


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

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,267.5,89.5), null);


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
	this.instance.setTransform(0.05,0,1,1,0,0,0,39,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-38.9,-8.4,77.9,16.9), null);


// stage content:
(lib.Cat_DV360Display_ENG_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [189];
	// timeline functions:
	this.frame_189 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(189).call(this.frame_189).wait(1));

	// FRAME
	this.instance = new lib._300x250AFRAME();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(190));

	// CTA
	this.instance_1 = new lib.CTA();
	this.instance_1.setTransform(205,167.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({_off:false},0).wait(71).to({scaleX:1.3,scaleY:1.3},3).to({scaleX:1,scaleY:1},5).wait(40));

	// HEAD1
	this.instance_2 = new lib.HEAD1();
	this.instance_2.setTransform(1184.2,469.4,1,1,0,0,0,1034.2,469.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80).to({_off:false},0).to({x:1034.2},14,cjs.Ease.quintOut).wait(96));

	// HEAD2
	this.instance_3 = new lib.HEAD2();
	this.instance_3.setTransform(1184.2,469.4,1,1,0,0,0,1034.2,469.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(104).to({_off:false},0).to({x:1034.2},14,cjs.Ease.quintOut).wait(72));

	// BKGD2
	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.setTransform(150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).to({alpha:1},6).wait(119));

	// BKGD1
	this.instance_5 = new lib._300x250A();
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},71).wait(119));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,267.5,125);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 250,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/Cat_DV360_Display_ENG_300x250_atlas_P_1.png", id:"Cat_DV360_Display_ENG_300x250_atlas_P_1"},
		{src:"images/Cat_DV360_Display_ENG_300x250_atlas_NP_1.jpg", id:"Cat_DV360_Display_ENG_300x250_atlas_NP_1"}
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
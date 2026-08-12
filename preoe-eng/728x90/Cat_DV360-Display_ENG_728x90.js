(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Cat_DV360_Display_ENG_728x90_atlas_P_1", frames: [[0,0,1456,180],[0,182,1456,180]]},
		{name:"Cat_DV360_Display_ENG_728x90_atlas_NP_1", frames: [[0,0,1456,180],[0,182,1456,180]]}
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



(lib._728x90AFRAME = function() {
	this.initialize(ss["Cat_DV360_Display_ENG_728x90_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._728x90A = function() {
	this.initialize(ss["Cat_DV360_Display_ENG_728x90_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._728x90BGirl = function() {
	this.initialize(ss["Cat_DV360_Display_ENG_728x90_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._728x90BLOGO = function() {
	this.initialize(ss["Cat_DV360_Display_ENG_728x90_atlas_P_1"]);
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
	this.instance = new lib._728x90A();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGD1, new cjs.Rectangle(0,0,728,90), null);


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
	this.shape.setTransform(214,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDwhite, new cjs.Rectangle(-150,-50,728,90), null);


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
	this.instance = new lib._728x90BLOGO();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDLOGOs, new cjs.Rectangle(-150,-125,728,90), null);


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
	this.instance = new lib._728x90BGirl();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BKGDGirl, new cjs.Rectangle(-150,-125,728,90), null);


(lib._728x90HEAD2ai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 728x90-HEAD2.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18335D").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape.setTransform(3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18335D").s().p("AgNAOQgGgEAAgKQAAgIAGgFQAHgEAGAAQAIAAAGAEQAGAFAAAIQAAAKgGAEQgFAEgJAAQgHAAgGgEg");
	this.shape_1.setTransform(343.275,50.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18335D").s().p("AgXAxQgMgFgIgMQgHgMgBgTQAAgSAIgNQAGgMAMgGQALgGAPAAQAXAAAOAMQANAMAAAYIAAAQIhAAAQAAAIAGAFQAGAGAKAAQALAAAIgCQAHgCAKgEIAAAaQgIAEgJACQgMACgMAAQgOAAgNgGgAgHgZQgFAFgBAIIAfAAQAAgHgEgFQgDgFgIAAQgFAAgFAEg");
	this.shape_2.setTransform(334.55,47.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18335D").s().p("AgeAqQgOgNAAgdQAAgRAHgNQAHgMAMgGQAOgGAOAAIATACIAQAGIgKAbIgNgFQgFgBgHAAQgIAAgEAGQgFAHAAAMQAAAPAFAFQAFAGAHAAQAIAAAIgDQAIgCAIgFIAAAeQgGADgKAEQgIACgKAAQgYAAgOgNg");
	this.shape_3.setTransform(323.6,47.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18335D").s().p("AAQA2IAAg5QAAgLgEgFQgCgFgIAAQgJAAgDAIQgEAIAAAQIAAAuIglAAIAAhpIAcAAIAFAOIABAAQAGgIAHgEQAIgEALAAQARAAAKAJQAKAJAAAVIAABEg");
	this.shape_4.setTransform(311.8,46.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18335D").s().p("AgoAvQgJgJAAgRQAAgRAMgIQALgIAXgBIARgBIAAgBQAAgHgEgDQgDgDgGAAQgHAAgGACIgQAGIgLgZQALgFAKgCQAOgCALAAQAUAAAMAKQALAJAAATIAABFIgZAAIgHgOIgBAAIgJAJQgEAEgGABQgJACgGAAQgNAAgKgIgAgIAKQgEACAAAGQAAAGADACQADADAFAAQAFAAAFgEQAFgEAAgHIAAgIIgJAAQgKABgDADg");
	this.shape_5.setTransform(299.075,47.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18335D").s().p("AglA2IAAhpIAbAAIAGARIACAAQADgJAIgFQAJgFAIAAIAMABIgEAjIgEgBIgIgBIgKACQgFABgEAFQgDAFAAAIIAAA0g");
	this.shape_6.setTransform(289.775,46.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18335D").s().p("AghAyQgIgEgFgJQgFgJAAgNIAAhEIAlAAIAAA5QAAALADAFQADAFAHAAQAJAAADgIQAEgIAAgQIAAguIAlAAIAABpIgcAAIgFgNIgCAAQgFAIgIADQgJAEgIAAQgKAAgKgEg");
	this.shape_7.setTransform(278.25,47.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18335D").s().p("AgWA2IgSgFIAAgdQAIAEAMACQAJACAHAAQALAAAAgFIgCgEIgGgEIgNgGQgNgFgHgGQgHgIAAgNQAAgQAMgHQAMgIATAAQAKAAAKACQAKADAJAEIgKAXIgQgFQgHgCgFAAQgJAAABAEQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABIAFADIANAGQALAEAFAEQAGAEADAFQADAGAAAJQAAALgEAHQgFAIgKAFQgJAEgQAAg");
	this.shape_8.setTransform(266.85,47.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18335D").s().p("AAPA2IAAg5QAAgKgDgGQgDgFgHAAQgKAAgDAIQgDAKgBAOIAAAuIgkAAIAAhpIAbAAIAGAOIABAAQAGgIAHgEQAIgEAKAAQASAAAJAJQALAJAAAVIAABEg");
	this.shape_9.setTransform(255.45,46.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18335D").s().p("AgSBLIAAhqIAkAAIAABqgAgMgtQgHgDABgJQgBgKAHgDQAEgEAIAAQAIAAAGAEQAGADgBAKQABAJgGADQgGAEgIAAQgIAAgEgEg");
	this.shape_10.setTransform(245.85,44.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18335D").s().p("AAPBJIAAg6QAAgUgNAAQgJAAgEAHQgDAJAAAPIAAAvIglAAIAAiRIAlAAIgCA1IACAAQAGgJAGgDQAGgDAKAAQAKAAAJAEQAJAEAFAIQAFAKAAAMIAABFg");
	this.shape_11.setTransform(231.3,45.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18335D").s().p("AgIA+QgHgEgFgHQgFgJAAgOIAAgrIgNAAIAAgPIARgMIAJgWIAXAAIAAAVIAaAAIAAAcIgaAAIAAApQAAAKAKgBIAJAAIAJgDIAAAbIgNAEQgJACgIAAQgJAAgIgDg");
	this.shape_12.setTransform(220.325,46.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18335D").s().p("AgSBJIAAiRIAlAAIAACRg");
	this.shape_13.setTransform(212.85,45.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18335D").s().p("AgoAvQgJgJAAgRQAAgRAMgIQALgIAXgBIARgBIAAgBQAAgHgEgDQgDgDgGAAQgHAAgGACIgQAGIgKgZQAJgFALgCQAOgCAMAAQAUAAALAKQALAJAAATIAABFIgZAAIgHgOIgBAAQgDAEgGAFQgEAEgGABQgIACgHAAQgNAAgKgIgAgIAKQgEACAAAGQAAAGADACQADADAFAAQAFAAAFgEQAFgEAAgHIAAgIIgJAAQgKABgDADg");
	this.shape_14.setTransform(203.475,47.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18335D").s().p("AgXAxQgMgFgIgMQgHgMAAgTQgBgSAIgNQAGgMAMgGQAMgGAPAAQAWAAAOAMQANAMAAAYIAAAQIhAAAQAAAIAGAFQAGAGAKAAQALAAAIgCQAHgCAKgEIAAAaQgIAEgJACQgMACgMAAQgOAAgNgGgAgHgZQgFAFgBAIIAfAAQAAgHgEgFQgEgFgHAAQgGAAgEAEg");
	this.shape_15.setTransform(191.8,47.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18335D").s().p("AAPBJIAAg6QAAgUgNAAQgJAAgEAHQgDAJAAAPIAAAvIglAAIAAiRIAlAAIgCA1IACAAQAGgJAGgDQAGgDAKAAQAKAAAJAEQAJAEAFAIQAFAKAAAMIAABFg");
	this.shape_16.setTransform(179.45,45.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18335D").s().p("AgbBMQgHgBgMgEIAAgeIASAGQALACALAAQAUAAAAgQIAAgCIACgNIgCAAQgEAHgGAEQgFAEgMAAQgQAAgLgOQgKgOAAgaQgBgbALgOQALgOARAAQALAAAGAEQAHAEAEAHIABAAIADgNIAfAAIAABpQABAXgOAMQgPALgbAAgAgNgUQAAAOADAFQAFAGAHAAQAIAAAEgFQADgFAAgMIAAgFQAAgMgDgHQgDgHgKAAQgOAAAAAcg");
	this.shape_17.setTransform(161.55,49.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18335D").s().p("AAPA2IAAg5QAAgKgDgGQgDgFgGAAQgKAAgEAIQgDAIAAAQIAAAuIglAAIAAhpIAcAAIAFAOIABAAQAGgIAHgEQAIgEALAAQARAAAJAJQALAJAAAVIAABEg");
	this.shape_18.setTransform(149.15,46.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18335D").s().p("AgRBLIAAhqIAjAAIAABqgAgNgtQgGgCAAgKQAAgKAGgDQAFgEAIAAQAIAAAFAEQAHADAAAKQAAAJgHADQgFAEgIAAQgIAAgFgEg");
	this.shape_19.setTransform(139.6,44.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18335D").s().p("AgIA+QgIgDgFgIQgEgIAAgPIAAgrIgNAAIAAgPIARgMIAJgWIAXAAIAAAVIAaAAIAAAcIgaAAIAAApQAAAKAKgBIAJAAIAJgDIAAAbIgNAEQgJACgIAAQgJAAgIgDg");
	this.shape_20.setTransform(131.975,46.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18335D").s().p("AgIA+QgIgDgFgIQgEgIAAgPIAAgrIgNAAIAAgPIAQgMIAKgWIAXAAIAAAVIAaAAIAAAcIgaAAIAAApQAAAKAKgBIAJAAIAJgDIAAAbIgNAEQgJACgIAAQgJAAgIgDg");
	this.shape_21.setTransform(123.125,46.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18335D").s().p("AgYAxQgMgFgHgMQgHgMgBgTQABgTAGgMQAHgMAMgGQAMgGAOAAQAYAAANAMQAOAMAAAYIAAAQIhCAAQABAIAGAFQAFAGALAAQALAAAHgCQAIgCAKgEIAAAaQgJAEgIACQgNACgLAAQgPAAgNgGgAgHgZQgFAEgBAJIAfAAQAAgHgEgFQgEgFgIAAQgEAAgFAEg");
	this.shape_22.setTransform(112.8,47.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#18335D").s().p("AgbBMQgHgBgMgEIAAgeIASAGQAMACAKAAQAVAAAAgQIAAgCIABgNIgBAAQgFAHgGAEQgFAEgLAAQgRAAgLgOQgKgOAAgaQAAgbAKgOQALgOARAAQAMAAAFAEQAGADAFAIIABAAIADgNIAfAAIAABpQAAAXgNAMQgPALgbAAQgNAAgKgBgAgNgUQAAANAEAGQADAGAIAAQAJAAADgFQAEgGAAgLIAAgFQAAgLgEgIQgEgHgJAAQgOAAAAAcg");
	this.shape_23.setTransform(100.425,49.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18335D").s().p("AgqBMIgGgBIAAgdIALABQAJAAAFgFQAFgGACgGIAAgBIgqhoIAnAAIASA9IABAFIAAAGIABAAIACgLIASg9IAmAAIgqBwQgFAMgHAKQgFAIgJAFQgKAEgOAAIgJAAg");
	this.shape_24.setTransform(83.575,49.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#18335D").s().p("AgDBGIgKgIIgDAAIgGAKIgdAAIAAiRIAmAAIgBAsIgBAJIACAAQADgGAHgFQAGgEALAAQAQAAALAOQAKAOABAaQgBAbgKAOQgLAOgRAAQgLAAgFgEgAgKgBQgDAEAAAMIAAAFQAAAMADAGQAEAGAGAAQAOAAAAgaQAAgYgOAAQgHAAgDAFg");
	this.shape_25.setTransform(72.15,45.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,345.3,57);


(lib._728x90HEAD1ai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 728x90-HEAD1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18335D").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape.setTransform(3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18335D").s().p("AAPBJIAAg6QAAgUgNAAQgJAAgEAHQgDAJAAAPIAAAvIglAAIAAiRIAlAAIgCA1IACAAQAGgJAGgDQAGgDAKAAQAKAAAJAEQAJAEAFAIQAFAKAAAMIAABFg");
	this.shape_1.setTransform(374.5,23.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18335D").s().p("AgIA9QgIgDgEgHQgFgJAAgOIAAgrIgNAAIAAgPIAQgLIAKgXIAXAAIAAAVIAaAAIAAAcIgaAAIAAAoQAAALAKgBIAJgBIAJgCIAAAbIgNAEQgJACgIAAQgJAAgIgEg");
	this.shape_2.setTransform(363.55,24.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18335D").s().p("AgRBJIAAiRIAjAAIAACRg");
	this.shape_3.setTransform(356.075,23.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18335D").s().p("AgoAvQgKgJAAgRQABgRALgIQAMgIAXgBIAQgBIAAgBQABgHgEgDQgEgDgFAAQgHAAgHACIgPAGIgLgZQALgFALgCQAMgCANAAQATAAAMAKQALAKAAASIAABFIgZAAIgHgOIgBAAIgJAJQgFAEgFABQgIACgHAAQgOAAgJgIgAgIAKQgEADAAAFQAAAGADACQADADAEAAQAHAAAEgEQAFgEgBgHIAAgIIgIAAQgKABgDADg");
	this.shape_4.setTransform(346.7,25.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18335D").s().p("AgXAxQgMgFgIgMQgHgNAAgSQAAgTAGgMQAHgMAMgGQAMgGAOAAQAXAAAOAMQANAMAAAYIAAAQIhAAAQAAAHAGAGQAFAGALAAQALAAAHgCQAJgCAIgEIAAAaQgHAEgJACQgNACgKAAQgPAAgNgGgAgHgZQgFAFgBAIIAfAAQgBgJgDgDQgEgFgIAAQgFAAgEAEg");
	this.shape_5.setTransform(335.025,25.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18335D").s().p("AAPBJIAAg6QAAgUgMAAQgKAAgEAHQgDAIAAAQIAAAvIglAAIAAiRIAlAAIgCA1IACAAQAGgJAGgDQAGgDAKAAQAKAAAJAEQAJAEAFAIQAFAKAAAMIAABFg");
	this.shape_6.setTransform(322.65,23.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18335D").s().p("AglA2IAAhpIAcAAIAGARIABAAQAEgJAIgFQAIgFAJAAIALABIgDAjIgFgBIgIgBIgKACQgFABgEAFQgDAEAAAJIAAA0g");
	this.shape_7.setTransform(307.175,25.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18335D").s().p("AghAyQgJgEgEgJQgFgIAAgOIAAhEIAlAAIAAA5QAAALADAFQADAFAHAAQAJAAADgIQAEgIAAgQIAAguIAlAAIAABpIgcAAIgFgNIgBAAQgGAIgJADQgHAEgKAAQgKAAgJgEg");
	this.shape_8.setTransform(295.7,25.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18335D").s().p("AgbAxQgMgHgGgMQgHgNAAgRQAAgZAOgPQAPgOAXAAQAQAAAMAGQALAGAHANQAHAMAAARQAAAagOAPQgPAOgYAAQgOAAgNgGgAgLgUQgEAHAAANQAAAOAEAGQAEAIAHAAQAJAAADgIQAEgIAAgMQAAgMgEgIQgDgHgJAAQgIAAgDAHg");
	this.shape_9.setTransform(283.125,25.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18335D").s().p("AgqBMIgGgBIAAgdIAFABIAGAAQAJAAAFgFQADgEAEgIIAAgBIgqhoIAnAAIASA9IABALIAAAAIABgGIAUhCIAmAAIgqBwQgGAPgGAHQgFAIgKAFQgJAEgOAAIgJAAg");
	this.shape_10.setTransform(271.125,27.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18335D").s().p("AgZBKIAAhOIgOAAIAAgSIAOgJIAAgCQAAgUAJgKQAJgKASAAQAJAAAGACIAOADIgIAYIgGgBIgIgBQgHAAgBALIAAADIAYAAIAAAcIgYAAIAABOg");
	this.shape_11.setTransform(256.75,23.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18335D").s().p("AgbAxQgMgHgGgMQgHgNAAgRQAAgaAOgOQAPgOAXAAQAQAAALAGQAMAGAHANQAHAMAAARQAAAagOAPQgPAOgYAAQgOAAgNgGgAgLgUQgEAHAAANQAAAOAEAGQAEAIAHAAQAJAAADgIQAEgIAAgMQAAgMgEgIQgDgHgJAAQgIAAgDAHg");
	this.shape_12.setTransform(246.175,25.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18335D").s().p("AgRBJIAAiRIAjAAIAACRg");
	this.shape_13.setTransform(231.925,23.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18335D").s().p("AgaAxQgNgHgGgMQgHgNAAgRQAAgZAOgPQAPgOAXAAQAQAAAMAGQALAGAHANQAHAMAAARQAAAagOAPQgPAOgYAAQgNAAgNgGgAgLgUQgEAIAAAMQAAAMAEAIQAEAIAHAAQAJAAADgIQAEgGAAgOQAAgNgEgHQgDgHgJAAQgIAAgDAHg");
	this.shape_14.setTransform(222.675,25.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18335D").s().p("AglA2IAAhpIAbAAIAGARIACAAQADgIAIgGQAJgFAIAAIAMABIgEAjIgEgBIgIgBIgKACQgFABgEAFQgDAFAAAIIAAA0g");
	this.shape_15.setTransform(212.975,25.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18335D").s().p("AgIA9QgHgDgFgHQgFgJAAgOIAAgrIgNAAIAAgPIARgLIAJgXIAXAAIAAAVIAaAAIAAAcIgaAAIAAAoQAAALAKgBIAJgBIAJgCIAAAbIgNAEQgJACgIAAQgJAAgIgEg");
	this.shape_16.setTransform(203.425,24.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18335D").s().p("AAPA2IAAg5QAAgKgDgGQgDgFgHAAQgKAAgCAIQgFAJAAAPIAAAuIgkAAIAAhpIAbAAIAGAOIABAAQAGgIAHgEQAIgEALAAQAQAAALAJQAKAJAAAVIAABEg");
	this.shape_17.setTransform(192.65,25.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18335D").s().p("AgaAxQgNgHgGgMQgHgNAAgRQAAgZAOgPQAPgOAXAAQAQAAAMAGQALAGAHANQAHAMAAARQAAAagOAPQgPAOgYAAQgNAAgNgGgAgLgUQgEAIAAAMQAAAMAEAIQAEAIAHAAQAJAAADgIQAEgGAAgOQAAgNgEgHQgDgHgJAAQgIAAgDAHg");
	this.shape_18.setTransform(180.025,25.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18335D").s().p("AgeAqQgPgNAAgdQABgRAHgNQAHgMAMgGQANgGAPAAIATACIAQAGIgKAbIgNgFQgFgBgHAAQgIAAgEAGQgFAHAAAMQAAAPAFAFQAFAGAHAAQAHAAAJgDQAIgCAIgFIAAAeQgGADgKAEQgIACgKAAQgYAAgOgNg");
	this.shape_19.setTransform(168.9,25.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18335D").s().p("AgYAxQgNgFgGgMQgIgMAAgTQAAgTAHgMQAGgMAMgGQANgGAOAAQAXAAAOAMQAOAMAAAYIAAAQIhCAAQACAIAFAFQAFAGALAAQAKAAAIgCQAIgCAKgEIAAAaQgJAEgJACQgMACgKAAQgQAAgNgGgAgIgZQgEAEAAAJIAeAAQAAgHgEgFQgEgFgIAAQgFAAgFAEg");
	this.shape_20.setTransform(152.6,25.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18335D").s().p("AAPBJIgWgmIgNAJIAAAdIgkAAIAAiRIAkAAIAABIQAAAHgCAGIABAAIAigtIAqAAIglAsIAnA9g");
	this.shape_21.setTransform(140.95,23.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18335D").s().p("AgoAvQgJgJAAgRQgBgRAMgIQAMgIAXgBIARgBIAAgBQgBgHgDgDQgDgDgHAAQgGAAgGACIgQAGIgLgZQALgFAKgCQANgCAMAAQAVAAALAKQAMAKgBASIAABFIgZAAIgHgOIgBAAIgJAJQgFAEgFABQgIACgHAAQgNAAgKgIgAgIAKQgEADAAAFQAAAGADACQADADAEAAQAHAAAEgEQAEgEABgHIAAgIIgJAAQgKABgDADg");
	this.shape_22.setTransform(127.7,25.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#18335D").s().p("AgIA9QgHgDgFgHQgFgJAAgOIAAgrIgNAAIAAgPIARgLIAJgXIAXAAIAAAVIAaAAIAAAcIgaAAIAAAoQAAALAKgBIAJgBIAJgCIAAAbIgNAEQgJACgIAAQgJAAgIgEg");
	this.shape_23.setTransform(117.475,24.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18335D").s().p("AAPA2IAAg5QAAgKgDgGQgCgFgIAAQgKAAgDAIQgEAKABAOIAAAuIglAAIAAhpIAcAAIAEAOIACAAQAGgIAHgEQAHgEALAAQARAAAKAJQALAJAAAVIAABEg");
	this.shape_24.setTransform(101.7,25.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#18335D").s().p("AgoAvQgKgKAAgQQABgRAMgIQALgIAXgBIAQgBIAAgBQABgHgEgDQgDgDgGAAQgGAAgIACIgPAGIgLgZQAKgFAMgCQAMgCANAAQATAAAMAKQAMAKgBASIAABFIgZAAIgHgOIgBAAIgJAJQgEADgGACQgIACgHAAQgOAAgJgIgAgIAKQgEADAAAFQAAAGADACQADADAFAAQAFAAAFgEQAFgEAAgHIAAgIIgJAAQgJABgEADg");
	this.shape_25.setTransform(88.95,25.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#18335D").s().p("AgeAqQgPgNAAgdQAAgRAIgNQAHgMANgGQANgGAPAAQAHAAALACIAQAGIgLAbIgLgFIgMgBQgJAAgEAGQgFAHAAAMQAAAPAFAFQAEAGAJAAQAHAAAIgDQAIgCAIgFIAAAeQgFADgKAEQgJACgKAAQgXAAgPgNg");
	this.shape_26.setTransform(78.2,25.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#18335D").s().p("AggAyQgKgEgEgJQgFgIAAgOIAAhEIAlAAIAAA5QAAALADAFQADAFAGAAQAKAAAEgIQADgIAAgQIAAguIAlAAIAABpIgcAAIgEgNIgCAAQgGAIgJADQgIAEgJAAQgJAAgJgEg");
	this.shape_27.setTransform(61.4,25.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#18335D").s().p("AgbAxQgMgHgGgMQgHgNAAgRQAAgZAOgPQAPgOAXAAQAQAAAMAGQALAGAHANQAHAMAAARQAAAagOAPQgPAOgYAAQgOAAgNgGgAgLgUQgEAHAAANQAAAOAEAGQAEAIAHAAQAJAAADgIQAEgGAAgOQAAgNgEgHQgDgHgJAAQgIAAgDAHg");
	this.shape_28.setTransform(48.825,25.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#18335D").s().p("AgSBFIAAg1IgthUIAoAAIAXAzIAYgzIAoAAIgtBTIAAA2g");
	this.shape_29.setTransform(37.275,23.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,379.7,35.5);


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
	this.instance = new lib._728x90HEAD2ai();
	this.instance.setTransform(1034.2,469.4,1,1,0,0,0,1034.2,469.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(0,0,345.3,57), null);


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
	this.instance = new lib._728x90HEAD1ai();
	this.instance.setTransform(1034.2,469.4,1,1,0,0,0,1034.2,469.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,379.7,35.5), null);


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
(lib.Cat_DV360Display_ENG_728x90 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._728x90AFRAME();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	// CTA
	this.instance_1 = new lib.CTA();
	this.instance_1.setTransform(478,69);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).to({x:203},14,cjs.Ease.quadOut).wait(68).to({scaleX:1.3,scaleY:1.3,x:202.95},3).to({scaleX:1,scaleY:1,x:203},5).wait(11).to({x:-525},14,cjs.Ease.quadIn).wait(5));

	// HEAD1
	this.instance_2 = new lib.HEAD1();
	this.instance_2.setTransform(1334.2,469.4,1,1,0,0,0,1034.2,469.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({_off:false},0).to({x:1034.2},14,cjs.Ease.quadOut).wait(87).to({x:306.2},14,cjs.Ease.quadIn).wait(9));

	// HEAD2
	this.instance_3 = new lib.HEAD2();
	this.instance_3.setTransform(1334.2,469.4,1,1,0,0,0,1034.2,469.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(58).to({_off:false},0).to({x:1034.2},14,cjs.Ease.quadOut).wait(87).to({x:306.2},14,cjs.Ease.quadIn).wait(7));

	// LOGOs
	this.instance_4 = new lib.BKGDLOGOs("synched",0);
	this.instance_4.setTransform(450,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(64).to({_off:false},0).to({x:150},12,cjs.Ease.quadOut).wait(89).to({startPosition:0},0).to({x:-578},12,cjs.Ease.quadIn).wait(3));

	// Girl
	this.instance_5 = new lib.BKGDGirl("synched",0);
	this.instance_5.setTransform(450,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(62).to({_off:false},0).to({x:150},12,cjs.Ease.quadOut).wait(89).to({startPosition:0},0).to({x:-578},12,cjs.Ease.quadIn).wait(5));

	// BKGD2
	this.instance_6 = new lib.BKGDwhite("synched",0);
	this.instance_6.setTransform(878,50.1,1,1,0,0,0,0,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({x:150},12,cjs.Ease.quadInOut).wait(106).to({startPosition:0},0).to({x:-578},12,cjs.Ease.quadIn).wait(1));

	// BKGD1
	this.instance_7 = new lib.BKGD1();
	this.instance_7.setTransform(250,300,1,1,0,0,0,250,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({x:-478},12,cjs.Ease.quadInOut).wait(106).to({x:250},0).wait(13));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-364,45,1820,45.099999999999994);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 728,
	height: 90,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/Cat_DV360_Display_ENG_728x90_atlas_P_1.png", id:"Cat_DV360_Display_ENG_728x90_atlas_P_1"},
		{src:"images/Cat_DV360_Display_ENG_728x90_atlas_NP_1.jpg", id:"Cat_DV360_Display_ENG_728x90_atlas_NP_1"}
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
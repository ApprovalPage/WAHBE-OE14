(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Traffic_DV360_Display_ENG_160x600_atlas_P_1", frames: [[0,0,320,1200],[322,0,320,1200]]},
		{name:"Traffic_DV360_Display_ENG_160x600_atlas_NP_1", frames: [[0,0,320,1200],[322,0,320,1200]]}
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
	this.initialize(ss["Traffic_DV360_Display_ENG_160x600_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._160x600A = function() {
	this.initialize(ss["Traffic_DV360_Display_ENG_160x600_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._160x600BGirl = function() {
	this.initialize(ss["Traffic_DV360_Display_ENG_160x600_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._160x600BLOGO = function() {
	this.initialize(ss["Traffic_DV360_Display_ENG_160x600_atlas_P_1"]);
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
	this.shape.graphics.f("#E8E8ED").s().p("AgVAaIAAgzIAQAAQAIAAAGADQAGADADAFQADAGABAIQgBANgHAGQgHAHgNAAgAgKARIAFAAQAPAAAAgRQAAgIgEgEQgFgEgFAAIgGAAg");
	this.shape.setTransform(31.55,-0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8E8ED").s().p("AgOAaIAAgzIAdAAIAAAJIgSAAIAAALIAQAAIAAAIIgQAAIAAAOIASAAIAAAJg");
	this.shape_1.setTransform(26.7,-0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E8E8ED").s().p("AgEAaIAAgqIgPAAIAAgJIAnAAIAAAJIgOAAIAAAqg");
	this.shape_2.setTransform(22.325,-0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8E8ED").s().p("AAJAaIgMgUIgGAAIAAAUIgLAAIAAgzIAQAAQAJAAAFAEQAFADAAAJQAAADgBADIgEADIgEADIAPAXgAgJgCIAEAAQAFAAACgBQACgDAAgDQAAgEgCgCQgCgBgFAAIgEAAg");
	this.shape_3.setTransform(18.025,-0.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8E8ED").s().p("AANAaIgDgMIgSAAIgEAMIgMAAIASgzIANAAIASAzgAgBgJIgBACIgEAMIANAAIgHgWg");
	this.shape_4.setTransform(12.675,-0.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E8E8ED").s().p("AgFAaIAAgqIgOAAIAAgJIAnAAIAAAJIgPAAIAAAqg");
	this.shape_5.setTransform(8.475,-0.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8E8ED").s().p("AgQAYIAAgLIAIADIAIACQADAAACgCQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIgCgDIgEgDIgMgHIgDgEIgBgGQAAgHAFgEQAEgEAHAAIAIABIAIADIgDAIIgHgCIgGgBQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABABAAQAAAAABABIAOAHIAEAFQABACAAAEQAAAHgFAFQgFAEgIAAQgIAAgHgDg");
	this.shape_6.setTransform(4.25,-0.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E8E8ED").s().p("AgEAaIAAgqIgPAAIAAgJIAnAAIAAAJIgOAAIAAAqg");
	this.shape_7.setTransform(-1.975,-0.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E8E8ED").s().p("AgOAaIAAgzIAdAAIAAAJIgSAAIAAALIARAAIAAAIIgRAAIAAAOIASAAIAAAJg");
	this.shape_8.setTransform(-6.1,-0.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E8E8ED").s().p("AgOAUQgGgHAAgNQAAgHADgGQADgGAGgEQAGgDAIAAIAIABIAHACIgDAJIgGgCIgGgBQgFAAgDACQgDACgCAFQgCAFAAADQAAAFABAEQACAEADACQACACAFAAIADAAIAEAAIAAgLIgKAAIAAgIIAUAAIAAAaIgIACIgKABQgKAAgHgHg");
	this.shape_9.setTransform(-11.075,-0.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E8E8ED").s().p("AgQAYIAAgLIAHADIAIACQADAAACgCQAAgBABAAQAAgBABAAQAAgBAAAAQAAgBAAAAIgBgDIgEgDIgIgFIgEgCIgDgEIgBgGQgBgHAFgEQAFgEAHAAIAIABIAHADIgDAIIgHgCIgGgBQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAQABAAABABIANAHIAEAFQACADAAADQAAAHgFAFQgFAEgJAAQgIAAgGgDg");
	this.shape_10.setTransform(-17.7,-0.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8E8ED").s().p("AgGAJIADgRIAJAAIABABIgGAQg");
	this.shape_11.setTransform(-20.65,-1.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E8E8ED").s().p("AgEAaIAAgqIgPAAIAAgJIAmAAIAAAJIgNAAIAAAqg");
	this.shape_12.setTransform(-23.65,-0.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E8E8ED").s().p("AgOAaIAAgzIAdAAIAAAJIgSAAIAAALIARAAIAAAIIgRAAIAAAOIASAAIAAAJg");
	this.shape_13.setTransform(-27.8,-0.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E8E8ED").s().p("AgPAaIAAgzIALAAIAAAqIAUAAIAAAJg");
	this.shape_14.setTransform(-31.9,-0.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#621F7B").s().p("AlgBUQgiAAgWgXQgXgXgBghIAAgJQABghAXgXQAWgXAiAAILBAAQAhAAAYAXQAWAXAAAhIAAAJQAAAhgWAXQgYAXghAAg");
	this.shape_15.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.2,-8.4,86.5,16.9);


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
	this.shape_1.graphics.f("#18335D").s().p("AgNAOQgGgEAAgKQAAgIAGgFQAHgEAHAAQAHAAAGAEQAGAFAAAIQAAAKgGAEQgFAEgIAAQgIAAgGgEg");
	this.shape_1.setTransform(129.275,184.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18335D").s().p("AgXAxQgMgFgIgMQgHgLAAgUQAAgTAGgMQAHgMAMgGQAMgGAOAAQAXAAAOAMQANAMAAAYIAAAQIhAAAQAAAHAGAGQAFAGALAAQALAAAHgCQAJgCAIgEIAAAaQgHAEgJACQgNACgKAAQgPAAgNgGgAgHgZQgFAFgBAIIAfAAQgBgJgDgDQgEgFgIAAQgFAAgEAEg");
	this.shape_2.setTransform(120.575,181.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18335D").s().p("AgeAqQgPgNAAgdQAAgRAIgNQAHgMANgGQAMgGAPAAQAIAAALACIAQAGIgLAbIgLgFIgNgBQgIAAgEAGQgFAHAAAMQAAAPAFAFQAEAGAJAAQAHAAAIgDQAIgCAIgFIAAAeQgFADgKAEQgJACgLAAQgXAAgOgNg");
	this.shape_3.setTransform(109.6,181.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18335D").s().p("AAQA2IAAg5QAAgKgDgGQgDgFgIAAQgJAAgDAIQgEAIAAAQIAAAuIglAAIAAhpIAcAAIAFAOIABAAQAFgIAJgEQAIgEAKAAQARAAAKAJQAKAJAAAVIAABEg");
	this.shape_4.setTransform(97.8,180.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18335D").s().p("AgoAvQgJgJAAgRQAAgRAMgIQALgIAXgBIARgBIAAgBQAAgHgEgDQgDgDgGAAQgHAAgGACIgQAGIgKgZQAJgFALgCQAOgCAMAAQAUAAALAKQALAJAAATIAABFIgZAAIgHgOIgBAAIgJAJQgEAEgGABQgIACgHAAQgNAAgKgIgAgIAKQgEADAAAFQAAAGADACQADADAFAAQAGAAAEgEQAFgEAAgHIAAgIIgJAAQgKABgDADg");
	this.shape_5.setTransform(85.075,181.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18335D").s().p("AglA2IAAhpIAcAAIAFARIACAAQADgIAIgGQAJgFAIAAIAMABIgEAjIgEgBIgIgBIgKACQgFABgEAFQgDAFAAAIIAAA0g");
	this.shape_6.setTransform(75.775,180.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18335D").s().p("AghAyQgIgEgFgJQgFgIAAgOIAAhEIAlAAIAAA5QAAALADAFQADAFAHAAQAJAAADgIQAEgJAAgPIAAguIAlAAIAABpIgcAAIgFgNIgCAAQgFAIgIADQgJAEgJAAQgKAAgJgEg");
	this.shape_7.setTransform(64.275,181.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18335D").s().p("AgXA2IgSgFIAAgdQAKAEALACQAJACAHAAQALAAAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgGgEIgOgGQgMgFgHgGQgHgHAAgOQAAgQAMgHQAMgIATAAQAKAAAKACQAKADAJAEIgKAXIgQgFQgHgCgGAAQgIAAAAAEQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABIAFADIAOAGQAKAEAFAEQAGAEADAFQADAGAAAJQAAALgFAHQgEAIgKAFQgKAEgPAAg");
	this.shape_8.setTransform(52.875,181.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18335D").s().p("AAPA2IAAg5QAAgKgDgGQgCgFgIAAQgJAAgDAIQgEAIAAAQIAAAuIglAAIAAhpIAcAAIAFAOIABAAQAFgIAJgEQAGgEAMAAQAQAAALAJQAKAJAAAVIAABEg");
	this.shape_9.setTransform(41.45,180.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18335D").s().p("AgSBLIAAhqIAkAAIAABqgAgNgtQgGgDAAgJQAAgKAGgDQAFgEAIAAQAIAAAGAEQAGADAAAKQAAAJgGADQgGAEgIAAQgIAAgFgEg");
	this.shape_10.setTransform(31.875,178.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18335D").s().p("AAPBJIAAg6QAAgUgNAAQgJAAgDAHQgEAIAAAQIAAAvIglAAIAAiRIAlAAIgCA1IACAAQAFgJAIgDQAFgDAKAAQAKAAAJAEQAJAEAFAIQAFAKAAAMIAABFg");
	this.shape_11.setTransform(106.35,157.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18335D").s().p("AgJA9QgHgDgFgHQgEgJAAgOIAAgrIgNAAIAAgPIAQgMIAKgWIAXAAIAAAVIAaAAIAAAcIgaAAIAAApQAAAKAKgBIAJgBIAJgCIAAAbIgNAEQgJACgIAAQgJAAgJgEg");
	this.shape_12.setTransform(95.425,158.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18335D").s().p("AgRBJIAAiRIAjAAIAACRg");
	this.shape_13.setTransform(87.925,157.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18335D").s().p("AgoAvQgJgJAAgRQAAgRAMgIQALgIAXgBIARgBIAAgBQgBgHgDgDQgDgDgHAAQgGAAgGACIgQAGIgKgZQAJgFALgCQANgCAMAAQAVAAALAKQAMAKAAASIAABFIgaAAIgHgOIgBAAIgJAJQgFAEgFABQgIACgHAAQgNAAgKgIgAgIAKQgEADAAAFQAAAGADACQADADAFAAQAFAAAFgEQAEgEABgHIAAgIIgIAAQgLABgDADg");
	this.shape_14.setTransform(78.55,159.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18335D").s().p("AgXAxQgMgFgIgMQgHgNAAgSQAAgTAGgMQAHgMAMgGQAMgGAOAAQAXAAAOAMQANAMAAAYIAAAQIhAAAQABAIAFAFQAFAGALAAQALAAAHgCQAJgCAIgEIAAAaQgHAEgJACQgMACgLAAQgPAAgNgGgAgHgZQgFAEAAAJIAeAAQgBgJgDgDQgEgFgIAAQgEAAgFAEg");
	this.shape_15.setTransform(66.875,159.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18335D").s().p("AAPBJIAAg6QAAgUgNAAQgJAAgDAHQgEAIAAAQIAAAvIglAAIAAiRIAlAAIgCA1IACAAQAFgJAIgDQAFgDAKAAQAKAAAJAEQAJAEAFAIQAFAKAAAMIAABFg");
	this.shape_16.setTransform(54.5,157.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18335D").s().p("AgbBMQgHgBgMgEIAAgeIASAGQALACALAAQAUAAAAgQIAAgCIACgNIgCAAQgEAGgFAFQgGAEgLAAQgRAAgLgOQgKgOAAgaQgBgbAMgOQAKgOARAAQALAAAGAEQAGADAFAIIABAAIADgNIAfAAIAABpQABAXgOAMQgPALgbAAgAgNgUQAAAOADAFQAFAGAHAAQAIAAAEgFQADgFAAgMIAAgFQAAgMgDgHQgDgHgKAAQgOAAAAAcg");
	this.shape_17.setTransform(125.1,140.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18335D").s().p("AAPA2IAAg5QAAgKgDgGQgDgFgGAAQgKAAgEAIQgDAIAAAQIAAAuIglAAIAAhpIAcAAIAFAOIACAAQAEgIAIgEQAIgEALAAQARAAAJAJQALAJAAAVIAABEg");
	this.shape_18.setTransform(112.7,137.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18335D").s().p("AgRBLIAAhqIAjAAIAABqgAgNgtQgGgDAAgJQAAgKAGgDQAFgEAIAAQAIAAAFAEQAHADAAAKQAAAJgHADQgFAEgIAAQgIAAgFgEg");
	this.shape_19.setTransform(103.15,135.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18335D").s().p("AgIA9QgIgCgFgIQgEgKAAgNIAAgrIgNAAIAAgPIARgLIAJgXIAXAAIAAAVIAaAAIAAAcIgaAAIAAAoQAAALAKgBIAJgBIAJgCIAAAbIgNAEQgJACgIAAQgJAAgIgEg");
	this.shape_20.setTransform(95.525,137.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18335D").s().p("AgIA9QgIgCgFgIQgEgIAAgPIAAgrIgNAAIAAgPIARgLIAJgXIAXAAIAAAVIAaAAIAAAcIgaAAIAAAoQAAALAKgBIAJgBIAJgCIAAAbIgNAEQgJACgIAAQgJAAgIgEg");
	this.shape_21.setTransform(86.675,137.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18335D").s().p("AgXAxQgNgFgHgMQgHgMgBgTQABgSAGgNQAHgMAMgGQAMgGAOAAQAYAAANAMQAOAMAAAYIAAAQIhCAAQABAIAGAFQAFAGALAAQAKAAAJgCQAHgCAKgEIAAAaQgIAEgJACQgNACgLAAQgPAAgMgGgAgHgZQgFAEgBAJIAfAAQAAgHgEgFQgDgFgJAAQgEAAgFAEg");
	this.shape_22.setTransform(76.35,138.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#18335D").s().p("AgbBMQgHgBgMgEIAAgeIASAGQAMACAKAAQAUAAAAgQIAAgCIABgNIgBAAQgEAHgGAEQgGAEgLAAQgRAAgKgOQgKgOAAgaQAAgbAKgOQALgOARAAQAMAAAFAEQAFADAGAIIABAAIADgNIAfAAIAABpQAAAWgNANQgPALgbAAgAgNgUQAAANADAGQAEAGAIAAQAIAAAEgFQAEgGAAgLIAAgFQAAgMgEgHQgDgHgKAAQgOAAAAAcg");
	this.shape_23.setTransform(64,140.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18335D").s().p("AgqBMIgGgBIAAgdIALABQAJAAAFgFQAFgGACgGIAAgBIgqhoIAnAAIASA9IABAFIAAAGIABAAIACgLIASg9IAmAAIgqBwQgEALgHALQgGAIgJAFQgKAEgOAAIgJAAg");
	this.shape_24.setTransform(47.125,140.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#18335D").s().p("AgDBGIgKgIIgDAAIgGAKIgdAAIAAiRIAmAAIgBAsIgBAJIACAAQADgGAHgFQAGgEALAAQAQAAALAOQALAOAAAaQgBAcgKANQgLAOgRAAQgLAAgFgEgAgKgBQgDAEAAAMIAAAFQAAAMADAGQAEAGAGAAQAOAAAAgaQAAgYgOAAQgGAAgEAFg");
	this.shape_25.setTransform(35.7,136.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.3,186.6);


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
	this.shape_1.graphics.f("#18335D").s().p("AAPBJIAAg6QAAgUgNAAQgJAAgDAHQgEAIAAAQIAAAvIglAAIAAiRIAlAAIgCA1IACAAQAFgJAIgDQAFgDALAAQAJAAAKAEQAIAEAFAIQAFAJAAANIAABFg");
	this.shape_1.setTransform(131.8,114.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18335D").s().p("AgIA9QgIgCgFgIQgEgIAAgPIAAgrIgNAAIAAgPIARgLIAJgXIAXAAIAAAWIAaAAIAAAbIgaAAIAAAoQAAAKAKAAIAJgBIAJgCIAAAbIgNAEQgJACgIAAQgJAAgIgEg");
	this.shape_2.setTransform(120.875,115.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18335D").s().p("AgRBJIAAiRIAjAAIAACRg");
	this.shape_3.setTransform(113.375,114.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18335D").s().p("AgoAvQgJgJAAgRQAAgSALgHQAMgIAXgBIAQgBIAAgBQAAgHgDgDQgDgDgGAAQgGAAgIACIgPAGIgLgZQAKgFALgCQANgCAMAAQAUAAAMAKQALAKAAASIAABFIgZAAIgHgOIgBAAIgJAJQgEADgGACQgIACgHAAQgOAAgJgIgAgIAKQgEADAAAFQAAAGADACQADADAEAAQAGAAAFgEQAFgEAAgHIAAgIIgJAAQgJABgEADg");
	this.shape_4.setTransform(104.025,116.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18335D").s().p("AgXAxQgNgFgHgMQgHgMAAgTQAAgTAGgMQAHgMAMgGQAMgGAOAAQAYAAANAMQANALAAAZIAAAQIhAAAQABAIAFAFQAGAGAKAAQALAAAHgCQAJgCAJgEIAAAaQgJAEgIACQgMACgLAAQgPAAgNgGgAgHgZQgFAEAAAJIAeAAQAAgHgEgFQgEgFgHAAQgFAAgFAEg");
	this.shape_5.setTransform(92.325,116.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18335D").s().p("AAPBJIAAg6QAAgUgNAAQgJAAgDAHQgEAIAAAQIAAAvIglAAIAAiRIAlAAIgBA1IABAAQAFgJAIgDQAGgDAJAAQAKAAAKAEQAIAEAFAIQAFAJAAANIAABFg");
	this.shape_6.setTransform(79.95,114.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18335D").s().p("AglA2IAAhpIAbAAIAGARIACAAQADgIAIgGQAJgFAIAAIAMABIgEAjIgEgBIgIgBIgKACQgFABgEAFQgDAFAAAIIAAA0g");
	this.shape_7.setTransform(64.525,116.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18335D").s().p("AggAyQgJgEgFgJQgFgJAAgNIAAhEIAlAAIAAA5QAAALADAFQADAFAGAAQAKAAAEgIQADgIAAgQIAAguIAlAAIAABpIgcAAIgEgNIgDAAQgFAIgIADQgJAEgIAAQgLAAgIgEg");
	this.shape_8.setTransform(53,116.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18335D").s().p("AgaAxQgNgHgGgMQgHgNAAgRQAAgZAOgPQAPgOAXAAQAQAAAMAGQALAGAHANQAHAMAAARQAAAagOAPQgPAOgYAAQgOAAgMgGgAgLgUQgEAHAAANQAAAOAEAGQAEAIAHAAQAJAAADgIQAEgGAAgOQAAgNgEgHQgDgHgJAAQgIAAgDAHg");
	this.shape_9.setTransform(40.425,116.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18335D").s().p("AgqBMIgGgBIAAgdIALABQAJAAAFgFQAFgGACgGIAAgBIgqhoIAnAAIASA9IABAFIAAAGIABAAIACgLIASg9IAmAAIgqBwQgGAPgGAHQgFAIgKAFQgJAEgOAAIgJAAg");
	this.shape_10.setTransform(28.425,118.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18335D").s().p("AgZBKIAAhOIgOAAIAAgSIAOgJIAAgCQAAgUAJgKQAIgKATAAQAJAAAGACIAOADIgIAYIgGgBIgIgBQgHAAgBALIAAADIAYAAIAAAcIgYAAIAABOg");
	this.shape_11.setTransform(125.25,92.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18335D").s().p("AgbAxQgMgHgGgMQgHgNAAgRQAAgZAOgPQAPgOAXAAQAQAAAMAGQALAGAHANQAHAMAAARQAAAagOAPQgPAOgYAAQgOAAgNgGgAgLgUQgEAHAAANQAAAOAEAGQAEAIAHAAQAJAAADgIQAEgGAAgOQAAgNgEgHQgDgHgJAAQgIAAgDAHg");
	this.shape_12.setTransform(114.675,95.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18335D").s().p("AgRBJIAAiRIAkAAIAACRg");
	this.shape_13.setTransform(100.45,93.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#18335D").s().p("AgaAxQgNgHgGgMQgHgNAAgRQAAgaAOgOQAOgOAZAAQAPAAAMAGQALAGAHANQAHALAAASQAAAbgOAOQgOAOgZAAQgNAAgNgGgAgLgUQgEAHAAANQAAANAEAHQADAIAIAAQAJAAADgIQAEgGAAgOQAAgNgEgHQgDgHgJAAQgIAAgDAHg");
	this.shape_14.setTransform(91.2,95.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#18335D").s().p("AglA2IAAhpIAcAAIAFARIACAAQAEgIAHgGQAJgFAJAAIALABIgEAjIgEgBIgIgBIgKACQgFABgEAFQgDAEAAAJIAAA0g");
	this.shape_15.setTransform(81.475,94.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#18335D").s().p("AgJA9QgHgCgFgJQgEgHAAgPIAAgrIgNAAIAAgPIAQgLIAKgXIAXAAIAAAWIAaAAIAAAbIgaAAIAAAoQAAAKAKAAIAJgBIAJgCIAAAbIgNAEQgJACgIAAQgJAAgJgEg");
	this.shape_16.setTransform(71.975,94.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#18335D").s().p("AAPA2IAAg5QAAgKgDgGQgCgFgIAAQgKAAgCAIQgEAIAAAQIAAAuIglAAIAAhpIAbAAIAGAOIABAAQAGgIAHgEQAHgEAMAAQARAAAKAJQAKAJAAAVIAABEg");
	this.shape_17.setTransform(61.15,94.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#18335D").s().p("AgaAxQgNgHgGgMQgHgNAAgRQAAgaAOgOQAOgOAZAAQAPAAAMAGQALAGAHANQAHALAAASQAAAbgOAOQgOAOgZAAQgNAAgNgGgAgLgUQgEAHAAANQAAANAEAHQADAIAIAAQAJAAADgIQAEgGAAgOQAAgNgEgHQgDgHgJAAQgIAAgDAHg");
	this.shape_18.setTransform(48.55,95.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#18335D").s().p("AgeAqQgOgNAAgdQAAgRAHgNQAIgMAMgGQAMgGAPAAQAIAAALACIAQAGIgKAbIgMgFIgNgBQgIAAgEAGQgFAHAAAMQAAAPAFAFQAFAGAIAAQAHAAAIgDQAIgCAIgFIAAAeQgFADgKAEQgJACgKAAQgYAAgOgNg");
	this.shape_19.setTransform(37.4,95.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#18335D").s().p("AgXAxQgNgFgHgMQgHgMAAgTQAAgTAGgMQAHgMAMgGQAMgGAOAAQAYAAANAMQANAMAAAYIAAAQIhAAAQABAIAFAFQAGAGAKAAQALAAAHgCQAJgCAJgEIAAAaQgJAEgIACQgMACgLAAQgPAAgNgGgAgHgZQgFAEAAAJIAeAAQAAgHgEgFQgEgFgHAAQgFAAgFAEg");
	this.shape_20.setTransform(138.275,73.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#18335D").s().p("AAPBJIgWgmIgMAJIAAAdIglAAIAAiRIAlAAIgBBIIgBANIABAAIAigtIApAAIglAsIAnA9g");
	this.shape_21.setTransform(126.625,71.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#18335D").s().p("AgoAvQgJgJAAgRQAAgRAMgIQALgIAXgBIARgBIAAgBQAAgHgEgDQgDgDgGAAQgHAAgGACIgQAGIgKgZQAJgFALgCQAOgCAMAAQAUAAALAKQALAJAAATIAABFIgZAAIgHgOIgBAAIgJAJQgEAEgGABQgIACgHAAQgNAAgKgIgAgIAKQgEADAAAFQAAAGADACQADADAFAAQAGAAAEgEQAFgEAAgHIAAgIIgJAAQgKABgDADg");
	this.shape_22.setTransform(113.375,73.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#18335D").s().p("AgIA9QgIgCgEgJQgFgHAAgPIAAgrIgNAAIAAgPIARgLIAJgXIAXAAIAAAWIAaAAIAAAbIgaAAIAAAoQAAALAKAAIAJgCIAJgCIAAAbIgNAEQgJACgIAAQgJAAgIgEg");
	this.shape_23.setTransform(103.175,72.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#18335D").s().p("AAPA2IAAg5QAAgKgDgGQgCgFgIAAQgJAAgEAIQgDAKAAAOIAAAuIglAAIAAhpIAcAAIAEAOIACAAQAEgIAJgEQAHgEALAAQARAAAKAJQALAJAAAVIAABEg");
	this.shape_24.setTransform(87.4,73.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#18335D").s().p("AgoAvQgKgJAAgRQAAgRANgIQALgIAXgBIAQgBIAAgBQAAgHgDgDQgDgDgGAAQgHAAgHACIgPAGIgKgZQAJgFAMgCQAMgCANAAQATAAAMAKQAMAKAAASIAABFIgaAAIgHgOIgBAAIgJAJQgFAEgFABQgIACgHAAQgNAAgKgIgAgIAKQgEADAAAFQAAAGADACQADADAFAAQAFAAAFgEQAFgEAAgHIAAgIIgIAAQgLABgDADg");
	this.shape_25.setTransform(74.65,73.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#18335D").s().p("AgeAqQgPgNAAgdQAAgRAIgNQAHgMANgGQAMgGAQAAQAHAAALACIARAGIgMAbIgLgFIgMgBQgJAAgEAGQgFAHAAAMQAAAPAFAFQAFAGAIAAQAHAAAIgDQAIgCAIgFIAAAeQgFADgKAEQgJACgLAAQgWAAgPgNg");
	this.shape_26.setTransform(63.9,73.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#18335D").s().p("AghAyQgJgEgEgJQgFgIAAgOIAAhEIAlAAIAAA5QAAALADAFQADAFAHAAQAJAAADgIQAEgIAAgQIAAguIAlAAIAABpIgcAAIgEgNIgCAAQgGAIgJADQgHAEgKAAQgJAAgKgEg");
	this.shape_27.setTransform(47.1,73.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#18335D").s().p("AgaAxQgMgHgHgMQgHgNAAgRQAAgaAOgOQAOgOAZAAQAPAAAMAGQALAGAIANQAGALAAASQAAAbgOAOQgOAOgZAAQgNAAgNgGgAgLgUQgDAHgBANQABAOADAGQAEAIAIAAQAIAAADgIQAEgIAAgMQAAgMgEgIQgDgHgJAAQgHAAgEAHg");
	this.shape_28.setTransform(34.5,73.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#18335D").s().p("AgSBFIAAg1IgthUIAoAAIAXAzIAYgzIAoAAIgtBTIAAA2g");
	this.shape_29.setTransform(22.975,71.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143.4,126.5);


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

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(70,0,131.3,186.6), null);


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

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(70,0,143.4,126.5), null);


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
	this.instance.setTransform(39,8.35,1,1,0,0,0,39,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-43.2,-8.4,86.5,16.8), null);


// stage content:
(lib.Traffic_DV360Display_ENG_160x600 = function(mode,startPosition,loop,reversed) {
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
		{src:"images/Traffic_DV360_Display_ENG_160x600_atlas_P_1.png", id:"Traffic_DV360_Display_ENG_160x600_atlas_P_1"},
		{src:"images/Traffic_DV360_Display_ENG_160x600_atlas_NP_1.jpg", id:"Traffic_DV360_Display_ENG_160x600_atlas_NP_1"}
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
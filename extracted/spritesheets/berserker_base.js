(function(window) {
sprite_5010_(Berserker) = function() {
	this.initialize();
}
sprite_5010_(Berserker)._SpriteSheet = new SpriteSheet({images: ["berserker_base.png"], frames: [[0,730,77,89,0,31,63],[167,428,71,74,0,27,64],[284,661,62,79,0,19,56],[228,502,59,84,0,20,52],[445,0,66,86,0,19,52],[445,168,63,85,0,11,46],[370,324,63,80,0,-2,42],[297,173,74,74,0,-6,42],[149,515,79,77,0,-6,43],[167,428,71,74,0,-17,36],[167,428,71,74,0,-17,36],[77,682,81,77,0,38,59],[251,91,72,79,0,37,61],[298,569,63,73,0,24,59],[0,93,102,81,0,18,63],[0,348,85,88,0,36,70],[158,665,69,87,0,26,68],[227,665,57,87,0,21,66],[227,665,57,87,0,21,66],[102,93,72,81,0,27,63],[287,487,57,82,0,26,63],[287,487,57,82,0,26,63],[287,487,57,82,0,26,63],[287,487,57,82,0,26,63],[102,93,72,81,0,27,63],[102,93,72,81,0,27,63],[88,174,75,88,0,44,63],[158,262,63,85,0,30,61],[444,253,63,81,0,42,56],[371,173,74,73,0,57,56],[85,436,82,79,0,66,57],[394,93,75,75,0,69,50],[379,815,60,78,0,63,42],[429,404,59,83,0,60,38],[163,174,65,85,0,68,38],[158,262,63,85,0,74,33],[158,262,63,85,0,74,33],[165,347,66,81,0,49,66],[0,436,85,83,0,69,71],[106,0,95,84,0,73,66],[0,262,88,86,0,45,47],[305,820,74,65,0,27,47],[356,404,73,68,0,27,50],[70,603,79,79,0,39,61],[70,603,79,79,0,39,61],[85,759,73,82,0,45,63],[284,740,61,80,0,32,62],[284,740,61,80,0,32,62],[284,740,61,80,0,32,62],[284,740,61,80,0,32,62],[85,759,73,82,0,45,63],[85,759,73,82,0,45,63],[228,170,69,80,0,42,68],[433,334,73,69,0,45,59],[346,642,60,71,0,40,62],[423,563,59,75,0,39,67],[378,246,66,78,0,47,72],[361,564,62,73,0,52,73],[409,709,62,67,0,63,77],[228,250,76,69,0,81,80],[149,592,83,73,0,89,86],[232,825,73,69,0,89,87],[232,825,73,69,0,89,87],[174,84,77,75,0,42,68],[0,519,70,100,0,34,94],[0,619,63,111,0,39,100],[0,0,106,93,0,87,66],[85,355,80,81,0,45,61],[88,262,70,93,0,43,67],[238,388,54,93,0,33,70],[238,388,54,93,0,33,70],[85,841,71,78,0,44,66],[344,487,59,77,0,33,65],[344,487,59,77,0,33,65],[344,487,59,77,0,33,65],[344,487,59,77,0,33,65],[85,841,71,78,0,44,66],[85,841,71,78,0,44,66],[323,93,71,80,0,28,68],[345,740,64,75,0,33,60],[439,776,62,67,0,20,63],[304,247,74,70,0,16,67],[158,752,82,73,0,16,71],[231,319,74,69,0,5,74],[406,638,60,71,0,-3,76],[403,487,59,76,0,-2,81],[305,317,65,78,0,-3,86],[345,740,64,75,0,-11,88],[345,740,64,75,0,-11,88],[232,586,66,75,0,17,65],[0,819,85,80,0,16,70],[201,0,94,81,0,21,75],[0,174,88,88,0,43,76],[371,0,74,93,0,46,81],[295,0,76,91,0,47,78],[70,519,79,84,0,40,72],[70,519,79,84,0,40,72],[158,825,74,79,0,28,67],[292,395,64,78,0,29,66],[292,395,64,78,0,29,66],[292,395,64,78,0,29,66],[292,395,64,78,0,29,66],[158,825,74,79,0,28,67],[158,825,74,79,0,28,67]]});
var sprite_5010_(Berserker)_p = sprite_5010_(Berserker).prototype = new BitmapAnimation();
sprite_5010_(Berserker)_p.BitmapAnimation_initialize = sprite_5010_(Berserker)_p.initialize;
sprite_5010_(Berserker)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_5010_(Berserker)._SpriteSheet);
	this.paused = false;
}
window.sprite_5010_(Berserker) = sprite_5010_(Berserker);
}(window));

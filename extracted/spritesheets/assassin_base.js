(function(window) {
sprite_2260_(Assassin) = function() {
	this.initialize();
}
sprite_2260_(Assassin)._SpriteSheet = new SpriteSheet({images: ["assasin_base.png"], frames: [[582,507,40,75,0,25,64],[582,507,40,75,0,25,64],[698,636,45,59,0,30,57],[848,781,35,63,0,28,61],[514,840,45,69,0,38,67],[760,841,31,61,0,35,68],[779,632,44,62,0,49,71],[783,557,40,75,0,47,78],[760,841,31,61,0,35,68],[514,840,45,69,0,38,67],[848,781,35,63,0,28,61],[698,636,45,59,0,30,57],[783,492,50,65,0,24,54],[934,345,51,72,0,16,53],[566,700,50,66,0,12,47],[397,853,44,62,0,5,43],[760,841,31,61,0,-9,40],[514,840,45,69,0,-6,39],[813,773,35,64,0,-16,33],[698,695,45,59,0,-14,29],[698,695,45,59,0,-14,29],[659,753,37,72,0,18,61],[434,345,65,70,0,27,59],[689,825,36,74,0,10,63],[439,295,97,50,0,50,53],[386,673,74,59,0,33,66],[788,275,80,61,0,45,61],[868,266,70,67,0,43,55],[220,792,82,80,0,36,69],[471,415,62,69,0,32,58],[533,361,53,73,0,27,62],[533,361,53,73,0,27,62],[439,218,70,77,0,35,66],[509,218,70,77,0,35,66],[301,602,84,84,0,42,73],[240,412,94,94,0,47,78],[670,0,100,100,0,50,81],[0,814,100,100,0,50,81],[690,423,47,72,0,18,59],[469,556,55,74,0,22,63],[278,311,80,85,0,32,73],[144,412,96,96,0,48,89],[422,0,124,124,0,62,103],[144,144,134,134,0,67,108],[0,0,144,144,0,72,113],[779,694,35,74,0,22,63],[779,694,35,74,0,22,63],[571,766,44,75,0,16,64],[823,557,41,73,0,12,62],[823,557,41,73,0,12,62],[823,557,41,73,0,12,62],[637,349,50,74,0,12,63],[571,766,44,75,0,16,64],[571,766,44,75,0,16,64],[659,753,37,72,0,18,61],[942,559,40,73,0,19,64],[441,853,44,62,0,17,57],[833,421,50,66,0,16,61],[586,361,51,73,0,13,67],[833,487,50,65,0,4,68],[696,754,45,59,0,-7,71],[942,559,40,73,0,-3,78],[833,487,50,65,0,4,68],[586,361,51,73,0,13,67],[833,421,50,66,0,16,61],[441,853,44,62,0,17,57],[791,838,31,61,0,18,54],[559,841,45,69,0,29,53],[725,841,35,63,0,29,47],[616,693,45,60,0,37,43],[833,487,50,65,0,48,40],[586,361,51,73,0,57,39],[640,492,50,66,0,60,33],[614,631,44,62,0,61,29],[614,631,44,62,0,61,29],[514,772,57,68,0,31,59],[741,780,39,61,0,15,52],[408,484,78,57,0,34,54],[499,345,34,70,0,18,75],[386,796,75,57,0,42,66],[938,273,65,72,0,37,70],[334,396,72,77,0,31,74],[610,124,57,75,0,25,67],[690,495,49,67,0,32,58],[814,703,37,70,0,18,61],[814,703,37,70,0,18,61],[719,200,70,75,0,35,66],[789,200,70,75,0,35,66],[302,686,84,84,0,42,73],[422,124,94,94,0,47,78],[770,0,100,100,0,50,81],[870,0,100,100,0,50,81],[737,420,49,69,0,31,59],[486,484,57,72,0,35,63],[278,228,82,83,0,50,73],[134,508,96,96,0,48,89],[0,566,124,124,0,62,103],[288,0,134,134,0,67,108],[0,144,144,144,0,72,113],[662,562,39,73,0,15,64],[662,562,39,73,0,15,64],[823,630,38,73,0,25,63],[885,708,35,69,0,22,60],[885,708,35,69,0,22,60],[885,708,35,69,0,22,60],[975,632,39,70,0,26,61],[823,630,38,73,0,25,63],[823,630,38,73,0,25,63],[514,772,57,68,0,31,59],[903,559,39,75,0,16,65],[883,417,44,71,0,14,62],[743,636,36,72,0,6,59],[524,626,45,74,0,6,56],[988,702,33,70,0,-5,52],[604,841,44,70,0,-4,48],[864,559,39,76,0,-6,51],[988,702,33,70,0,-5,52],[524,626,45,74,0,6,56],[743,636,36,72,0,6,59],[883,417,44,71,0,14,62],[687,349,50,74,0,27,67],[460,700,51,78,0,36,71],[787,346,49,75,0,39,73],[883,488,44,71,0,40,76],[988,702,33,70,0,39,80],[524,626,45,74,0,50,84],[743,708,36,72,0,50,87],[927,417,44,71,0,58,90],[927,417,44,71,0,58,90],[982,559,40,73,0,20,63],[406,415,65,69,0,37,59],[988,772,36,63,0,27,60],[302,854,95,56,0,47,62],[385,613,73,60,0,41,72],[859,200,79,66,0,36,67],[719,275,69,71,0,27,65],[324,506,84,67,0,48,60],[408,541,61,72,0,30,62],[461,778,53,75,0,27,64],[461,778,53,75,0,27,64],[579,218,70,76,0,35,66],[649,200,70,76,0,35,66],[302,770,84,84,0,42,73],[516,124,94,94,0,47,78],[670,100,100,100,0,50,81],[770,100,100,100,0,50,81],[543,434,49,72,0,31,59],[511,700,55,72,0,33,63],[220,699,82,93,0,50,87],[124,604,96,96,0,48,89],[546,0,124,124,0,62,103],[0,432,134,134,0,67,108],[144,0,144,144,0,72,113],[851,708,34,73,0,13,63],[851,708,34,73,0,13,63],[739,489,44,74,0,29,64],[648,838,41,74,0,30,64],[648,838,41,74,0,30,64],[648,838,41,74,0,30,64],[592,434,48,73,0,38,63],[739,489,44,74,0,29,64],[739,489,44,74,0,29,64],[982,559,40,73,0,20,63],[701,563,39,73,0,21,66],[927,488,44,71,0,26,62],[836,336,49,75,0,32,59],[970,78,51,79,0,37,57],[737,346,50,74,0,45,53],[615,766,44,72,0,52,48],[622,558,40,73,0,43,52],[737,346,50,74,0,45,53],[970,78,51,79,0,37,57],[836,336,49,75,0,32,59],[927,488,44,71,0,26,62],[780,768,33,70,0,16,66],[569,626,45,74,0,17,70],[661,635,37,72,0,8,73],[971,417,44,71,0,8,76],[737,346,50,74,0,1,81],[970,0,52,78,0,-7,85],[885,333,49,75,0,-12,87],[971,488,44,71,0,-18,90],[971,488,44,71,0,-18,90],[362,134,56,74,0,26,66],[740,563,39,73,0,25,65],[360,228,79,69,0,45,63],[920,708,34,71,0,17,76],[360,297,74,64,0,33,72],[386,732,67,64,0,28,67],[536,295,73,66,0,43,59],[524,556,58,70,0,34,64],[640,423,50,69,0,19,62],[937,634,38,72,0,21,65],[937,634,38,72,0,21,65],[938,200,70,73,0,35,66],[649,276,70,73,0,35,66],[278,144,84,84,0,42,73],[230,508,94,94,0,47,78],[870,100,100,100,0,50,81],[100,814,100,100,0,50,81],[786,421,47,71,0,18,59],[460,630,57,70,0,22,63],[220,604,81,95,0,32,89],[124,700,96,96,0,48,89],[0,690,124,124,0,62,103],[144,278,134,134,0,67,108],[0,288,144,144,0,72,113],[985,345,39,72,0,25,63],[985,345,39,72,0,25,63],[861,635,38,73,0,14,65],[954,706,34,71,0,14,64],[954,706,34,71,0,14,64],[954,706,34,71,0,14,64],[899,635,38,73,0,14,66],[861,635,38,73,0,14,65],[861,635,38,73,0,14,65],[362,134,56,74,0,26,66]]});
var sprite_2260_(Assassin)_p = sprite_2260_(Assassin).prototype = new BitmapAnimation();
sprite_2260_(Assassin)_p.BitmapAnimation_initialize = sprite_2260_(Assassin)_p.initialize;
sprite_2260_(Assassin)_p.initialize = function() {
	this.BitmapAnimation_initialize(sprite_2260_(Assassin)._SpriteSheet);
	this.paused = false;
}
window.sprite_2260_(Assassin) = sprite_2260_(Assassin);
}(window));

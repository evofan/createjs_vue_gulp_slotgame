var comp = AdobeAn.getComposition("99A42755F528A84A849CDFE1956DCDBB");
var lib = lib || {};
lib = comp.getLibrary();

var slotGame, sg;

/**
 * init（stageview）
 */
var initGame = function () {
  sg = new SlotGame(stage);
  sg.setView();
  sg.initView();

  // mainloop
  createjs.Ticker.addEventListener("tick", sg.EnterFrame);
};

/**
 * @class SlotGame
 * @param { object } stage
 */
var SlotGame = function (stage) {
  this.stage = stage;
  SlotGame.slotgame = this;
};

/**
 * set reel
 */
SlotGame.prototype.initView = () => {
  sg.trace("initView()");
  for (var i = sg.reel_cols_min; i < sg.reel_cols_num; i++) {
    for (var j = 0; j < sg.reel_rows_num; j++) {
      var rn = sg.stage.getChildByName("reelName" + i);
      rn.gotoAndStop(0);
      rn["reel_" + j].gotoAndStop(j);
    }
  }
};

/**
 * spin reel
 * @param { number } reelNum
 */
SlotGame.prototype.spinReel = (reelNum) => {

  // spin-speed adjust
  if (!sg.game_start_flg) {
    if (sg.speed_current > sg.speed_min) {
      sg.speed_current -= sg.speed_step;
      sg.speed_min_flg = false;
    } else {
      sg.speed_current = sg.speed_min;
      sg.speed_min_flg = true;
    }
  } else {
    if (sg.speed_current < sg.speed_max) {
      sg.speed_current += sg.speed_step;
    } else {
      sg.speed_current = sg.speed_max;
    }
  }

  var rn = sg.stage.getChildByName("reelName" + reelNum);
  rn.y += sg.speed_current;

  // determaine reel stop
  if (
    sg.game_start_flg === false &&
    sg.speed_min_flg &&
    rn[sg.reel_center].currentFrame === sg.pic_stop[reelNum] &&
    sg.checkReelLeft(reelNum)
  ) {
    sg.reel_wheel_flg[reelNum] = false;
    sg.reel_stop_flg[reelNum] = true;
    return;
  }

  // move picture
  if (rn.y >= sg.reel_end_y) {
    rn.y = sg.reel_start_y;
    var current_frame;
    var next_frame;
    for (var i = sg.reel_cols_min; i < sg.reel_cols_num; i++) {
      current_frame = rn["reel_" + i].currentFrame;
      if (current_frame === sg.pic_all - 1) {
        next_frame = 0;
        sg.pic_current = 0;
      } else {
        next_frame = current_frame + 1;
        sg.pic_current++;
      }
      rn["reel_" + i].gotoAndStop(next_frame);
    }
  }
};

/**
 * determine left reel stoped
 * @param { number } reelNum
 * @returns { boolean }
 */
SlotGame.prototype.checkReelLeft = (reelNum) => {
  if (sg.reel_wheel_flg[reelNum - 1]) {
    return false;
  }
  return true;
};

/**
 * start game
 */
SlotGame.prototype.startGame = () => {
  sg.trace("startGame()");

  sg.btn_count++;
  if (sg.btn_count > 2) {
    sg.trace("wait reel stop");
    return;
  }

  if (sg.game_start_flg) {
    sg.trace("stop reel spin");
    sg.game_start_flg = false;
  } else {
    sg.trace("start reel spin");
    sg.game_start_flg = true;
    sg.speed_current = sg.speed_default;
    sg.bingoTitle.alpha = 0;
    sg.bingoAnim.gotoAndStop(0);
    sg.bingo_flg = false;
    sg.score -= sg.score_bet;
    sg.setScore(sg.score, sg.tf);
    sg.initResult();
  }

  // set reel start/stop flag
  for (var i = sg.reel_cols_min; i < sg.reel_cols_num; i++) {
    sg.reel_wheel_flg[i] = true;
    sg.reel_stop_flg[i] = false;
  }
};

/**
 * set game result
 */
SlotGame.prototype.initResult = () => {
  sg.trace("initResult()");

  var result = Math.floor(Math.random() * sg.odds) + 1;

  if (result === 1) {
    sg.trace("HIT!");
    sg.bingo_flg = true;
    var bing_pic = Math.floor(Math.random() * sg.pic_all);
    for (var i = 0; i < sg.pic_all; i++) {
      sg.pic_stop[i] = bing_pic;
    }
    sg.result_flg = true;
    if (sg.auto_flg) {
      sg.sleep(sg.sleep_time_stop, () => {
        sg.startGame();
      });
    }
  } else {
    sg.trace("OFF!");
    sg.setStopPicMiss();
  }
};

/**
 * set OFF picture
 */
SlotGame.prototype.setStopPicMiss = () => {
  sg.trace("setStopPicMiss()");

  for (var i = 0; i < sg.pic_all; i++) {
    sg.pic_stop[i] = Math.floor(Math.random() * sg.pic_all);
  }

  var count = 1;
  for (var i = 0; i < sg.pic_all; i++) {
    if (sg.pic_stop[i] === sg.pic_stop[i + 1]) {
      sg.trace(i + " and, " + [i + 1] + " picture is same");
      count++;
      if (count === sg.reel_cols_num) {
        sg.trace("OFF, but all picture is same, re-set");
        sg.setStopPicMiss();
      }
    } else {
      sg.result_flg = true;
      if (sg.auto_flg) {
        sg.sleep(sg.sleep_time_stop, () => {
          sg.startGame();
        });
      }
      break;
    }
  }
};

/**
 * stop reel
 * @param { number } reelNum
 */
SlotGame.prototype.stopReel = (reelNum) => {
  sg.trace("stopReel(): " + reelNum);

  sg.reel_stop_flg[reelNum] = false;

  var rn = sg.stage.getChildByName("reelName" + reelNum);
  rn.y = sg.reel_start_y;

  sg.reel_stop_count++;
  if (sg.reel_stop_count === sg.reel_cols_num) {
    sg.endGame();
  }
};

/**
 * end 1 game
 */
SlotGame.prototype.endGame = () => {
  sg.trace("endGame()");

  sg.btn_count = 0;
  sg.reel_stop_count = 0;
  sg.result_flg = false;

  if (sg.bingo_flg) {
    sg.trace("HIT Directing");
    sg.score += sg.score_bingo * sg.score_bet;
    sg.bingoTitle.alpha = 1;
    sg.bingoAnim.gotoAndPlay("start");
  } else {
    sg.trace("OFF Directing");
    if (sg.score <= 0) {
      sg.score = 0;
      sg.finishGame();
    }
  }
  sg.setScore(sg.score, sg.tf);
  if (sg.score > 0 && sg.auto_flg) {
    sg.sleep(sg.sleep_time_restart, () => {
      sg.startGame();
    });
  }
};

/**
 * wait a few seconds
 * @param { number } sec
 * @param { function } callback
 */
SlotGame.prototype.sleep = (sec, callback) => {
  var count = 0;
  var wait = () => {
    count++;
    if (count >= sec) {
      if (callback) callback();
      return;
    }
    clearTimeout(id);
    id = setTimeout(wait, 1000);
  };
  var id = setTimeout(wait, 1000);
};

/**
 * end all game
 */
SlotGame.prototype.finishGame = () => {
  sg.trace("finishGame()");

  sg.startPic.gotoAndPlay("off");
  sg.startButton.removeEventListener("click", sg.clickStart);
  sg.startButton.removeEventListener("mouseover", sg.overStart);
  sg.startButton.removeEventListener("mouseout", sg.outStartBtn);
  sg.startButton.visible = false;

  sg.autoPic.gotoAndPlay("off");
  sg.autoButton.removeEventListener("click", sg.clickAutoBtn);
  sg.autoButton.visible = false;

  if (sg.is_global_flg) {
    sg.soundPic.gotoAndPlay("off");
    sg.soundButton.removeEventListener("click", sg.clickSoundBtn);
    sg.soundButton.visible = false;
  }
};

/*
 * mainloop
 */
SlotGame.prototype.EnterFrame = () => {
  // reel start/stop
  for (var i = sg.reel_cols_min; i < sg.reel_cols_num; i++) {
    if (sg.reel_wheel_flg[i] && sg.result_flg) {
      sg.spinReel(i);
    }
    if (sg.reel_stop_flg[i]) {
      sg.stopReel(i);
    }
  }
};

/**
 * set score
 * @param { number } score
 * @param { object } tf
 */
SlotGame.prototype.setScore = (score, tf) => {
  tf.text = "Total Win：" + score;
  stage.addChild(tf);
};

/**
 * set reel
 * @param { movieClip } mc
 * @param { number } num
 * @returns { movieClip }
 */
SlotGame.prototype.setReel = (mc, num) => {
  mc.x =
    num * (sg.reel_width + sg.reel_offset) + sg.reel_offset + sg.center_offset;
  mc.y = sg.reel_start_y;
  mc.name = "reelName" + num;
  stage.addChild(mc);
  return mc;
};

/**
 * play sound
 * @param { object } sound
 */
SlotGame.prototype.playSound = () => {
  if (sg.sound_flg) {
    createjs.Sound.registerSound("./sounds/sound_push.mp3", "push");
    createjs.Sound.play("push");
  }
};

/**
 * console.log()
 * @param { object } o
 */
SlotGame.prototype.trace = (o) => {
  sg.clog_flg ? console.log(o) : null;
};

/**
 * set stageview
 */
SlotGame.prototype.setView = () => {
  sg.trace("setView");

  // bg
  var reel_bg = new lib.mc_bg();
  reel_bg.x = reel_bg.y = 0;
  stage.addChild(reel_bg);

  // rell bg
  sg.reel_container = new lib.mc_square_black();
  sg.reel_container.x = 87;
  sg.reel_container.y = -10;
  sg.reel_container.scaleX = 58;
  sg.reel_container.scaleY = 44;
  stage.addChild(sg.reel_container);

  // reel body
  for (var i = sg.reel_cols_min; i < sg.reel_cols_num; i++) {
    sg.mc_reel[i] = sg.setReel(new lib.mc_reel_all(), i);
  }

  // panel black upper
  var topPanel = new lib.mc_square_black();
  topPanel.x = 98;
  topPanel.y = -10;
  topPanel.scaleX = 56;
  topPanel.scaleY = 10;
  topPanel.alpha = 1;
  stage.addChild(topPanel);

  // logo
  var gamelogo = new lib.mc_logo();
  gamelogo.x = 263;
  gamelogo.y = 20;
  gamelogo.scaleX = gamelogo.scaleY = 0.5;
  gamelogo.alpha = 1;
  stage.addChild(gamelogo);

  // fade black upper
  var topFade = new lib.mc_fade();
  topFade.x = 100;
  topFade.y = 100;
  topFade.scaleX = 28;
  topFade.scaleY = -1;
  topFade.alpha = 1;
  stage.addChild(topFade);

  // panel black bottom
  var bottomPanel = new lib.mc_square_black();
  bottomPanel.x = 98;
  bottomPanel.y = 330;
  bottomPanel.scaleX = 56;
  bottomPanel.scaleY = 9;
  bottomPanel.alpha = 1;
  stage.addChild(bottomPanel);

  // fade black bottom
  var bottomFade = new lib.mc_fade();
  bottomFade.x = 100;
  bottomFade.y = 320;
  bottomFade.scaleX = 28;
  bottomFade.scaleY = 1;
  bottomFade.alpha = 1;
  stage.addChild(bottomFade);

  // panel gray 1
  var bottomPanelGray = new lib.mc_square_gray();
  bottomPanelGray.x = 108;
  bottomPanelGray.y = 340;
  bottomPanelGray.scaleX = 54;
  bottomPanelGray.scaleY = 7;
  bottomPanelGray.alpha = 0.5;
  stage.addChild(bottomPanelGray);

  // panel gray 2
  var bottomPanelLightGray = new lib.mc_square_gray();
  bottomPanelLightGray.x = 118;
  bottomPanelLightGray.y = 350;
  bottomPanelLightGray.scaleX = 52;
  bottomPanelLightGray.scaleY = 5;
  bottomPanelLightGray.alpha = 0.5;
  stage.addChild(bottomPanelLightGray);

  // triangle left
  var triangleLeft = new lib.mc_triangle();
  triangleLeft.x = 107;
  triangleLeft.y = 202;
  triangleLeft.scaleX = 0.1;
  triangleLeft.scaleY = 0.1;
  triangleLeft.rotation = 90;
  triangleLeft.alpha = 1;
  stage.addChild(triangleLeft);

  // triangle right
  var triangleRight = new lib.mc_triangle();
  triangleRight.x = 653;
  triangleRight.y = 212;
  triangleRight.scaleX = 0.1;
  triangleRight.scaleY = 0.1;
  triangleRight.rotation = 270;
  triangleRight.alpha = 1;
  stage.addChild(triangleRight);

  // word "BINGO"
  sg.bingoTitle = new lib.mc_bingo();
  sg.bingoTitle.x = 109;
  sg.bingoTitle.y = 167;
  sg.bingoTitle.scaleX = 1;
  sg.bingoTitle.scaleY = 1;
  sg.bingoTitle.alpha = 0;
  stage.addChild(sg.bingoTitle);

  // confetti animation
  sg.bingoAnim = new lib.mc_paper();
  sg.bingoAnim.x = 70;
  sg.bingoAnim.y = 90;
  sg.bingoAnim.scaleX = sg.bingoAnim.scaleY = 1.25;
  sg.bingoAnim.alpha = 1;
  sg.bingoAnim.gotoAndStop(0);
  stage.addChild(sg.bingoAnim);

  // button all
  stage.enableMouseOver();

  // start stop button
  sg.startPic = new lib.mc_bt_start();
  sg.startPic.x = 560;
  sg.startPic.y = 345;
  stage.addChild(sg.startPic);

  // start stop button(hitarea)
  sg.startButton = new lib.mc_hit_area();
  sg.startButton.cursor = "pointer";
  sg.startButton.x = 558;
  sg.startButton.y = 345;
  sg.startButton.scaleX = 0.46;
  sg.startButton.scaleY = 1.25;
  sg.startButton.alpha = 0.01;
  stage.addChild(sg.startButton);
  sg.startButton.addEventListener("click", sg.clickStartBtn);
  sg.startButton.addEventListener("mouseover", sg.overStartBtn);
  sg.startButton.addEventListener("mouseout", sg.outStartBtn);

  // auto button
  sg.autoPic = new lib.mc_bt_auto();
  sg.autoPic.x = 470;
  sg.autoPic.y = 362;
  sg.autoPic.gotoAndPlay("off");
  stage.addChild(sg.autoPic);

  // auto button(hitarea)
  sg.autoButton = new lib.mc_hit_area();
  sg.autoButton.cursor = "pointer";
  sg.autoButton.x = 470;
  sg.autoButton.y = 362;
  sg.autoButton.scaleX = 0.5;
  sg.autoButton.scaleY = 0.5;
  sg.autoButton.alpha = 0.01;
  sg.autoButton.addEventListener("click", sg.clickAutoBtn);
  stage.addChild(sg.autoButton);

  if (sg.is_global_flg) {
    // soundbutton
    sg.soundPic = new lib.mc_bt_sound();
    sg.soundPic.x = 435;
    sg.soundPic.y = 365;
    sg.soundPic.gotoAndPlay("off");
    stage.addChild(sg.soundPic);

    // soundbutton(hitarea)
    sg.soundButton = new lib.mc_hit_area();
    sg.soundButton.cursor = "pointer";
    sg.soundButton.x = 431;
    sg.soundButton.y = 361;
    sg.soundButton.scaleX = 0.175;
    sg.soundButton.scaleY = 0.5;
    sg.soundButton.alpha = 0.01;
    sg.soundButton.addEventListener("click", sg.clickSoundBtn);
    stage.addChild(sg.soundButton);
  }

  // score view textfield
  sg.tf = new createjs.Text("Total Win：", "24px sans-serif", "White");
  sg.tf.x = 130;
  sg.tf.y = 358;
  sg.score = sg.score_start;
  sg.setScore(sg.score, sg.tf);
};

/**
 * start button click
 * @param { object } e MouseEvnt
 */
SlotGame.prototype.clickStartBtn = (e) => {
  sg.startGame();
  sg.startPic.gotoAndPlay("on");
  sg.playSound();
};

/**
 * start button mouseover
 * @param { object } e MouseEvnt
 */
SlotGame.prototype.overStartBtn = (e) => {
  sg.startPic.gotoAndPlay("over");
};

/**
 * start button mouseout
 * @param { object } e MouseEvnt
 */
SlotGame.prototype.outStartBtn = (e) => {
  sg.startPic.gotoAndPlay("normal");
};

/**
 * auto button click
 * @param { object } e MouseEvnt
 */
SlotGame.prototype.clickAutoBtn = (e) => {
  if (sg.auto_flg) {
    sg.auto_flg = false;
    sg.autoPic.gotoAndPlay("off");
  } else {
    sg.auto_flg = true;
    sg.autoPic.gotoAndPlay("on");
  }
};

/**
 * sound button click
 * @param { object } e MouseEvnt
 */
SlotGame.prototype.clickSoundBtn = (e) => {
  if (sg.sound_flg) {
    sg.sound_flg = false;
    sg.soundPic.gotoAndPlay("off");
  } else {
    sg.sound_flg = true;
    sg.soundPic.gotoAndPlay("on");
  }
};

SlotGame.prototype.reel_offset = 10;
SlotGame.prototype.reel_width = 100;
SlotGame.prototype.center_offset = 100;

SlotGame.prototype.game_start_flg = false;

SlotGame.prototype.btn_count = 0;
SlotGame.prototype.reel_stop_count = 0;

SlotGame.prototype.reel_cols_num = 5;
SlotGame.prototype.reel_cols_min = 0;
SlotGame.prototype.reel_rows_num = 5;

SlotGame.prototype.reel_wheel_flg = [];
SlotGame.prototype.reel_stop_flg = [];

SlotGame.prototype.reel_start_y = 0;
SlotGame.prototype.reel_end_y = 83;

SlotGame.prototype.speed_max = 40;
SlotGame.prototype.speed_min = 20;
SlotGame.prototype.speed_step = 9;
SlotGame.prototype.speed_default = 30;
SlotGame.prototype.speed_current = null;

SlotGame.prototype.speed_min_flg = false;

SlotGame.prototype.pic_current = 0;
SlotGame.prototype.pic_stop = [];
SlotGame.prototype.pic_all = 10;

SlotGame.prototype.score = null;
SlotGame.prototype.score_start = 1000;
SlotGame.prototype.score_bingo = 100;
SlotGame.prototype.score_bet = 10;
SlotGame.prototype.score_text_field = null;

SlotGame.prototype.bingo_flg = false;

SlotGame.prototype.odds = 5;
SlotGame.prototype.result_flg = false;

SlotGame.prototype.reel_container = null;
SlotGame.prototype.mc_reel = [];
SlotGame.prototype.reel_center = "reel_2";

SlotGame.prototype.auto_flg = false;
SlotGame.prototype.sleep_time_stop = 1;
SlotGame.prototype.sleep_time_restart = 2;

SlotGame.prototype.sound_flg = false;

SlotGame.prototype.clog_flg = false;
SlotGame.prototype.is_global_flg = true;

// view
SlotGame.prototype.bingoTitle = null;
SlotGame.prototype.bingoAnim = null;

SlotGame.prototype.startButton = null;
SlotGame.prototype.startButtonDummy = null;

SlotGame.prototype.autoButton = null;
SlotGame.prototype.soundButton = null;

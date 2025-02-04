$('#top-header').hide();
//スクロールが50に達したら表示
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('#top-header').fadeIn();
    } else {
        $('#top-header').fadeOut();
    }
});


$(function() {
    $('#sitemap-min').hover(
    function(){
      $(this).animate({'marginLeft':'200px'},500);
    },
    function () {
      $(this).animate({'marginLeft':'0'},500);
    }
  );
});


//スクロールした際の動きを関数でまとめる(top)
function TopPageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) { //上から200pxスクロールしたら
        $('#top-page-top').removeClass('DownMove'); //#top-page-topについているDownMoveというクラス名を除く
        $('#top-page-top').addClass('UpMove'); //#top-page-topについているUpMoveというクラス名を付与
    } else {
        if ($('#top-page-top').hasClass('UpMove')) { //すでに#top-page-topにUpMoveというクラス名がついていたら
            $('#top-page-top').removeClass('UpMove'); //UpMoveというクラス名を除き
            $('#top-page-top').addClass('DownMove'); //DownMoveというクラス名を#top-page-topに付与
        }
    }
}

//スクロールした際の動きを関数でまとめる(top以外)
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) { //上から100pxスクロールしたら
        $('#page-top').removeClass('DownMove'); //#page-topについているDownMoveというクラス名を除く
        $('#page-top').addClass('UpMove'); //#page-topについているUpMoveというクラス名を付与
    } else {
        if ($('#page-top').hasClass('UpMove')) { //すでに#page-topにUpMoveというクラス名がついていたら
            $('#page-top').removeClass('UpMove'); //UpMoveというクラス名を除き
            $('#page-top').addClass('DownMove'); //DownMoveというクラス名を#page-topに付与
        }
    }
}


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    TopPageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    TopPageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// #top-page-topをクリックした際の設定
$('#top-page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0 //ページトップまでスクロール
    }, 500); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0 //ページトップまでスクロール
    }, 500); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
});


//波
$(document).ready(function () {
    $('#main_visual').ripples({ //波紋をつける要素を指定
        resolution: 400, //波紋が広がる速さ
        dropRadius: 30, //波紋の大きさ
        perturbance: 0.02 //波紋の揺れの量
    });
});

$(document).ready(function () {
    $('#wrapper').ripples({ //波紋をつける要素を指定
        resolution: 600, //波紋が広がる速さ
        dropRadius: 35, //波紋の大きさ
        perturbance: 0.02 //波紋の揺れの量
    });
});

$(document).ready(function () {
    $('#voice-wrapper').ripples({ //波紋をつける要素を指定
        resolution: 1200, //波紋が広がる速さ
        dropRadius: 35, //波紋の大きさ
        perturbance: 0.01 //波紋の揺れの量
    });
});

$(document).ready(function () {
    $('#glossary-wrapper').ripples({ //波紋をつける要素を指定
        resolution: 1500, //波紋が広がる速さ
        dropRadius: 30, //波紋の大きさ
        perturbance: 0.01 //波紋の揺れの量
    });
});


$(function () {
    $('.btn-trigger').on('click', function () {
        $(this).toggleClass('active');
        return false;
    });
});


$(".btn-trigger").click(function () { //ボタンがクリックされたら
    $("#global_navi").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
    $(".cp_ipselect").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive'); //丸背景にcircleactiveクラスを付与
});

$("#global_navi a").click(function () { //ナビゲーションのリンクがクリックされたら
    $("#global_navi").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを除去
    $(".gnavi").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを除去
    $(".cp_ipselect").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive'); //丸背景のcircleactiveクラスを除去
});


// .s_04 .accordion_one
$(function () {
    //.accordion_oneの中の.accordion_headerがクリックされたら
    $('.s_04 .accordion_one .accordion_header').click(function () {
        //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
        $(this).next('.accordion_inner').slideToggle();
        $(this).toggleClass("open");
        //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
        $('.s_04 .accordion_one .accordion_header').not($(this)).next('.accordion_one .accordion_inner').slideUp();
        $('.s_04 .accordion_one .accordion_header').not($(this)).removeClass("open");
        $('.s_04 .accordion_one').not($(this)).toggleClass("open");
    });
});

$(function () {
    //.accordion_one_yes-noの中の.accordion_header_yes-noがクリックされたら
    $('.s_04 .accordion_one_yes-no .accordion_header_yes-no').click(function () {
        //クリックされた.accordion_one_yes-noの中の.accordion_header_yes-noに隣接する.accordion_inner_yes-noが開いたり閉じたりする。
        $(this).next('.accordion_inner_yes-no').slideToggle();
        $(this).toggleClass("open");
        //クリックされた.accordion_one_yes-noの中の.accordion_header_yes-no以外の.accordion_header_yes-noの中の.accordion_one_yes-noに隣接する.accordion_one_yes-noの中の.accordion_inner_yes-noを閉じる
        $('.s_04 .accordion_one_yes-no .accordion_header_yes-no').not($(this)).next('.accordion_one_yes-no .accordion_inner_yes-no').slideUp();
        $('.s_04 .accordion_one_yes-no .accordion_header_yes-no').not($(this)).removeClass("open");
        $('.s_04 .accordion_one_yes-no').not($(this)).toggleClass("open");
    });
});


var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
    document.body.appendChild(css);
};

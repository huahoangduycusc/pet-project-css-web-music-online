$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // drop down
    window.onclick = function (event) {
        openCloseDropdown(event);
    }

    // close all dropdown
    function closeAllDropdown() {
        var dropdowns = document.querySelectorAll('.dropdown-expand');
        dropdowns.forEach(drops => {
            drops.classList.remove('dropdown-expand');
        })
    }

    function openCloseDropdown(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            // close dropdown when click outside menu
            closeAllDropdown();
        }
        else {
            var toggle = event.target.dataset.toggle;
            console.log(toggle);
            var content = document.querySelector(`#${toggle}`);
            //console.log(content);
            if (content.classList.contains('dropdown-expand')) {
                closeAllDropdown();
            }
            else {
                closeAllDropdown();
                content.classList.add('dropdown-expand');
            }
        }
    }


    /// play music
    $('.btn-play').on('click', function (e) {
        e.preventDefault();
        var src = $(this).attr('data-src');
        sttBefore = $(this).attr('id');
        sttPlay = 0;
        $("#music_src").attr('src', src);
        $(".audioplayer").remove();
        var audio = document.createElement('AUDIO');
        audio.setAttribute('controls', true);
        audio.setAttribute('id', "audioMs");
        var source = document.createElement('source');
        source.setAttribute("id", "playMs");
        source.src = src;
        audio.appendChild(source)
        $('.player-control_center').append(audio);
        $(function () { $('audio').audioPlayer(); });
        console.log(sttBefore);
    });

    // like song
    $('.like-song').on('click', function (e) {
        e.preventDefault();
        if ($(this).find("i").hasClass("bx-heart")) {
            $(this).find("i").removeClass("bx-heart").addClass("bxs-heart red");
        }
        else {
            $(this).find("i").removeClass("bxs-heart red").addClass("bx-heart");
        }
    });

    // modal
    $(".modal-click").on('click', (e) => {
        e.preventDefault();
        $(".modal").toggleClass("open");
    });
    $(".modal-close").on('click', (e) => {
        e.preventDefault();
        $(".modal").removeClass("open");
    });
    $(".modal").on('click', (e) => {
        var div = e.target.classList;
        if (div.contains("modal")) {
            $(".modal").removeClass("open");
        }
    });


    // login

    var phanhoi = document.querySelector('.phanhoi-container');
    var closePhanhoi = document.querySelector('.close-phanhoi');
    $(".login-btn").on('click', function () {
        $(".phanhoi-container").toggleClass('actives-phanhoi');
    });
    if (phanhoi) {
        phanhoi.addEventListener('click', function (e) {
            var div = e.target;
            if (div.classList.contains('phanhoi-container')) {
                phanhoi.classList.remove('actives-phanhoi');
            }
        });
    }
    if (closePhanhoi) {
        closePhanhoi.addEventListener('click', function (e) {
            phanhoi.classList.remove('actives-phanhoi');
        });
    }


    // toogle music player
    $(".zm-tooltip").on('click', function () {
        $(this).toggleClass('zm-active');
    });

    // view lyric
    $(".group-button-list .zm-btn:nth-child(2)").on('click', function (e) {
        $(".modal").toggleClass("open");
    });

    // copy song url
    $(".zm-copy").on('click', function () {
        alert(window.location.hostname);
    });


    /// new post
    $(".btn-post").on('click', function (e) {
        e.preventDefault();
        var toggle = e.target.dataset.toggle;
        console.log(toggle);
        var content = document.querySelector(`#${toggle}`);
        content.classList.add("open");
    });

    $(".feeling-item").hover(function () {
        $(this).toggleClass('bx-tada');
    });

    $(".feeling-item").on('click', function () {
        $(".feeling-item").removeClass("active");
        $(this).addClass('active');
    });

    // setting

    $(".btn-setting").on('click', function (e) {
        e.preventDefault();
        var toggle = e.target.dataset.toggle;
        console.log(toggle);
        var content = document.querySelector(`#${toggle}`);
        content.classList.add("open");
    });

    ////// search song to post
    var idSearch;
    $('.btn-search-song').on('click', function (e) {
        e.preventDefault();
        $(".theme-choose-song").addClass('open');
    });
    $(".form-result-table tr").on('click', function (e) {
        var row = $(this).attr("id");
        var text = $(this).find(".title").text();
        $(".btn-search-song").find("span").html("Share this post along with " + text);
        $(".form-result-table tr").find(".form-check").removeClass("check");
        $(this).find(".form-check").toggleClass("check");
        console.log(row);
    });
    $(".form-choose-song-end .zm-btn-close").on('click', function (e) {
        $(".theme-choose-song").removeClass('open');
    });
    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav: true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 5
            },
            1600: {
                items: 6
            }
        }
    });

    $('.news-slide').owlCarousel({
        items: 2,
        dots: false,
        nav: true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 5
            }
        }
    })
});

var playlist = [
    {
        'id': 1,
        'audio': 'audio.mp3',
    },
    {
        'id': 2,
        'audio': 'music2.mp3',
    },
    {
        'id': 3,
        'audio': 'lemon.mp3',
    },
    {
        'id': 4,
        'audio': 'hotaru.mp3',
    }
];
var sttPlay = 0;
var sttBefore = 0;
console.log(playlist);

$(".playlist").on('click',function(e){
    e.preventDefault();
    $(this).toggleClass("active");
    $(".playlist-navbar").toggleClass("open");
});
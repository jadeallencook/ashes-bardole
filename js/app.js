// using tabletop to get gDoc
function tabletop(doc) {
    Tabletop.init({
        key: doc,
        callback: insertDoc,
        simpleSheet: false
    });
}

// after gDoc loads
function insertDoc(data, tabletop) {
    var sheet = data.Sheet1.elements;
    data = data.Sheet1.elements[0];
    // init build
    $('title').empty().append(data.name + ' - ' + data.tagline);
    $('#top-left-name').empty().append(data.name);
    $('.phone').empty().append(data.phone);
    $('.email').empty().append(data.email);
    // banner
    $('#home-banner-header').empty().append(data.homeBannerHeader);
    $('#home-banner-about').empty().append(data.homeBannerAbout);
    $('#home-banner-btn').empty().append(data.homeBannerBtn);
    $('#video-info').append('<source src="' + data.homeBannerVideo + '" type="video/mp4">');
    // about
    $('#home-about-header').empty().append(data.homeAboutHeader);
    $('#home-about-text').empty().prepend(data.homeAboutText);
    // split
    $('#split-header-1').empty().prepend(data.homeSplitHeader1);
    $('#split-text-1').empty().prepend(data.homeSplitText1);
    $('#split-header-2').empty().prepend(data.homeSplitHeader2);
    $('#split-text-2').empty().prepend(data.homeSplitText2);
    $('.home_block_1, .home_block_2').css({
        background: 'url(' + data.homeSplitImage + ') top center fixed',
        backgroundSize: 'cover'
    });
    // counter
    $('#home-counter-header').empty().prepend(data.homeCounterHeader);
    $('#home-counter-number').empty().prepend(data.homeCounterNumber);
    $('#home-counter-text').empty().prepend(data.homeCounterText);
    // services
    $('.services').css({
        background: 'url(' + data.homeServicesImage + ') top center fixed',
        backgroundSize: 'cover'
    });
    // loop through each work tile
    for (var i = 0; i < 6; i++) {
        $('#my-work').append(
            '<div class="col-md-4 col-sm-4">' +
            '<a href="#">' +
            '<div><i class="fa fa-' + sheet[i].workIcons + '"></i>' +
            '<h3>' + sheet[i].workTitle + '</h3>' +
            '<p>' + sheet[i].workText + '</p>' +
            '</div></a></div>'
        );
    }
    $('#mainWorkTitle').empty().append(data.mainWorkTitle);
    for (var i = 0; i < 6; i++) {
        var HTML = '<a href="#">';
        HTML += '<div class="block">';
        if (i == 0) HTML += '<div class="icon first"><i class="fa fa-bullseye"></i></div>';
        else if (i == 5) HTML += '<div class="icon last "><i class="fa fa-bullseye"></i></div>';
        else HTML += '<div class="icon"><i class="fa fa-' + sheet[i].instructionalIcons + '"></i></div>';
        HTML += '<h3>' + sheet[i].instructionalTitle + '</h3>';
        HTML += '<p>' + sheet[i].instructionalText + '</p>';
        HTML += '</div></a></div>';
        $('#instructional').append('<div class="col-lg-2 col-md-4 col-sm-4">' + HTML + '</div>');
    }
    $('#projectTitle').empty().append(data.projectTitle);
    $('#commentsTitle').empty().append(data.commentsTitle + ' <i class="fa ' + data.commentsIcon + '"></i>');
    $('#commentsText').empty().append(data.commentsText);
    $('#commentsPicture').attr('src', data.commentsPicture);
    $('#teamTitle').empty().append(data.teamTitle);
    // loop through team 
    for (var i = 0; i < 4; i++) {
        $('#myTeam').append('<div class="col-md-3 col-sm-6 col-xs-12 block"><div>' +
            '<img class="img-responsive" src="' + sheet[i].teamPicture + '" alt="" /></div>' +
            '<div class="details">' +
            '<h3>' + sheet[i].teamName + '</h3>' +
            '<h4>' + sheet[i].teamJob + '</h4>' +
            '</div></div>'
        );
    }
    $('#subscribeTitle').empty().append(data.subscribeTitle);
    $('#subscribeButton').empty().append(data.subscribeButton);
    $('#contactTitle').empty().append(data.contactTitle);
    $('#contactText').empty().append(data.contactText);
    $('#contactButton').empty().append(data.contactButton);
    $('#footerText').empty().append(data.footerText);
    $('#contactEmail').empty().append(data.email);
}

// calling and appending gDoc info
tabletop('1bkyQpPTQQQScdSwz-SS9BjQi7yBhBrQzYLQvqvz1pS4');
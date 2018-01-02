instagramFeed = instagramFeed.user.media.nodes;

(function() {
    var html = '';
    for (var x = 0, max = 6; x < max; x++) {
        var style = 'background-image: url(' + instagramFeed[x].display_src +');';
        style += 'height: 100px; width: 100px;';
        style += 'background-size: cover;';
        style += 'background-position: center center;';
        html += '<li><a href="#"><div style="' + style + '"></div></a></li>';
    }
    document.getElementById('instagram-feed-container').innerHTML = html;
    
console.log(instagramFeed);
})();

/*
 * blueimp Gallery Demo JS 2.11.1
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
    'use strict';

    // Initialize the Gallery as video carousel:
    blueimp.Gallery([
        {
            title: 'Sintel',
            href: 'http://caichicong.qiniudn.com/lrtkweb.mp4',
            type: 'video/mp4',
            poster: 'images/1.jpg'
        },
        {
            title: 'Big Buck Bunny',
            href: 'http://caichicong.qiniudn.com/lrtkweb.mp4',
            type: 'video/mp4',
			poster: 'images/2.jpg'
        },
        {
            title: 'Elephants Dream',
            href: 'http://caichicong.qiniudn.com/lrtkweb.mp4',
            type: 'video/mp4',
            poster: 'images/3.jpg'
        }
     
    ], {
        container: '#blueimp-video-carousel',
        carousel: true
    });

});

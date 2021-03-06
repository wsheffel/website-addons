/* Copyright 2019 Denis Mudarisov <https://it-projects.info/team/trojikman>
   License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl.html). */
odoo.define('website_login_background.tour', function (require) {
'use strict';

var tour = require("web_tour.tour");

tour.register('website_login_background_check', {
    test: true,
    url: '/',
},
    [
        {
            content: 'click on sign in',
            trigger: 'a:contains("Sign in")',
        },
        {
            content: 'check background',
            trigger: '.oe_website_login_container',
            run: function() {
                                if ($('body').css('background-image') !== "none") {
                                    console.log('ok');
                                } else {
                                    console.log('error');
                                }
            }
        },
    ]
);
});

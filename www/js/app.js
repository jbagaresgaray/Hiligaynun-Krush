var AppRouter = Backbone.Router.extend({

    routes:{
        "":"home",
        "text": "text",
        "grid": "grid",
        "buttons":"buttons",
        "collapsible_accordions":"collapsible_accordions",
        "dialogPopups":"dialog_popups"
    },

    initialize: function() {
        // Handle back button throughout the application
        $('.back').on('click', function(event) {
            window.history.back();
            return false;
        });
        this.firstPage = true;
    },

    home: function() {
        console.log('#home');
        this.changePage(new HomeView());
    },

    text: function() {
        console.log('#text');
        this.changePage(new TextView());
    },

    grid: function() {
        console.log('#grid');
        this.changePage(new FlexBoxGrid());
    },

    buttons: function(){
        console.log('#buttons');
        this.changePage(new ButtonsView());
    },

    collapsible_accordions: function(){
        console.log('#collapsible_accordions');
        this.changePage(new collapsible_accordionsView());
    },

    dialogPopups: function(){
        console.log('#dialog_popups');
        this.changePage(new dialogPopupsView());
    },

    changePage: function(page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition = $.mobile.defaultPageTransition;
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        $.mobile.changePage($(page.el), {
            changeHash: false,
            transition: transition
        });
    }
});

$(document).ready(function() {
    console.log('document ready');
    tpl.loadTemplates([
        'main',
        'elements/text','elements/grid','elements/buttons','elements/header_footer','elements/listviews',
        'elements/forms','elements/tables','elements/dialog_popups','elements/panels','elements/collapsible_accordions'
        ],
        function() {
            app = new AppRouter();
            Backbone.history.start();
        });
});

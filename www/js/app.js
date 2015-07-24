var AppRouter = Backbone.Router.extend({

    routes: {
        '': 'home',
        'text': 'text',
        'grid': 'grid',
        'buttons': 'buttons',
        'collapsible_accordions': 'collapsible_accordions',
        'dialog_popups': 'dialogPopups',
        'forms': 'forms',
        'header_footer': 'header_footer',
        'listviews': 'listviews',
        'panels': 'panelView',
        'tables': 'tableView',
        'autocomplete': 'autoCompleteView',
        'tabs': 'tabView',
        'cards': 'cardsView',
        'icons': 'iconsView',
        'charts': 'chartsView',
        'toasts': 'toastView',
        'bottomsheet': 'bottomSheetsView',
        'colorsAndstyles': 'styleView',
        'credits': 'creditsView',
        'profile':'profileView',
        'dashboard': 'dashboardView',
        'gallery' : 'galleryView',
        'chat' : 'chatView',
        'mail_inbox':'mailIndoxView',
        'team':'teamView',
        'products_services': 'productServicesView',
        'blog':'blogView',
        'blogpost':'blogpostView'
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
        this.changePage(new HomeView());
    },

    text: function() {
        this.changePage(new TextView());
    },

    grid: function() {
        this.changePage(new FlexBoxGrid());
    },

    buttons: function() {
        this.changePage(new ButtonsView());
    },

    collapsible_accordions: function() {
        this.changePage(new collapsible_accordionsView());
    },

    dialogPopups: function() {
        this.changePage(new dialogPopupsView());
    },

    forms: function() {
        this.changePage(new formsView());
    },

    header_footer: function() {
        this.changePage(new headerFooterView());
    },

    listviews: function() {
        this.changePage(new listView());
    },

    panelView: function() {
        this.changePage(new panelView());
    },

    tableView: function() {
        this.changePage(new tableView());
    },

    autoCompleteView: function() {
        this.changePage(new autoCompleteView());
    },

    tabView: function() {
        this.changePage(new tabView());
    },

    cardsView: function() {
        this.changePage(new cardsView());
    },

    iconsView: function() {
        this.changePage(new iconsView());
    },

    chartsView: function() {
        this.changePage(new chartsView());
    },

    toastView: function() {
        this.changePage(new toastView());
    },

    bottomSheetsView: function() {
        this.changePage(new bottomSheetsView());
    },

    styleView: function() {
        this.changePage(new styleView());
    },

    creditsView: function() {
        this.changePage(new creditsView());
    },

    galleryView: function(){
        this.changePage(new galleryView());
    },

    mailIndoxView: function(){
        this.changePage(new mailIndoxView());
    },

    productServicesView: function(){
        this.changePage(new productServicesView());
    },

    profileView: function(){
        this.changePage(new profileView());
    },

    dashboardView: function(){
        this.changePage(new dashboardView());
    },

    chatView: function(){
        this.changePage(new chatView());
    },

    teamView: function(){
        this.changePage(new teamView());
    },

    blogView: function(){
        this.changePage(new blogView());
    },

    blogpostView: function(){
        this.changePage(new blogpostView());
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
            'elements/text', 'elements/grid', 'elements/buttons', 'elements/header_footer', 'elements/listviews', 'elements/autocomplete',
            'elements/forms', 'elements/tables', 'elements/dialog_popups', 'elements/panels', 'elements/collapsible_accordions',
            'extended/tabs', 'extended/cards', 'extended/icons', 'extended/charts', 'extended/toasts', 'extended/bottomsheet',
            'info/colorsAndstyles', 'info/credits',
            'pages/profile','pages/dashboard','pages/gallery','pages/chat','pages/mail_inbox','pages/team','pages/products_services','pages/blog','pages/blogpost'
        ],
        function() {
            app = new AppRouter();
            Backbone.history.start();
        });
});

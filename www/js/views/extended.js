window.tabView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('extended/tabs'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.cardsView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('extended/cards'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.iconsView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('extended/icons'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.chartsView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('extended/charts'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.toastView = Backbone.View.extend({

	initialize: function(){
		this.template = _.template(tpl.get('extended/toasts'));
	},

	render: function(eventName){
		$(this.el).html(this.template());
		return this;
	},
});

window.bottomSheetsView = Backbone.View.extend({

	initialize: function(){
		this.template = _.template(tpl.get('extended/bottomsheet'));
	},

	render: function(eventName){
		$(this.el).html(this.template());
		return this;
	},
});

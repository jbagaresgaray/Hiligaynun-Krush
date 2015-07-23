window.HomeView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('main'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.TextView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('elements/text'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.FlexBoxGrid = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('elements/grid'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.ButtonsView = Backbone.View.extend({

    initialize: function() {
        this.template = _.template(tpl.get('elements/buttons'));
    },

    render: function(eventName) {
        $(this.el).html(this.template());
        return this;
    },
});

window.collapsible_accordionsView = Backbone.View.extend({

	initialize: function(){
		this.template = _.template(tpl.get('elements/collapsible_accordions'));
	},

	render: function(eventName){
		$(this.el).html(this.template());
		return this;
	},
});

window.dialogPopupsView = Backbone.View.extend({

	initialize: function(){
		this.template = _.template(tpl.get('elements/dialog_popups'));
	},

	render: function(eventName){
		$(this.el).html(this.template());
		return this;
	},
});

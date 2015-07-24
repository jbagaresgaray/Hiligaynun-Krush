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

window.formsView = Backbone.View.extend({

    initialize: function(){
        this.template = _.template(tpl.get('elements/forms'));
    },

    render: function(eventName){
        $(this.el).html(this.template());
        return this;
    },
});

window.headerFooterView = Backbone.View.extend({

    initialize: function(){
        this.template = _.template(tpl.get('elements/header_footer'));
    },

    render: function(eventName){
        $(this.el).html(this.template());
        return this;
    },
});

window.listView = Backbone.View.extend({

    initialize: function(){
        this.template = _.template(tpl.get('elements/listviews'));
    },

    render: function(eventName){
        $(this.el).html(this.template());
        return this;
    },
});

window.panelView = Backbone.View.extend({

    initialize: function(){
        this.template = _.template(tpl.get('elements/panels'));
    },

    render: function(eventName){
        $(this.el).html(this.template());
        return this;
    },
});

window.tableView = Backbone.View.extend({

    initialize: function(){
        this.template = _.template(tpl.get('elements/tables'));
    },

    render: function(eventName){
        $(this.el).html(this.template());
        return this;
    },
});

window.autoCompleteView = Backbone.View.extend({

    initialize: function(){
        this.template = _.template(tpl.get('elements/autocomplete'));
    },

    render: function(eventName){
        $(this.el).html(this.template());
        return this;
    },
});

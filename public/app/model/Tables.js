Ext.define('App.model.Tables', {
    extend: 'Ext.data.Model',
    fields: [
		{name: 'guid',   type: 'string'	},
        {name: 'name',   type: 'string'	},
        {name: 'title',  type: 'string'	},
        {name: 'data',   type: 'string'	}
	],
	proxy: {
        type: 'rest',
        url: 'tables',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
    }
});
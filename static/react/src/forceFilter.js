var ATTRIBUTES = [
    { "display": "\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430", "name": "doc_name" },
    { "display": "\u0414\u0430\u0442\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430", "name": "doc_timestamp" },
    { "display": "\u0424\u0430\u043c\u0438\u043b\u0438\u044f", "name": "last_name" },
    { "display": "\u0418\u043c\u044f", "name": "first_name" },
    { "display": "\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e", "name": "middle_name" },
    { "display": "\u041c\u043e\u043c\u0435\u043d\u0442", "name": "timestamp" },
    { "display": "\u041f\u043e\u043b\u043d\u043e\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435", "name": "full_name" }
]
 
var FilterableProductTable = React.createClass({
    render: function() {
        return (
            <div>
                <AttributesList attributes={ATTRIBUTES}/>
            </div>
        );
    }
});

var AttributeCheckbox = React.createClass({
    render: function() {
        return (
            <form>
            <div>{this.props.display}</div>
            <label class="btn btn-primary">
            <input
                type="checkbox" 
                value="{this.props.display}"
                ref="{this.props.display}"
            />
            </label>
            </form>
        );
    }
});

var AttributesList = React.createClass({
    render: function() {
console.log(this.props)
        var rows = []
        this.props.attributes.forEach(function(attribute) {
            rows.push(<AttributeCheckbox display={attribute.display} name={attribute.name} />)
        })
        return (
            <div>{rows}</div>
        );
    }
});



React.render(
    <FilterableProductTable />, 
    document.getElementById('forceFilter')
);



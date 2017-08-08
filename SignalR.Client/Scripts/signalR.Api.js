//SignalR Web Api
var api = "http://localhost:9259/";
var connection = $.hubConnection(api + "signalr", { useDefaultPath: false });

var hubProxy = connection.createHubProxy('myHub');
hubProxy.state.userName = "loinq";
//query string
connection.qs = { 'country': 'VN' };
hubProxy.on('hello', function (message) {
	alert(message);
});
//
connection.start().done(function () {
	console.log("Connected, transport = " + connection.transport.name);
	console.log('Now connected, connection ID=' + connection.id);
	//
	hubProxy.invoke('sendAll', "hello world").done(function () {
		console.log('invocation succeeded');
	}).fail(function (error) {
		console.log('invocation failed. error: ' + error);
	});
}).fail(function (error) {
	console.log('Could not connect: ' + error);
});
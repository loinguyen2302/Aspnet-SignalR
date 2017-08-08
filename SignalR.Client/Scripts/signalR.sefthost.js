// SignalR seft host

//Set the hubs URL for the connection
$.connection.hub.url = "http://localhost:6977/signalr";

// Declare a proxy to reference the hub.
var chat = $.connection.chatHub;

// Create a function that the hub can call to broadcast messages.
chat.client.receive = function (message) {
	alert(message);
};
// Start the connection.
$.connection.hub.start().done(function () {
	console.log('Now connected, connection ID=' + chat.connection.id);
	// Call the Send method on the hub.
	chat.server.sendAll();
});
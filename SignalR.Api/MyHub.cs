using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace SignalR.Api
{
    public class MyHub : Hub
    {
        public void SendAll(string message)
        {
            //pass state between clients and the Hub class
            string username = Clients.Caller.userName;
            string usernameTemp = Clients.CallerState.userName;
            //query string
            string country = Context.QueryString.Get("country");
            //
            Clients.All.hello(username + " say: "+message);
        }
        public override Task OnConnected()
        {
            var connectId = Context.ConnectionId;
            return base.OnConnected();
        }
        public override Task OnDisconnected(bool stopCalled)
        {
            var connectId = Context.ConnectionId;
            return base.OnDisconnected(stopCalled);
        }
    }
}
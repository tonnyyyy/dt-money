import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Live stream on twitch',
          type: 'deposit',
          category: 'Livestream',
          amount: 998,
          createdAt: new Date('2021-02-12 09:30:00')
        },
        {
          id: 2,
          title: 'Rent',
          type: 'withdraw',
          category: 'Bills',
          amount: 350,
          createdAt: new Date('2021-02-15 12:45:00')
        }
      ],
    })
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all('transaction')
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

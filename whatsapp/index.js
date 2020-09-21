const { post } = require('request-promise');

function startShopping() {
  post({
    uri: 'https://api.zenvia.com/v1/channels/whatsapp/messages',
    headers: {
      'X-API-TOKEN': '3F497uuFNpMOHOsCfCXHq2sE3pNpMOAnAQZ7'
    },
    body: {
      from: 'magnetic-vole',
      to: '5547991231508',
      contents: [{
        type: 'text',
        text: 'Olá, eu sou um assistente virtual pronto pra te ajudar a fazer suas compras de supermercado.'
      }]
    },
    json: true
  })
    .then((response) => {
      console.log('Response:', response);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
};


function chooseProducts() {
  post({
    uri: 'https://api.zenvia.com/v1/channels/whatsapp/messages',
    headers: {
      'X-API-TOKEN': '3F497uuFNpMOHOsCfCXHq2sE3pNpMOAnAQZ7'
    },
    body: {
      from: 'magnetic-vole',
      to: '5547991231508',
      contents: [{
        type: 'text',
        text: 'Para começar digite da seguinte forma: "quantidade produto". Ex. "2 salgadinhos" Se quiser adicionar mais um item por vez basta separar por vírgulas. Ex. "2 salgadinhos, 1 refrigerante, 3 limões, 4 chocolates"'
      }]
    },
    json: true
  })
    .then((response) => {
      console.log('Response:', response);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
};

function stopOrder() {
  post({
    uri: 'https://api.zenvia.com/v1/channels/whatsapp/messages',
    headers: {
      'X-API-TOKEN': '3F497uuFNpMOHOsCfCXHq2sE3pNpMOAnAQZ7'
    },
    body: {
      from: 'magnetic-vole',
      to: '5547991231508',
      contents: [{
        type: 'text',
        text: 'Sua compra foi finalizada com sucesso!'
      }]
    },
    json: true
  })
    .then((response) => {
      console.log('Response:', response);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
};
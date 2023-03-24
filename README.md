# 🏗 scaffold-eth - 🧑‍🎤 [PunkWallet.io](https://PunkWallet.io)

There's a weird error with WC2 and babel-loader node module, 
to fix it make sure to modify react/package.json 

 "browserslist": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],

If you have an other solution please let me know 


Dapp to test WC2 conection : 
sign : https://react-app.walletconnect.com/
auth : https://react-auth-dapp.vercel.app/
## PR Modif:
Replaced Wallet connect V1 bye V2

You must create an app ID here https://cloud.walletconnect.com/sign-in

Then copy the id in an .env file like .sample.env file


> An open source Ethereum web wallet.

🎥 [watch this 10m demo](https://youtu.be/lYRd1k1RBAQ)

---

> PunkWallet.io is a forkable burner wallet with Wallet Connect up front. 

![image](https://user-images.githubusercontent.com/2653167/153722202-5368187d-4189-499e-94a3-1ee41596f445.png)



> It's easy to send ETH an many different networks:

![image](https://user-images.githubusercontent.com/2653167/153722191-e0e99867-2724-489d-a2a6-d471a580cc24.png)


---

# 🏃‍♀️ Fork the code and make your own wallet or on your own network!!!

required: [Node](https://nodejs.org/dist/latest-v12.x/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)


```bash
git clone https://github.com/scaffold-eth/punk-wallet

cd punk-wallet
```

```bash

yarn install

```

```bash

yarn start

```

> in a second terminal window:

```bash
cd punk-wallet
yarn chain

```

📝 Edit your frontend `App.jsx` in `packages/react-app/src`

📱 Open http://localhost:3000 to see the app

import * as firebase from 'firebase'


const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

//setting up google provider for login

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase, googleAuthProvider,database as default };




// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })


// //child changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// setup expenses w/ three items
// description, amouunt, createdAt

// database.ref('expenses')
// .once('value')
// .then((snapshot)=> {
//  const expenses = [];

//  snapshot.forEach((childSnapshot)=> {
//    expenses.push({
//      id: childSnapshot.key,
//      ...childSnapshot.val()
//    })
//  })
//  console.log(expenses);
// })

// database.ref('expenses').push({
//   description: 'food',
//   note: '',
//   amount: 14,
//   createdAt: 1584189
// })


// database.ref('expenses').on('value', (snapshot)=>{
//   const expenses = [];

//   snapshot.forEach((childSnapShot)=>{
//     expenses.push({
//       id: childSnapShot.key,
//       ...childSnapShot.val()
//     })
//   })
//   console.log(expenses);
// })


// database.ref('notes').push({
//   title: 'course topics',
//   body: 'react native python angular',
 
// })









// const onValueChange = database.ref()
// .on('value', (snapshot)=> {
// console.log(snapshot.val());
// }, (e)=>{
//   console.log('error with data fetching', e);
// });


// setTimeout(()=>{
// database.ref('age').set(25)
// },3500)

// setTimeout(()=>{
//   database.ref().off(onValueChange)  
// },7000)

//   setTimeout(()=>{
//     database.ref('age').set(0)
//     },10500)
    
  

// database.ref('location/city')
// .once('value')
// .then((snapshot)=>{
// const val = snapshot.val()
// console.log(val);
// })
// .catch((error)=>{
//   console.log('error fetching data', error);
// })









// database.ref().set({
//   name: "christopher",
//   age: 26,
//   stressLevel: 8,
//   job: {
//    title: 'software developer',
//    company: 'google' 
//   },
//   location: {
//     city: 'menifee',
//     state: 'california',
//     country: 'united states'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((err) => {
//   console.log('this failed', err);
// });


// //change stress level to a 9
// // change job.company to amazon
// // change location.city to seattle

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// // database.ref('isEngaged')
// // .remove().then(()=>{
// //   console.log('data removed');
// // }).catch((err)=>{
// //   console.log('did not removed data',err);
// // })


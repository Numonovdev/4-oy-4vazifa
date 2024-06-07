// If hamda mantiqiy operatorlari bilan ishlansin

// 1-masala
// let a = prompt('birinchi son');
// let b = prompt('ikkinchi son');
// let c = prompt('uchinchi son');

// if (c > 0) {
//      if (a > b){
//           console.log('shart bajarildi')
         
//      } else if(b > c){
//           console.log('shart bajarildi')
//      } else{
//           console.log('shart bajarilmadi')
//      }
// } else {
//      console.log('shart bajarilmadi')
// }

// 2-masala

// 3-masala
// let a = prompt('1-son');
// let b = prompt('2-son');
// let c = prompt('3-son');
// let d = prompt('4-son');
// let  yigindi =  a + b + c + d;
// if (yigindi > 50 ){
//      if (a > 10){

//           // console.log('Yigindi katta va hech bolmaganda birikatta')
//      if (b > 10){
//           // console.log('Yigindi katta va hech bolmaganda birikatta')
//      if (c > 10){
//           // console.log('Yigindi katta va hech bolmaganda birikatta')
//      if (d > 10){
//           console.log('Yigindi katta va hech bolmaganda birikatta')

//      } else {console.log(' sonlarning biri 10dan kichik yoki 10 ')}
//      } else {console.log(' sonlarning biri 10dan kichik yoki 10 ')}
//      } else {console.log(' sonlarning biri 10dan kichik yoki 10 ')}
//      } else {console.log(' sonlarning biri 10dan kichik yoki 10 ')}

// } else {console.log(' yigindi kichik ')}

// 4-masala

// let a = prompt('birinchi son')
// let b = prompt('ikkinchi son')

// let kopaytma = a * b;
// let yigindi = a + b;
// if (kopaytma < 100){
//      console.log('to`gri')
// } else if(yigindi > 20 && a % 2 === 0){
//           console.log('togri')

// } else {console.log('notogri')}

// 5-masala







// Ternary operatorlari bilan ishlansin
// 1-masala 

// const age = prompt('son kiriting:', 0) 
//  age < 0 ? 
//  alert('manfiy son') : 
//  age > 0 ? alert('musbat son') : alert('bu son 0')


// 2-masala 

// const birinchi = prompt('birinchi son')
// const ikkinchi = prompt('ikkinchi son')
// birinchi < ikkinchi ? alert('ikkinchi son katta') : alert(' birinchi son katta')

// 3-masala

// const string = prompt('Stringning uzunligini kiriting')
// string > 5 ? alert('Uzun string ') : alert('qisqa string')

// 4-masala 

// const son = prompt('son kriting!')
// son % 2 === 0 ? alert('juft') : alert('toq')

// 5-masalas

// const age = prompt('son kiriting:', 0) 
//  age < 0 ? 
//  alert('manfiy son') : 
//  age > 0 ? alert('musbat son') : alert('bu son 0')

//  1-savol birinchi savol bilan beshinchi savol bir xil ekan 


// Switch case bilan ishlansin

// 1-masala 
// const raqam = prompt('1 dan 7 gacha son kiriting')
// switch (raqam) {
//      case '1':
//      console.log('dushanba')
//      alert('Dushanba')
//      break
//      case '2':
//           console.log('Seshanba')
//           alert('seshanba')
//           break
//           case '3':
//                console.log('chorshanba')
//                alert('Chorshanba')
//               break
//               case '4':
//                console.log('payshanba')
//                alert('Payshanba')
//               break
//               case '5':
//                console.log('Juma')
//                alert('Juma')
//               break
//               case '6':
//                console.log('Shanba')
//                alert('Shanba')
//               break
//               case '7':
//                console.log('Yakshanba')
//                alert('Yakshanba')
//               break
//               default:
//                console.log('Erroorrrrrrrrrrrrrrrrrrrrrrrrr')
//                alert('Siz notogri son kiritdiz')
//               break              
// }

// 2-masala
// const son = prompt('1dan 12gacha son kiriting')
// switch (son)  {
//      case '1':
//           alert('Yanvar')
//           break
//      case '2':
//           alert('fevral')
//           break
//      case '3':
//           alert('mart')
//           break
//      case '4':
//           alert('aprel')
//           break
//      case '5': alert('may') 
//      break
//      case '6': alert('iyun') 
//      break
//      case '7': alert('iyul') 
//      break
//      case '8': alert('avgust') 
//      break
//      case '9': alert('sentabr') 
//      break
//      case '10': alert('oktyabr') 
//      break
//      case '11': alert('noyabr') 
//      break
//      case '12': alert('dekabr') 
//      break
//      default : alert('notogri son! boshqa son kiritib ko`ring')
// }

// 3-masala 
// let baho = prompt('baholang A,B,C,D,F harflar bilan')
// switch (baho) {
//      case 'A': alert('Alo')
//      break
//      case "B": alert('yaxshi')
//      break
//      case 'C': alert('ortacha')
//      break
//      case 'D': alert('yomon')
//      break
//      case 'F': alert('juda yomon')
//      break
//      default: alert('1dan 5gacha bahoni kiriting')
// }

// 4-masala

// const son = prompt('1dan 12gacha son kiriting')
// switch (son)  {
//      case '1':
//           alert('Qish')
//           break
//      case '2':
//           alert('Qish')
//           break
//      case '3':
//           alert('Bahor')
//           break
//      case '4':
//           alert('Bahor')
//           break
//      case '5': alert('Bahor') 
//      break
//      case '6': alert('Yoz') 
//      break
//      case '7': alert('Yoz') 
//      break
//      case '8': alert('Yoz') 
//      break
//      case '9': alert('Kuz') 
//      break
//      case '10': alert('Kuz') 
//      break
//      case '11': alert('Kuz') 
//      break
//      case '12': alert('Qish') 
//      break
//      default : alert('notogri son! boshqa son kiritib ko`ring')
// }

// 5-masala
// let son = prompt('son kiriting')

// switch (son) {
//      case '1': alert('birinchi')
//      break
//      case '2': alert('ikkinchi')
//      break
//      case '3': alert('uchinchi')
//      break
//      default: alert('Nomalum qiymat')
// }

// for bilan ishlansin

// 1-masala
// for (let i = 1; i <= 10; i++){
//      let kvadrat = i*i;
//      console.log(kvadrat)
// }

// 2-mashq
// for (let i = 0; i <= 10; i++){
//      let sonlar = 10 - i;
//      console.log(sonlar);
// }

// 3-masala
// tushunmadim massivni

// 4-masala
// for (let i = 0; i<=20; i++){
//      i % 2 === 0 ? console.log(i) : console.log('') 
// }
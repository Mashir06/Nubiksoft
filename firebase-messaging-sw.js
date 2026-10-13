// Avisos de vencimiento de Zentory (versión web, https://nubiksoft.com/zentory/app/).
//
// Este archivo recibe las notificaciones push de Firebase Cloud Messaging y las
// muestra aunque la app esté cerrada. Firebase lo busca siempre en la raíz del
// dominio: debe quedar en https://nubiksoft.com/firebase-messaging-sw.js
// No cambia nada del resto del sitio (trabaja en su propio espacio,
// /firebase-cloud-messaging-push-scope).
//
// Los avisos los manda la función "avisosVencimientoWeb" del repositorio de
// Zentory (carpeta functions/), todos los días a las 7:00 a. m.

importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// Configuración pública de la app web de Zentory (proyecto zentory-base).
firebase.initializeApp({
  apiKey: 'AIzaSyC4Ul2Du4OrpHVrpbecSIMqdkZzskpaMAE',
  appId: '1:794054120945:web:0b24be636e6e7088c8a050',
  messagingSenderId: '794054120945',
  projectId: 'zentory-base',
  authDomain: 'zentory-base.firebaseapp.com',
  storageBucket: 'zentory-base.firebasestorage.app',
});

// Firebase muestra solo la notificación (título, texto e ícono que manda el
// servidor) y al tocarla abre Zentory.
firebase.messaging();


//$(document).ready(function() {

    var state = false;

    //$("input:text:visible:first").focus();

 //   $('#accesspanel').on('submit', function(e) {
//WSalert("elboton");
      //  e.preventDefault();

        state = !state;

    /*    if (state) {
            document.getElementById("litheader").className = "poweron";
            document.getElementById("go").className = "";
            document.getElementById("go").value = "Initializing...";
           // setTimeout(cuenta_atras, 3000);

        }else{
            document.getElementById("litheader").className = "";
            document.getElementById("go").className = "denied";
            document.getElementById("go").value = "Access Denied";
        }*/

   // });




///});










var vnodewebs;
var vced="";
var vcel="";
var vnodep="";
  var config = {
    apiKey: "AIzaSyA_L67YUVbfzQbgNLFbOylVyuQ6wF4Df_g",
    authDomain: "mototaxi-2b9d7.firebaseapp.com",
    databaseURL: "https://mototaxi-2b9d7.firebaseio.com",
    projectId: "mototaxi-2b9d7",
    storageBucket: "mototaxi-2b9d7.appspot.com",
    messagingSenderId: "424969414739"
  };
  firebase.initializeApp(config);



var general;


 unavesmensaje();
 //nodesuperpadre("areferenwebs");
//finirapnode("taxis",nhh,"cel");

  firebase.database().ref().child("areferenwebs").once('value').then(function(snapshot) {
    var username2 = (snapshot.val() && snapshot.val().username) || 'Anonymous';
 
  
    resfire =snapshot.val();

 });

  function finirapnode(tx,nh,n){
      firebase.database().ref().child(tx).child(String(nh)).once('value').then(function(snapshot) {
    var username2 = (snapshot.val() && snapshot.val().username) || 'Anonymous';
 
  
    //resfire =snapshot.val();
   // alert(snapshot.val()[n]);

 });
  }


 vnodewebs=resfire;
 console.log("11 "+vnodewebs);
 
 function m(){for(var i in vnodewebs){
console.log("11m "+vnodewebs);
 }}
function btaccion()
{
   
      unavesmensaje();
      vced=document.getElementById("idcedula").value;
vcel=document.getElementById("idcelular").value;
      validadcionuser(vcel,vced);
      btaccionuser();
        state = !state;

        if (state) {
            document.getElementById("litheader").className = "poweron";
           // document.getElementById("go").className = "";
           // document.getElementById("go").value = "Initializing...";
        }else{
            document.getElementById("litheader").className = "";
          //  document.getElementById("go").className = "denied";
          //  document.getElementById("go").value = "Access Denied";
        }





if(vced=="" && vcel=="" && vndhijo!=""){
    divmostrar();
}
  //  setTimeout(cuenta_atras, 3000);



}

function divmostrar(){

     document.getElementById("accesspanel").style.display = "none";
   document.getElementById("map").style.display = "block";

   document.getElementById("idbuton3").style.display  = "block";
document.getElementById("img1").style.display  = "block";
document.getElementById("idbutonmap").style.display = "block";

 
}

function unavesmensaje()
{ firebase.database().ref().child("taxis").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
 
   general=snapshot.val();


 });

}
var resfire;
function nodesuperpadre(nd)

{  firebase.database().ref().child(nd).once('value').then(function(snapshot) {
    var username2 = (snapshot.val() && snapshot.val().username) || 'Anonymous';
 
  
  resfire =snapshot.val();

 });
}


var noregistro=true;
function validadcionuser(cel,ced){
  


 




for(var val in general){

   if(general[val].cel==cel&&general[val].cedula==ced){
 

 alert("encontrado login ");
  document.getElementById("accesspanel").style.display = "none";
   document.getElementById("map").style.display = "block";

   document.getElementById("idbuton3").style.display  = "block";
document.getElementById("img1").style.display  = "block";
document.getElementById("idbutonmap").style.display = "block";




  
 vnodeh=val;
showAndroidToast("1","taxis",vnodeh,"");

secintervalo();
 //showAndroidToast("3",vnodep,"","");
  //showAndroidToast("4",vnodep,"","");
 noregistro=false;
   } 
}
if(noregistro){
//alert("no encontrado login ");
}
}

var viniinterval=true;
function secintervalo(){
 // if(viniinterval){
   // viniinterval=false;
setTimeout(cuenta_atras, 3000);

//}
}

function cuenta_atras(){
 
//window.location="https://noenadies.github.io/taxistasservicio";
//window.location="https://noenadies.github.io/taxistasservicio/";

}

function btaccionuser(){
 // showAndroidToast("btaccionuser","","","");
}

//window.location="https://www.youtube.com/watch?v=GAOBXGPuKqo";
//location.href = "http://www.cnn.com";




































////////////////////////////////////////////////////////////////



var arraymarkes ;
var generalkey;

var idgeneral=0;
var objh;

  var map;
var markers = [];


var vcaambfire="";
/*

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA_L67YUVbfzQbgNLFbOylVyuQ6wF4Df_g",
    authDomain: "mototaxi-2b9d7.firebaseapp.com",
    databaseURL: "https://mototaxi-2b9d7.firebaseio.com",
    projectId: "mototaxi-2b9d7",
    storageBucket: "mototaxi-2b9d7.appspot.com",
    messagingSenderId: "424969414739"
  };
  firebase.initializeApp(config);

*/

var general;




unavesmensaje();

firebase.database().ref().child("taxis").child(String(vndhijo)).child("usuario").on('value', function(snapshot) {
  //updateStarCount(postElement, snapshot.val());
document.getElementById("demo").innerHTML ="Mitaxi" ;//vnodelatuser+" lauylnu "+  vnodelnguser+""+vnodelat+" "+vnodelng+" "+vndpadre+" h "+vndhijo+
 // " nn " + vstxnode+" --*** "+snapshot.val();
  //alert(snapshot.val());
});


var arrnode2=[];



function unavesmensaje2()
{

//var c=String(cedu);
//var cl= String(celu);child("user").

  firebase.database().ref().child("taxis").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val();
   // alert(cedu+"  ced celu"+celu);
var s=mi;// firebase.database().ref().child("user");
generalkey=snapshot.key;
general=s;
//console.log("un "+generalkey);
objh=Object.keys(mi);
idgeneral=0;
var colocar;
for (var indice in objh) {
   colocar = {idscript: idgeneral, idfirebase:objh[indice]};
//arrnode2.push(idgeneral,objh[indice]);
arrnode2.push(colocar);
//{firstname : "Malcom", lastname: "Reynolds"}
idgeneral=idgeneral+1;
//console.log("Objectdfdkeys(s) "+Object.keys(s));
//console.log("ind'" + indice + "un  " + objh[indice]);


}
/*for (var indi in arrnode2) {
arrnode2.push(idgeneral,objh[indice]);
//console.log("Objectdfdkeys(s) "+Object.keys(s));
//console.log( "fi " + arrnode2[indi]);
//console.log( "idgeneral " + idgeneral);

}*/


//   console.log( "id " +Object.keys(arrnode2) );

/*

var i;
for (i = 0; i < arrnode2.length; i++) { 
console.log( "arrnode2 " + arrnode2[i].idfirebase);
}
*/


/*
for (var i=1 ; i<=idgeneral;i=i+1){

//console.log("s "+ Object.keys(arrnode2));
console.log("s "+ arrnode2[i]);
}*/

 
   // document.getElementById("idcumplimiento").innerHTML = snapshot.val();
  });


}

// tieen los id node de firebase y id  de
function  arrayidall(){
var i;
for (i = 0; i < arrnode2.length; i++) { 
//console.log( "arrnode2 " + arrnode2[i].idfirebase);


}

}
//busco la informacion del json traido 
// firebase  los valor ejemplo general ceria ya el padres en estecaso
//de fireabse taxi pues el node  de taxis los hijos  son uno dos y tres  ese seria hijo  nodh
// un hijo mas profundo nodh2 seria  cedula telefono, nombre ect 
function  nodepartei(nodh,nodh2){
//console.log( "general.uno.cedula  = general[nodh][nodh2]  " + general[nodh][nodh2]);
return general[nodh][nodh2]; 
}


var noregistro=true;/*
function validadcionuser(cel,ced){
for(var val in general){
    console.log("cel "+general[val].cedula);
   if(general[val].cel==cel&&general[val].cedula==ced){
 //alert("encontrado login ");
 noregistro=false;
   } 
}
if(noregistro){
alert("no encontrado login ");
}
}*/
var idx=0;


function myFunction2(){
 console.log("cel "+general["uno"].cedula);
//validadcionuser("311","1112");
//console.log("fffffffff "+general["taxis"]["uno"].lat);
//showAndroidToast(22);
}

function llamarandroid(){

    // vreturn=  window.Android.showToast(id,st1,st2);
 document.getElementById("demo").innerHTML = vreturn;
}



function unavesmensaje()
{

//var c=String(cedu);
//var cl= String(celu);child("user").

  firebase.database().ref().child("taxis").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val();
   // alert(cedu+"  ced celu"+celu);
var s=mi;// firebase.database().ref().child("user");
generalkey=snapshot.key;
general=s;
//console.log("un "+generalkey);
objh=Object.keys(mi);
idgeneral=0;
for (var indice in objh) {

 colocar = {idscript: idgeneral, idfirebase:objh[indice]};
//arrnode2.push(idgeneral,objh[indice]);
arrnode2.push(colocar);

//arrnode2.push(idgeneral,objh[indice]);
//idgeneral=idgeneral+1;
//console.log("Objectdfdkeys(s) "+Object.keys(s));
//console.log("ind'" + indice + "un  " + objh[indice]);


}




for (var indi in arrnode2) {
arrnode2.push(idgeneral,objh[indice]);
//console.log("Objectdfdkeys(s) "+Object.keys(s));
//console.log( "fi " + arrnode2[indi]);
//console.log( "idgeneral " + idgeneral);

}/*
for (var i=1 ; i<=idgeneral;i=i+1){

//console.log("s "+ Object.keys(arrnode2));
console.log("s "+ arrnode2[i]);
}*/

 
   // document.getElementById("idcumplimiento").innerHTML = snapshot.val();
  });


}




var idx=0;
latm=vnodelat; 
lngm=vnodelng;

//vnodelat=4.630381;

function udatemap(){

latm=parseFloat(vnodelat); 
lngm=parseFloat(vnodelng);
/*document.getElementById("demo").innerHTML = vnodelatuser+
" lauylnu ok  "+  vnodelnguser+""+vnodelat+" "+vnodelng+
" "+vndpadre+" "+vndhijo+"  "+"nodess andr " +" "+vstxnode;*/
escribetexto("Taxis Bogota")

   initMap1(parseFloat(vnodelat),parseFloat(vnodelng));
   andridmarker(222, map) ;
   eventoonclimaker(markerand);






/*document.getElementById("demo").innerHTML = vnodelatuser+
" lauylnu "+  vnodelnguser+""+vnodelat+" "+vnodelng+
" "+vndpadre+" "+vndhijo+"  "+"nodess andr " +" "+vstxnode;*/



var  mapaevetoclik;

  
}

    function initMap1(a,b) {
        var uluru = {lat:a, lng:b};
       map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: uluru,
         mapTypeId: google.maps.MapTypeId.ROADMAP  ,
          styles:[

{
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#44b8db"
            }
        ]
    }

          ]
        });

//este evento sirve para aññadir  una marca en el map
// esa marca es el destino  del servicio de  taxi a dodne ira  el usuario 

   mapaevetoclik=  map.addListener('click', function(event) {
          addMarker(event.latLng);
//console.log("new " +event.latLng.lat());

latus=event.latLng.lat();
lngus=event.latLng.lng();
console.log("new ss" +latus+" la ln "+lngus);


// aca  subimos  a firebase  la latitud  del  servicio a  donde  ira  el taxi 
sfinirapnode("taxis",vndhijo,"latdestino",latus);
sfinirapnode("taxis",vndhijo,"lngdestino",lngus);
 document.getElementById("demo").innerHTML="new "+vstxnode;

         // finirapnode(tx,nh,n)

      //   destino(event.latLng);
        });

  
 var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });


  var image="https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Inside-Chartreuse.png";
  //4.6284038,-74.1458368, Bogotá 4.628440, -74.137178
           var marker = new google.maps.Marker({
           position:{lat:vnodelat, lng:vnodelng},
           //  icon: icons[feature.type].icon,
            map: map,
            title:"uno",
            name:"uno",
            
            icon: image,

            activom:"b",
               animation: google.maps.Animation.DROP
          });




   markers.push({idmar:0, lng: marker});

   marker.addListener('click', function(e) {
   map.setZoom(13);
   map.setCenter(this.getPosition());
   // alert(this.title);
    console.log("name "+this.name);
     console.log("titulo "+this.idnodefirebase);
    //this.setVisible(false);
    this.activom="a";
    //clearMarkers(markesmas);
    console.log(this.activom);//4.635707

    this.activom="a";
    infowindow.open(map,this);


/*

firebase.database().ref().child("taxis").child(String(this.name)).child("activo").set(this.activom);
   this.activom="a";
firebase.database().ref().child("taxis").child(String(this.name)).child("latuser").set(vlatuser);
firebase.database().ref().child("taxis").child(String(this.name)).child("lnguser").set(vlnguser);
 firebase.database().ref().child("taxis").child(String(this.name)).child("msn").set("carrera activa");
 

*/

  });












     

      }

     

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Outside-Azure.png
 var markerand ;
 var imaandroidiconmaker="https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-2/512/map_marker_base-32.png";
function andridmarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
   markerand = new google.maps.Marker({
    position: {lat:latus, lng:lngus},
   map: map,
   icon:imaandroidiconmaker,
   title:"android",
           

  });

 markers.push({idmar:1, lng: markerand});

}
var vlatuser=0;
var vlnguser=0;
function eventoonclimaker(mark){
  mark.addListener('click', function(e) {
    map.setZoom(13);
    map.setCenter(this.getPosition());
    vlnguser=this.getPosition().lng();
     vlatuser=this.getPosition().lat();

//firebase.database().ref().child("taxis").child("uno").child("activo").set("b");
 //  this.activom="a";
//firebase.database().ref().child("taxis").child(String("uno")).child("latuser").set(vlatuser);
//firebase.database().ref().child("taxis").child(String("uno")).child("lnguser").set(vlnguser);
 //firebase.database().ref().child("taxis").child(String("uno")).child("msn").set("carrera activa");
 


   // alert(this.title);
    console.log("name "+this.title);
    // console.log("titulo "+this.idnodefirebase);
    //this.setVisible(false);
   //// this.activom="a";
    //clearMarkers(markesmas);
    console.log("lat "+this.getPosition());



  });

}

//setttimeout(true);

var viniinterval=true;
function setttimeout(bol){

  viniinterval=bol;
  if(viniinterval){
   
setTimeout(cuenta_atras, 3000);

}
}

function cuenta_atras(bo){


 /* showAndroidToast("gpsllamar","","","");
  var boli=bo;
  if(String(bo)=="undefined"){
boli=true;}

udatemap();
 setttimeout(boli);
*/


//window.location="https://noenadies.github.io/taxistasservicio/";

}


//setTimeout(wazeinicia, 3000);
function wazeinicia(){

showAndroidToast("wazeinciia","","","");
}
function btaccionuser(){
 // showAndroidToast("btaccionuser","","","");
}

  function finirapnode(tx,nh,n){
      firebase.database().ref().child(tx).child(String(nh)).once('value').then(function(snapshot) {
    var username2 = (snapshot.val() && snapshot.val().username) || 'Anonymous';

    //resfire =snapshot.val();
   vcaambfire=napshot.val()[n];
  //  alert(snapshot.val()[n]);

 });
  }

  function sfinirapnode(tx,nh,n,val){
      firebase.database().ref().child(String(tx)).child(String(nh)).child(String(n)).set(val);
 


  
 //   alert("ssubio");

 
  }



          function addMarker(location) {
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
        markers.push(marker);
      }

      function destino(f){


for(var iu in f){console.log(f[iu]);}

      }

  function androiniciawaze(){
   wazeinicia();
  }




var vinfo=0;
var  vzoom=0;
  function btmenos(){
vzoom=map.getZoom()-1;
 map.setZoom(vzoom);
/*
if( document.getElementById("map").style.display == "none"){
           document.getElementById("map").style.display = "block";
     document.getElementById("idmodal").style.height = "initial";

   }else{

       document.getElementById("map").style.display = "none";
     document.getElementById("idmodal").style.height = "400px";
   }
*/

  }


  function btmas(){
 vzoom=map.getZoom()+1;


 map.setZoom(vzoom);
/*
if( document.getElementById("map").style.display == "none"){
           document.getElementById("map").style.display = "block";
     document.getElementById("idmodal").style.height = "initial";

   }else{

       document.getElementById("map").style.display = "none";
     document.getElementById("idmodal").style.height = "400px";
   }
*/

  }









///////////////////////////////////////////////////////
////////////////////////////////7





















var Costoservicio=0;

//https://reviblog.net/2016/01/08/javascript-obtener-la-distancia-distancia-en-kilometros-entre-dos-puntos-dadas-por-su-latitud-y-longitud/

//4.628459, -74.136978
//4.629157, -74.136908
 getKilometros = function(lat1,lon1,lat2,lon2)
 {
 rad = function(x) {return x*Math.PI/180;}
var R = 6378.137; //Radio de la tierra en km
 var dLat = rad( lat2 - lat1 );
 var dLong = rad( lon2 - lon1 );
var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
 var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
 var d = R * c;
return d.toFixed(3); //Retorna tres decimales
 }
alert(getKilometros(4.628459,-74.136978,4.629157,-74.136908));






























 function calcosteservice(stds,sttimet){



var aRn=0;
var aRp=0;
var aRa=0;



var Ds=0;
var timtotal=1;
var R=0;
var B=0;
var C=0;
var FCal=0;
var vs=0;
var vfl=36;
var vc=18;
var b1=0.83;
var b2=2.48;
var c=-0.825;
var FCong=0;
var KrecoridosDia=0;
var ncarrerasdia=0;
var M=0;
var boolFcal=true;
var Ra=0;
var Rn=0;
var Rp=0;



var boolFcal=true;
if(boolFcal){
  Fcal=0.133;
    C=998;
    B=2800/2.8;

    Ra=5000/5;
    Rn=2400/2.4;
    Rp=900/0.9;
    M=5000/5;

}else{

Fcal=0;
C=881;
B=2500/2.8;
Ra=4400/5;
Rn=2100/2.4;
M=4400/5;
Rp=800/0.9;
}
        
Ds=document.getElementById("idds").value;
timtotal=document.getElementById("idtime").value;
console.log("Costoservicio"+Ds+ " " +timtotal);
aRn=1;

R=(Rn*aRn+Rp*aRp+Ra*aRa)*Ds;


vs=Ds/timtotal;
console.log("vs "+ vs);

if(vs>=vfl){

FCong=0;
console.log(" FCong 1  "+FCong);
}

if(vs<vfl&&vs>=vc){

FCong=((vfl-vs)/vfl)*b1;
console.log(" FCong 2 "+FCong+" vs "+ vs+""+vfl+""+b1);
}

if(vs<vc){

FCong=(((vfl-vs)/vfl)*b1)+c;
console.log( " FCong 3 "+FCong+ " vs "+ vs+" vc "+vc+"v"+b1+" c "+c);
}
//R=0;
//Fcal=0.133;
//FCong=1;
console.log("Costoservicio"+ Costoservicio+" fcong "+FCong+" r "+R+" fcal "+Fcal+" c "+C+"  b "+B);

Costoservicio=B*Ds+((C*(1+FCal))*(1 + FCong)*Ds)+R;


  document.getElementById("idlabecosto").innerHTML ="El pasajero paga "+Costoservicio;
alert(Costoservicio);
console.log("Costoservicio"+ Costoservicio);
 }


function mostrarcoste(){
    document.getElementById("costo").style.display = "block";
}






function btboollamagpspara(){

    boollamagps=false;
}

function btboollamagpsinici(){

    boollamagps=true;
}


function ciclogps(){

     setInterval(function(){ if(boollamagps){

        ciclogps2();
     }}, 60000);
}

function ciclogps2(){

     setInterval(function(){ if(boollamagps){

        ciclogps1();
     }}, 60000);
}



if(boolFcal){
    FCal=0.133;
    C=998;
    B=2800/2.8;

    Ra=5000/5;
    Rn=2400/2.4;
    Rp=900/0.9;
    M=5000/5;

}else{

FCal=0;
C=881;
B=2500/2.8;
Ra=4400/5;
Rn=2100/2.4;
M=4400/5;
Rp=800/0.9;
}

Ds=Ds;//getgps

R=(Rn*aRn+Rp*aRp+Ra*aRa)*Ds;


vs=Ds/timtotal;
if(vs>=vfl){

FCong=0;

}

if(vs<vfl&&vs>=vc){

FCong=((vfl-vs)/vfl)*b1;

}

if(vs<vc){

FCong=((vfl-vs)/vfl)*b1+c;

}


Costoservicio=B*Ds+((C*(1+Fcal))*(1 + FCong)*Ds)+R;


//B=2.8*(C*(1+FCal))
/*
𝐶 = 𝐶𝑜𝑠𝑡𝑜 𝑝𝑜𝑟 𝑘𝑖𝑙ó𝑚𝑒𝑡𝑟𝑜
𝐹𝐶𝑎𝑙 = 𝐹𝑎𝑐𝑡𝑜𝑟 𝑑𝑒 𝑐𝑎𝑙𝑖𝑑𝑎𝑑
𝐹𝐶𝑜𝑛𝑔 = 𝐹𝑎𝑐𝑡𝑜𝑟 𝑑𝑒 𝑐𝑜𝑛𝑔𝑒𝑠𝑡𝑖ó𝑛
𝐷𝑠 = 𝐷𝑖𝑠𝑡𝑎𝑛𝑐𝑖𝑎 𝑐𝑎𝑙𝑐𝑢𝑙𝑎𝑑𝑎 𝑑𝑒 𝑟𝑒𝑐𝑜𝑟𝑟𝑖𝑑𝑜,𝑒𝑛 𝑘𝑖𝑙ó𝑚𝑒𝑡�
𝑅 = 𝑉𝑎𝑙𝑜𝑟 𝑑𝑒 𝑙𝑜𝑠 𝑟𝑒𝑐𝑎𝑟𝑔𝑜�
*/

//𝐶𝑜𝑠𝑡𝑜 𝑑𝑒𝑙 𝑠𝑒𝑟𝑣𝑖𝑐𝑖𝑜 = 𝐵 + ((𝐶 ∗ (1 + 𝐹𝐶𝑎𝑙)) ∗ (1 + 𝐹𝐶𝑜𝑛𝑔) ∗ 𝐷𝑠) + �

//Costoservicio=B+((C*(1+𝐹𝐶𝑎𝑙))*(1 + 𝐹𝐶𝑜𝑛𝑔)*Ds)+R;


//𝐶 =(𝐶𝐹𝑖 + 𝐶𝑉𝑖 + 𝐶𝐶𝑖/)/𝐾𝑚𝑒𝑠
/*
Dónde:
𝐶 = 𝐶𝑜𝑠𝑡𝑜 𝑝𝑜𝑟 𝑘𝑖𝑙ó𝑚𝑒𝑡𝑟𝑜
𝐶𝑉𝑖 = 𝐶𝑜𝑠𝑡𝑜𝑠 𝑣𝑎𝑟𝑖𝑎𝑏𝑙𝑒𝑠 𝑚𝑒𝑛𝑠𝑢𝑎𝑙𝑒𝑠
𝐶𝐹𝑖 = 𝐶𝑜𝑠𝑡𝑜𝑠 𝑓𝑖𝑗𝑜𝑠 𝑚𝑒𝑛𝑠𝑢𝑎𝑙𝑒𝑠
𝐶𝐶𝑖 = 𝐶𝑜𝑠𝑡𝑜𝑠 𝑑𝑒 𝑐𝑎𝑝𝑖𝑡𝑎𝑙 𝑚𝑒𝑛𝑠𝑢𝑎𝑙𝑒𝑠
𝐾𝑚𝑒𝑠 = 𝐾𝑖𝑙ó𝑚𝑒𝑡𝑟𝑜𝑠 𝑟𝑒𝑐𝑜𝑟𝑟𝑖𝑑𝑜𝑠 𝑎𝑙 𝑚𝑒�

*/


var  CFi=0;
var  CVi =0;
var CCi=0;
var Kmes=0;
//C =(CFi + CVi + CCi)/Kmes


//𝐵 = 2.8 ∗ (𝐶 ∗ (1 + 𝐹𝐶𝑎𝑙))
//B=2.8*(C(1+FCal))

//𝐵 = 𝐶 ∗ (1 + 𝐹𝑐𝑎𝑙) ∗
//B= C* (1 + FCal) ∗(KrecoridosDia/ncarrerasdia)


// 𝑀 = 5 ∗ (𝐶 ∗ (1 + 𝐹𝐶𝑎𝑙)) carrera minima
//M= 5*(C*(1 + FCal));










































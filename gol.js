      //code written by michaelcorduroy in 2024. have fun. 


    const canvas = document.getElementById("gameBoard");
    const ctx = canvas.getContext("2d");
    const colorPicker = document.getElementById("colorPicker");
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    const clearButton = document.getElementById("clearButton");
    const preloadSel =  document.getElementById("preloader");
  

    const preload1 =  [[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]];

    const pulsar = [[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null], [null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null], [null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null], [null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null], [null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null], [null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null], [null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]];

    const loop = [[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null], [null, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null], [null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null], [null, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]]; 

    const beacons = [[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null], [null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null], [null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null], [null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]];
    
    const glider = [[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]];

    const shuriken = [[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]];

    const flower = [[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null], [null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null], [null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null], [null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null], [null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null], [null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null], [null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null], [null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null], [null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null], [null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null], [null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]];

    const clover = [[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, {alive: true, color: "#f5f90b"}, null, {alive: true, color: "#f5f90b"}, null, null, null, null, null, null, null, null], [null, null, null, null, null, {alive: true, color: "#f5f90b"}, {alive: true, color: "#f5f90b"}, {alive: true, color: "#f5f90b"}, null, {alive: true, color: "#f5f90b"}, {alive: true, color: "#f5f90b"}, {alive: true, color: "#f5f90b"}, null, null, null, null, null, null], [null, null, null, null, {alive: true, color: "#f5f90b"}, null, null, null, {alive: true, color: "#f5f90b"}, null, null, null, {alive: true, color: "#f5f90b"}, null, null, null, null, null], [null, null, null, null, {alive: true, color: "#f5f90b"}, null, {alive: true, color: "#f5f90b"}, null, null, null, {alive: true, color: "#f5f90b"}, null, {alive: true, color: "#f5f90b"}, null, null, null, null, null], [null, null, null, null, null, {alive: true, color: "#f5f90b"}, {alive: true, color: "#f5f90b"}, null, {alive: true, color: "#f5f90b"}, null, {alive: true, color: "#f5f90b"}, {alive: true, color: "#f5f90b"}, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, {alive: true, color: "#f5f90b"}, {alive: true, color: "#f5f90b"}, null, {alive: true, color: "#f5f90b"}, null, {alive: true, color: "#f5f90b"}, {alive: true, color: "#f5f90b"}, null, null, null, null, null, null], [null, null, null, null, {alive: true, color: "#f5f90b"}, null, {alive: true, color: "#f5f90b"}, null, null, null, {alive: true, color: "#f5f90b"}, null, {alive: true, color: "#f5f90b"}, null, null, null, null, null], [null, null, null, null, {alive: true, color: "#f5f90b"}, null, null, null, {alive: true, color: "#f5f90b"}, null, null, null, {alive: true, color: "#f5f90b"}, null, null, null, null, null], [null, null, null, null, null, {alive: true, color: "#f5f90b"}, {alive: true, color: "#f5f90b"}, {alive: true, color: "#f5f90b"}, null, {alive: true, color: "#f5f90b"}, {alive: true, color: "#f5f90b"}, {alive: true, color: "#f5f90b"}, null, null, null, null, null, null], [null, null, null, null, null, null, null, {alive: true, color: "#f5f90b"}, null, {alive: true, color: "#f5f90b"}, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]];

    const hello = [[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, {alive: true, color: "#ffffff"}, null, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, {alive: true, color: "#ffffff"}, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, {alive: true, color: "#ffffff"}, null, {alive: true, color: "#ffffff"}, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]];

    const xyz = [[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, {alive: true, color: "#167e43"}, null, null, null, {alive: true, color: "#167e43"}, null, {alive: true, color: "#167e43"}, null, null, {alive: true, color: "#167e43"}, null, {alive: true, color: "#167e43"}, {alive: true, color: "#167e43"}, {alive: true, color: "#167e43"}, null, null], [null, null, null, {alive: true, color: "#167e43"}, null, {alive: true, color: "#167e43"}, null, null, {alive: true, color: "#167e43"}, null, null, {alive: true, color: "#167e43"}, null, null, null, {alive: true, color: "#167e43"}, null, null], [null, null, null, null, {alive: true, color: "#167e43"}, null, null, null, {alive: true, color: "#167e43"}, {alive: true, color: "#167e43"}, {alive: true, color: "#167e43"}, {alive: true, color: "#167e43"}, null, null, {alive: true, color: "#167e43"}, null, null, null], [null, null, null, {alive: true, color: "#167e43"}, null, {alive: true, color: "#167e43"}, null, null, null, {alive: true, color: "#167e43"}, {alive: true, color: "#167e43"}, null, null, {alive: true, color: "#167e43"}, null, null, null, null], [null, null, {alive: true, color: "#167e43"}, null, null, null, {alive: true, color: "#167e43"}, null, null, {alive: true, color: "#167e43"}, {alive: true, color: "#167e43"}, null, null, {alive: true, color: "#167e43"}, {alive: true, color: "#167e43"}, {alive: true, color: "#167e43"}, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]];





    //prevent array mutations and keep original copies of preloads
    function deepClone(arr) {
        return JSON.parse(JSON.stringify(arr));
    }



    // Define grid size (18x18)
    const GRID_SIZE = 18;

    // Define square size (adjust based on desired canvas size)
    let SQUARE_SIZE;

    // Initial grid state (null for white, object with alive and color properties for colored squares)
    let grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));

    function updateCanvasSize() {
      const canvasSize = Math.min(window.innerWidth, window.innerHeight) * 0.9;
      canvas.width = Math.min(canvasSize, 600); // Maximum width is 600px
      canvas.height = canvas.width; // Keep square aspect ratio
      SQUARE_SIZE = canvas.width / GRID_SIZE; // Update square size based on canvas size
      drawGrid(); // Redraw the grid with the new size
    }

    // Function to draw a rectangle with border
    function drawSquare(x, y, color) {
      ctx.fillStyle = color || "black";
      ctx.fillRect(x, y, SQUARE_SIZE, SQUARE_SIZE);
      ctx.strokeStyle = "black";
      ctx.strokeRect(x, y, SQUARE_SIZE, SQUARE_SIZE);
    }

    // Function to draw the entire grid
    function drawGrid() {
      for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
          const x = col * SQUARE_SIZE;
          const y = row * SQUARE_SIZE;
          const cell = grid[row][col];
          drawSquare(x, y, cell ? cell.color : null); // Draw the square with its color
        }
      }
    }

    // Function to count live neighbors and their colors of a cell
    function countLiveNeighborsAndColors(row, col) {
      let count = 0;
      const colorCounts = {};
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue; // Skip the cell itself
          const newRow = row + i;
          const newCol = col + j;
          if (newRow >= 0 && newRow < GRID_SIZE && newCol >= 0 && newCol < GRID_SIZE) {
            const neighbor = grid[newRow][newCol];
            if (neighbor) {
              count++;
              if (colorCounts[neighbor.color]) {
                colorCounts[neighbor.color]++;
              } else {
                colorCounts[neighbor.color] = 1;
              }
            }
          }
        }
      }
      return { count, colorCounts };
    }

    // Function to determine the most frequent color among neighbors
    function getDominantColor(colorCounts) {
      let dominantColor = null;
      let maxCount = 0;
      for (const color in colorCounts) {
        if (colorCounts[color] > maxCount) {
          maxCount = colorCounts[color];
          dominantColor = color;
        }
      }
      return dominantColor;
    }

    //updates loaded patterns for colors
   function updateCellColors(color) {
        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE; col++) {
                if (grid[row][col]) {
                    grid[row][col].color = color;
                }
            }
        }
    }

    // Function to update the grid based on Game of Life rules
    function updateGrid() {
      let newGrid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
      for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
          const { count, colorCounts } = countLiveNeighborsAndColors(row, col);
          const cell = grid[row][col];
          if (cell) {
            newGrid[row][col] = count === 2 || count === 3 ? cell : null;
          } else {
            if (count === 3) {
              newGrid[row][col] = { alive: true, color: getDominantColor(colorCounts) };
            }
          }
        }
      }
      grid = newGrid;
      drawGrid();
    }

    // Add event listener for click on the canvas
    canvas.addEventListener("click", function(event) {
      const clickX = event.offsetX;
      const clickY = event.offsetY;

      // Calculate the clicked square coordinates based on grid size and square size
      const clickedRow = Math.floor(clickY / SQUARE_SIZE);
      const clickedCol = Math.floor(clickX / SQUARE_SIZE);

      if (clickedRow >= 0 && clickedRow < GRID_SIZE && clickedCol >= 0 && clickedCol < GRID_SIZE) {
        console.log("Clicked square:", clickedRow, clickedCol);

        // Set the color of the clicked square
        if (grid[clickedRow][clickedCol]) {
          grid[clickedRow][clickedCol] = null;
        } else {
          grid[clickedRow][clickedCol] = { alive: true, color: colorPicker.value };
        }

        // Redraw the grid with the updated color/state
        drawGrid();
      } else {
        console.log("Clicked outside the grid");
      }
    });

    // add an event listener for the pattern preloader
    preloadSel.addEventListener('change', function(event){
    
        //get selected value
        const selectedVal = this.value;
        
        switch(selectedVal){
            case 'pulsar':
                grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
                grid = deepClone(pulsar);
                updateCellColors(colorPicker.value);
                drawGrid();
                break;
            case 'loop':
                grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
                grid = deepClone(loop);
                updateCellColors(colorPicker.value);
                drawGrid();
                break;
            case 'beacons':
                grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
                grid = deepClone(beacons);
                updateCellColors(colorPicker.value);
                drawGrid();
                break;        
            case 'glider':
                grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
                grid = deepClone(glider);
                updateCellColors(colorPicker.value);
                drawGrid();
                break;        
            case 'shuriken':
                grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
                grid = deepClone(shuriken);
                updateCellColors(colorPicker.value);
                drawGrid();
                break;
            case 'flower':
                grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
                grid = deepClone(flower);
                updateCellColors(colorPicker.value);
                drawGrid();
                break;
            case 'clover':
                grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
                grid = deepClone(clover);
                updateCellColors(colorPicker.value);
                drawGrid();
                break;
            case 'hello':
                grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
                grid = deepClone(hello);
                updateCellColors(colorPicker.value);
                drawGrid();
                break;
            case 'xyz':
                grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
                grid = deepClone(xyz);
                updateCellColors(colorPicker.value);
                drawGrid();
                break;
        }

    });

    //temporary function to print grid to the console. you can use it to create new preloaded patterns
    //to do this just draw your pattern then call printGrid in the console. 
    //from there just make an const equal to the variable and just copy what i did on the case switch. ez pz. 
    function printGrid(){
        // Convert the grid to a formatted string
        let string = '[' + grid.map(row => '[' + row.map(cell => cell ? `{alive: true, color: "${cell.color}"}` : 'null').join(', ') + ']').join(', ') + ']';
        console.log(string);
    }


    // Set canvas dimensions and update size
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Draw the initial grid
    drawGrid();

    // Animation control
    let intervalId;
    startButton.addEventListener("click", () => {
      if (!intervalId) {
        intervalId = setInterval(updateGrid, 500); // Update the grid every 500ms
        startButton.classList.add("faded");
        stopButton.classList.remove("faded");
      }
    });

    stopButton.addEventListener("click", () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        stopButton.classList.add("faded");
        startButton.classList.remove("faded");
      }
    });

    clearButton.addEventListener("click", () => {
      grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
      drawGrid();
      preloadSel.value = "zero";
    });

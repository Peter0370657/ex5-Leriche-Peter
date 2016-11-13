module.exports = {

 /*6 resources:  Drones, Weer, events, opleiding, locatie, devices*/

    drones : {},

    listDrones : function() {
        var allDrones = [];  
        for (var item in this.drones) {
            allDrones.push(this.drones[item]); 
        };
        return allDrones; 
    },

    
    searchDrones : function(id) {
        return this.drones[id];
    },

    
    addDrone : function (drone) {
        this.drones[drone.id] = drone;
    },

   Weer : {},

  
    listWeer : function() {
        var allWeer = []; 
        for (var item in this.Weer) {
            allWeer.push(this.Weer[item]); 
        };
        return allWeer; 
    },

    
    searchWeer : function(id) {
        return this.Weer[id];
    },

    
    addWeer : function (Weer) {
        this.Weer[Weer.id] = Weer;
    },
 events : {},


    listevents : function() {
        var allevents = [];  
        for (var item in this.events) {
            allevents.push(this.events[item]); 
        };
        return allevents; 
    },

 
    searchevents : function(id) {
        return this.events[id];
    },

    
    addevents : function (events) {
        this.events[events.id] = events;
    },
 opleiding : {},

   
    listopleiding: function() {
        var allopleiding = []; 
        for (var item in this.opleiding) {
            allopleiding.push(this.opleiding[item]); 
        };
        return allopleiding;
    },

   
    searchopleiding : function(id) {
        return this.opleiding[id];
    },

 
    addopleiding : function (opleiding) {
        this.opleiding[opleiding.id] = opleiding;
    },
 locatie : {},

   
    listlocatie : function() {
        var alllocatie = []; 
        for (var item in this.locatie) {
            alllocatie.push(this.locatie[item]); 
        };
        return alllocatie; 
    },


    searchlocatie : function(id) {
        return this.locatie[id];
    },

    
    addlocatie : function (locatie) {
        this.locatie[locatie.id] = locatie;
    },
 devices : {},


    listdevices : function() {
        var alldevices = []; 
        for (var item in this.devices) {
            alldevices.push(this.devices[item]); 
        };
        return alldevices; 
    },

  
    searchdevices : function(id) {
        return this.devices[id];
    },

   
    adddevices : function (devices) {
        this.devices[devices.id] = devices;
    },

};

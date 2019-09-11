/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
		document.getElementById("Bread").addEventListener("click", setBread);
		document.getElementById("Milk").addEventListener("click", setMilk);
	document.getElementById("Eggs").addEventListener("click", setEggs);	
		document.getElementById("Apples").addEventListener("click", setApples);
		document.getElementById("button1").addEventListener("click", reset1);
    },
	
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};
	
app.initialize();

function reset1(){
	Bread.style.color = "olive";
	Milk.style.color = "olive";
	Eggs.style.color = "olive";
	Apples.style.color = "olive";
}

function setBread() {
	changeMe.innerHTML = "Price: $3.00";
	Bread.style.color = "brown";
}
function setMilk() {
	changeMe.innerHTML = "Price: $4.00";
	Milk.style.color = "white";
}
function setEggs() {
	changeMe.innerHTML = "Price: $2.50";
	Eggs.style.color = "yellow";
}
function setApples() {
	changeMe.innerHTML = "Price: $2.00";
	Apples.style.color = "red";
}
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
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'ValutaCalc.receivedEvent(...);'
    onDeviceReady: function() {

        const inputs = ['value', 'value2'];
        let el_focus = document.getElementById('value');
        window.addEventListener('focus', function( event ) {
            const el = event.path[0];
            if (inputs.includes(el.id) ) {
                el_focus = el;
            }
        }, true);


        // document.getElementById('button').addEventListener('click', ()=>{
        //     console.log(el_focus);
        //     document.getElementById('value').value = '1';
        //     document.querySelectorAll("button.number-button");
        // });

        const buttons = document.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function(event) {

                el_focus.value = el_focus.value + event.currentTarget.value
            })
        }

        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        const parentElement = document.getElementById(id);
        let listeningElement = parentElement.querySelector('.listening');
        let receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
function euroConverter(){
    document.converter.dollar.value = document.converter.euro.value * 1.470;
}
function dollarConverter(){
    document.converter.euro.value = document.converter.dollar.value * 0.680;
}
function dot() {
    document.getElementById("btn").value = ".";
}
function remove() {
    document.getElementById("conv").reset();
}
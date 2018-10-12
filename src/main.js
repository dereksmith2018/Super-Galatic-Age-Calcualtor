import { GalaticAge } from './supergalatic.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $("#formDate").submit(function(event){
        event.preventDefault();
        let year = $("#date").val();
        // let userAge = $("#yearsOld");
        
        let newYear = new GalaticAge(year);
        // let newUserAge = new GalaticAge(userAge);
        console.log((newYear).findYear());
        $("resultYear").text(newYear).findYear();

        // $("resultAge").text(newUserAge).findMercury();
    })
})

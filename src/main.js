import { GalaticAge } from '../src/supergalatic.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $("#formDate").submit(function(event){
        event.preventDefault();
        let years = $("#date").val();
        let newYear = new GalaticAge(years);
        $("#resultYear").text(newYear.findYear());
        
        
        // let year = $("#date").val();
        // // let userAge = $("#yearsOld");
        
        // let newYear = new GalaticAge(year);
        // // let newUserAge = new GalaticAge(userAge);
        // console.log((newYear).findYear());
        // $("#resultYear").text(newYear).findYear();
    })
})

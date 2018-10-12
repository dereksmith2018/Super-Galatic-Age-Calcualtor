import { GalaticAge } from '../src/supergalatic.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $("#formDate").submit(function(event){
        event.preventDefault();
        let years = $("#date").val();
        let userAge = $("#yearsOld");
        let newYear = new GalaticAge(years);
        let newUserAge = new GalaticAge(userAge);
        console.log(newUserAge.findMercury());
        $("#resultYear").text(newYear.findYear());
        $("#resultAge").text(newUserAge.findMercury());
        
       
        
       
        
    })
})

import { GalaticAge } from '../src/supergalatic.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $("form#spaceAge").submit(function(event){
        // $("result").text("");
        event.preventDefault();
        let age = parseInt($("#numberInput").val());
        let newUserAge = new GalaticAge(age);
        // console.log(newUserAge);
        $("#resultAgeOne").text(newUserAge.findMercury());
        $("#resultAgeTwo").text(newUserAge.findVenus());
        $("#resultAgeThree").text(newUserAge.findMars());
        $("#resultAgeFour").text(newUserAge.findJupiter());
        
       
        
       
        
    })
})

import { GalaticAge, PlanetWeight } from '../src/supergalatic.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $("form#spaceAge").submit(function(event){
        // $("result").text("");
        event.preventDefault();
        let weight = parseInt($("#weightInput").val());
        let newWeight = new PlanetWeight(weight);
        let age = parseInt($("#numberInput").val());
        let newUserAge = new GalaticAge(age);
        // console.log(newUserAge);
        $("#resultAgeOne").text(newUserAge.findMercury());
        $("#resultAgeTwo").text(newUserAge.findVenus());
        $("#resultAgeThree").text(newUserAge.findMars());
        $("#resultAgeFour").text(newUserAge.findJupiter());
        $('#timeleftMercury').text(newUserAge.timeLeftMercury());
        $('#timeleftVenus').text(newUserAge.timeLeftVenus());
        $('#timeleftMars').text(newUserAge.timeLeftMars());
        $('#timeleftJupiter').text(newUserAge.timeLeftJupiter());
        $('#resultWeightMercury').text(newWeight.gravityMercury());
        $('#resultWeightVenus').text(newWeight.gravityVenus());
        $('#resultWeightMars').text(newWeight.gravityMars());
        $('#resultWeightJupiter').text(newWeight.gravityJupiter());


        
       
        
       
        
    })
})

import { isNumber } from "util";

"use strict";


export default class EventHandler{
    constructor(){
        this.info = {
            Name: "",
            Health: "100",
            Type: "",
            Strength: "",
            Dex: "",
            Con: "",
            Int: "",
            Wis: "",
            Cha: "",
            Armor: "",
            Work: "",
            Damage: "",
            Magic: "",
            Ultimate: "",
        }
        this.fourDie;
        this.diceNum;
        this.sixDie;
        this.eightDie;
        this.tenDie;
        this.twelveDie;
        this.twentyDie;
        this.bigDie;
        this.diceText;
        this.getElements();
        this.infoPrompt();
        this.numHandler();
    }

    //document.getElementById("health").innerHTML = "Health: 100";

    infoPrompt(){
        
        this.info.Name = window.prompt("What's your name?");
        document.getElementById("nameChar").innerHTML = "Name: " + this.info.Name;

        this.info.Type = window.prompt("What's your character type?");
        document.getElementById("type").innerHTML = "Type: " + this.info.Type;
        
        this.info.Strength = parseInt(window.prompt("How much strength do you have?"));
    }


    getElements(){
        this.diceText = document.getElementById("rollDice");
        this.fourDie = document.getElementById("4Dice").addEventListener("click", () => {
            this.diceNum = Math.floor(Math.random() * 4)+1; 
            this.diceText.innerHTML = this.diceNum;
        })

        this.sixDie = document.getElementById("6Dice").addEventListener("click", () =>{
            this.diceNum = Math.floor(Math.random() * 6)+1; 
            this.diceText.innerHTML = this.diceNum;
        })

        this.eightDie = document.getElementById("8Dice").addEventListener("click", () =>{
            this.diceNum = Math.floor(Math.random() * 8)+1; 
            this.diceText.innerHTML = this.diceNum;
        })

        this.tenDie = document.getElementById("10Dice").addEventListener("click", () =>{
            this.diceNum = Math.floor(Math.random() * 10)+1; 
            this.diceText.innerHTML = this.diceNum;
        })

        this.twelveDie = document.getElementById("12Dice").addEventListener("click", () =>{
            this.diceNum = Math.floor(Math.random() * 12)+1; 
            this.diceText.innerHTML = this.diceNum;
        })

        this.twentyDie = document.getElementById("20Dice").addEventListener("click", () =>{
            this.diceNum = Math.floor(Math.random() * 20)+1; 
            this.diceText.innerHTML = this.diceNum;
        })

        this.bigDie = document.getElementById("100Dice").addEventListener("click", () =>{
            this.diceNum = Math.floor(Math.random() * 100)+1; 
            this.diceText.innerHTML = this.diceNum;
        })
    }
}
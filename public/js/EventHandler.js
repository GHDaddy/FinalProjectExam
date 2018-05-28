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
        this.lessHealth;
        this.moreHealth;
        this.Health = 100;
        this.cardButton;
        this.cardNum;
        this.cardText;
        
        this.enemyType;
        this.enemyHealth;
        this.damageEnemy;
        this.enemyHealthPrompt;
        this.enemyDamageButton;
        this.enemyChangeButton;
        
        this.getElements();
        
        this.infoPrompt();
        this.playerHealthHandler();
        this.denizenHealth();
    }
    infoPrompt(){
        document.getElementById("health").innerHTML = "Health: " + this.Health;

        this.info.Name = window.prompt("What's your name?");
        document.getElementById("nameChar").innerHTML = "Name: " + this.info.Name;

        this.info.Type = window.prompt("What's your character type?");
        document.getElementById("type").innerHTML = "Type: " + this.info.Type;
        
        this.info.Strength = Number(window.prompt("How much strength do you have? (Include your trait bonus)"));
            while (isNaN(this.info.Strength)){
                this.info.Strength = Number(window.prompt("That's not a number, try again"));
            }
        document.getElementById("strength").innerHTML = "Strength: " + this.info.Strength
        
        this.info.Dex = parseInt(window.prompt("How much dexterity do you have? (Include your trait bonus)"));
            while(isNaN(this.info.Dex)){
                this.info.Dex = Number(window.prompt("That's not a number, try again"));
            }
        document.getElementById("dex").innerHTML = "Dex: " + this.info.Dex;
        
        this.info.Con = parseInt(window.prompt("How much con do you have? (Include your trait bonus)"));
            while(isNaN(this.info.Con)){
                this.info.Con = Number(window.prompt("That's not a number, try again"));
            }
            document.getElementById("con").innerHTML = "Con: " + this.info.Con;
    
        this.info.Int = parseInt(window.prompt("How much intelligence do you have? (Include your trait bonus)"));
            while(isNaN(this.info.Int)){
                this.info.Int = Number(window.prompt("That's not a number, try again"));
            }
            document.getElementById("int").innerHTML = "Int: " + this.info.Int;
        
        this.info.Wis = parseInt(window.prompt("How much wisdom do you have? (Include your trait bonus)"));
            while(isNaN(this.info.Wis)){
                this.info.Wis = Number(window.prompt("That's not a number, try again"));
            }
            document.getElementById("wis").innerHTML = "Wis: " + this.info.Wis;
        
        this.info.Cha = parseInt(window.prompt("How much charisma do you have? (Include your trait bonus)"));
            while(isNaN(this.info.Cha)){
                this.info.Cha = Number(window.prompt("That's not a number, try again"));
            }
            document.getElementById("cha").innerHTML = "Cha: " + this.info.Cha;
        
        this.info.Armor = parseInt(window.prompt("What's your armor level? (Include your trait bonus)"));
            while(isNaN(this.info.Armor)){
                this.info.Armor = Number(window.prompt("That's not a number, try again"));
            }
            document.getElementById("armor").innerHTML = "Armor: " + this.info.Armor;
        
        this.info.Work = parseInt(window.prompt("What's your work level? (Include your trait bonus)"));
            while(isNaN(this.info.Work)){
                this.info.Work = Number(window.prompt("That's not a number, try again"));
            }
            document.getElementById("work").innerHTML = "Work: " + this.info.Work;
        
        this.info.Damage = parseInt(window.prompt("What's your damage level (Include your trait bonus)"));
            while(isNaN(this.info.Damage)){
                this.info.Damage = Number(window.prompt("That's not a number, try again"));
            }
            document.getElementById("damage").innerHTML = "Dam: " + this.info.Damage;

        this.info.Magic = parseInt(window.prompt("What's your magic level (Include your trait bonus)"));
            while(isNaN(this.info.Magic)){
                this.info.Magic = Number(window.prompt("That's not a number, try again"));
            }
            document.getElementById("magic").innerHTML = "Mag: " + this.info.Magic;

            this.info.Ultimate = parseInt(window.prompt("What's your ultimate level (Include your trait bonus)"));
            while(isNaN(this.info.Ultimate)){
                this.info.Ultimate = Number(window.prompt("That's not a number, try again"));
            }
            document.getElementById("ultimate").innerHTML = "Ult: " + this.info.Ultimate;
    }


    getElements(){
        this.diceText = document.getElementById("rollDice");
        this.cardText = document.getElementById("cardText");
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

        //health buttons
        this.lessHealth = document.getElementById("lessHealth").addEventListener("click", () => {
            this.Health--;
            console.log(this.Health);
            document.getElementById("health").innerHTML = "Health: " + this.Health;
            this.playerHealthHandler();
        })

        this.moreHealth = document.getElementById("moreHealth").addEventListener("click", () => {
            this.Health++;
            console.log(this.Health);
            document.getElementById("health").innerHTML = "Health: " + this.Health;
            this.playerHealthHandler();
        })

        //card button
        this.cardButton = document.getElementById("drawCard").addEventListener("click", () =>{
            this.cardNum = Math.floor(Math.random() * 10)+1;
            this.cardText.innerHTML = this.cardNum; 
        })

        
    }

    //handles heart visibility
    playerHealthHandler(){
        if (this.Health < 90){
            document.getElementById("100heart").style.visibility = "hidden";
        }
        if (this.Health >= 90){
            document.getElementById("100heart").style.visibility = "visible";
        }


        if (this.Health < 80){
            document.getElementById("90heart").style.visibility = "hidden";
        }

        if (this.Health >= 80){
            document.getElementById("90heart").style.visibility = "visible";
        }


        if (this.Health < 70){
            document.getElementById("80heart").style.visibility = "hidden";
        }

        if (this.Health >= 70){
            document.getElementById("80heart").style.visibility = "visible";
        }


        if (this.Health < 60){
            document.getElementById("70heart").style.visibility = "hidden";
        }

        if (this.Health >= 60){
            document.getElementById("70heart").style.visibility = "visible";
        }


        if (this.Health < 50){
            document.getElementById("60heart").style.visibility = "hidden";
        }

        if (this.Health >= 50){
            document.getElementById("60heart").style.visibility = "visible";
        }


        if (this.Health < 40){
            document.getElementById("50heart").style.visibility = "hidden";
        }

        if (this.Health >= 40){
            document.getElementById("50heart").style.visibility = "visible";
        }


        if (this.Health < 30){
            document.getElementById("40heart").style.visibility = "hidden";
        }

        if (this.Health >= 30){
            document.getElementById("40heart").style.visibility = "visible";
        }


        if (this.Health < 20){
            document.getElementById("30heart").style.visibility = "hidden";
        }

        if (this.Health >= 20){
            document.getElementById("30heart").style.visibility = "visible";
        }


        if (this.Health < 10){
            document.getElementById("20heart").style.visibility = "hidden";
        }

        if (this.Health >= 10){
            document.getElementById("20heart").style.visibility = "visible";
        }


        if (this.Health <= 0){
            document.getElementById("10heart").style.visibility = "hidden";
        }

        if (this.Health > 0){
            document.getElementById("10heart").style.visibility = "visible";
        }
    }

    denizenHealth(){
        this.enemyChangeButton = document.getElementById("changeButton").addEventListener("click", () =>{
            this.enemyType = window.prompt("What's the enemy?");
            this.enemyHealth = Number(window.prompt("What's it's health?"));
            while(isNaN(this.enemyHealth)){
                this.enemyHealth = Number(window.prompt("That's not a number, try again."))
            }
            document.getElementById("denizenName").innerHTML = "Enemy Type: " + this.enemyType;
            document.getElementById("denizenHealth").innerHTML = "Health: " + this.enemyHealth;
        })
        
        this.enemyDamageButton = document.getElementById("damageButton").addEventListener("click", () => {
            this.damageEnemy = Number(window.prompt("How much damage did you deal?"));
            while(isNaN(this.damageEnemy)){
                this.damageEnemy = Number(window.prompt("That's not a number, try again!"));
            }
            this.enemyHealth = this.enemyHealth - this.damageEnemy;
            console.log(this.enemyHealth);
            document.getElementById("denizenHealth").innerHTML = "Health: " + this.enemyHealth;
            if (this.enemyHealth <= 0){
                document.getElementById("denizenName").innerHTML = "Enemy Type: ";
                document.getElementById("denizenHealth").innerHTML = "Health: ";
    
            }
        })
        
    }

}
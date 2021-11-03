class  Lion{    
    constructor(name,  str, biteStr, jump, rested, alive) {       
        
        this.name = name;        
        this.str = str;        
        this.biteStr = biteStr;        
        this.jump = jump;       
        this.sneak = true;        
        this.legs = 4;        
        this.rested = rested;   
        this.alive = alive;
         } 

        train()    {       
              this.str += 5;        
              this.biteStr += 1;  
              this.jump += 10; 
              this.rested -= 10;
              
            }    
            
        eat()   {        
            this.biteStr +=1;
            this.rested -= 10;
        }    
            
        sleep() {           
            this.rested = 100;
         }
        
        lionDie(Lion){
            
            if(this.hunger < 0 || this.hunger > 100){

                this.alive = false;
            
           } 
        }

        }

class  Goat{    
    constructor(name,  run, runSpeed, agility, hunger, rested, alive) {       
        
        this.name = name;        
        this.run = run;        
        this.runSpeed = runSpeed;        
        this.agility = agility;       
        this.alive = alive;        
        this.legs = 4;        
        this.hunger = hunger; 
        this.rested = rested;  
    
         }    
         
         train()    {              
              this.runSpeed += 5;  
              this.agility += 5; 
              this.hunger -= 10;
              this.rested -= 15;
              
            }    
            
        eat()   {        
            this.leapStr +=1;
            this.hunger += 20;
        }    
            
        sleep() {       
            this.run = 100;    
            this.hunger -= 10;
            this.rested += 100;

         }
        
        goatDie(Goat){
            
            if(this.hunger < 0 || this.hunger > 100){

                this.alive = false;
            
           } 
        }

        
    }
        

class  Rat{    
    constructor(name,  leap, leapStr, agility, rested, alive) {       
                
        this.name = name;        
        this.leap = leap;                         
        this.leapStr = leapStr;        
        this.agility = agility;       
        this.sneak = false;        
        this.legs = 4;        
        this.rested = rested;
        this.alive = alive;   
        }    
                 
        train()    {       
            this.leap += 5;        
            this.leapStr += 1;   
            this.rested -= 10;
                     
            }    
                    
            eat()   {        
                this.leapStr +=1;
                this.rested -= 10;
                }    
                    
            sleep() {           
        
                this.rested = 100;
        
                 }
        
        ratDie(Rat){
            
                if(this.hunger < 0 || this.hunger > 100){
        
                    this.alive = false;
                    
                   } 
                }         
                
        }



         
         
         const ron = new Lion('Ron', 55, 35, 75, 82)
         const Doe = new Goat('Doe', 70, 100, 40, 60, 20)
         const Mike = new Rat('Mike', 20, 40, 60, 80)
         
         module.exports = {  
             
              ron,
              Lion,
              Goat,
              Doe,
              Mike,
              Rat,
              
              
              
        
        }

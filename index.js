class  Lion{    
    constructor(name,  str, biteStr, jump, rested) {       
        
        this.name = name;        
        this.str = str;        
        this.biteStr = biteStr;        
        this.jump = jump;       
        this.sneak = true;        
        this.legs = 4;        
        this.rested = rested;   
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

         }}

class  Goat{    
    constructor(name,  run, runSpeed, agility, hunger, rested) {       
        
        this.name = name;        
         this.run = run;        
         this.runSpeed = runSpeed;        
         this.agility = agility;       
        this.sneak = false;        
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
            this.hunger -= 10;
            this.rested += 100;

         }}

class  Rat{    
    constructor(name,  leap, leapStr, agility, rested) {       
                
        this.name = name;        
        this.leap = leap;                         
        this.leapStr = leapStr;        
        this.agility = agility;       
        this.sneak = false;        
        this.legs = 4;        
        this.rested = rested;   
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
        
                 }}



         
         
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

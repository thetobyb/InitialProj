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
         const Doe = new Goat('Doe', 70, 33, 40, 60)
         
         module.exports = {  
             
              ron,
              Lion,
        
        }

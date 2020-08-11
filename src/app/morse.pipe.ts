import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { ConstantPool } from '@angular/compiler';

@Pipe({
  name: 'morse',

})
export class MorsePipe implements PipeTransform {
  private text : string = "";
      public addWordUsed(word: string){
        
      }

  
   transform(value: string, args?: string): any {
     console.log(value);
     console.log(args)

     if(args == "morse"){
       this.text = "morse code : "
    for (var i = 0; i < value.length; i++) {

    switch(value.charAt(i)) { 
      case "a": { 
         this.text += ". -"
         break; 
      } 
      case "b": { 
        this.text += "- . . ." 
         break; 
      } 
      case "c": { 
        this.text += "— · — ·" 
         break; 
      } 
      case "d": { 
        this.text += "— · ·" 
         break; 
      } 
      case "e": { 
        this.text += "." 
         break; 
      } 
      case "f": { 
        this.text += "· · — · " 
         break; 
      } 
      case "g": { 
        this.text += "— — ·" 
         break; 
      } 
      case "h": { 
        this.text += "· · · ·" 
         break; 
      } 
      case "i": { 
        this.text += "· ·" 
         break; 
      } 
      case "j": { 
        this.text += "· — — — " 
         break; 
      } 
      case "k": { 
        this.text += "— · — " 
         break; 
      } 
      case "l": { 
        this.text += "· — · ·" 
         break; 
      }
      case "n": { 
        this.text += "— —" 
         break; 
      }  
      case "m": { 
        this.text += "— — —" 
         break; 
      } 
      case "o": { 
        this.text += "· — — ·" 
         break; 
      } 
      case "p": { 
        this.text += "- . . ." 
         break; 
      } 
      case "q": { 
        this.text += "— — · —" 
         break; 
      } 
      case "r": { 
        this.text += "· — ·" 
         break; 
      } 
      case "s": { 
        this.text += "· · ·" 
         break; 
      } 
      case "t": { 
        this.text += "—" 
         break; 
      } 
      case "u": { 
        this.text += "· · —" 
         break; 
      } 
      case "v": { 
        this.text += "· · · —" 
         break; 
      } 
      case "w": { 
        this.text += "· — —" 
         break; 
      } 
      case "x": { 
        this.text += "— · · —" 
         break; 
      } 
      case "y": { 
        this.text += "— · — —" 
         break; 
      } 
      case "z": { 
        this.text += "— — · ·" 
         break; 
      } 
      case "æ": { 
        this.text += "· — · —" 
         break; 
      } 
      case "Ä": { 
        this.text += "· — · —" 
         break; 
      } 
      case "Ą": { 
        this.text += "· — · —" 
         break; 
      } 
      case "Ø": { 
        this.text += "— — — ·" 
         break; 
      } 
      case "Ó": { 
        this.text += "— — — ·" 
         break; 
      } 
      case "Ö": { 
        this.text += "— — — ·" 
         break; 
      } 
      case "À": { 
        this.text += "-· — — · —" 
         break; 
      } 
      case "å": { 
        this.text += "· — — · —" 
         break; 
      } 
    } 
  }
  }
    else if(args == "md5"){
  this.text = "md5";
  for (var i = 0; i < value.length; i++) {

    switch(value.charAt(i)) { 
      case "1": { 
         this.text += "· — — — — "
         break; 
      } 
      case "2": { 
        this.text += "· · — — — " 
         break; 
      } 
      case "3": { 
        this.text += "· · · — —" 
         break; 
      } 
      case "4": { 
        this.text += "· · · · —" 
         break; 
      } 
      case "5": { 
        this.text += "· · · · · " 
         break; 
      } 
      case "6": { 
        this.text += "— · · · · " 
         break; 
      } 
      case "7": { 
        this.text += "— · · · ·" 
         break; 
      } 
      case "8": { 
        this.text += "— — — · ·" 
         break; 
      } 
      case "9": { 
        this.text += "— — — — ·" 
         break; 
      } 
      case "0": { 
        this.text += "— — — — " 
         break; 
      } 
      case ".": { 
        this.text += "· — · — · — " 
         break; 
      } 
      case ",": { 
        this.text += "— — · · — —" 
         break; 
      }
      case ":": { 
        this.text += "— — — · · · " 
         break; 
      }  
      case "?": { 
        this.text += "· · — — · · " 
         break; 
      } 
      case "-": { 
        this.text += "— · · · · —" 
         break; 
      } 
      case "/": { 
        this.text += "— · · — ·" 
         break; 
      } 
      case "(": { 
        this.text += "— · — — ·" 
         break; 
      } 
      case ")": { 
        this.text += "— · — — · —" 
         break; 
      } 
      case "\"": { 
        this.text += "· — · · — · " 
         break; 
      } 
      case "\n": { 
        this.text += "· — · — " 
         break; 
      } 
      case "*": { 
        this.text += "— · · —" 
         break; 
      } 
      case "@": { 
        this.text += "· — — · — ·" 
         break; 
      } 

   
    } 
  }
  }


    return this.text;
  }

}



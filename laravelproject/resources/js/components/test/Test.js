import React, { Component } from 'react'
import './Test.css'
export default class Test extends Component {
    submit()
  {
     var s=80;
     
     if (document.getElementById("2").checked==false) 
     {
        s=s-10;
     }
     if (document.getElementById("5").checked==false) 
     {
        s=s-10;
     }
     if (document.getElementById("7").checked==false) 
     {
        s=s-10;
     }   
     if (document.getElementById("12").checked==false) 
     {
        s=s-10;
     }
     if (document.getElementById("15").checked==false) 
     {
        s=s-10;
     }
     if (document.getElementById("16").checked==false) 
     {
        s=s-10;
     }
     if (document.getElementById("20").checked==false) 
     {
        s=s-10;
     }
     if (document.getElementById("24").checked==false) 
     {
        s=s-10;
     }

      if(s<40)  
       { alert("Vous n'avez pas réussi ce test, votre score est  "+s+"/80 ")}
       else
       { alert("Félicitations, vous avez réussi ce test, votre score est  "+s+"/80 ")}
    } 
    
       
    
  
    render() {
        return (
            <div  class ="test">
                
                
                    <form >
                    <div class ="lf">
                        <p>Le commentaire HTML ?</p>
                        <input type="checkbox" id="1"  /> 
                        <label for="1">/* */ </label><br />
                        <input type="checkbox" id="2" name="win" />  
                        <label for="2"> &lt;!-- --&gt;</label><br />
                        <input type="checkbox" id="3"/>
                        <label for="3">&lt;{ }&gt; </label><br />
                        
                        <p>Quelle balise permet de créer des liens ?</p>
                        <input type="checkbox" id="4" /> 
                        <label for="4">&lt;lnk&gt; </label><br />
                        <input type="checkbox"  id="5" name="win"/> 
                        <label for="5">&lt;a&gt; </label><br />
                        <input type="checkbox" id="6" />
                        <label for="6">&lt;r&gt; </label><br />

                        <p>On utilise tr pour ?</p>
                        <input type="checkbox" id="7" name="win"/> 
                        <label for="7">une ligne de tableau </label><br />
                        <input type="checkbox" id="8" /> 
                        <label for="8">une cellule de tableau </label><br />
                        <input type="checkbox" id="9" />
                        <label for="9">tracer une ligne horizontale </label><br />

                        <p>Quelle balise permet la saisie de plusieurs lignes de texte ?</p>
                        <input type="checkbox" id="10" /> 
                        <label for="10"> &lt;input type='multiple'&gt; </label><br />
                        <input type="checkbox" id="11" /> 
                        <label for="11">&lt;input value = 'combo'&gt; </label><br />
                        <input type="checkbox" id="12" name="win" />
                        <label for="12">&lt;textarea&gt; </label><br />
                        </div>
                        <div class="rh">
                        <p>Quelle balise est utilisée pour inclure du code en PHP ?</p>
                        <input type="checkbox" id="13" /> 
                        <label for="13">&lt;src='PHP' &gt; </label><br />
                        <input type="checkbox" id="14" /> 
                        <label for="14">&lt;PHP /PHP&gt; </label><br />
                        <input type="checkbox" id="15" name="win"/>
                        <label for="15">&lt;?PHP ?&gt; </label><br />

                        <p>Comment inclure une feuille de style dans une page html5 ?</p>
                        <input type="checkbox" id="16"name="win" /> 
                        <label for="16">&lt;link rel='stylesheet' href='feuille.css' &gt;</label><br />
                        <input type="checkbox" id="17" /> 
                        <label for="17">&lt;link type='text/css' href='feuille.css' &gt;</label><br />
                        <input type="checkbox" id="18" />
                        <label for="18">&lt;link rel='stylesheet' src='feuille.css'&gt;> </label><br />

                        <p>Quel effet produira la balise "em" appliquée à une ligne ?</p>
                        <input type="checkbox" id="19" /> 
                        <label for="19">sa mise en gras </label><br />
                        <input type="checkbox" id="20" name="win" /> 
                        <label for="20">sa mise en italique </label><br />
                        <input type="checkbox" id="21" />
                        <label for="21">sa mise en forme comme liste à puce </label><br />

                        <p>Quel attribut utiliser pour ouvrir une page dans une nouvelle fenêtre ?</p>
                        <input type="checkbox" id="22" /> 
                        <label for="22">target='page_blank' </label><br />
                        <input type="checkbox" id="23" /> 
                        <label for="23">target='windows.open' </label><br />
                        <input type="checkbox" id="24" name="win"/>
                        <label for="24">target='_blank' </label><br />
                        <input type="submit" value="Score !"  onClick={()=>{this.submit()}}/>
                        </div>
                        
                    </form>

                
            </div>
        )
    }
}

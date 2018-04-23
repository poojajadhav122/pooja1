<?php
  // odd square and eve cube to diplay op
 for ($i=1; $i <=5 ; $i++) 
 { 
   if ($i%2 == 0) {
   	   echo pow($i,3); // here we use pow function instead we have write 3 time $i*$i*$i we can write pow($i,3)
   }
   else{
   	echo $i*$i;
   }
   echo " ";
 }

?>
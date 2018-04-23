<table border="1" width="300">
	<?php
	  for ($i=1; $i <=5 ; $i++) { 
	  	echo "<tr><td> $i </td></tr>";
	  }
	  ?>
</table>


<table border="1" width="300">
	<?php
	  for ($i=1; $i <=5 ; $i++):

	  	echo "<tr><td> $i </td></tr>";

	  endfor;
	  ?>
</table>

<table border="1" width="300">
	<?php
	$i=1;
	  while ($i <=5):
	  	echo "<tr><td> $i </td></tr>";
	  	$i++;
	  endwhile;
	  ?>
</table>


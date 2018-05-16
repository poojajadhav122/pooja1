<?php

session_start();
if(!isset($_SESSION['project_usname'])){
	header("location:../views/index.php");
}
 require_once '../models/db_project.php';
 //pre($_POST);

  if(!preg_match("/^(?=.*[a-z])(?=.*[A-z])(?=.*[0-9])(?=.*[@#\-\$_]).{4,12}$/", $_POST['cpass']))
  {

		echo "invalid current password";

	}
	else if(!preg_match("/^(?=.*[a-z])(?=.*[A-z])(?=.*[0-9])(?=.*[@#\-\$_]).{4,12}$/", $_POST['npass']))
  
	{
		echo "invalid new password";
	}
	else if($_POST['npass']!=$_POST['cnpass'])
	{
		echo "new pass doesnot match with comfirm new password";
	}
	else if($_POST['npass']==$_POST['cpass'])
	{
		echo "new pass should be diff from current password";
	}
	else{
		// echo "ok";
		// print_r($_SESSION);
		// echo $_SESSION['project_email'];
		 $dbpass = $obj->get_password_userwise($_SESSION['project_usemail']);
		//pre($dbpass);

		if(sha1($_POST['cpass'])== $dbpass[0]['us_password']){
			//echo "ok";
			$newpass = sha1($_POST['npass']);
			//echo $newpass;
			$email = $_SESSION['project_usemail'];

			$fans = $obj->update_password($newpass,$email);
			var_dump($fans);
		
		}
		<?php
              $to = "poojajadhav122@gmail.com ";

				$subject ="TEST MAIL FROM PHP CODE";
				$txt = "hello pooja";
				$headers = "from: <poojajadhav122@gmail.com>";

				$result = mail($to,$subject,$txt,$headers);
				var_dump($result);

		else{
			echo"current password mismatch";
		}
	}
?>
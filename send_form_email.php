<?php
if(isset($_POST['mail'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "biuro@freshrollsushi.pl";
    $email_subject = "Kontakt";
 
    function died($error) {
        // your error code can go here
        echo "Przykro nam, ale brakuje danych w formularzu ";
        echo "Ponizej to, czego nam brakuje, by odebrac Twoja wiadomosc.<br /><br />";
        echo $error."<br /><br />";
        echo "Wróc i popraw braki :).<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['mail']) ||
        !isset($_POST['phone']) ||
        !isset($_POST['message'])) {
        died('Przykro nam, ale są błędy w wypełnionym przez Ciebie formularzu.'); 
          
    }
 
     
 
    $name = $_POST['name']; // required
    $mail = $_POST['mail']; // required
    $phone = $_POST['phone']; // required
    $message = $_POST['message']; // not required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$mail)) {
    $error_message .= 'Adres email jest nieprawidlowy<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'Wprowadź poprawne imię.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
 
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "Imie: ".clean_string($name)."\n";
    $email_message .= "e-mail: ".clean_string($mail)."\n";
    $email_message .= "telefon: ".clean_string($phone)."\n";
    $email_message .= "Wiadomosc: ".clean_string($message)."\n";
 
// create email headers
$headers = 'Od: '.$email_from."\r\n".
'Odpowiedz-do: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
Dziękujemy za kontakt. Skontaktujemy się z Tobą tak szybko jak to możliwe.
 
<?php
 
}
?>

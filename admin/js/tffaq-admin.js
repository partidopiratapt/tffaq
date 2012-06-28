jQuery(document).ready(function($) {

 $("#tffaq_checkbox_submit2").click(function(){

 /*** alert('this part working');	***/

 $("#tffaq_action").val($("#tffaq_action2").val()) ;

 $(this).attr('name', 'tffaq_checkbox_submit');
 
 $("#tffaq_checkbox_submit").click();
 
 });	/*** end $("#tffaq_checkbox_submit2").click	***/
 
 /*** let's see if we can do the confirm message from here	***/
  
 $("#tffaq_checkbox_submit").click(function(){
 
 tffaq_action = $("#tffaq_action").val(); 
 
// alert('tffaq action value is' + tffaq_action);
 
 tffaq_type = $("#tffaq_is_question").val();
 
 tffaq_type = ((tffaq_type == 'true')) ? 'Questions' : 'Categories' ;
 
// alert('tffaq type is' + tffaq_type);


 tffaq_confirm = ((tffaq_action == 'delete')) ? confirm('Are you sure you want to delete these ' + tffaq_type + ' ?'):'';
 
// tffaq_confirm = confirm('Are you sure you want to delete these ' + tffaq_type + ' ?');
 
 
 
// alert(tffaq_confirm);
 
 $("#tffaq_confirm").val(tffaq_confirm);
 

 }); 
 
 
 
});



let input = document.getElementById('add-reminder');
let preview = document.getElementsByClassName('preview')[0];
const ENTER_KEY = 13;

onkeyup =function(){
 preview.innerHTML = input.value;
 if (event.which === ENTER_KEY) {
	saveReminder();
 }
}

let notice = document.getElementsByClassName('notice')[0];			
function showNotice(message, isError) {
    notice.innerHTML = message;
    if (isError) { notice.classList.add('error'); }
    else { notice.classList.remove('error'); }
	  
    $('.notices').show()
    setTimeout(function() {$('.notices').hide()}, 2000);
}

let reminders = document.getElementById('reminders');
let index=0;	
let submit = document.getElementById('submit-reminder');
//let previouslength = localStorage.length;
submit.onclick=saveReminder;

function saveReminder(){
	if(input.value!==""){
		localStorage.setItem(`reminder${index++}`, input.value);
		showNotice("Reminder: " + input.value + " was stored", false);
		addReminder(input.value);
			console.log(localStorage);
			input.value="";
			}else{
				showNotice("Empty reminders not allowed", true);
			}
}

function addReminder(value){
	let reminder = document.createElement('li');
	reminder.innerHTML=value;
	reminder.classList.add('reminder');
	reminders.insertBefore(reminder, reminders.firstChild);
	preview.innerHTML="";
	input.focus();
}

let counter =0;
let numberOfReminders = localStorage.length;
if(localStorage.getItem(`reminder${counter}`)!=null){
	for(let i=0; i<localStorage.length; i++ ){
		let storedValue = localStorage.getItem(`reminder${counter++}`)
		addReminder(storedValue);
	}
}

let deleteAllReminders = document.getElementById('clear');
deleteAllReminders.onclick= function(){
	if(localStorage.length>0){
		localStorage.clear();
		console.log(localStorage);
		$('li').not('preview').remove();
		showNotice("All reminders were removed", false);
		input.focus();
	}else{
		showNotice("Emprty Reminders list ", true);
	}
}







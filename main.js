$(document).ready(function () {
   let level = '';

   $('.addTask').click(function () {
      addTask();
   });

   $('.lowLevel').click(function () {
      level = 'lowLevel';
      $('.level').css('border', 'none');
      $(this).css('border', 'solid 3px #000');
   });
   $('.mediumLevel').click(function () {
      level = 'mediumLevel';
      $('.level').css('border', 'none');
      $(this).css('border', 'solid 3px #000');
   });
   $('.highLevel').click(function () {
      level = 'highLevel';
      $('.level').css('border', 'none');
      $(this).css('border', 'solid 3px #000');
   });






   function addTask() {
      let taskName = $('.inputText').val();
      if (taskName) {
         let taskItem = $('<li class="task"></li>').text(taskName).addClass(level);


         $('.taskList').append(taskItem);
         console.log(taskName, level);
      }
      $('.task').click(function () {
         $(this).fadeOut(1600, "linear");
         $(this).remove();
      })
   }





})
console.log(this);
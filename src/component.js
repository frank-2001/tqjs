// alert("Cool")
console.log(page_name);
// page_name=$("title").val();
// console.log(page_name,"xll");
$(".tq-head").html(
    '<div class="md:px-10 px-5 md:py-5 py-3  flex justify-between items-center"> <svg onclick="return goto(\'\')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"> <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" /> </svg> <span class="text-md"> '+page_name.toUpperCase()+' </span> </div>'
)
// Tq-js

// import tailwind framework
const tailwind=document.createElement("script")
tailwind.src="src/tailwind.js"
$("head").append(tailwind);

const script=document.createElement("script")
script.src="src/component.js"
// $("body").get()
// console.log($("body").val()==undefined);
function component() {
    if ($("body").val()==undefined) {
        setTimeout(() => {
            component()
        }, 200);
    } else {
        $("body").append(script)    
    }
}
component()
// setTimeout(() => {
// }, 200);


//Default Pages
var loading
var notfound
// Loading Pages
var pages=[]
$.get("pages.json",(data)=>{
    pages=data
}).done(()=>{
    var c=0;
    pages.forEach((elt,i,arr)=> {
        $.get(elt.page, (data)=> {
                data=data.split("<body>")[1]
                data=data.split("</body>")[0]
                pages[i].content=data
                if(elt.name=="404"){
                    notfound=data
                }else if(elt.name=="loading"){
                    loading=data
                }
            })
    })
    // console.log(pages);
})


setTimeout(() => {
    $("#loading").html(pages);
}, 200);
var page_name=""
function goto(page) {
    page_name=page
    $("body").html(loading);
    var page_found=false
    if (page=="") {
        page="home"
    }
    pages.forEach(element => {
        if (element.name==page) {
            $("body").html(element.content);
            $("body").append(script)
            window.history.pushState(null,null,element.page)
            $("head title").text(page.toUpperCase());
            page_found=true
        }
    });
    if (!page_found) {
        $("body").html(notfound);
        page_found=false
    }
}



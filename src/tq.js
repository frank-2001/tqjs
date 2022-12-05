// Tq-js

// import tailwind framework
const tailwind=document.createElement("script")
tailwind.src="src/tailwind.js"
$("head").append(tailwind);

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

//Component
var components
function component() {
    if ($("body").val()==undefined) {
        setTimeout(() => {
            component()
        }, 200);
    } else {
        $("body").append(components)    
    }
}
$.get("src/component.js",(data)=>{
    components="<script>"+data+"</script>"
}).done(()=>{
    component()
})


setTimeout(() => {
    $("#loading").html(pages);
}, 200);
var page_name=""
function goto(page) {
    $("body").html(loading);
    page_name=page
    var page_found=false
    if (page=="") {
        page="home"
    }
    pages.forEach(element => {
        if (element.name==page) {
            $("body").html(element.content);
            $("body").append(components)    
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



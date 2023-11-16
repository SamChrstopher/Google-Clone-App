const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown",function(event){
    if(event.code==="Enter"){
        search();
    }
})
function search(){
    const input = searchInput.value;
    window.location.href="https://www.google.com/search?q=" + input + "&sca_esv=582892981&sxsrf=AM9HkKkwi-Uv_ZFuUrCVb2SGTAbG-VUzEQ%3A1700113581510&source=hp&ei=raxVZeXCFpWv2roPw4esuA4&iflsig=AO6bgOgAAAAAZVW6vXpmlbB3tALv-U23xafUzscU-jKx&ved=0ahUKEwilzeHQ6MeCAxWVl1YBHcMDC-cQ4dUDCAo&uact=5&oq=" + input +"&gs_lp=Egdnd3Mtd2l6IgVoZWxsbzIIEC4YgAQYsQMyCBAAGIAEGLEDMggQLhiABBixAzIIEC4YgAQYsQMyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATIFEAAYgAQyCBAuGIAEGLEDMgsQABiABBixAxiDATIIEAAYgAQYsQNIri5QuxlY1SZwAXgAkAEAmAHcAaABxgSqAQU0LjAuMbgBA8gBAPgBAagCC8ICBhCzARiFBMICEBAAGAMYjwEY5QIY6gIYjAPCAgsQLhiKBRixAxiDAcICERAuGIMBGMcBGLEDGNEDGIAEwgILEC4YgAQYsQMYgwHCAgsQABiKBRixAxiDAcICBRAuGIAEwgIOEC4YxwEYsQMY0QMYgATCAhEQLhiABBixAxiDARjHARjRA8ICCBAAGIAEGMkDwgIIEAAYigUYkgM&sclient=gws-wiz"
}
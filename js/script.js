function thumbnai() {
    
    	var thumb = ["https://www.w3schools.com/css/lights600x400.jpg",
                     "https://i.pinimg.com/originals/52/06/61/5206618ecfa6e78cda0f74f80babb70f.jpg",
                     "https://images.alphacoders.com/533/533933.jpg",
                     "https://images3.alphacoders.com/551/551909.jpg",
                     "https://images3.alphacoders.com/153/15387.jpg",
                     "https://images2.alphacoders.com/747/74712.jpg",
                     "https://images.alphacoders.com/747/thumb-350-74713.webp",
                     "https://images3.alphacoders.com/555/thumb-350-555680.webp",
                     "https://images6.alphacoders.com/387/thumb-350-387165.webp",
                     "https://images2.alphacoders.com/554/thumb-350-554386.webp",
                     "https://images8.alphacoders.com/416/thumb-350-416975.webp",
                     "https://images4.alphacoders.com/567/thumb-350-567564.webp",
                     "https://images7.alphacoders.com/440/thumb-350-440917.webp",
                     "https://images5.alphacoders.com/536/thumb-350-536211.webp",
                     "https://images.alphacoders.com/529/thumb-350-529277.webp",
                     "https://images7.alphacoders.com/555/555681.jpg",
                     "https://images4.alphacoders.com/555/555701.jpg",
                     "https://images.alphacoders.com/585/585122.jpg",
                     "https://images2.alphacoders.com/535/535398.jpg",
                     "https://images7.alphacoders.com/593/593797.jpg",
                     "https://images8.alphacoders.com/593/593446.jpg",
                     "https://images7.alphacoders.com/567/567092.jpg",
                     "https://images2.alphacoders.com/533/533940.jpg",
                     "https://images.alphacoders.com/493/493237.jpg",
                     "https://images.alphacoders.com/261/261263.jpg"]
    	 var rdthumb = thumb[Math.floor(Math.random() * thumb.length)];
    var element = document.getElementById('image_wellcome');
  //console.log(element);
   element.style.backgroundImage = "url("+ rdthumb + ")";
    }
document.addEventListener("DOMContentLoaded", thumbnai);


const sr = ScrollReveal({
  distance: '20px',
  duration: 2000,
  delay: 200,
  reset: false
});

const sr2 = ScrollReveal({
  distance: '1px',
  duration: 1000,
  delay: 200,
  reset: false
}); 

sr2.reveal(".head_info",{delay: 300, origin: 'top'});
sr2.reveal("#head_button",{delay: 200, origin: 'top'});
sr.reveal(".text_info",{delay: 300, origin: 'left'});
sr.reveal(".icon_info",{delay: 300, origin: 'right'});
sr2.reveal(".more_info",{delay: 300, origin: 'left'}); 
sr.reveal("#image_bottom",{delay: 300, origin: 'rigin'}); 
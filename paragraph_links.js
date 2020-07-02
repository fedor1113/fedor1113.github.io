function mark_paragraphs(){
	var paragraphs = document.body.getElementsByTagName("p");
	for(var i = 0; i < paragraphs.length; ++i){
		// paragraphs[i].innerHTML = "<a href=\"#p" + i + "\" id=\"p" + i +
		// 					  "\" class=\"paragraph_indicator\">&para;</a>" +
		// 					  paragraphs[i].innerHTML;
		// paragraphs[i].insertAdjacentHTML("beforebegin", "<a href=\"#p" + i +
		// 	"\" id=\"p" + i + "\" class=\"paragraph_indicator\">&para;</a>");
		paragraphs[i].innerHTML = paragraphs[i].innerHTML + "<a href=\"#p" + i +
			"\" id=\"p" + i + "\" class=\"paragraph_indicator\">&para;</a>";
	}
}

window.onload = function(){
	mark_paragraphs();
	if(location.hash) location.href = location.hash;
};

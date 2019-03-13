var showInfo=
{
	"data": {
		"author": "iLayicr",
		"enContent1": "「 What is the first thing to do when you win 5 million？ 」\n" +
				    "『 Travelling to the south pole。 』\n" +
				    "「 What’s next？ 」\n" +
				    "『 Let’s talk about this when you come back alive。 』\n"
		,
		"enContent2": "「 Excuse me？ 」",
		"enContent3": "「 。。。 」\n",
		"cnContent0": " <span style='color: #2bbc8a;'><strong>什么？看不懂？</strong></span>",
		"cnContent1": "\n" + 
               		"「 如果中了500W，第壹件事情做什麼？ 」\n" +
				    "『 去南極。 』\n" +
				    "「 接著呢？ 」\n" +
				    "『 等活著回來在說。 』\n" +
					"「 。。。 」"
	}
}
$(function () {
    var data = showInfo.data;
	
	var strContent = data.enContent1 + data.enContent3;

    var options = {
      strings: [ 
        data.enContent1 +  data.enContent2 + "^1000",
        strContent + "^3000",
        strContent + data.cnContent0 + "^1000",
        strContent + data.cnContent1 + "^1000"
      ],
      typeSpeed: 30,
      startDelay: 300,
	  // backSpeed: 10
      // loop: true,
    }
    var typed = new Typed(".description .typed", options);
});


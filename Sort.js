/**
 * Created by Алина on 07.03.2016.
 */
function Sort(str) {

    document.getElementById('mainDiv') && document.body.removeChild(document.getElementById('mainDiv'));
	createMainDiv();
    div = [];
	createDivForNumber();
 
    i=1;
    j=div.length-1;
	
    setTimeout(
        (function My(j, i, iter){
            if(iter==3){
                if (i!=1) div[i-2].style.backgroundColor = "#ffffff";
                div[i - 1].style.backgroundColor = "#ffc100";
                div[i].style.backgroundColor = "#ffc100";

                setTimeout(My.bind(null, j, i, 2), 500);
            }
            if(iter==2){
                if(+div[i].innerHTML < div[i-1].innerHTML){
                    var temp = div[i].innerHTML;
                    div[i].innerHTML = div[i-1].innerHTML;
                    div[i-1].innerHTML = temp;

                    div[i-1].style.backgroundColor = "red" ;
					div[i].style.backgroundColor = "red" ;
                    
                    setTimeout(My.bind(null, j, i, 1), 500);
                }
                else My( j, i, 1);
            }
            if(iter==1){
                if(j>1){
                    i++;
                    if(i==j+1) {
                        div[j].style.backgroundColor  = "#c1c1c1";
                        div[j-1].style.backgroundColor  = "#fff";

                        i = 1;
                        j--;
                    }
                    setTimeout(My.bind(null, j, i, 3), 500);
                }
                else My( j, i, 0);
            }
            if(!iter)
            setTimeout(function(){div[1].style.backgroundColor  = "#c1c1c1"; div[0].style.backgroundColor  = "#c1c1c1";}, 500);

        }).bind(null, j, 1, 3), 500);
	document.body.getElementsByTagName('input')[0].value = '';

	function createMainDiv() {
        mainDiv = document.createElement('div');
        mainDiv.id = "mainDiv";
        mainDiv.style = "margin: 10px 0 0 10px;" +
            "height: 32px;" +
            "font-weight: bold; " +
            "text-align: center;";
        mainDiv.className = 'mainDiv';
        document.body.appendChild(mainDiv);
    }

	function createDivForNumber() {
        for (i = 0; i < str.split(",").length; i++) {
            div[i] = document.createElement('div');
            div[i].style = "font-size: 15px;" +
                "border: 1px solid #000;" +
                "width: 30px; " +
                "height:30px;" +
                "float:left;" +
                "padding-top:5px;" +
                "box-sizing: border-box;";
            div[i].innerHTML = parseInt(str.split(",")[i]);
            mainDiv.appendChild(div[i]);
        }
    }
}



const stars = document.getElementById("star-container");

var rating = 0;

const ratingsHandler = (star, isHover) => {

    console.log(star);

    const currStarId = star.target.id;

    const currStarPos = currStarId.split("-")[1];

    const totalStars = Math.floor((stars.childNodes.length)/2);

    for(let i=1; i <= totalStars; i++) {

        const prevStarId = `star-${i}`;

        const prevStar = document.getElementById(prevStarId);

        if(i <= currStarPos)
        prevStar.style.color = "yellow";
        else {
            if(!isHover) prevStar.style.color = "white";
            else if(isHover && i > rating)
            prevStar.style.color = "white";
        }
    }
    
    if(!isHover) rating = currStarPos;

}

stars.addEventListener("mouseover", (e)  => ratingsHandler(e, true));

stars.addEventListener("click", (e)  => ratingsHandler(e, false));
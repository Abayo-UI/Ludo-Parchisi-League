export default function News(){
    return(
        <div class="news-container pt-4 gradient-background">
             <div class="mx-4  d-flex flex-row justify-content-center">
                <div class="col-8 col-lg-8 bg-light rounded-3" id="news-one-height"> yes</div>
            </div>  

            <div class="d-flex flex-row justify-content-around mx-4  mt-4">
                <div class="col-5 col-lg-5 bg-light rounded-3" id="news-two-height"> news two</div>
                <div class="col-5 col-lg-5 bg-light rounded-3" id="news-two-height"> news two</div>
            </div>  

            <div class="d-flex flex-row justify-content-around mx-4  mt-4"> 
                <div class="col-lg-3 col-3 bg-light rounded-3" id="news-three-height">Yep</div>
                <div class="col-lg-4 col-4 bg-light rounded-3" id="news-three-height">Yep</div>
                <div class="col-lg-3 col-3 bg-light rounded-3" id="news-three-height">Yep</div>
            </div> 

            <div class="row ms-4 me-1 gap-3 mt-4">
                <div class="col-9 bg-transparent" id="news-two-height"></div>
            </div>       
        </div>
    )
}
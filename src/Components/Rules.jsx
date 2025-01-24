export default function Rules(){
    return(
        <div class="rules-container mt-3 mb-5 ms-2 me-1">
            <p class="ps-2">Each player is required to read all the below rules and sign the consent form.</p>
            <div class="row px-2 border border-1 border-dark">
                <p class="col-1 border-right"><strong></strong></p>
                <p class="col-8 border-right" ><strong>RULES</strong></p>
                <p class="col-3"><strong>PENALTY</strong></p>
            </div>

            <div class="row px-2 border border-1 border-dark">
                <p class="col-1 border-right mb-3 text-end">1.</p>
                <p class="col-8 border-right" >Players are not allowed to roll the dice on behalf of another player unless explicitly instructed to do so by that player.</p>
                <p class="col-3 text-danger">-1 point</p>
            </div>

            <div class="row px-2 border border-1 border-dark">
                <p class="col-1 border-right text-end">2.</p>
                <p class="col-8 border-right" >All players participating in the league must complete all scheduled matches or games until the conclusion of the league.</p>
                <p class="col-3 text-danger">Pays 50 ksh to all players</p>
            </div>

            <div class="row px-2 border border-1 border-dark">
                <p class="col-1 border-right text-end">3.</p>
                <p class="col-8 border-right" >Players are prohibited from forming alliances or conspiring with each other to unfairly target or gang up on a specific player during the game.</p>
                <p class="col-3 text-danger">-1 point on the conspiring players.</p>
            </div>

            <div class="row px-2 border border-1 border-dark">
                <p class="col-1 border-right text-end">4.</p>
                <p class="col-8 border-right" >Players are required to arrive on time before the game starts. In the event that a player must arrive late, they are obligated to inform all other participants at least 1 hour and 30 minutes prior to the scheduled league time.</p>
                <p class="col-3 text-danger">-1 point</p>
            </div>

            <div class="row px-2 border border-1 border-dark"> 
                <p class="col-1 border-right text-end">5.</p>
                <p class="col-8 border-right" >Each player is expected to contribute the registration fee, which will be utilized to award the winners before the 20th game of the league.</p>
                <p class="col-3"> </p>
            </div>

            <div class="row px-2 border border-1 border-dark">
                <p class="col-1 border-right text-end">6.</p>
                <p class="col-8 border-right" >Players are not permitted to display any expressions or emotions that could potentially hint or give clues to another player about their upcoming move with their token.</p>
                <p class="col-3 text-danger">-1 point</p>
            </div>

            <div class="row px-2 border border-1 border-dark">
                <p class="col-1 border-right text-end">7.</p>
                <p class="col-8 border-right" >The player who secures the first position is to be given 43% of the total registration fees collected.</p>
                <p class="col-3 text-success">receives ksh600</p>
            </div>

           <div class="row px-2 border border-1 border-dark">
               <p class="col-1 border-right text-end">8.</p>
               <p class="col-8 border-right" >The player who becomes the second position is to be given 32% of the total registration fees collected.</p>
               <p class="col-3 text-success">receives ksh450</p>
           </div>

           <div class="row px-2 border border-1 border-dark">
               <p class="col-1 border-right text-end">9.</p>
               <p class="col-8 border-right" >The player who becomes the third position is to be given 25% of the total registration fees collected.</p>
               <p class="col-3 text-success">receives ksh350</p>
           </div>
        </div>
    )
}
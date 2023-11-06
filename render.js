export const renderRating = () => {
 return `<div class="card-rating">
<div class="star">
  <img src="./images/icon-star.svg" alt="star" />
</div>
<div class="heading">
  <h1>How did we do?</h1>
</div>
<div class="content">
  <p>
    Please let us know how we did with your support request. All feedback
    is appreciated to help us improve our offering!
  </p>
</div>
<div class="ratings">
  <ul class="list">
    <div>
      <a href="" class="rating">1</a>
    </div>
    <div>
      <a href="" class="rating">2</a>
    </div>
    <div>
      <a href="" class="rating">3</a>
    </div>
    <div>
      <a href="" class="rating">4</a>
    </div>
    <div>
      <a href="" class="rating">5</a>
    </div>
  </ul>
</div>
<div class="submit">
  <button>SUBMIT</button>
</div>
</div>`
}


export const renderThankyou = (star) => {
    return `<div class="card-thankyou">
    <div class="phone-img">
      <img src="./images/illustration-thank-you.svg" alt="phone-image" />
    </div>
    <div class="selected-text">
      <p>You selected ${star} out of 5</p>
    </div>
    <div class="heading">
      <h2>Thank you!</h2>
    </div>
    <div class="appreciate">
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  </div>`
}
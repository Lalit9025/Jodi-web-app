import React from 'react'
import './FAQs.css'
const FAQs = () => {
  return (
    <div className='main_faqs'>
      <h3 className='faq_head'>Frequently Asked Questions</h3>
      <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong> What is Jodi ?</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Jodi is a lifestyle planning app specifically designed for couples and partners, helping you save money, track spending, and achieve your joint financial goals.
        </div>
      </div>
    </div>


    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong> What makes Jodi different ?</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Jodi's unique "Spendvesting" feature lets you combine everyday spending with investments, earning returns up to  8-10% to fuel your dreams.
        </div>
      </div>
    </div>


    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong> Is Jodi only for couples?</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        While primarily catered to couples, Jodi can benefit any partners sharing finances, like roommates or close friends.
        </div>
      </div>
    </div>


    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFour">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
       <strong> Is Jodi free to use ?</strong>
        </button>
      </h2>
      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Jodi is free to download and use basic features. A premium version offers additional functionalities like personalized financial advice.
        </div>
      </div>
    </div>
    
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFive">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <strong>How do I get started with Jodi?</strong>
        </button>
      </h2>
      <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Download the app and create an account. You can then connect your bank accounts and credit cards to track spending, set goals, and explore investments.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingSix">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
       <strong> How does "Spendvesting" work?</strong>
        </button>
      </h2>
      <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Every time you spend with linked cards, a small portion is invested in P2P lending or Brandco, generating returns that accumulate to help you achieve your goals.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="headingSeven">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
       <strong> Is "Spendvesting" safe?</strong>
        </button>
      </h2>
      <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Yes, Jodi uses industry-standard security measures to protect your information and investments.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="headingEight">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
        <strong>What kind of financial goals can I set with Jodi?</strong>
        </button>
      </h2>
      <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Anything you like! Saving for a house, dream vacation, retirement, or even a new gadget - Jodi helps you track progress and manage finances strategically.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="headingNine">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
       <strong> Can I manage individual accounts separately? </strong>
        </button>
      </h2>
      <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Yes, Jodi offers both joint and individual views of your finances, providing transparency and autonomy while building shared goals
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTen">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
       <strong> What is Brand Co investment?</strong>

        </button>
      </h2>
      <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Brand Co investment is a unique feature on Jodi that allows your favourite brands to co-invest in your financial plans to a portion of your investment to save more on spending.
        </div>
      </div>
    </div>


  </div>
</div>

  )
}

export default FAQs
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
          How Jodi Works
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Coin.new simplifies investing, allowing you to start with just 10 Rupees. We invest your money in expert-managed mutual funds. Choose automatic daily deposits or invest spare change from everyday transactions. It's hassle-free investing!
        </div>
      </div>
    </div>


    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          What are The Key Feature
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        <strong>Low Minimum:</strong> Begin investing with only 10 Rupees.<br/>
 <strong>Daily Deposits:</strong> Save money daily with automated deposits.<br/>
<strong> Spare Change:</strong> Invest your change from daily purchases.<br/>
<strong> Lump Sum:</strong> Save fixed amounts at your convenience.<br/>
 <strong>Flexible Limits:</strong> Adjust your investment amount anytime to match your goals.
        </div>
      </div>
    </div>


    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          What are the documents required ?
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          To start, you need a few basic documents:<br/>

  1. Your PAN (Permanent Account Number) card.<br/>
  2. KYC (Know Your Customer) documents, which are easy to provide.<br/>
  3. A linked bank account for seamless transactions.<br/>
        </div>
      </div>
    </div>


    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFour">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Where Your Investment Goes ?
        </button>
      </h2>
      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Your invested money goes into ethical mutual funds, managed by financial experts dedicated to growing your investments while upholding ethical standards.
        </div>
      </div>
    </div>
    
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFive">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
         Can I change my auto payments Limits?
        </button>
      </h2>
      <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        Absolutely! You have full control over your investments. Adjust your investment amount anytime, increasing or decreasing it to align with your financial goals.
        </div>
      </div>
    </div>


  </div>
</div>

  )
}

export default FAQs
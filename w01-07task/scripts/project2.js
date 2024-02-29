//Project2. 

// listen to the calculate button for a click and execute then calculateDiscount function.
document.getElementById("calculate").addEventListener('click', calculateDiscount());


// through this function I have added a conditional branching.
// this will give discount to those who pay immediately. Also depending on 
// the total amount the customer has to pay, there is a discount allocated.
function calculateDiscount() {
    const totalAmount = parseFloat(document.getElementById('total').value);
    const payNow = document.getElementById('payNow').checked;
    let discountPercentage = 0;
  
    if (totalAmount <= 200)
    {
        discountPercentage = 0.03;

        if (payNow)
        {
          discountPercentage += 0.02;
        }
    }


    else if (totalAmount > 200 && totalAmount <= 500) 
    {
      discountPercentage = 0.05;
      if (payNow)
      {
        discountPercentage += 0.03;
      }
    } 
    
    else 
    {
       discountPercentage = 0.1;
       if (payNow) 
       {
        discountPercentage += 0.05;
       }
    }
  
    const discountAmount = totalAmount * discountPercentage;
    const remainingAmount = totalAmount - discountAmount;
  
    document.getElementById('discount').innerHTML= `Discounted Total: $${discountAmount.toFixed(2)}`;
    document.getElementById('remaining').innerHTML = `Remaining Amount to pay: $${remainingAmount.toFixed(2)}`;
  }
  
 
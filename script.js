// Select the form and result element
const form = document.getElementById('discountForm');
const result = document.getElementById('result');

// Add an event listener to handle form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const originalPrice = parseFloat(document.getElementById('originalPrice').value);
  const discountPercentage = parseFloat(document.getElementById('discountPercentage').value);

  // Validate inputs
  if (isNaN(originalPrice) || isNaN(discountPercentage) || originalPrice < 0 || discountPercentage < 0) {
    result.textContent = 'Please enter valid inputs.';
    result.classList.add('text-danger');
    result.classList.remove('text-success');
    return;
  }

  // Calculate discount and final price
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const finalPrice = originalPrice - discountAmount;

  // Display result
  result.textContent = `Discounted Price: $${finalPrice.toFixed(2)} (You save $${discountAmount.toFixed(2)})`;
  result.classList.add('text-success');
  result.classList.remove('text-danger');
});

 document.getElementById('username').addEventListener('input', 
    function() 
    { const feedback = document.getElementById('username-feedback');
     if (this.value.length < 3) { feedback.textContent = 'El nombre de usuario debe tener al menos 3 caracteres.';
         this.classList.add('error'); 
         this.classList.remove('success'); } 
         else { feedback.textContent = ''; this.classList.remove('error'); 
            this.classList.add('success'); } 
        });
             document.getElementById('payment-method').addEventListener('change', 
                function() { 
                    const creditCardInfo = document.getElementById('credit-card-info'); 
                    if (this.value === 'credit-card') 
                        { creditCardInfo.classList.remove('hidden'); }
                     else { creditCardInfo.classList.add('hidden'); } }); 